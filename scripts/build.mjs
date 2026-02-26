#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const installablesRoot = path.join(root, 'extensions');
const examplesRoot = path.join(root, 'examples', 'studios');

function fail(message) {
  console.error(`[repo-studio-extensions:build] ${message}`);
  process.exit(1);
}

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    fail(`invalid JSON at ${path.relative(root, filePath)}: ${String(error?.message || error)}`);
  }
}

function ensureDir(dirPath, label) {
  if (!fs.existsSync(dirPath)) {
    fail(`missing ${label} directory: ${path.relative(root, dirPath)}`);
  }
}

function ensureFile(filePath) {
  if (!fs.existsSync(filePath)) {
    fail(`missing required file: ${path.relative(root, filePath)}`);
  }
}

ensureDir(installablesRoot, 'installables');
ensureDir(examplesRoot, 'examples');

const installableDirs = fs.readdirSync(installablesRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort((a, b) => a.localeCompare(b));

if (installableDirs.length === 0) {
  fail('no installable extensions found under extensions/.');
}

for (const id of installableDirs) {
  const extensionDir = path.join(installablesRoot, id);
  const manifestPath = path.join(extensionDir, 'manifest.json');
  ensureFile(manifestPath);
  const manifest = readJson(manifestPath);
  if (String(manifest.id || '') !== id) {
    fail(`installable ${id}: manifest id mismatch (${String(manifest.id || '')})`);
  }
  if (Number(manifest.manifestVersion || 0) !== 1) {
    fail(`installable ${id}: manifestVersion must be 1`);
  }
  if (!String(manifest.workspaceId || '').trim()) {
    fail(`installable ${id}: workspaceId is required`);
  }
  const layoutSpecPath = String(manifest.layoutSpecPath || '').trim();
  if (layoutSpecPath) {
    const layoutPath = path.join(extensionDir, layoutSpecPath);
    ensureFile(layoutPath);
    const layout = readJson(layoutPath);
    if (!Array.isArray(layout.panelSpecs) || layout.panelSpecs.length === 0) {
      fail(`installable ${id}: layout panelSpecs must be non-empty`);
    }
    if (!Array.isArray(layout.mainPanelIds) || layout.mainPanelIds.length === 0) {
      fail(`installable ${id}: layout mainPanelIds must be non-empty`);
    }
  }
}

const exampleDirs = fs.readdirSync(examplesRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort((a, b) => a.localeCompare(b));

if (exampleDirs.length === 0) {
  fail('no studio examples found under examples/studios/.');
}

for (const id of exampleDirs) {
  const exampleDir = path.join(examplesRoot, id);
  const metadataPath = path.join(exampleDir, 'example.json');
  const readmePath = path.join(exampleDir, 'README.md');
  const srcDir = path.join(exampleDir, 'src');
  ensureFile(metadataPath);
  ensureFile(readmePath);
  ensureDir(srcDir, `example ${id} src`);

  const metadata = readJson(metadataPath);
  if (String(metadata.id || '') !== id) {
    fail(`example ${id}: metadata id mismatch (${String(metadata.id || '')})`);
  }
  if (String(metadata.category || '') !== 'studio-example') {
    fail(`example ${id}: category must be studio-example`);
  }
  if (!String(metadata.summary || '').trim()) {
    fail(`example ${id}: summary is required`);
  }

  const srcFiles = fs.readdirSync(srcDir, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name);
  if (srcFiles.length === 0) {
    fail(`example ${id}: src directory must contain at least one file`);
  }
}

console.log(`[repo-studio-extensions:build] OK (${installableDirs.length} installables, ${exampleDirs.length} examples)`);