---
title: Actual Budget
---

Setting this service up turned out to be an asbolute pain. Server-side works just fine, however with the client side it posed a major issue across ALL browers: "SharedArrayBuffer" - browsers only allow under specific security restrictions. Cleared the cache and slapped on a header configured through caddy reverse proxy, they both didn't work. My hope was starting to wane and frustration increased. Then a lightbulb went off in my head: What if I SSH into the terminal directly?

The idea was to 'trick' the service thinking it's not a remote access. That worked. If I could SSH'ed into the terminal and all works fine then... Why not simply make an alias (via bash scripting) for that SSH command so it opens up everytime when I need to access my personal finances? It worked perfectly, and so I'd make a documentation to help other homelabbers out there. Please enjoy:

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

NOTE: You can change 'actual-finances' to whatever you'd like it to call. I went with that alias because 1. Actual Budget is a service, 2. it's my finances. Call it two birds with one stone kinda thing.

6. Reload your '.bashsrc' file (pretty important otherwise your new alias hasn't been updated):
```bash
source ~/.bashsrc
```

7. Now try your new alias-command:
```bash
actual-finances
```


