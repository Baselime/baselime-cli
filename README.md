# [DEPRECATED] Baselime CLI
[![npm][npm_badge]][npm]
[![Documentation][docs_badge]][docs]
[![Latest Release][release_badge]][release]
![No Maintenance Intended](https://img.shields.io/maintenance/no/2024.svg)
[![License][license_badge]][license]<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->


[![Observability](./images/baselime.gif)](https://baselime.io?utm_campaign=baselime-baselime-cli-github-repo&utm_source=github.com&utm_medium=top-banner)


🛠️ The Observability Toolset for the Cloud: observability in your terminal, tail your logs and view your traces in your terminal

---

## Table of Contents

1. [Introduction](#introduction)
1. [Goal](#Goal)
1. [Installation](#installation)
1. [Usage](#usage)
1. [Documentation](#documentation)
1. [Contributing](#contributing)
1. [License](#license)

## Introduction

The official command line client for [Baselime](https://baselime.io/).

Documentation is available on the [Baselime Docs](https://baselime.io/docs/cli/install/).

## Goal

The Goal of the Baselime CLI is to provide a simple interface to interact with your telemetry data. 

## Installation

Installing the CLI globally provides access to the Baselime command.

### Install manually

```shell
curl -s https://get.baselime.io | bash
```

### Install using [Homebrew](https://brew.sh)

```shell
brew tap baselime/tap
brew install baselime
```

To update:

```shell
brew upgrade baselime
```

### Install using [npm](npmjs.com/)

```shell
$ npm install @baselime/cli -g
```

### Download the compiled binary manually

Binary releases are available on
[GitHub Releases](https://github.com/baselime/cli/releases/latest).

### Docker
Binary is also distributed as a [docker image](https://hub.docker.com/r/baselime/baselime)

### Validate installation

In all cases the installation can be validated by running `baselime -v` in the terminal:

```shell
0.0.78
```

## Usage

```shell
baselime <command>
baselime <command> <subcommand> [flags]
```

### Configuration

The configuration files are located in `~/.config/baselime`. Each profile is saved in a file named against the profile. The default profile is saved in `~/.config/baselime/default.json`. Configuration values can also be set using flags.

#### Troubleshooting

If unexpected errors occur when using `baselime`,
make sure your environment is clean of any `BASELIME_` prefixed variables.
Use the `--debug` flag to print in the console the stack trace of any error you encounter.

## Documentation

To learn how to use Baselime to start observing your serverless applications, visit the
[Baselime documentation](https://baselime.io/docs/).

For full command reference, see the list below, or visit
[docs.baselime.com](https://baselime.io/docs/reference/cli).

## Contributing

Feel free to submit PRs or to fill issues. Every kind of help is appreciated. 

Kindly check our [Contributing](Contributing.md) guide on how to propose
bugfixes and improvements, and submitting pull requests to the project.

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://boristane.com/"><img src="https://avatars.githubusercontent.com/u/10452259?v=4?s=100" width="100px;" alt="Boris Tane"/><br /><sub><b>Boris Tane</b></sub></a><br /><a href="https://github.com/Baselime/cli/commits?author=boristane" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Lastin"><img src="https://avatars.githubusercontent.com/u/5638394?v=4?s=100" width="100px;" alt="Maksym Makuch"/><br /><sub><b>Maksym Makuch</b></sub></a><br /><a href="https://github.com/Baselime/cli/commits?author=Lastin" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://ankcorn.dev"><img src="https://avatars.githubusercontent.com/u/7361428?v=4?s=100" width="100px;" alt="Thomas Ankcorn"/><br /><sub><b>Thomas Ankcorn</b></sub></a><br /><a href="https://github.com/Baselime/cli/commits?author=Ankcorn" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://maxdiamond.co.uk"><img src="https://avatars.githubusercontent.com/u/23747483?v=4?s=100" width="100px;" alt="Max Diamond"/><br /><sub><b>Max Diamond</b></sub></a><br /><a href="https://github.com/Baselime/cli/commits?author=dmdboi" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

&copy; Baselime Limited, 2023

Distributed under MIT License (`The MIT License`).

See [LICENSE](LICENSE) for more information.

<!-- Badges -->

[docs]: https://baselime.io/docs/
[docs_badge]: https://img.shields.io/badge/docs-reference-blue.svg?style=flat-square
[release]: https://github.com/baselime/cli/releases/latest
[release_badge]: https://img.shields.io/github/release/baselime/cli.svg?style=flat-square&ghcache=unused
[license]: https://opensource.org/licenses/MIT
[license_badge]: https://img.shields.io/github/license/baselime/cli.svg?color=blue&style=flat-square&ghcache=unused
[npm]: https://www.npmjs.com/package/@baselime/cli
[npm_badge]: https://img.shields.io/npm/v/@baselime/cli?style=flat-square
