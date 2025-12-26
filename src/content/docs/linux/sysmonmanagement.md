---
title: System Info/Monitor & Management
---

System Information & Management

```bash
uname -a                           # System info (kernel version, etc)
df -h                              # Disk space usage (-human readable)
du -sh folder/                     # Size of folder
free -h                            # RAM usage
uptime                             # How long system has been running
whoami                             # Current user
lsblk                              # List block devices (drives)
ping google.com                    # Test network connectivity
btop                               # Fantastic all-rounder system monitoring tool
```

--- 

System Management

```bash
# Service management
systemctl status service_name      # Check if service is running
sudo systemctl start service_name  # Start service now
sudo systemctl stop service_name   # Stop service now
sudo systemctl restart service_name # Restart service
sudo systemctl enable service_name # Start service on boot
sudo systemctl disable service_name # Don't start on boot

# System-wide
systemctl list-units               # All active units
systemctl list-units --failed      # See what's broken
systemd-analyze                    # Boot time analysis
systemd-analyze blame              # What's slowing boot?
```
---

I have had to use systemctl start/stop/enable/disable services a few times on my server when things were not just working. It turned out there was multiple processes running at once - thankfully an easy fix by killing all the processes! 

