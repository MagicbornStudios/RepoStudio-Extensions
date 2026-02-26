# RepoStudio Extensions

RepoStudio Extensions is the source of truth for discoverable Repo Studio add-ons.

This repository is split into two distinct catalogs:

- `extensions/`: installable Repo Studio runtime extensions (project-scoped)
- `examples/studios/`: non-installable reference studios/workspaces

## Directory contract

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

## Installables vs examples

Installable extensions are copied into the active project folder at:

- `<activeProject>/.repo-studio/extensions/<id>`

Studio examples are browse-only references. They appear in Repo Studio's Extensions workspace as link-out cards and are never install targets.

## Included content

Installable extensions:

- `story`

Studio examples:

- `character-workspace`
- `dialogue-workspace`
- `assistant-only`

## Example metadata contract

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

## Runtime model

Repo Studio uses host-rendered extension kinds only. No arbitrary JS is executed from project extension folders in this slice.

## Contributing

Contributions are welcome:

- New installable extensions under `extensions/`
- New browse-only examples under `examples/studios/`
- Documentation updates and templates

When adding a studio example, include provenance in README and keep source snapshots in `src/`.