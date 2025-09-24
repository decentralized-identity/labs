+++
date = '2025-09-24T09:48:23-07:00'
draft = false
title = 'DIF Labs Beta Cohort 2: Show & Tell Recap 🚀'
summary = '3 Projects of the DIF Labs Beta Cohort 2 Showcase Their Work For The Last 3 Months'
tags = ["show and tell", "beta-cohort", "beta-cohort-2"]
banner = "/imgs/matrix_01.jpg"
toc = false
+++

🔥 The Beta Cohort 2 DIF Labs: Show & Tell absolutely *killed it*! We are very proud of them. With this round now closed, here’s a recap of the groundbreaking work presented.

Over the past three months (June 24 – Sept 23, 2025), three projects refined and pushed forward bold proposals in decentralized identity. The Show & Tell was the culmination—live demos, thoughtful storytelling, and demonstrable progress.

🎥 **Watch the recording:**  
[Zoom Recording of DIF Labs Beta Cohort 2 Show & Tell](https://us02web.zoom.us/rec/play/IkoCkNXBBgvXuCXDII0QG0umnpYRp_JSm3BIawJ-W_RVA8q3iSgjeiLsAc8NAqw4K8CiVRlLn9EGkz-l.tu5-0zRnuppgQ6TU?eagerLoadZvaPages=sidemenu.billing.plan_management&accessLevel=meeting&canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fus02web.zoom.us%2Frec%2Fshare%2FB1swyfs8HdZA8US3tz6WxXtNtBc-MV4uHl-apIkcgEKjvW9pAVQ4nLhcRgB9P2Rz.-N7NrZjOg6GtQ3eI)

---

## Featured Projects

| Project | Description & Highlights | Leads | Tags | Timeline |
|---------|--------------------------|-------|------|----------|
| **Anonymous Multi-Signature Verifiable Credentials (ZKMPA)** | Protocol for issuing Verifiable Credentials with **m-of-n multi-party approval**, while keeping individual signers anonymous. Built using **Semaphore**, it combines cryptographic membership proofs, nullifiers to prevent duplicate votes, and W3C VCDM 2.0 compatibility. Live demo illustrated a DAO issuing credentials anonymously, enabling **privacy-preserving governance**. | Seohee Park, Lukas Han | Verifiable Credentials, Multi-Signature, Semaphore, Privacy, Cryptography | May 20 – September 23, 2025 |
| **Privacy-Preserving Revocation Mechanisms** | Comparative study of revocation strategies for W3C VCs, covering **status lists, accumulators, zk-SNARK proofs, and short-term credentials**. Produced a taxonomy and a reference implementation benchmarking costs for issuers, holders, and verifiers. Strong focus on **accumulator-based methods** and collaboration with Ethereum Foundation on Merkle-tree revocation. | Kai Otsuki, Ken Watanabe | Verifiable Credentials, Revocation, Privacy, Cryptography, zk-SNARK | May 20 – September 23, 2025 |
| **Legally-Binding Proof of Personhood via QES (QVC)** | Schema that binds W3C VCs to **Qualified Electronic Signatures (QES)** under EU eIDAS regulation. QES signatures carry the same legal weight as handwritten signatures, bringing **non-repudiable legal identity** into decentralized credentials. Explored pseudonymous QES, privacy-preserving wrapping, and compliance with ETSI standards. Use cases: contracts, academic degrees, healthcare, financial agreements. | Jon Bauer, Roberto Carvajal | Verifiable Credentials, QES, Legal Framework, eIDAS, KYC | May 31 – September 23, 2025 |


## Highlights & Participation

- **Global reach:** Teams joined live from Korea, Japan, Europe, and the U.S. (with late-night calls for some).  
- **Strong polish:** Working demos, clear storytelling, and thoughtful framing of both technical and regulatory challenges.  
- **Community energy:** Mentors, chairs, and attendees actively engaged in Q&A and contributed Roses 🌹 / Buds 🌱 / Thorns 🥀 feedback.  
- **Special shoutout:** Thank you to **Seohee Park, Lukas Han, Kai Otsuki, Ken Watanabe, Jon Bauer, and Roberto Carvajal** for their outstanding work and for sharing it with the community.  

👏 We also thank everyone who attended, asked tough questions, and provided live feedback—including voices from Arlington, VA to Tokyo, from Comply.Land to Privado ID.  

---

## Feedback Framework

We used the **Roses / Buds / Thorns** model to structure feedback:  

- 🌹 **Roses:** What worked well and stood out.  
- 🌱 **Buds:** Growth opportunities and next directions.  
- 🥀 **Thorns:** Gaps, risks, or issues to address.  

Participants contributed through live discussion and sticky-note exercises on [tldraw](https://www.tldraw.com/f/gtcYqlCl03QguIHa41oYu?d=v-448.-780.5984.2956.page).  

---

## Project Feedback & Next Steps

### Anonymous Multi-Signature Verifiable Credentials (ZKMPA)

**🌹 Roses**
- Impressive working demo for a lab project.  
- Strong technical use of Semaphore with nullifiers for privacy.  
- Clear DAO governance use case resonated.  

**🌱 Buds**
- Sharpen **business case** beyond DAOs (e.g., procurement approvals, committee authorizations).  
- Map roles and visibility—issuer, voter, auditor, verifier—what each sees.  
- Consider ISO DAO standards as contribution path.  

**🥀 Thorns**
- Risk of ambiguity in approval semantics (threshold vs. weighted votes).  
- Coercion / vote-selling mitigation not yet addressed.  

**Potential Next Steps**
- Publish **roles/visibility matrix** with sequence diagrams.  
- Ship a **configurable reference policy pack** for approvals.  
- Add a second **non-DAO demo** to test adoption breadth.  

---

### Privacy-Preserving Revocation Mechanisms

**🌹 Roses**
- First real **taxonomy + benchmark study** of revocation methods.  
- Solid reference implementation with comparative performance data.  
- Engagement with Ethereum Foundation on Merkle-tree revocation.  

**🌱 Buds**
- Expand taxonomy to **short-term credentials** and hybrid strategies.  
- Analyze **frequent update costs** for high-churn scenarios.  
- Produce deployment recipes (offline verification, constrained devices).  

**🥀 Thorns**
- Practical/regulatory **revocation needs** (e.g., police needing real-time checks) not yet integrated.  
- Regional cryptographic constraints (e.g., EU bans on BBS+).  

**Potential Next Steps**
- Publish a **decision tree** to select revocation methods by use case.  
- Release **benchmark artifacts** with reproducible configs.  
- Add **issuer-only and verifier-only** revocation flows to analysis.  

### Legally-Binding Proof of Personhood via QES (QVC)

**🌹 Roses**
- Clear articulation of gap: VCs lack legal non-repudiation, QES provides it.  
- Solid “binding credential” model preserves original VC.  
- Real-world doc-signing use case anchored the work.  

**🌱 Buds**
- Align schema explicitly with **ETSI standards** (TS 119 472-1, 479-3, EN 319 102).  
- Explore **pseudonymous QES flows** with controlled unmasking.  
- Broaden examples: degrees, healthcare, finance.  

**🥀 Thorns**
- Some assumptions about QES identity disclosure corrected during Q&A.  
- Standards alignment needed for portability and adoption.  
- Terminology clarification: “Advanced vs Qualified” instead of “high assurance.”  

**Potential Next Steps**
- Produce an **ETSI conformance matrix** for QVC flows.  
- Draft **pseudonymous QES demo** with identity escrow.  
- Publish reference **validation flow** (VC verify → QES artifact → eIDAS trust chain).  


## Thank You 🙏

Special thanks to our **cohort chairs** (Ankur Banerjee, Daniel Thompson-Yvetot), our [mentors directory](/directory), and leaders Kim Hamilton Duffy and Juan Caballero for enabling this work under the **Decentralized Identity Foundation**.  

And above all: thank you to the **projects themselves** for showing what’s possible when passion, open-source collaboration, and decentralized identity meet.  

👉 Explore more at [labs.identity.foundation](https://labs.identity.foundation)  
👉 Share your thoughts: [Feedback Form](https://forms.gle/HZ9ehuLTikKD5Mmy5)  

---

🚀 With Beta Cohort 2 wrapped, it’s clear: the future of decentralized identity is being built—openly, rigorously, and with community at the center.  
