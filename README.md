# RepoStudio Extensions

RepoStudio Extensions is the home for extensions and plugins built for **RepoStudio**, a new desktop IDE designed from the ground up around local coding agents and long‑term software development workflows.[page:1]

## What is RepoStudio?

RepoStudio is a desktop IDE built on shadcn UI that centers entirely on local coding agent workflows and agent‑driven software artifacts.[page:1] It is tailored to support planning, execution, and mitigation of context rot as projects grow and codebases become harder to fit into a single model context.[page:1]

RepoStudio is powered by:

- OpenRouter as a multi‑model routing layer for AI runtimes[page:1]
- Claude Code CLI as a local coding agent runtime[page:1]
- Codex / Codex CLI–style workflows for agentic coding sessions[page:1]
- Assistant UI–style components and an agent/messaging framework for rich, conversational development flows[page:1]

The IDE is purpose‑built for “new age” coding agent workflows, where agents participate continuously in design, implementation, refactoring, and knowledge management as repositories evolve.[page:1]

## Repository purpose

This repository hosts extensions used inside RepoStudio to augment and customize those agent‑centric workflows.[page:1] Extensions can:

- Integrate additional AI runtimes or tools[page:1]
- Provide domain‑specific planning, refactoring, or analysis agents[page:1]
- Surface project‑level artifacts (plans, design docs, decision logs) directly in the IDE[page:1]
- Help prevent and repair context rot by curating and re‑hydrating the right slices of the codebase and knowledge base over time[page:1]

All extensions are designed to run locally, working with your existing repositories and long‑lived projects.[page:1]

## Extension model

RepoStudio extensions are:

- **Agent‑aware**: They can define or configure agents, tools, and workflows that plug into the IDE’s agent/messaging framework.[page:1]
- **Context‑first**: They focus on capturing, compressing, and replaying relevant context across large codebases and long‑running efforts.[page:1]
- **Local‑friendly**: They are compatible with local or self‑hosted AI runtimes and can operate without sending source code outside your environment (subject to how you configure runtimes such as OpenRouter or other providers).[page:1]

Typical use cases include:

- Long‑term project copilots that track goals, tasks, and decisions[page:1]
- Refactoring and migration agents that preserve and update design intent[page:1]
- Codebase explorers that maintain stable “semantic maps” of large repos[page:1]
- Test, documentation, and review agents specialized to your stack[page:1]

## Getting started

1. Clone this repository and open it in RepoStudio.[page:1]
2. Install or enable an extension from the `extensions/` directory (structure TBD).[page:1]
3. Configure your AI runtimes (e.g., OpenRouter and Claude Code CLI) according to RepoStudio’s setup guide.[page:1]
4. Reload RepoStudio to activate new or updated extensions.[page:1]

More detailed extension authoring and runtime configuration docs will be added as the IDE and ecosystem evolve.[page:1]

## Contributing

Contributions are welcome:

- New extensions[page:1]
- Improvements to existing extensions[page:1]
- Examples and templates for agent workflows[page:1]
- Documentation and best practices for managing long‑term, agent‑assisted development[page:1]

Please open an issue or pull request with a clear description of your proposal, and include any relevant setup notes for AI runtimes or external tools.[page:1]

RepoStudio and this extension ecosystem aim to make agent‑augmented development a first‑class, local, and sustainable way to build software at scale.[page:1]
