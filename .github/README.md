# Cront Realm Add-On

This repository contains the codebase for a **Minecraft Bedrock Edition add-on**, including behavior/resource packs and TypeScript game scripts.

## Contributing Guide

### Workflow for New Developers

1. Create a feature branch from `main`.
   - Example: `feature/add-player-title`
2. Add or update TypeScript scripts in the `scripts/` folder.
3. Commit and push your branch.
4. Open a Pull Request targeting `main`.

### What Happens on Pull Request

- GitHub Actions builds the add-on (`npm run mcaddon`) using Docker.
- Build outputs (`.mcaddon`) are uploaded as GitHub workflow artifacts.

### Local Development (optional)

- Install dependencies:
  - `npm ci`
- Run build:
  - `npm run mcaddon`
- Open **cront_realm.mcaddon**
- Wait for import to complete
- Add Add-On to new Minecraft world
