---
title: Run as service on Debian based distro
permalink: /doc/linux-service/
sidebar: doc
---
{% include vars.html %}

# Using systemd

{% include callout.html type="info" text="Make sure to follow the instructions to [install from binary](/doc/install-from-binary/) before." %}

Run the below command in a terminal:

```
sudo vim /etc/systemd/system/ftpgrab.service
```

Copy the sample [ftpgrab.service](https://github.com/{{ site.github.user }}/{{ site.github.repo }}/tree/master/.res/systemd/ftpgrab.service).

Change the user, group and other required startup values following your needs.

Enable and start FTPGrab at boot:

```
sudo systemctl enable ftpgrab
sudo systemctl start ftpgrab
```

To view logs:

```
journalctl -fu ftpgrab.service
```
