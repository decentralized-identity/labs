# IdentiKey Recryption

## Advancing Decentralized Identity through Recryption-Enhanced Personal Data Sharing, Capability Tokens, and Agentic Identity

## Metadata
- Proposal Author(s): [Duke Jones](https://identikey.io)
  1. Dan Gray
  2. Josh Livingston
  3. Day Waterbury
- Chair(s): [](), [](), ...
- Status: [Proposed]()
- Since: May 30, 2025
- Tags: recryption, identity, capability tokens, agentic identity
- Supersedes: <>
- Version: <>

[//]: # (Do not fill out below. To be filled out by chairs post-approval)
- Start Date: <date>
- URI: <uri>

## Summary 

This project aims to enhance decentralized identity ecosystems by leveraging an advanced recryption system to enable fine-grained, privacy-preserving sharing of identity attributes and establish a foundation for verifiable AI agent identity and action delegation. We will develop specifications and methodologies for capability tokens integrated with recryption, allowing secure, revocable access to encrypted identity data and defining auditable operational parameters for AI agents. This work directly advances applied cryptography for robust and user-centric identity solutions.

## Motivation

The promise of decentralized identity is often hindered by the complexities of securely managing and selectively disclosing personal data, and the emerging field of AI requires robust mechanisms for establishing agent identity and managing their permissions. Current solutions for private data sharing either rely on trusted intermediaries, posing privacy risks, or place undue burdens on users to manage their own infrastructure. Furthermore, as AI agents become more autonomous, a clear framework for their identity, capabilities, and auditability is crucial for trust and accountability.

### Problem and Approach:

Our approach centers on extending a quantum-resistant recryption proxy system (currently being developed) to address these challenges. Recryption allows ciphertexts to be transformed from one public key to another without the proxy ever accessing the plaintext, enabling secure, delegable, and revocable data sharing. For this project, we will:

1. **Develop an Identity Attribute Sharing Framework:** Design a system where identity attributes are encrypted and stored in the cloud. Using recryption, we will create a method to vend specific attributes to specific entities (identified by their public keys). This involves specifying how Access Control Lists (ACLs) will be managed on the recryption proxy.
2. **Specify Recryption-Integrated Capability Tokens:** Create a detailed specification for capability tokens that embed or reference recryption keys. These tokens will grant the recryption proxy the authority to re-encrypt specific ciphertext attributes for designated recipients, enabling fine-grained, revocable access to identity information. The specification will include mechanisms for transitive rights and rights attenuation.

This project builds upon foundational work in recryption, applying it directly to critical challenges in decentralized identity and the governance of AI agents.


## Coordination/Correspondence

Bay-Area in-person; Zoom; etc. 
Issues on the repo.
Not sure what else to put here; email me if you have questions.

## Prior art

After learning of the technique, a year later I was trying to solve the access control problem for identity attributes; in Holochain, a distributed system, it required the nodes to be online to synchronize their data with any new members coming online. In real life, we can't rely on nodes being online. Recryption seemed like such an obvious fit for this problem. I was sure that someone else must be working on this. There has been a lot of research on the subject, but TL;DR I haven't found anything production-ready using these techniques for this use case.

In 2005, AFGH already described the problem well, and in detail, for a secure filesystem:

> "A secure file system is a natural application of proxy re-encryption because the system often assumes a model of untrusted storage. A number of distributed file systems build confidential storage out of untrusted components by using cryptographic storage. Confidentiality is obtained by encrypting the contents of stored files. These encrypted files can then be stored on untrusted file servers. The server operators can distribute encrypted files without having access to the plaintext files themselves. In a single-user cryptographic file system, access control is straightforward. The user creates all the keys protecting content. Thus, there is no key distribution problem.... Other systems...use a trusted access control server to distribute keys. The access control server model requires a great deal of trust in the server operator. Should the operator prove unworthy of this trust, he or she could abuse the server’s key material to decrypt any data stored on the system. Furthermore, even if the access control server operator is trustworthy, placing so much critical key data in a single location makes for an inviting target. In contrast, our system makes use of a semi-trusted access control server. We propose a significant security improvement to the access control in cryptographic storage, using proxy cryptography to reduce the amount of trust in the access control server."

They even implemented their unidirectional proxy re-encryption into a secure distributed read-only file system (SFSRO), but it was an academic exercise and AFAIK was never deployed in a production context. It was also from another era: at the bottom of the paper, the authors say that access to the CVS source code repo is available by emailing them. AFGH SFSRO

One relatively recent (last 10 years) project taking proxy re-encryption to the public is NuCypher, which then merged with Threshold Network. Their Umbral PRE system combines PRE with threshold encryption. The library is good, but the goals of Threshold Network are more around cryptocurrency bridging, and less geared towards chain-agnostic identity sharing with flexible access control. 

In the initial phase of the project we plan to evaluate lattice-based cryptography as a quantum resistant methodology for implementing recryption, compared to utilizing bilinear pairing, and possibly leveraging an existing PRE library. Although it's not quantum resistant, using the Umbral library isn't out of the question, as long as the GPL doesn't mess too badly with our desired MIT/Apache free license.

Duality has published some great work recently on homomorphic, lattice-based PRE. They are using their system for sharing the results of computations securely and doing homomorphic operations on encrypted results. Their implementation is publicly available as part of the OpenFHE library. They suggest that adding threshold cryptography to this method should also be possible. Duality Blog ePrint 2024/681 Duality Paper

There's some good work coming out of Shandong, China this year on the subject as well. ePrint 2025/656

Our focus, though, is on implementing something people can use, so we'd like to leverage as much prior theoretical work and tested libs as possible, to be able to get out to production with something that also can be duplicated from spec for wide applicability, auditability, and interoperability.

## Unresolved Questions

We need to figure out if we can implement a quantum safe algorithm (e.g. use lattice-based cryptography) for recryption, or if we need to use bilinear pairing. I would like to figure out if we can have a more efficient way to share multiple identity attributes in a fine-grained way (currently the plan relies on recrypting each attribute separately, requiring a recryption key for each attribute).

## Outputs


1. **Specification Document for Recryption-Enhanced Capability Tokens:**
    - Detailed format for capability tokens incorporating recryption permissions.
    - Mechanisms for defining and managing transitive rights and rights attenuation.
    - API design for ACL management on the recryption proxy, driven by these capability tokens.
2. **Specification Document for Identity and Attestation:**
    - Protocol for agent identity, including registration, ownership, and operational parameters for autonomous agents.
    - Standardized attestation format for logging and auditing agent actions.
3. **Methodology for Secure Identity Attribute Sharing:**
    - Guidelines for encrypting and storing identity attributes.
    - Procedures for using recryption-enhanced capability tokens to vend specific attributes.
    - Design for a system to view access permissions (which users/agents have access to specific attributes, and which attributes a user/agent has access to).
4. **Proof-of-Concept (PoC) Demonstrator:**
    - A limited prototype showcasing the issuance of a capability token and its use to authorize the recryption proxy to share a mock encrypted identity attribute.
5. **Open Source Contributions:** All specifications and any PoC code will be made available under a permissive open-source license (e.g., MIT/Apache).

**Timeline (2–3 Months Target):**

- **Month 1: Foundational Specifications & Research**
    
    - **Weeks 1-2:**
        - Finalize detailed requirements for identity attribute sharing using recryption.
        - Research existing identity attribute schemas and best practices for VCs etc. relevant to agentic identity.
        - Begin drafting the core structure of the Recryption-Enhanced Capability Token specification.
    - **Weeks 3-4:**
        - Develop the initial specification for Agentic Identity, including registration and ownership models.
        - Define the core elements of the attestation format for AI agent actions.
        - Refine the capability token specification, focusing on embedding recryption permissions.
- **Month 2: Detailed Design & Integration Concepts**
    
    - **Weeks 5-6:**
        - Complete the specification for capability tokens, including transitive rights, rights attenuation, and interaction with recryption proxy ACLs.
        - Flesh out the methodology for secure identity attribute sharing, detailing encryption, storage, and vending processes.
        - Design the system for viewing and managing access permissions.
    - **Weeks 7-8:**
        - Finalize the Agentic Identity protocol and the agent action attestation format.
        - Outline integration points with the ongoing recryption proxy development.
        - Begin work on PoC design for attribute sharing using mock components if primary specifications are on track.
- **Month 3: Refinement, PoC Development & Documentation**
    
    - **Weeks 9-10:**
        - Develop and test the prototype for attribute sharing using capability tokens and mock recryption.
        - Refine all specification documents based on internal reviews and PoC learnings (if applicable).
    - **Weeks 11-12:**
        - Complete comprehensive documentation for all deliverables.
        - Prepare materials for community review and feedback.
        - Finalize open-source repositories and licensing.

This timeline estimates approximately 8-12 person-weeks of focused effort from the core team per month, distributed across the three members. The development of the core recryption proxy is considered a parallel, foundational effort that this project will define interfaces for.


### Team (Key Participants):

- **Duke Jones (Project Lead):** Full-stack developer with expertise in cryptography and applied decentralized systems. (Ensuring DIF Membership as Project Lead).
- **Dan gray:** Full-stack engineer with a strong background in cryptography and mathematics.
- **Josh Livingston:** Backend Rust engineer experienced in building robust systems.
- **Day Waterbury:** Expert in self-sovereign identity protocols and standards, project management.

This team has a proven history of collaboration and the necessary expertise in cryptography, decentralized systems, and software engineering to successfully deliver on the proposed outcomes. Our previous work on the foundational concepts of recryption provides a strong basis for this focused identity-centric project.

### Alignment with DIF Labs Focus Areas:

This project directly addresses multiple DIF Labs focus areas:

- **Applied Cryptography:** The core of our work is the advancement and practical application of proxy re-encryption (recryption) to solve critical challenges in decentralized identity. We are building on existing cryptographic primitives to create novel, usable tools.
- **Verifiable AI:** We are directly addressing this by proposing a specification for agentic identity, an attestation format for agent action audits, and a methodology for access delegation and capability management for any kind of agents.
- **Personhood Credentials:** While not exclusively focused on personhood verification, our system for secure, privacy-preserving storage and selective disclosure of encrypted identity attributes provides essential infrastructure that can support personhood credential management.
- **Content Authenticity and Assertions:** The attestation format for agent actions contributes to verifiable assertions about digital activities.

We are confident that this project will deliver valuable, maintainable, and extensible contributions to the decentralized identity ecosystem, with a clear path toward long-term maintenance and integration. We are eager to collaborate with the DIF community and leverage the mentorship and support offered by Beta Cohort 2.












