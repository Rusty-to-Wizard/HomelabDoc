---
title: Unable to ssh into any of proxmox's LXC containers
---

#### Issue:

I wanted to migrate my old server's Actual Budget data over into the new one - onto proxmox. 
However, I could not SSH into any of proxmox LXC containers from main pc despite:
* Having run SSH on proxmox console (on the web UI)
* Correct passwords,
* Network configurations & connectivity verified (Looking right at you, DNS)
* Could SSH into my old 2010 server

#### Root cause:

The root cause was down to Ubuntu LXC template defaults within `/etc/ssh/sshd_config`:
```bash
#PermitRootLogin prohibit-password
#PasswordAuthentication yes
```

#### Easy fix:

Unhash and change `prohibit-password` to `yes`:

```bash
PermitRootLogin yes
PasswordAuthentication yes
```

NOTE: make sure you `systemctl restart sshd` after changes saved!
