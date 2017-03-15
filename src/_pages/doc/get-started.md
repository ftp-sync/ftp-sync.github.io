---
title: Get started
permalink: /doc/get-started/
sidebar: doc
---

* TOC
{:toc}

# Requirements

* Need to be root or sudoer.
* [awk](http://en.wikipedia.org/wiki/Awk) is required.
* [nawk](http://linux.die.net/man/1/nawk) is required.
* [gawk](http://www.gnu.org/software/gawk/) is required.
* [mail](http://linux.die.net/man/1/mail) is optional if you do not fill [EMAIL_LOG](/doc/configuration/#email_log).
* [wget](http://en.wikipedia.org/wiki/Wget) >= 1.12 is required.
* [md5sum](http://en.wikipedia.org/wiki/Md5sum) is required.
* [curl](http://en.wikipedia.org/wiki/CURL) >= 7 is optional if you do not fill [DL_METHOD](/doc/configuration/#dl_method) with `curl`.
* [sha1sum](https://en.wikipedia.org/wiki/Sha1sum) is optional if you do not fill [HASH_TYPE](/doc/configuration/#hash_type) with `sha1`.
* [sqlite3](http://linux.die.net/man/1/sqlite3) >= 3.4 is optional if you do not fill [HASH_STORAGE](/doc/configuration/#hash_storage) with `sqlite3`.

# Installation

Execute the following commands to download and install the script :

```console
$ mkdir -p /opt/ftpgrab/conf /var/log/ftpgrab
$ wget https://raw.github.com/{{ site.github.user }}/{{ site.github.repo }}/master/ftpgrab.sh -O /etc/init.d/ftpgrab --no-check-certificate
$ chmod +x /etc/init.d/ftpgrab
$ wget https://raw.github.com/{{ site.github.user }}/{{ site.github.repo }}/master/ftpgrab.conf -O /opt/ftpgrab/ftpgrab.conf --no-check-certificate
```

FTPGrab can be run multiple times depending on the number of config files.

{% include callout.html type="info" text="Before running the script, you must create your first config file. Read the [Configuration](/doc/configuration) page for more info." %}

# Usage

```console
$ /etc/init.d/ftpgrab <CONFIG_FILE>
```

**CONFIG_FILE** is a config file located in `/opt/ftpgrab/conf`.<br />
ex. `$ /etc/init.d/ftpgrab seedbox.conf`

## Automatic grab with cron

You can automatically grab FTP files by calling the script in a [crontab](http://en.wikipedia.org/wiki/Crontab).<br />
For example :

```
0 4 * * * cd /etc/init.d/ && ./ftpgrab seedbox.conf >/dev/null 2>&1
```

This will grab your FTP files using the config file `seedbox.conf` every day at 4 am.

# Upgrade

All instructions to upgrade from a previous release are added in the [Upgrade notes](/doc/upgrade-notes) page.