---
title: Logs & Troubleshooting
---

```bash
journalctl                         # All logs (overwhelming!)
journalctl -b                      # Logs from current boot
journalctl -b -1                   # Logs from previous boot
journalctl -f                      # Follow logs in real-time
journalctl -u service_name         # Logs for specific service
journalctl -xe                     # Most recent logs with explanations
journalctl --since "1 hour ago"    # Time-based filtering
journalctl --since "2024-10-01"    # Date-based filtering
journalctl -p err                  # Only errors
```

Think of journalctl as "journal central".

Unfortunately this is where I find it most intimidating just because of sheer information it throws at you. Baby steps, baby steps...
