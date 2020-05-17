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

`server` holds data necessary for server configuration. You have to choose a server `type` in the configuration and use the below corresponding fields.

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
    timeout: 5s
    disable_epsv: false
    tls: false
    insecure_skip_verify: false
    log_trace: false
```

* `ftp`
  * `host`: FTP host IP or domain. **required**
  * `port`: FTP port (default: `21`). **required**
  * `user`: FTP username. **required**
  * `password`: FTP password. **required**
  * `sources`: List of sources paths to grab from FTP server. **required**
  * `timeout`: Timeout for opening connections, sending control commands, and each read/write of data transfers (default: `5s`).
  * `disable_epsv`: Disables EPSV in favour of PASV. This is useful in cases where EPSV connections neither complete nor downgrade to PASV successfully by themselves, resulting in hung connections (default: `false`).
  * `tls`: Use implicit FTP over TLS (default: `false`).
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
    timeout: 30s
    max_packet_size: 32768
```

* `sftp`
  * `host`: SFTP host IP or domain. **required**
  * `port`: SFTP port (default: `22`). **required**
  * `user`: SFTP username. **required**
  * `password`: SFTP password or passphrase if `key` is used.
  * `key`: Path to your private key to enable publickey authentication.
  * `sources`: List of sources paths to grab from SFTP server. **required**
  * `timeout`: Timeout is the maximum amount of time for the TCP connection to establish. `0s` means no timeout (default: `30s`).
  * `max_packet_size`: Sets the maximum size of the payload, measured in bytes (default: `32768`).

# DB

```yml
db:
  enable: true
  path: ftpgrab.db
```

* `db`
  * `enable`: Enable the database to audit files already downloaded (default: `true`).
  * `path`: Path to database file. (default: `ftpgrab.db`). Env var `FTPGRAB_DB` overrides this value. **required if enabled**

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
  * `output`: Output destination folder of downloaded files. Env var `FTPGRAB_DOWNLOAD_OUTPUT` overrides this value. **required**
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

# Notif

`notif` holds data necessary for notification configuration. You can enable the following notifiers:

## Mail

```yml
notif:
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
  * `from`: Sender email address. **required**
  * `to`: Recipient email address. **required**

> Example? Take a look at this [email report](/doc/faq/#what-type-of-email-report-is-sent-when-it-is-completed)

## Slack

```yml
notif:
  slack:
    enable: false
    webhook_url: https://hooks.slack.com/services/ABCD12EFG/HIJK34LMN/01234567890abcdefghij
```

* `slack`
  * `enable`: Enable slack notification (default: `false`).
  * `webhook_url`: Slack [incoming webhook URL](https://api.slack.com/messaging/webhooks). **required**

> Example? Take a look at this [Slack notification](/doc/faq/#what-does-a-slack-notification-look-like)

## Webhook

```yml
notif:
  webhook:
    enable: false
    endpoint: http://webhook.foo.com/sd54qad89azd5a
    method: GET
    headers:
      Content-Type: application/json
      Authorization: Token123456
    timeout: 10s
```

* `webhook`
  * `enable`: Enable webhook notification (default: `false`).
  * `endpoint`: URL of the HTTP request. **required**
  * `method`: HTTP method (default: `GET`). **required**
  * `headers`: Map of additional headers to be sent.
  * `timeout`: Timeout specifies a time limit for the request to be made. (default: `10s`).

> Example? Take a look at this [webhook response](/doc/faq/#whats-the-structure-of-the-webhook-notification)