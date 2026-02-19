---
title: Homepage
---

Setting this one up was an absolute dream, and beautified my lovely homepage. It's well worth having it!

## Get it up and running:

1. Create config directories. One is for image background and one is for icon display:
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
```
homepage.home {
    reverse.proxy 192.168.1.x:3000
}

4. Add DNS record to PiHole: homepage.home - 192.168.1.x, x being Caddy's IP address. 

5. Reload Caddy by going into Caddy's terminal: `systemctl reload caddy`
