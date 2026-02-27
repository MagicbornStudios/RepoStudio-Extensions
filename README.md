# RepoStudio Extensions

RepoStudio Extensions is the source of truth for discoverable Repo Studio add-ons.

This repository is split into two catalogs:

- `extensions/`: installable Repo Studio runtime extensions (project-scoped)
- `examples/studios/`: non-installable reference studios/workspaces

## Build Extensions With Dev-Kit

Use `@forge/dev-kit` as the authoring surface for extension and studio UIs.

- `@forge/dev-kit` re-exports shared workspace primitives from `@forge/shared`.
- Use dev-kit/shared workspace components such as `WorkspaceLayout`, `WorkspaceViewport`, and `AssistantPanel`.
- Import from `@forge/dev-kit` (or `@forge/shared`) in extension code.
- Do not import app-internal paths (for example `@/...` aliases from the host app). Those aliases do not resolve when Repo Studio loads an extension from a project folder.

Extension folder contract:

```text
extensions/
  <extension-id>/
    manifest.json
    layout.generated.json (optional, recommended)
    README.md
    src/ (optional source snapshot)
```

Manifest contract is v1 (`manifestVersion`, `id`, `label`, `workspaceId`, `workspaceKind`, `description`, optional `layoutSpecPath`, optional `assistant.forge`).
For the full host/runtime contract, see:

- `https://github.com/MagicbornStudios/forge-agent/blob/main/docs/repo-studio-extensions.md`

## Install Location

Installable extensions are copied into the active project folder at:

- `<activeProject>/.repo-studio/extensions/<extension-id>/`

All extension files for that project live under that path (manifest, layout spec, docs, and any bundled/source files).

## Build On Installed Extensions (Edit In Place)

After install, you can iterate directly in the project:

- edit files under `.repo-studio/extensions/<extension-id>/`
- update manifest/layout/code as needed for that project
- reinstall is not required for local iteration

If changes are not reflected immediately, reload extensions from Repo Studio (or restart the app).

This is the intended fast flow: install once, then iterate in place.

## Directory Contract

```text
extensions/
  <extension-id>/
    manifest.json
    layout.generated.json (optional, recommended)
    README.md

examples/
  studios/
    <example-id>/
      example.json
      README.md
      src/
```

## Installables vs Examples

Installable extensions are runtime-compatible and installable into projects.
Studio examples are browse-only references shown as link-out cards in Repo Studio.
Examples are never install targets.

## Included Content

Installable extensions:

- `story`
- `env-workspace`

Studio examples:

- `character-workspace`
- `dialogue-workspace`
- `assistant-only`

## Example Metadata Contract

Each studio example includes `example.json`:

```json
{
  "id": "assistant-only",
  "label": "Assistant Only Studio",
  "category": "studio-example",
  "summary": "Chat-only consumer/dev-kit reference.",
  "sourceRepoUrl": "https://github.com/MagicbornStudios/RepoStudio-Extensions",
  "sourcePath": "examples/studios/assistant-only",
  "docsUrl": "https://github.com/MagicbornStudios/RepoStudio-Extensions/tree/main/examples/studios/assistant-only/README.md",
  "tags": ["consumer", "assistant", "reference"]
}
```

## Runtime Model

Repo Studio currently uses host-rendered extension kinds in this slice. It does not execute arbitrary JS directly from project extension folders.

Current installables `story` and `env-workspace` are host-rendered adapter kinds. Their `src/` folders are source snapshots/reference and are not treated as portable runtime bundles in this phase.

## Contributing

Contributions are welcome:

- new installable extensions under `extensions/`
- new browse-only examples under `examples/studios/`
- docs and templates

When adding a studio example, include provenance in the README and keep source snapshots in `src/`.

## Build Validation

Run `npm run build` (or `npm run validate`) in this repo to validate installable manifests/layout specs and studio example metadata/source folders.
