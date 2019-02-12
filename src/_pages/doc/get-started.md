---
title: Get started
permalink: /doc/get-started/
sidebar: doc
---

* TOC
{:toc}

# Features

* Multiple sources
* Prevent re-download through a hash
* Efficient key/value store database to audit files already downloaded
* Internal cron implementation through go routines
* Include and exclude filters with regular expression
* Date filter
* Retry on failed download
* Change file/folder permissions and owner
* Translate modtimes on downloaded files
* Beautiful email report
* Enhanced logging
* Timezone can be changed

# Installation

## With Docker

FTPGrab provides automatically updated Docker {% gemoji whale %} images within its [Docker Hub](https://hub.docker.com/u/ftpgrab){:target="_blank"} and [Quay](https://quay.io/organization/ftpgrab){:target="_blank"} organization. It is possible to always use the latest stable tag or to use another service that handles updating Docker images.

This reference setup guides users through the setup based on `docker-compose`, but the installation of `docker-compose` is out of scope of this documentation. To install docker-compose itself follow the official [install instructions](https://docs.docker.com/compose/install/){:target="_blank"}.

To continue, [read the instructions](https://github.com/{{ site.github.user }}/docker#about){:target="_blank"} on the dedicated GitHub repository.

## Binary

Choose the file matching the destination platform from the [releases page](https://github.com/{{ site.github.user }}/{{ site.github.repo }}/releases){:target="_blank"}, copy the URL and replace the URL within the commands below:

```
$ wget -qO- https://github.com/ftpgrab/ftpgrab/releases/download/5.0.0/ftpgrab_5.0.0_linux_x86_64.tar.gz | tar -zxvf - ftpgrab
```

After getting a binary, it can be tested with `./ftpgrab --help` or moved to a permanent location.<br />
When launched manually, FTPGrab can be killed using `Ctrl+C`:

```
$ ./ftpgrab --help
```

# Usage

`ftpgrab --config=CONFIG [<flags>]`

## Flags

* `--help` : Show help text and exit. _Optional_.
* `--version` : Show version and exit. _Optional_. (example: `5.0.0`).
* `--config <path>` : FTPGrab Yaml configuration file. **Required**. (example: `ftpgrab.yml`).
* `--schedule <cron expression>` : [CRON expression](https://godoc.org/github.com/crazy-max/cron#hdr-CRON_Expression_Format){:target="_blank"} to schedule FTPGrab. _Optional_. (example: `0 */30 * * * *`).
* `--timezone <timezone>` : Timezone assigned to FTPGrab. _Optional_. (default: `UTC`).
* `--log-level <level>` : Log level output. _Optional_. (default: `info`).
* `--log-json` : Enable JSON logging output. _Optional_. (default: `false`).
* `--log-file <path>` : Add logging to a specific file.. _Optional_. (example: `/var/log/ftpgrab/ftpgrab.log`).
* `--log-ftp` : Enable low-level FTP log. _Optional_. (default: `false`).

{% include callout.html type="info" text="Before running, you must create your first `ftpgrab.yml` file. Read the [Configuration](/doc/configuration/) page for more info." %}

```
$ ftpgrab --config ftpgrab.yml
```

# Upgrade

All instructions to upgrade from a previous release are added in the [Upgrade notes](/doc/upgrade-notes/) page.
