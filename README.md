# ECMA-419 Documentation

Guides and API docs for the [ECMA-419 specification](https://github.com/EcmaTC53/spec), a.k.s JS on embedded systems. While the spec is meant for implementers and technical authors, this content should help introduce "JS on Things" and provide high-level examples.

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).

## Contributing

Thank you for your interest in contributing to the ECMA-419 documentation site! 🎉

**Authors of contributions from non-Ecma member organizations must sign the [Contributor License Agreement](https://embedded.js.org/cla)**

To get started:

1. [Fork this repo](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#forking-a-repository)
1. Edit the page using the [GitHub UI](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files), the [github.dev editor](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor), or your preferred local text editor like [VSCode](https://code.visualstudio.com/docs) or [Neovim](https://neovim.io/).
    - If using a local text editory, you'll need to [clone the new fork locally](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#cloning-your-forked-repository)
1. Create a new branch for your changes: `git switch -c docs-update` (you can name it "docs-update" or whatever you'd like)
1. [Commit your changes](https://www.freecodecamp.org/news/guide-to-git-github-for-beginners-and-experienced-devs/#how-to-commit-changes)
1. [Push your changes to your fork](https://www.freecodecamp.org/news/guide-to-git-github-for-beginners-and-experienced-devs/#how-to-push-changes-to-a-remote-repository)
1. [Create a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) to `EcmaTC53/docs:main`
1. Wait for review.

If you would like to preview your changes:

1. Make sure [Node.js](https://nodejs.org/en/download/package-manager) and [pnpm](https://pnpm.io/installation) are available in your development environment.
1. Install the project dependencies: `pnpm install`
1. Run the development server, which will reload when any changes are made to the documentation pages: `pnpm run dev`
1. View the running site at http://localhost:4321
