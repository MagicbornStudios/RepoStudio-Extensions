# Story Extension

Installable Repo Studio extension that enables the Story workspace.

## Runtime contract

- `workspaceId`: `story`
- `workspaceKind`: `story`
- `layoutSpecPath`: `layout.generated.json`
- Forge tool proof: `forge_open_about_workspace`

The host (Repo Studio) renders this extension using the built-in Story renderer and merges extension tools only when Story is the active workspace.