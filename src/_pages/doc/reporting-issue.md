---
title: Reporting an issue
permalink: /doc/reporting-issue/
sidebar: doc
---
{% include vars.html %}

First,

* Read the [Troubleshooting](/doc/troubleshooting/) page.
* Search for [existing issues]({{ var_repo_url }}/issues).
* Reproduce the problem with `DEBUG=1` in the config file.

Then create a new issue based on this template :

```
### Steps to reproduce this issue

1.
2.
3.

### Expected Behaviour
Tell me what should happen

#### Actual Behaviour
Tell me what happens instead

#### Configuration

**Operating system and platform (ex.Debian 8 64bits)** :

**ftpgrab version (ex. 3.0)** :

**wget version (ex. 1.16)** :

**curl version (ex. 7.38.0)** :

**md5sum / sha1sum version (ex. 8.23)** :

**sqlite3 version (ex. 3.8.7.1)** :
```

Attach your log file located in `/var/log/ftpgrab` with a drag and drop on the issue.
