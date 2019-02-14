---
title: Get started
permalink: /doc/get-started/
sidebar: doc
---
{% include vars.html %}

* TOC
{:toc}

# Features

* Multiple sources
* SFTP support
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

Choose the archive matching the destination platform :

* ![](/img/os/macos.png) [ftpgrab_{{ site.app_version }}_darwin_i386.tar.gz]({{ var_repo_url }}/releases/download/{{ site.app_version }}/ftpgrab_{{ site.app_version }}_darwin_i386.tar.gz)
* ![](/img/os/macos.png) [ftpgrab_{{ site.app_version }}_darwin_x86_64.tar.gz]({{ var_repo_url }}/releases/download/{{ site.app_version }}/ftpgrab_{{ site.app_version }}_darwin_x86_64.tar.gz)
* ![](/img/os/freebsd.png) [ftpgrab_{{ site.app_version }}_freebsd_i386.tar.gz]({{ var_repo_url }}/releases/download/{{ site.app_version }}/ftpgrab_{{ site.app_version }}_freebsd_i386.tar.gz)
* ![](/img/os/freebsd.png) [ftpgrab_{{ site.app_version }}_freebsd_x86_64.tar.gz]({{ var_repo_url }}/releases/download/{{ site.app_version }}/ftpgrab_{{ site.app_version }}_freebsd_x86_64.tar.gz)
* ![](/img/os/linux.png) [ftpgrab_{{ site.app_version }}_linux_arm64.tar.gz]({{ var_repo_url }}/releases/download/{{ site.app_version }}/ftpgrab_{{ site.app_version }}_linux_arm64.tar.gz)
* ![](/img/os/linux.png) [ftpgrab_{{ site.app_version }}_linux_armv6.tar.gz]({{ var_repo_url }}/releases/download/{{ site.app_version }}/ftpgrab_{{ site.app_version }}_linux_armv6.tar.gz)
* ![](/img/os/linux.png) [ftpgrab_{{ site.app_version }}_linux_armv7.tar.gz]({{ var_repo_url }}/releases/download/{{ site.app_version }}/ftpgrab_{{ site.app_version }}_linux_armv7.tar.gz)
* ![](/img/os/linux.png) [ftpgrab_{{ site.app_version }}_linux_i386.tar.gz]({{ var_repo_url }}/releases/download/{{ site.app_version }}/ftpgrab_{{ site.app_version }}_linux_i386.tar.gz)
* ![](/img/os/linux.png) [ftpgrab_{{ site.app_version }}_linux_x86_64.tar.gz]({{ var_repo_url }}/releases/download/{{ site.app_version }}/ftpgrab_{{ site.app_version }}_linux_x86_64.tar.gz)
* ![](/img/os/windows.png) [ftpgrab_{{ site.app_version }}_windows_i386.zip]({{ var_repo_url }}/releases/download/{{ site.app_version }}/ftpgrab_{{ site.app_version }}_windows_i386.zip)
* ![](/img/os/windows.png) [ftpgrab_{{ site.app_version }}_windows_x86_64.zip]({{ var_repo_url }}/releases/download/{{ site.app_version }}/ftpgrab_{{ site.app_version }}_windows_x86_64.zip)

And extract FTPGrab :

```
$ wget -qO- https://github.com/ftpgrab/ftpgrab/releases/download/{{ site.app_version }}/ftpgrab_{{ site.app_version }}_linux_x86_64.tar.gz | tar -zxvf - ftpgrab
```

After getting the binary, it can be tested with `./ftpgrab --help` or moved to a permanent location.<br />
When launched manually, FTPGrab can be killed using `Ctrl+C`:

```
$ ./ftpgrab --help
```

# Usage

`ftpgrab --config=CONFIG [<flags>]`

## Flags

* `--help` : Show help text and exit. _Optional_.
* `--version` : Show version and exit. _Optional_.
* `--config <path>` : FTPGrab Yaml configuration file. **Required**. (example: `ftpgrab.yml`).
* `--schedule <cron expression>` : [CRON expression](https://godoc.org/github.com/crazy-max/cron#hdr-CRON_Expression_Format){:target="_blank"} to schedule FTPGrab. _Optional_. (example: `0 */30 * * * *`).
* `--timezone <timezone>` : Timezone assigned to FTPGrab. _Optional_. (default: `UTC`).
* `--log-level <level>` : Log level output. _Optional_. (default: `info`).
* `--log-json` : Enable JSON logging output. _Optional_. (default: `false`).
* `--log-file <path>` : Add logging to a specific file.. _Optional_. (example: `/var/log/ftpgrab/ftpgrab.log`).

{% include callout.html type="info" text="Before running, you must create your first `ftpgrab.yml` file. Read the [Configuration](/doc/configuration/) page for more info." %}

```
$ ftpgrab --config ftpgrab.yml
```

# Upgrade

All instructions to upgrade from a previous release are added in the [Upgrade notes](/doc/upgrade-notes/) page.
