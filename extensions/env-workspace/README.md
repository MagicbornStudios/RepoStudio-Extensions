# Env Workspace Extension

Installable Repo Studio extension that provides an Env workspace contract and source snapshot.

## Runtime contract

- `workspaceId`: `env-workspace`
- `workspaceKind`: `env`
- `layoutSpecPath`: `layout.generated.json`

Repo Studio host currently renders this kind with its built-in Env workspace adapter.

## Source snapshot

Reference source is included in `src/`:

- `EnvWorkspace.tsx`
- `EnvScopeListPanel.tsx`
- `EnvFileEditorPanel.tsx`
- `env-scope-tree-data.ts`
- `env-target-state.ts`