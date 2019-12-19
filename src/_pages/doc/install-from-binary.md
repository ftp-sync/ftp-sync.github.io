---
title: Installation from binary
permalink: /doc/install-from-binary/
sidebar: doc
---
{% include vars.html %}

* TOC
{:toc}

# Download

FTPGrab binaries are available in [releases](https://github.com/ftpgrab/ftpgrab/releases){:target="_blank"} GitHub page.

Choose the archive matching the destination platform:

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

And extract FTPGrab:

```
$ wget -qO- https://github.com/ftpgrab/ftpgrab/releases/download/{{ site.app_version }}/ftpgrab_{{ site.app_version }}_linux_x86_64.tar.gz | tar -zxvf - ftpgrab
```

# Test

After getting the binary, it can be tested with `./ftpgrab --help` or moved to a permanent location.

```
$ ./ftpgrab --help
usage: ftpgrab --config=CONFIG [<flags>]

Grab your files periodically from a remote FTP or SFTP server easily. More info
on https://ftpgrab.github.io

Flags:
  --help               Show context-sensitive help (also try --help-long and
                       --help-man).
  --config=CONFIG      FTPGrab configuration file.
  --schedule=SCHEDULE  CRON expression format.
  --timezone="UTC"     Timezone assigned to FTPGrab.
  --log-level="info"   Set log level.
  --log-json           Enable JSON logging output.
  --log-file=LOG-FILE  Add logging to a specific file.
  --docker             Enable Docker mode.
  --version            Show application version.
```

# Server configuration

Steps below are the recommended server configuration.

## Prepare environment

Create user to run FTPGrab (ex. `ftpgrab`)

```
groupadd ftpgrab
useradd -s /bin/false -d /bin/null -g ftpgrab ftpgrab
```

## Create required directory structure

```
mkdir -p /var/lib/ftpgrab
chown ftpgrab:ftpgrab /var/lib/ftpgrab/
chmod -R 750 /var/lib/ftpgrab/
mkdir /etc/ftpgrab
chown ftpgrab:ftpgrab /etc/ftpgrab
chmod 770 /etc/ftpgrab
```

## Configuration

{% include callout.html type="info" text="Before running, you must create your first [configuration](/doc/configuration/) file in `/etc/ftpgrab/ftpgrab.yml`." %}

```
chown ftpgrab:ftpgrab /etc/ftpgrab/ftpgrab.yml
chmod 644 /etc/ftpgrab/ftpgrab.yml
```

## Copy binary to global location

```
cp ftpgrab /usr/local/bin/ftpgrab
```

# Running FTPGrab

After the above steps, two options to run FTPGrab:

## 1. Creating a service file (recommended)

See how to create a [Linux service](/doc/linux-service/) to start FTPGrab automatically.

## 2. Running from command-line/terminal

```
/usr/local/bin/ftpgrab --config /etc/ftpgrab/ftpgrab.yml --schedule "*/30 * * * *"
```

# Updating to a new version

You can update to a new version of FTPGrab by stopping it, replacing the binary at `/usr/local/bin/ftpgrab` and restarting the instance.

If you have carried out the installation steps as described above, the binary should have the generic name `ftpgrab`. Do not change this, i.e. to include the version number.
