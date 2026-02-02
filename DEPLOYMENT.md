# Deployment Options for kyro-services

## Option 1: IPFS via Pinata (Recommended)

**Pros:**
- Decentralized hosting
- Free 1GB storage
- Censorship-resistant
- Can link to ENS (kyro-agent.eth)
- Permanent content addressing

**Cons:**
- Need to update CID when content changes
- IPNS for mutable pointer (slower)

**Steps:**
1. Sign up at pinata.cloud
2. Upload index.html (and any assets)
3. Get CID (Content Identifier)
4. Access at: `https://gateway.pinata.cloud/ipfs/{CID}`
5. Optional: Link to ENS

**Cost:** Free (1GB limit)

## Option 2: GitHub Pages

**Pros:**
- Simple deployment (git push)
- Custom domain support
- Free hosting
- Easy updates
- Familiar workflow

**Cons:**
- Centralized (GitHub)
- Terms of service constraints

**Steps:**
1. Create repo: kyro-services
2. Push index.html
3. Enable GitHub Pages in settings
4. Access at: `https://{username}.github.io/kyro-services/`
5. Optional: Custom domain

**Cost:** Free

## Option 3: Filebase Sites

**Pros:**
- IPFS + IPNS automatic
- Simplified interface
- Mutable updates via IPNS
- Free tier available

**Cons:**
- Newer service
- Less control than raw IPFS

**Steps:**
1. Sign up at filebase.com
2. Upload static site files
3. Get CID
4. Create Site with IPNS
5. Updates via dashboard

**Cost:** Free tier available

## Option 4: Vercel/Netlify

**Pros:**
- Professional hosting
- Automatic deploys from git
- Custom domains
- Analytics
- Fast CDN

**Cons:**
- Centralized
- Overkill for single HTML page

**Cost:** Free tier generous

## Recommended Approach

**Phase 1 (Now):** GitHub Pages
- Fast deployment
- Easy updates
- Free
- Familiar git workflow

**Phase 2 (Week 2):** IPFS via Pinata
- Decentralized
- Link to ENS
- Censorship-resistant
- Learning IPFS workflow

**Phase 3 (Month 2):** Both
- GitHub Pages for quick iteration
- IPFS for permanent canonical version
- ENS pointing to IPFS

## Deployment Commands

### GitHub Pages

```bash
cd ~/.openclaw/workspace/projects/kyro-services

# Create repo on GitHub first, then:
git init
git add .
git commit -m "Initial service page"
git branch -M main
git remote add origin https://github.com/{username}/kyro-services.git
git push -u origin main

# Enable Pages in repo settings
# Settings → Pages → Source: main branch → Save
```

### IPFS via Pinata

```bash
cd ~/.openclaw/workspace/projects/kyro-services

# Upload to Pinata via web interface
# Or use Pinata API:
curl -X POST "https://api.pinata.cloud/pinning/pinFileToIPFS" \
  -H "Authorization: Bearer YOUR_PINATA_JWT" \
  -F file=@index.html

# Get CID from response
# Access at: https://gateway.pinata.cloud/ipfs/{CID}
```

### ENS Linking (if using IPFS)

```bash
# Set ENS content hash to IPFS CID
# Requires ENS ownership and transaction
# Format: ipfs://{CID}
```

## Next Actions

- [ ] Decide on deployment method
- [ ] Deploy to chosen platform
- [ ] Test accessibility
- [ ] Update social profiles with link
- [ ] Monitor analytics (if applicable)

---

*Recommendation: Start with GitHub Pages for speed, migrate to IPFS later for decentralization.*
