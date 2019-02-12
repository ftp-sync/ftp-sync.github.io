---
title: Configuration
permalink: /doc/configuration/
sidebar: doc
---
{% include vars.html %}

Before running FTPGrab, you must create your first `ftpgrab.yml` [configuration file](https://github.com/{{ site.github.user }}/{{ site.github.repo }}/blob/master/ftpgrab.yml){:target="_blank"} that looks like.

* `ftp`
  * `host`: FTP host IP or domain. {% include label.html type="danger" text="required" %}
    * `port`: FTP port. {% include label.html type="danger" text="required" %} {% include label.html type="default" text="default: 21" %}
    * `user`: FTP username. {% include label.html type="danger" text="required" %}
    * `password`: FTP password. {% include label.html type="danger" text="required" %}
    * `connections_per_host`: Maximum number of FTP connections to open per-host. {% include label.html type="default" text="default: 5" %}
    * `timeout`: Timeout for opening connections, sending control commands, and each read/write of data transfers. {% include label.html type="default" text="default: 5" %}
    * `disable_epsv`: Disables EPSV in favour of PASV. This is useful in cases where EPSV connections neither complete nor downgrade to PASV successfully by themselves, resulting in hung connections. {% include label.html type="default" text="default: false" %}
    * `tls`
      * `enable`: Enable TLS. {% include label.html type="default" text="default: false" %}
      * `implicit`: Implicit means both sides already implicitly agree to use TLS, and the client connects directly using TLS. If set to false, means the client first runs an explicit command ("AUTH TLS") before switching to TLS. {% include label.html type="default" text="default: true" %}
      * `insecure_skip_verify`: Controls whether a client verifies the server's certificate chain and host name. {% include label.html type="default" text="default: false" %}
    * `sources`: List of sources paths to grab from FTP server. {% include label.html type="danger" text="required" %} {% include label.html type="default" text="default: /" %}

* `db`
  * `enable`: Enable the database to audit files already downloaded. {% include label.html type="default" text="default: true" %}
  * `path`: Path to database file. Flag `--docker` force this path to `/db/ftpgrab.db`. {% include label.html type="danger" text="required if db enabled" %} {% include label.html type="default" text="default: ftpgrab.yml" %}

* `download`
  * `output`: Output destination folder of downloaded files. Flag `--docker` force this path to `/download`. {% include label.html type="danger" text="required" %}
  * `uid`: Owner user applied to downloaded files. {% include label.html type="default" text="default to caller" %}
  * `gid`: Owner group applied to downloaded files. {% include label.html type="default" text="default to caller" %}
  * `chmod_file`: Permissions applied to files. {% include label.html type="default" text="default: 0644" %}
  * `chmod_dir`: Permissions applied to folders. {% include label.html type="default" text="default: 0755" %}
  * `include`: List of regular expressions to include files.
  * `exclude`: List of regular expressions to exclude files.
  * `since`: Only download files created since the specified date in RFC3339 format (example: `2019-02-01T18:50:05Z`).
  * `retry`: Number of retries in case of download failure. {% include label.html type="default" text="default: 3" %}
  * `hide_skipped`: Not display skipped downloads. {% include label.html type="default" text="default: false" %}
  * `create_basedir`: Create basename of a FTP source path in the destination folder. This is highly recommended if you have multiple FTP source paths to prevent overwriting. Does not apply if `sources` is `/` only. {% include label.html type="default" text="default: false" %}

* `mail`
  * `enable`: Enable email reports {% include label.html type="default" text="default: false" %}
  * `host`: SMTP server host {% include label.html type="danger" text="required if mail enabled" %} {% include label.html type="default" text="default: localhost" %}
  * `port`: SMTP server port {% include label.html type="danger" text="required if mail enabled" %} {% include label.html type="default" text="default: 25" %}
  * `ssl`: SSL defines whether an SSL connection is used. Should be false in most cases since the auth mechanism should use the STARTTLS ext instead. {% include label.html type="default" text="default: false" %}
  * `insecure_skip_verify`: Controls whether a client verifies the server's certificate chain and host name. {% include label.html type="default" text="default: false" %}
  * `username`: SMTP username
  * `password`: SMTP password
  * `from`: Sender email address {% include label.html type="danger" text="required if mail enabled" %}
  * `to`: Recipient email address {% include label.html type="danger" text="required if mail enabled" %}
