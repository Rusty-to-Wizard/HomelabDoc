---
title: search, view and permissions
---

Searching & viewing files

```bash
cat file.txt                       # Display entire file
less file.txt                      # View file page-by-page (q to quit)
head file.txt                      # First 10 lines
tail file.txt                      # Last 10 lines
tail -f /var/log/somelog           # Follow log file in real-time (crucial!)
grep "search term" file.txt        # Find text in file
grep -r "search term" /path/       # Search recursively through directories
find /path -name "filename"        # Find files by name
```
---

Permissions and ownership

```bash
chmod +x script.sh                 # Make file executable
chmod 644 file.txt                 # Read/write for owner, read for others
chmod 755 script.sh                # Common for executable files
chown user:group file.txt          # Change file owner
sudo command                       # Run as root (superuser)
```

Understanding chmod numbers (it's like a whole another mini language, fun times)

- 4 = read, 2 = write, 1 = execute
- First digit = owner, second = group, third = everyone
- So 755 = owner(7=4+2+1=rwx), group(5=4+1=rx), others(5=4+1=rx)

More will be expanded on this later on - still don't fully get it myself :)

---

