<!--a href="https://microclimate-dev2ops.github.io/">
    <img src="mc-banner.png" alt="Microclimate Banner" height="75px" />
</a-->

# Codewind for VS Code

[![Marketplace](https://img.shields.io/vscode-marketplace/v/IBM.codewind.svg?label=marketplace&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=IBM.codewind)
[![Build Status](https://img.shields.io/travis/com/microclimate-dev2ops/codewind-vscode/master.svg?logo=travis&label=build)](https://travis-ci.com/microclimate-dev2ops/codewind-vscode)
[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg?label=license&logo=eclipse)](https://www.eclipse.org/legal/epl-2.0/)
[![Slack](https://img.shields.io/badge/ibm--cloud--tech-blue.svg?logo=slack&label=slack)](https://slack-invite-ibm-cloud-tech.mybluemix.net/)

- **[Documentation](https://microclimate.dev/codewindtechpreview)**
- **[Changelog](https://github.com/microclimate-dev2ops/codewind-vscode/blob/master/CHANGELOG.md)**
- **[Extension README](https://github.com/microclimate-dev2ops/codewind-vscode/blob/master/dev/README.md)**

Create and develop cloud-native, containerized web applications from VS Code.

## Getting started

1. Install [VS Code version 1.27 or later](https://code.visualstudio.com/download) and [Codewind](https://microclimate.dev/codewindtechpreview).
2. Install Codewind for VS Code from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=IBM.codewind-tools) or by searching for "Codewind" in the [VS Code Extensions view](https://code.visualstudio.com/docs/editor/extension-gallery#_browse-for-extensions).

If you want to host or build the extension yourself, see [Contributing](#contributing).

## How to use
- Navigate to the **Explorer** view group and open the **Codewind** view.
- Open the [**Command Palette**](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette) and type "Codewind" to see the actions available.

## Features
- Create new projects from application templates, or import existing docker-ready projects.
- View Codewind projects, including application and build statuses.
- Debug Microprofile, Spring, and Node.js projects in their Docker containers.
- View application and build logs in the VS Code **Output** view.
- View and edit project deployment information.
- Open a shell session into a Codewind application container.
- Toggle project auto build and manually initiate project builds.
- Disable, enable, and delete projects.

## Limitations
- This preview is only available to use on Apple Mac (macOS)
- You must first run the installer, which you can [download here](https://microclimate.dev/codewindtechpreview)


## Contributing
We welcome [issues](https://github.com/microclimate-dev2ops/codewind-vscode/issues) and contributions. For more information, see [CONTRIBUTING.md](https://github.com/microclimate-dev2ops/codewind-vscode/tree/master/CONTRIBUTING.md).

Development builds are available [here](https://public.dhe.ibm.com/ibmdl/export/pub/software/microclimate/vscode-tools/nightly/). Follow the [Install from a VSIX](https://code.visualstudio.com/docs/editor/extension-gallery#_install-from-a-vsix) instructions to install a `.vsix`.

To host the extension yourself so you can develop or debug it, clone this repository and run the **Extension** launch in `dev/.vscode/launch.json`. See [Developing Extensions](https://code.visualstudio.com/docs/extensions/developing-extensions) for more information.

You can also build the extension `.vsix` yourself by running [`vsce package`](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#packaging-extensions) from `dev/`. Refer to the `before_install` and `script` sections of [`.travis.yml`](https://github.com/microclimate-dev2ops/codewind-vscode/blob/master/.travis.yml) to see the exact steps the build runs.
