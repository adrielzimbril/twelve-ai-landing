<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` or the official Next.js MCP docs before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Twelve AI Project Instructions

## First Steps

- Before coding, initialize or verify Git is initialized for the project.
- Before coding, read `DESIGN.md` and inspect `.design/` if either exists. Use them as local design references only.
- Never commit or push `DESIGN.md`, `design.md`, or any files inside `.design/` or `.deisgn/`.
- Before metadata, README, SEO, landing-page structure, or challenge copy work, inspect `https://github.com/adrielzimbril/framey-landing` and follow its structure as the reference.

## Package Manager

- Always use `pnpm` for installs, scripts, and lockfile updates.
- Never use `npm` or `yarn`.

## Collaboration

- The user edits alongside the agent.
- Treat unexpected local modifications as user work.
- Keep, review, and build on top of user changes instead of deleting or reverting them.
- If user changes affect the task, integrate them carefully and mention them in the final summary.

## Git Workflow

- Commit with descriptive messages.
- Push to GitHub after every meaningful modification or at the end of every task.
- If asked to reset or rewrite history, still keep ignored design files local-only.
- Before any commit, verify no design files are staged or tracked.
- After pushing, verify the working tree is clean.

## README Pattern

- Keep the established challenge README structure from `framey-landing`.
- Only adapt the day number, project name, product description, design rationale, key sections, stack, preview asset, live URL, and project-specific details.
- Preserve the overall order and tone of the reference README.

## Metadata Pattern

- Always include complete metadata in `src/app/layout.tsx`.
- Follow the exact `framey-landing` metadata structure:
  - `metadataBase`
  - `title`
  - `description`
  - `keywords`
  - `openGraph`
  - `twitter`
  - `icons`
- Use this description structure exactly, changing only the required project words and details:
  - `Day X/30 of the AI-Generated Landing Page Challenge. [Project Name] is a conceptual [product category] that [core product promise].`
- Use this Open Graph and Twitter description structure exactly, changing only the required project words and details:
  - `A conceptual [product category] landing page for Day X/30 of the AI-Generated Landing Page Challenge.`
- Always use `/opengraph-image.png` for Open Graph and Twitter preview images unless the user explicitly replaces the asset.
- Always include required tags in `keywords`: project name, product category, AI category, primary use case, relevant stack, `bento design` when applicable, and `AI challenge`.

## Design Files

- `DESIGN.md`, `design.md`, `.design/`, and `.deisgn/` are local-only references.
- They must never be committed, force-added, pushed, copied into commits, or included during history rewrites.
- `.gitignore` must keep these entries ignored.

## Visual Direction

- Follow the current Twelve AI design language: modern, minimal, high-end, image-led, and product-focused.
- Keep interactions purposeful. Product cards should simulate workflows or dashboard behavior instead of decorative animation.
- Keep typography, spacing, and visual tone aligned with `DESIGN.md` unless the user explicitly changes direction.
