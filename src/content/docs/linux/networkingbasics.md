---
title: Networking basics
---

```bash
ip a                               # Show IP addresses
ip link                            # Show network interfaces
ping -c 4 google.com               # Test connectivity (4 packets)
curl -I https://example.com        # Test web connectivity, show headers
wget https://example.com/foodmenu.txt      # Download file
ss -tuln                           # Show listening ports (replaces netstat)
```
