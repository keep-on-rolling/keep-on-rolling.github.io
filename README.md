# [keep-on-rolling.ch](https://keep-on-rolling.ch/)

## Development

This is the command I use to start the Hugo development server on my development machine:

```bash
hugo server --watch --gc --buildDrafts --buildFuture --navigateToChanged
```

| Parameter | Effect |
| --- | --- |
| `server` | A high performance webserver |
| `--watch` | watch filesystem for changes and recreate as needed |
| `--gc` | enable to run some cleanup tasks (remove unused cache files) after the build |
| `--buildDrafts` | include content marked as draft |
| `--buildFuture` | include content with publishdate in the future |
| `--navigateToChanged` | navigate to changed content file on live browser reload |

## Clone

This repository uses the [anatole theme repository](https://github.com/lxndrblz/anatole/) as a git submodule. When cloing this repository, you need to tell git to clone the submodules, too:

```raw
git clone --recurse-submodules git@github.com:keep-on-rolling/keep-on-rolling.github.io.git
```

If you forgot it, this website will not work. You can fix it by initializing and updating the submodules:

```raw
git submodule update --init --recursive
```

## License

Shield: [![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]

This work is licensed under a
[Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa].

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg
