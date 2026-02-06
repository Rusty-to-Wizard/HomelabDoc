---
title: Actual Budget
---

Setting this service up turned out to be an absolute pain. Server-side works just fine, however with the client side it posed a major issue across ALL browers: "SharedArrayBuffer" - browsers only allow under specific security restrictions. Cleared the cache and slapped on a header configured through caddy reverse proxy, they both didn't work. My hope was starting to wane and frustration increased. Then a lightbulb went off in my head: What if I SSH into the terminal directly?

The idea was to 'trick' the service thinking it's not a remote access. That worked. If I could SSH'd into the terminal and all works fine then... Why not simply make an alias (via bash scripting) for that SSH command so it opens up everytime when I need to access my personal finances? It worked perfectly, and so I'd make a documentation to help other homelabbers out there. Please enjoy:

#### IMPORTANT: Follow the instructions below on your LOCAL computer, that is, not your SERVER!

1. Create the script:
```bash
nvim ~/start-actual-tunnel.sh
```

2. Paste the script below in and save it:

```bash
#!/bin/bash
# Check if tunnel is already running
if pgrep -f "ssh.*5006:localhost:5006" > /dev/null; then
    echo "Tunnel already running!"
    echo "Access Actual Budget at: http://localhost:5006"
else
    echo "Starting Actual Budget tunnel in background..."
    ssh -f -N -L 5006:localhost:5006 homelab@192.168.1.40
    echo "Tunnel started!"
    echo "Access Actual Budget at: http://localhost:5006"
fi
```
PLEASE NOTE: Change your IP & PORTS to your specification!

3. Make the file executable:
```bash
chmod +x ~/start-actual-tunnel.sh
```

4. Type the command below and test it. It will spit out a localhost link on the terminal - click on it and it should work:
```bash
~/start-actual-tunnel.sh
```

5. Create an easy alias:
```bash
echo "alias actual-finances='~/start-actual-tunnel.sh'" >> ~/.bashsrc
```

NOTE: You can change 'actual-finances' to whatever you'd like it to call. I went with that alias because 1. Actual Budget is a service, 2. it's my finances. Call it two birds with one stone kinda thing. Swap out `bashsrc` if you're using fish shell, or any other shell instead of bash.

6. Reload your '.bashrc' file (pretty important otherwise your new alias hasn't been updated):
```bash
source ~/.bashrc
```

7. Now try your new alias-command:
```bash
actual-finances
```

Anytime you need to kill the tunnel:

```bash
pkill -f "ssh.*5006:localhost:5006"
```

PLEASE NOTE: You need to modify the port to your port.

Accessing Actual Budget is easier than you think. Simply open up your terminal and type in `actual-finances`. It will print out a `http://localhost:assignedportnumber`. Click on that, and you're in!

What I've learnt:
1. Browser security policies and SharedArrayBuffer restrictions are an absolute pain to deal with
2. SSH port forwarding and tunnel management
3. Bash scripting for automation
4. Creating persistent aliases
5. Instead of fighting with the technology, figure out a workaround to it - sometimes the best solution comes from workarounds. 
