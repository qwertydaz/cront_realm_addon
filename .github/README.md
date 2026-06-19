# Cront Pack

This repository contains the codebase for a **Minecraft Bedrock Edition Behaviour Pack** and TypeScript game scripts.

## Contributing Guide

### Workflow for New Developers

1. Create a feature branch from `main`.
   - Example: `feature/add-new-mob`
2. Add or update TypeScript scripts in the `scripts/` folder.
3. Commit and push your branch.
4. Open a Pull Request targeting `main`.


### Local Development


#### Setup

1. Install dependencies:
   - `npm ci`

#### Debugging

1. Start watch mode (rebuilds and redeploys on save):
   - `npm run local-deploy:watch`
2. Create a Minecraft world and apply the behaviour pack (local-deploy will have mounted it to your local Minecraft files)
3. Edit TypeScript in `scripts/`.
4. In-game, run `/reload` to pick up script changes. To restart the world, use `/reload all`.
