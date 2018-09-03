---
title: Troubleshooting
permalink: /doc/troubleshooting/
sidebar: doc
---

* TOC
{:toc}

# Cannot kill FTPGrab



# awk: line 1: syntax error at or near

If you have this kind of error with awk, enter this command to check your version of awk :

```console
$ awk -W version
GNU Awk 3.1.7
...
```

If you don't have GNU Awk (gawk), install it :

```console
$ apt-get install gawk
```

If you already have gawk installed on your system, check the location of awk and make a symbolic link to gawk :

```console
$ which awk
/usr/bin/awk
$ mv /usr/bin/awk /usr/bin/awk_
$ chmod -x /usr/bin/awk
$ which gawk
/usr/bin/gawk
$ ln -s /usr/bin/gawk /usr/bin/awk
```

# Synology Network Attached Storage

For Synology NAS, additional commands must be performed.

## bootstrap, ipkg

First you must [install bootstrap, ipkg following the wiki of the official website](http://forum.synology.com/wiki/index.php/Overview_on_modifying_the_Synology_Server,_bootstrap,_ipkg_etc#How_to_install_ipkg).<br />
Next you can test ipkg and upgrade the repository.

```console
$ ipkg
$ ipkg update
$ ipkg upgrade
```

## bash

The default shell installed on the Synology NAS is "ASH" and here we need [bash](http://en.wikipedia.org/wiki/Bash_%28Unix_shell%29).

```console
$ ipkg update
$ ipkg install bash
```

Now you have to create a symbolic link.

```console
$ ln -s /opt/bin/bash /usr/syno/bin/bash
```

## coreutils

[coreutils](http://en.wikipedia.org/wiki/GNU_Core_Utilities) is a package containing many of the basic tools necessary for the script.

```console
$ ipkg update
$ ipkg install coreutils
```

Now you have to create a symbolic link to md5sum :

```console
$ ln -s /opt/bin/coreutils-md5sum /usr/syno/bin/md5sum
```

If you want to use sha1sum :

```console
$ ln -s /opt/bin/coreutils-sha1sum /usr/syno/bin/sha1sum
```

## sqlite

This operation is optional if you have at least SQLite >= 3.8.<br />
You can check the current version by typing `sqlite3 --version`.

* SQLite version on Synology DSM 6 (build 7135) is **3.8.10.2** (`/usr/syno/bin/sqlite3`).
* SQLite version via ipkg is **3.8.1** (`/opt/bin/sqlite3`).

```console
$ ipkg update
$ ipkg install sqlite
```

Now you have to create a symbolic link to md5sum.

```console
$ ln -s /opt/bin/sqlite3 /usr/syno/bin/sqlite3
```

## nail

nail is a command line email client. This means it can send emails via an email server, you need to have an email server for nail to use, e.g. could be your own hosted email server, or any email account such as yahoo, gmail, and millions of others.

```console
$ ipkg update
$ ipkg install nail
```

Here is an example to configure it with your gmail account.<br />
Open the nail config `/opt/etc/nail.rc` file with your favorite editor and add/edit the following parameters.

```console
set smtp-use-starttls
set ssl-verify=ignore
set smtp=smtp://smtp.gmail.com:587
set from=address@gmail.com
set smtp-auth=login
set smtp-auth-user=address@gmail.com
set smtp-auth-password=yourpassword
```

Now for the script, you have to create a symbolic link.

```console
$ ln -s /opt/bin/nail /usr/syno/bin/mail
```

## wget

This operation is optional if you have at least Wget >= 1.12.<br />
You can check the current version by typing `wget --version`.

* Wget version on Synology DSM 5 is **1.10.1** (`/usr/syno/bin/wget`).
* Wget version on Synology DSM 6 (build 7135) is **1.15** (`/usr/syno/bin/wget`).
* Wget version via ipkg is **1.12** (`/opt/bin/wget`).

```console
$ ipkg update
$ ipkg install wget-ssl
```

Now you have to create a symbolic link.

```console
$ mv /usr/syno/bin/wget /usr/syno/bin/wget.old
$ ln -s /opt/bin/wget /usr/syno/bin/wget
```

## crontab

```console
$ vi /etc/crontab
```

```console
0  4  *  *  *  root    cd /etc/init.d/ && bash ftpgrab /tmp/seedbox/ >/dev/null 2>&1
```

Then update crontab :

```console
$ /usr/syno/etc.defaults/rc.d/S04crond.sh stop
$ /usr/syno/etc.defaults/rc.d/S04crond.sh start
```

OR

```console
$ synoservice -restart crond
```

## sudo

If you want to launch FTPGrab as sudoer you have to install sudo from ipkg :

```console
$ ipkg install sudo
```

If you get the following error when running as sudo :

```
$ sudo echo $(/usr/bin/id -run)
sudo: unable to dlopen /opt/libexec/sudoers.so: (null)
sudo: fatal error, unable to load plugins
```

There is maybe a dependency issue not available in `/usr/lib32`.<br />
You have to install the binutils and check the missing dependencies on `sudoers.so` :

```
$ ipkg install binutils
$ objdump -x /opt/libexec/sudoers.so | grep NEEDED
  NEEDED               libcrypt.so.1
  NEEDED               libdl.so.2
  NEEDED               libz.so.1
  NEEDED               libc.so.6
```

Then check if these dependencies are available in `/usr/lib32`.<br />
In my test case on DSM 6, the `libz.so.1` was not present :

```
$ locate libz.so.1
/usr/lib/libz.so.1
/usr/lib/libz.so.1.2.8
```

So i had to create a symlink in `/usr/lib32` :

```
$ ln -s /usr/lib/libz.so.1 /usr/lib32/libz.so.1
$ sudo echo $(/usr/bin/id -run)
root
```
