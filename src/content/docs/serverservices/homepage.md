---
title: Homepage
---


### Overview

Setting this one up was an absolute dream, and was able to 'beautify' my homepage. You can customise to what services you'd like listed on the homepage along with links. It's really neat.


### Get it up and running:

1. Create config directories. One is for image background and one is for icon display. Download a background image and chuck it in the `images` folder. Leave icon for now

```bash
mkdir -p /root/homepage/public/images
mkdir -p /root/homepage/icons
```

2. Run the container:

```bash 
docker run -d \
  --name homepage \
  --restart unless-stopped \
  -p 3000:3000 \
  -e HOMEPAGE_ALLOWED_HOSTS=homepage.home \
  -v /root/homepage:/app/config \
  -v /root/homepage/public/images:/app/public/images \
  ghcr.io/gethomepage/homepage:latest
```

3. Add to Caddy (`/etc/caddy/Caddyfile`). Replace `x` with your chosen number.
```bash
homepage.home {
    reverse.proxy 192.168.1.x:3000
}
```

4. Add DNS record to PiHole: `homepage.home - 192.168.1.x`, `x` being Caddy's IP address. 

5. Reload Caddy by going into Caddy's terminal: `systemctl reload caddy`

### Configuring the fun stuff

Your config files live in `/root/homepage/`:
- `services.yaml`, which shows your services on the webpage.
- `settings.yaml`, for background & theming.
- `widgets.yaml`, for widgets but personally haven't touched this one yet myself
- `bookmarks.yaml`, shows you default bookmarks which you can edit it yourself.


Basic example settings.yaml:

```bash
providers:
  homepage:
    allowedHosts:
      - homepage.home
      - 192.168.1.x (replace x with your own)
background: /images/backgroundimg.png
cardblur: md
theme: dark
color: slate
```

Basic example services.yaml:

```bash
- My Homelab:
    - Proxmox:
        href: http://proxmox.home
        description: Hypervisor Type 1
        icon: proxmox.png
    
    - Pi-hole: 
        href: http://pi-hole.home
        description: DNS & Ad-Blocking
        icon: pi-hole.png
```

Basic example bookmarks.yaml:

```bash
- Documentation:
    - Bonelab:
        - abbr: DOCS
        href: https://bonelab.sh

- Social:
    - Reddit
        - RE
        - href: https://reddit.com
```


### Please, PLEASE remember, yaml is fussy with its indentation. It has resulted me in banging my head only to realise it's all about the intentation. Please remember that!
