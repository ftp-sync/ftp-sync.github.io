---
title: Installation with Docker
permalink: /doc/install-with-docker/
sidebar: doc
---
{% include vars.html %}

* TOC
{:toc}

# About

FTPGrab provides automatically updated Docker {% gemoji whale %} images within [Docker Hub](https://hub.docker.com/r/ftpgrab/ftpgrab){:target="_blank"}. It is possible to always use the latest stable tag or to use another service that handles updating Docker images.

Following platforms for this image are available:

```
$ docker run --rm mplatform/mquery ftpgrab/ftpgrab:latest
Image: ftpgrab/ftpgrab:latest
 * Manifest List: Yes
 * Supported platforms:
   - linux/amd64
   - linux/arm/v6
   - linux/arm/v7
   - linux/arm64
   - linux/386
   - linux/ppc64le
   - linux/s390x
```

# Environment variables

* `TZ` : Timezone assigned to FTPGrab
* `SCHEDULE` : [CRON expression](https://godoc.org/github.com/crazy-max/cron#hdr-CRON_Expression_Format){:target="_blank"} to schedule FTPGrab
* `LOG_LEVEL` : Log level output (default `info`)
* `LOG_JSON`: Enable JSON logging output (default `false`)

# Volumes

* `/db` : Database file
* `/download` : Downloaded files

# Usage

Docker compose is the recommended way to run this image. Copy the content of folder [.res/compose](https://github.com/{{ site.github.user }}/{{ site.github.repo }}/tree/master/.res/compose){:target="_blank"} in `/opt/ftpgrab/` on your host for example. Edit the compose and config file with your preferences and run the following commands:

```
docker-compose up -d
docker-compose logs -f
```

Or use the following command:

{% include callout.html type="info" text="Before running the container, you must create your first [configuration](/doc/configuration/) file." %}

```
$ docker run -d --name ftpgrab \
  -e "TZ=Europe/Paris" \
  -e "SCHEDULE=0 */30 * * * *" \
  -e "LOG_LEVEL=info" \
  -e "LOG_JSON=false" \
  -v "$(pwd)/db:/db:rw" \
  -v "$(pwd)/download:/download:rw" \
  -v "$(pwd)/ftpgrab.yml:/ftpgrab.yml:ro" \
  ftpgrab/ftpgrab:latest
```

To upgrade your installation to the latest release:

```
docker-compose pull
docker-compose up -d
```
