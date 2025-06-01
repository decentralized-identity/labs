# Initial Proposal

## Metadata
- Proposal Author(s): Shree Singhi, Shahriar Ebrahimi, Aayush Gupta, Aayan ,v Parisa Hassanizadeh
- Chair(s): [Aayush Gupta](Divide-By-0)
- Status: [Proposed]()
- Since: May 31, 2025
- Tags: perceptual-hashing, privacy, provenance, MP-FHE
- Supersedes:
- Version: 0.0.1
- Start Date: <!-- leave blank -->
- URI: <!-- leave blank -->

## Summary
Proteus is an open-source framework that provides incorruptible, privacy-preserving provenance for AI-generated imagery by combining *DinoHash* (an adversarially-robust perceptual hash with ≥12 % higher bit accuracy than SOTA), multi-party fully homomorphic encryption (MP-FHE) for private registry queries, and a failsafe deep-learning detector that catches synthetic images missing from the registry. One public registry, many independent computation parties, zero knowledge leakage, and provable robustness to real-world social-media transformations—all delivered under MIT license.

We have a [Proteus high-level data flow](https://proteus.photos) on an interactive Figma on our website.<!-- single diagram; replace with final image path -->

## Motivation
*Why this, why now, why DIF Labs?*  
- **Urgency**: AI image synthesis is outpacing reliable provenance; trivial screenshotting defeats watermarks, and C2PA signatures break on even minor edits.  
- **Fit with DIF**: Proteus aligns with DIF’s mission to create trustworthy, decentralized identity and data-integrity infrastructure, but adds the missing privacy layer that existing provenance specs neglect.  
- **What we want from DIF Labs**: guidance on standards alignment (C2PA, KERI, SD-JWT) and funding, or connections to web2 social media organizations.

## Problem
Current provenance schemes either (a) depend on fragile bit-exact watermarks, or (b) expose users’ queries or publishers’ registries. Both fail under common transforms (compression, crops, memes) and erode trust when either side risks surveillance or data leaks.

## Approach
1. **DinoHash** – Resilient 256-bit perceptual hash fine-tuned with adversarial training on 4 M transformed image pairs.  
2. **MP-FHE Registry** – Two non-colluding servers compute k-NN matches over encrypted hashes; no single party sees both query and registry contents.  
3. **Failsafe Detector** – Vision transformer ensemble trained on 30 + AI generators, giving 25 % higher AUROC on “unknown synthetic” images.  
4. **Open APIs & NPM package** – Drop-in JS/TS library for content creators and verifiers; Rust core for performance.  
5. **Pilot with social-media partner** – Integrate into Community Notes-style workflow to test at >1 M queries/day.

## Team
| Name | Role | Expertise |
|------|------|-----------|
| Shree Singhi | Lead Researcher | Adversarial ML, perceptual hashing |
| Shahriar Ebrahimi | Lead Cryptographer | MP-FHE, MPC protocols |
| Aayush Gupta | PM / DevOps | Deployment, funding, partnerships |
| Aayan Yadav | Detection Lead | Vision transformers, benchmarking |
| Parisa Hassanizadeh | Cryptographic Engineer | Protocol design, formal proofs |

## Outputs
- **Paper** submitted to varios Tier 1 workshops -- we described DinoHash primarily
- **MIT-licensed code** for hash model, encrypted ANN search, and detector (GitHub)  
- **NPM packages** ideally with at least one live demo and one real user

We can ideally also integrate this as a recommended part of the C2PA soft commitments spec.

## Coordination Format
Open to feedback.
- Async messages in a telegram group  
- GitHub discussions for technical proposals

## Prior art
- [C2PA 1.3](https://c2pa.org) – open provenance standard; breaks on edits  
- [Facebook PDQ](https://github.com/facebook/PDQ) – robust perceptual hash; no privacy layer  
- [Google SynthID](https://ai.googleblog.com/2023/08/synthid.html) – embedded watermark; fragile to crops/screenshots  
- [Truepic Lens](https://truepic.com) – secure capture; proprietary, no FHE  
- [PhotoDNA](https://www.microsoft.com/en-us/photodna) – perceptual hash for CSAM; closed source, no adversarial robustness  
- [OpenMined PSI-FL](https://github.com/OpenMined) – private set-intersection; related cryptographic primitives

## Unresolved Questions
1. Is perceptual hashing enough, or do you need facial detection as well?
2. Is anyone else willing to financially support this project?  
3. Minimum viable governance model for two non-colluding servers — would DIF host one?  
4. How does the DIF standard compare to other kinds (i.e. adding onto the C2PA standard)?