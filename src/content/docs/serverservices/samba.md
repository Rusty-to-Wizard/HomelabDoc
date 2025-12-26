---
title: Samba
---

Access from other devices
```bash
Windows: \\192.168.1.x\Media
Mac: smb://192.168.1.x/Media
Linux: smb://192.168.1.x/Media
```
---

Manage Samba
```bash
# Edit Samba config
sudo nvim /etc/samba/smb.conf

# Restart Samba after config changes (IMPORTANT!!)
sudo systemctl restart smbd

# Set/change Samba password
sudo smbpasswd -a yourusername

# Check Samba status
sudo systemctl status smbd
```


