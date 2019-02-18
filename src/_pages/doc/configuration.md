---
title: Configuration
permalink: /doc/configuration/
sidebar: doc
---
{% include vars.html %}

Before running FTPGrab, you must create your first configuration file. See [these samples](https://github.com/{{ site.github.user }}/{{ site.github.repo }}/tree/master/.res/config){:target="_blank"} to get started.

* TOC
{:toc}

# Server

Server holds data necessary for server configuration. You have to choose a server `type` in the configuration and use the below corresponding fields.

## FTP

```yml
server:
  type: ftp
  ftp:
    host:
    port: 21
    username:
    password:
    sources:
      - /
    connections_per_host: 5
    timeout: 5
    disable_epsv: false
    tls:
      enable: false
      implicit: true
      insecure_skip_verify: false
    log_trace: false
```

* `ftp`
  * `host`: FTP host IP or domain. **required**
  * `port`: FTP port (default: `21`). **required**
  * `user`: FTP username. **required**
  * `password`: FTP password. **required**
  * `sources`: List of sources paths to grab from FTP server. **required**
  * `connections_per_host`: Maximum number of FTP connections to open per-host (default: `5`).
  * `timeout`: Timeout for opening connections, sending control commands, and each read/write of data transfers (default: `5`).
  * `disable_epsv`: Disables EPSV in favour of PASV. This is useful in cases where EPSV connections neither complete nor downgrade to PASV successfully by themselves, resulting in hung connections (default: `false`).
  * `tls`
    * `enable`: Enable TLS (default: `false`).
    * `implicit`: Implicit means both sides already implicitly agree to use TLS, and the client connects directly using TLS. If set to false, means the client first runs an explicit command (_AUTH TLS_) before switching to TLS (default: `true`).
    * `insecure_skip_verify`: Controls whether a client verifies the server's certificate chain and host name (default: `false`).
  * `log_trace`: Enable low-level FTP log. Works only if log level is debug (default `false`).

## SFTP

```yml
server:
  type: sftp
  sftp:
    host:
    port: 22
    username:
    password:
    key:
    sources:
      - /
    timeout: 30
    max_packet_size: 32768
```

* `sftp`
  * `host`: SFTP host IP or domain. **required**
  * `port`: SFTP port (default: `22`). **required**
  * `user`: SFTP username. **required**
  * `password`: SFTP password or passphrase if `key` is used.
  * `key`: Path to your private key to enable publickey authentication.
  * `sources`: List of sources paths to grab from SFTP server. **required**
  * `timeout`: Timeout is the maximum amount of time for the TCP connection to establish. 0 means no timeout (default: `30`).
  * `max_packet_size`: Sets the maximum size of the payload, measured in bytes (default: `32768`).

# DB

```yml
db:
  enable: true
  path: ftpgrab.db
```

* `db`
  * `enable`: Enable the database to audit files already downloaded (default: `true`).
  * `path`: Path to database file. Flag `--docker` force this path to `/db/ftpgrab.db` (default: `ftpgrab.yml`). **required if enabled**

# Download

```yml
download:
  output: /download
  uid:
  gid:
  chmod_file: 0644
  chmod_dir: 0755
  include:
  exclude:
  since: 0001-01-01T00:00:00Z
  retry: 3
  hide_skipped: false
  create_basedir: false
```

* `download`
  * `output`: Output destination folder of downloaded files. Flag `--docker` force this path to `/download`. **required**
  * `uid`: Owner user applied to downloaded files. (default to caller)
  * `gid`: Owner group applied to downloaded files. (default to caller)
  * `chmod_file`: Permissions applied to files. (default: `0644`)
  * `chmod_dir`: Permissions applied to folders. (default: `0755`)
  * `include`: List of regular expressions to include files.
  * `exclude`: List of regular expressions to exclude files.
  * `since`: Only download files created since the specified date in RFC3339 format (example: `2019-02-01T18:50:05Z`).
  * `retry`: Number of retries in case of download failure (default: `3`).
  * `hide_skipped`: Not display skipped downloads (default: `false`).
  * `create_basedir`: Create basename of a FTP source path in the destination folder. This is highly recommended if you have multiple FTP source paths to prevent overwriting. Does not apply if `sources` is `/` only (default: `false`).

# Mail

```yml
mail:
  enable: false
  host: localhost
  port: 25
  ssl: false
  insecure_skip_verify: false
  username:
  password:
  from:
  to:
```

* `mail`
  * `enable`: Enable email reports (default: `false`).
  * `host`: SMTP server host (default: `localhost`). **required**
  * `port`: SMTP server port (default: `25`). **required**
  * `ssl`: SSL defines whether an SSL connection is used. Should be false in most cases since the auth mechanism should use STARTTLS (default: `false`).
  * `insecure_skip_verify`: Controls whether a client verifies the server's certificate chain and host name (default: `false`).
  * `username`: SMTP username.
  * `password`: SMTP password.
  * `from`: Sender email address. **required if enabled**
  * `to`: Recipient email address. **required if enabled**
