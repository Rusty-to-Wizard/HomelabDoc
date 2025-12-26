---
title: Text manipulation & cool shortcuts!
---

Text manipulation

```bash
command | grep "filter"            # Filter output
command | less                     # Page through output
command > file.txt                 # Save output to file
command >> file.txt                # Append output to file
command1 | command2                # Pipe output of cmd1 into cmd2

# Examples
cat /var/log/pacman.log | grep installed | tail -20   # Last 20 installed packages
journalctl -b | grep error         # All errors from this boot
```
---
Cool shortcuts

```bash
Tab                                # Auto-complete (hit twice for options)
Ctrl + C                           # Cancel current command
Ctrl + D                           # Exit shell/logout
Ctrl + L                           # Clear screen
Ctrl + R                           # Search command history (life-changing!)
!!                                 # Repeat last command
sudo !!                            # Repeat last command with sudo
history                            # Show command history
alias ll='ls -lah'                 # Create command shortcut (add to ~/.bashrc)
```
