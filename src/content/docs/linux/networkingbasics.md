---
title: Networking basics
---

```bash
ip addr OR ip a                    # Show IP addresses (& shows IP addresses assigned to each interfaces)
ip link                            # Show network interfaces (i.e eth0, wlan0, lo, etc)
ip route                           # Show where the packets are going (default gateway, DHCP, CIDR notation)
ping -c 4 google.com               # Test connectivity (4 packets)
curl -I https://example.com        # Test web connectivity, show headers
wget https://example.com/file.txt  # Download file
ss -tuln                           # Show listening ports (replaces netstat)
```

### Commands learnt from troubleshooting router:

```bash

nmcli = network manager in (cli) terminal 

nmcli device status                                     # Show all interfaces & their connection states
nmcli connection show                                   # Lists all saved connection profiles
nmcli connection down/up                                # De/activates a connection
nmcli connection modify "NAME" ipv4.route-metric 200    # Sets routing priority. Higher = less preferred
nmcli connection modify "NAME" \
    ipv4.method manual \ 
    ipv4.address "192.168.1.10/24" \ 
    ipv4.gateway "192.168.1.1" # Sets static IP gateway
```
