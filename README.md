<a href="https://microclimate-dev2ops.github.io/">
    <img src="mc-banner.png" alt="Microclimate Banner" height="75px" />
</a>

# Microclimate Developer Tools for VS Code

[![Marketplace](https://img.shields.io/vscode-marketplace/v/IBM.microclimate-tools.svg?label=marketplace&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=IBM.microclimate-tools)
[![Build Status](https://img.shields.io/travis/com/microclimate-dev2ops/microclimate-vscode-tools/master.svg?logo=travis&label=build)](https://travis-ci.com/microclimate-dev2ops/microclimate-vscode-tools)
[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg?label=license&logo=eclipse)](https://www.eclipse.org/legal/epl-2.0/)
[![Slack](https://img.shields.io/badge/ibm--cloud--tech-blue.svg?logo=slack&label=slack)](https://slack-invite-ibm-cloud-tech.mybluemix.net/)

- **[Documentation](https://microclimate-dev2ops.github.io/mdt-vsc-overview)**
- **[Changelog](https://github.com/microclimate-dev2ops/microclimate-vscode-tools/blob/master/CHANGELOG.md)**
- **[Extension README](https://github.com/microclimate-dev2ops/microclimate-vscode-tools/blob/master/dev/README.md)**

You can use Microclimate Developer Tools for Visual Studio Code to develop your [Microclimate](https://microclimate-dev2ops.github.io) projects from within VS Code. Use the tools to access Microclimate features in the comfort of your IDE.

## Getting started [(Documentation)](https://microclimate-dev2ops.github.io/mdt-vsc-getting-started)

1. Install [VS Code version 1.27 or later](https://code.visualstudio.com/download) and [local Microclimate version 18.12 or later](https://microclimate-dev2ops.github.io/installlocally).
2. Install Microclimate Developer Tools for VS Code from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=IBM.microclimate-tools) or by searching for "Microclimate" in the [VS Code Extensions view](https://code.visualstudio.com/docs/editor/extension-gallery#_browse-for-extensions).

If you want to host or build the extension yourself, see [Contributing](#contributing).

## How to use [(Documentation)](https://microclimate-dev2ops.github.io/mdt-vsc-tutorial)
- Navigate to the **Explorer** view group and open the **Microclimate** view.
    - Right-click the background of the Microclimate view to access the **New connection** commands.
    - After creating a connection, right-click a connection or project to access the other commands.
- Open the [**Command Palette**](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette) and type "Microclimate" to see the actions available.

## Features [(Documentation)](https://microclimate-dev2ops.github.io/mdt-vsc-commands-overview)
- View all projects in Microclimate, including application and build statuses.
- Debug Microprofile, Spring, and Node.js Microclimate projects.
- View application and build logs in the VS Code **Output** view.
- View project information similar to the information on the Microclimate **Overview** page.
- Integrate Microclimate validation errors into the VS Code **Problems** view.
- Open a shell session into a Microclimate application container.
- Toggle project auto build and manually initiate project builds.
- Scope your VS Code workspace to a Microclimate project or to your `microclimate-workspace`.
- Disable, enable, and delete projects.

## Contributing
We welcome [issues](https://github.com/microclimate-dev2ops/microclimate-vscode-tools/issues) and contributions. For more information, see [CONTRIBUTING.md](https://github.com/microclimate-dev2ops/microclimate-vscode-tools/tree/master/CONTRIBUTING.md).

Development builds are available [here](https://public.dhe.ibm.com/ibmdl/export/pub/software/microclimate/vscode-tools/nightly/). Follow the [Install from a VSIX](https://code.visualstudio.com/docs/editor/extension-gallery#_install-from-a-vsix) instructions to install a `.vsix`.

To host the extension yourself so you can develop or debug it, clone this repository and run the **Extension** launch in `dev/.vscode/launch.json`. See [Developing Extensions](https://code.visualstudio.com/docs/extensions/developing-extensions) for more information.

You can also build the extension `.vsix` yourself by running [`vsce package`](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#packaging-extensions) from `dev/`. Refer to the `before_install` and `script` sections of [`.travis.yml`](https://github.com/microclimate-dev2ops/microclimate-vscode-tools/blob/master/.travis.yml) to see the exact steps the build runs.
