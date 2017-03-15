---
title: Configuration
permalink: /doc/configuration/
sidebar: doc
---
{% include vars.html %}

Before running the script, you must copy the config file `/opt/ftp-sync/ftp-sync.conf` to `/opt/ftp-sync/conf/seedbox.conf`.<br />
Here i have named the config file `seedbox.conf`. You can name it as you want but it must be unique!<br />
The name of the config file (`seedbox`) will be used during the process to create the PID file, the logs files and the hash file so be careful with it!

* TOC
{:toc}

# General

## DIR\_DEST

* **required**
* default value `/tmp/seedbox`

Path where the files will be downloaded.<br />
Example: `DIR_DEST="/tmp/seedbox"`

## EMAIL\_LOG

* *optional*

Mail address where the logs are sent. Leave empty to disable sending mail.<br />
Example: `EMAIL_LOG="foo@foo.com"`

## DEBUG

* **required**
* default value `0`

Enable debug.<br />
Example: `DEBUG=1`

# FTP

## FTP\_HOST

* **required**

FTP host IP or domain.<br />
Example: `FTP_HOST="198.51.100.0"` or `FTP_HOST="ftp.foo.com"`

## FTP\_PORT

* **required**

FTP port.<br />
Example: `FTP_PORT=21`

## FTP\_USER

* **required**

FTP username.

## FTP\_PASSWORD

* **required**

FTP password.

## FTP\_SOURCES

* **required**

FTP sources paths to synchronize.<br />

Example for one path:
```
FTP_SOURCES="/downloads/"
```

Example for multi paths:
```
FTP_SOURCES="\
  /downloads/;\
  /other_path/;\
  /yet_another_path/;\
"
```

# FTP security

> Works only with curl method

## FTP\_SECURE

* **required**
* default value `0`

Open a secure FTP connection (SSL/TLS). Only available for curl method.<br />
Example: `FTP_SECURE=1`

## FTP\_CHECK\_CERT

* **required**
* default value `0`

Check the server certificate against the available certificate authorities.<br />
Not used if `FTP_SECURE=0`.<br />
Example: `FTP_CHECK_CERT=1`

# Download

## DL\_METHOD

* **required**
* default value `wget`

The download method. Can be `wget` or `curl`.<br />
Example: `DL_METHOD="wget"`

## DL\_USER

* *optional*

Linux owner user of downloaded files.<br />
Example: `DL_USER="ftpuser"`

## DL\_GROUP

* *optional*

Linux owner group of downloaded files.<br />
Example: `DL_GROUP="ftpgroup"`

## DL\_CHMOD

* *optional*

Permissions of downloaded files.<br />
Example: `DL_CHMOD="644"`

## DL\_REGEX

* *optional*

Apply a filter to search for files with a regular expression.<br />
Separate each regular expression with a semicolon.<br />
Leave empty to grab all files.<br />

Example for one regex:
```
DL_REGEX="Game.Of.Thrones.*.avi"
```

Example for multi regex:
```
DL_REGEX="\
  Game.Of.Thrones.*.avi;\
  Burn.Notice.*.avi;\
  The.Big.Bang.Theory.*VOSTFR.*720p.*WEB-DL.*.mkv;\
"
```

## DL\_RETRY

* **required**
* default value `3`

Number of retries in case of download failure.<br />
Example: `DL_RETRY=3`

## DL\_RESUME

* **required**
* default value `0`

Resume partially downloaded file.<br />
Example: `DL_RESUME=0`

## DL\_SHUFFLE

* **required**
* default value `0`

Shuffle file/folder listing (more info on ([PR #25]({{ var_repo_url }}/pull/25#issue-198052599)).<br />
Example: `DL_SHUFFLE=0`

## DL\_HIDE\_SKIPPED

* **required**
* default value `0`

Not display the downloads already made or valid in logs.<br />
Example: `DL_HIDE_SKIPPED=0`

## DL\_HIDE\_PROGRESS

* **required**
* default value `1`

Not display the progress dots during downloads.<br />
Example: `DL_HIDE_PROGRESS=1`

## DL\_CREATE\_BASEDIR

* **required**
* default value `0`

Create basename of a ftp source path in the destination folder.<br />
WARNING: Highly recommended if you have multiple ftp source paths to prevent overwriting!<br />
Does not work if `FTP_SOURCES="/"`.<br />

Example if `DL_CREATE_BASEDIR=1` and :
* The destination folder is `/tmp/seedbox`
* `FTP_SOURCES="/downloads/;/other_path/"`
* `/downloads/` src path contains a file called `dl_file1`
* `/other_path/` src path contains a file called `other_file2`

<br />The destination structure will be :
```
[-] tmp
 | [-] seedbox
 |  | [-] downloads
 |  |     | dl_file1
 |  | [-] other_path
 |  |     | other_file2
```
 
Example if `DL_CREATE_BASEDIR=0` and :
* The destination folder is `/tmp/seedbox`
* `FTP_SOURCES="/downloads/;/other_path/"`
* `/downloads/` src path contains a file called `dl_file1`
* `/other_path/` src path contains a file called `other_file2`

<br />The destination structure will be :
```
[-] tmp
 | [-] seedbox
 |  |  | dl_file1
 |  |  | other_file2
```

# Hash

## HASH\_ENABLED

* **required**
* default value `1`

Enable audit file already downloaded.<br />
Example: `HASH_ENABLED=1`

## HASH\_TYPE

* **required**
* default value `md5`

The hash type. Can be `md5` or `sha1`.<br />
For the `sha1` method, your need to install the required package: `apt-get install sha1sum`.<br />
Example: `HASH_TYPE="md5"`

## HASH\_STORAGE

* **required**
* default value `text`

The hash storage process. Can be `text` or `sqlite3`.<br />
For the `sqlite3` method, your need to install the required package: `apt-get install sqlite3`.<br />
Example: `HASH_STORAGE="text"`
