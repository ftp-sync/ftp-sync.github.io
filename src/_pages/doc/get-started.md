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
* Webhook notification
* Slack incoming webhook notification
* Enhanced logging
* Timezone can be changed

# Installation

* [With Docker](/doc/install-with-docker/)
* [From binary](/doc/install-from-binary/)
* [Linux service](/doc/linux-service/)

# Usage

`ftpgrab --config=CONFIG [<flags>]`

* `--help` : Show help text and exit. _Optional_.
* `--version` : Show version and exit. _Optional_.
* `--config <path>` : FTPGrab Yaml configuration file. **Required**. (example: `ftpgrab.yml`).
* `--schedule <cron expression>` : [CRON expression](https://godoc.org/github.com/robfig/cron#hdr-CRON_Expression_Format){:target="_blank"} to schedule FTPGrab. _Optional_. (example: `*/30 * * * *`).
* `--timezone <timezone>` : Timezone assigned to FTPGrab. _Optional_. (default: `UTC`).
* `--log-level <level>` : Log level output. _Optional_. (default: `info`).
* `--log-json` : Enable JSON logging output. _Optional_. (default: `false`).
* `--log-file <path>` : Add logging to a specific file. _Optional_. (example: `/var/log/ftpgrab/ftpgrab.log`).

{% include callout.html type="info" text="Before running, you must create your first `ftpgrab.yml` file. Read the [Configuration](/doc/configuration/) page for more info." %}

# Upgrade

All instructions to upgrade from a previous release are added in the [Upgrade notes](/doc/upgrade-notes/) page.
