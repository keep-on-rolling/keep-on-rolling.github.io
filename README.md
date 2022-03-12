# [keep-on-rolling.ch](https://keep-on-rolling.ch/)

## Development

This is the command I use to start the Hugo development server on my development machine:

```bash
hugo server --port 13130 --watch --gc --buildDrafts --navigateToChanged
```

| Parameter | Effect |
| --- | --- |
| `server` | A high performance webserver |
| `--port 13130` | port on which the server will listen (on Windows, the default port 1313 is often blocked by Hyper-V)
| `--watchw` | watch filesystem for changes and recreate as needed |
| `--gc` | enable to run some cleanup tasks (remove unused cache files) after the build |
| `--buildDrafts` | include content marked as draft |
| `--navigateToChanged` | navigate to changed content file on live browser reload |

## Clone

There are a few more steps needed to clone this respository, because it uses the theme repository as a git submodule:

```raw
$> git clone git@github.com:keep-on-rolling/keep-on-rolling.github.io.git
$> git submodule init
$> git submodule update
```

## License

Shield: [![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]

This work is licensed under a
[Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa].

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg
