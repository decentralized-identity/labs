# Privacy-Preserving Revocation

## Metadata

- Proposal Author(s): [Kai Otsuki](https://github.com/Dtitkaio) and [Ken Watanabe](https://github.com/dorakemon)
- Lead(s): [Kai Otsuki](https://www.linkedin.com/in/kai-otsuki-9475a8303/)
- Status: [Proposed]()
- Since: May 20, 2025
- Expected End Date: August 31, 2025
- Tags: verifiable-credentials, revocation, privacy, cryptography
- Supersedes: N/A
- Version: 0.0.1

---

[//]: # "Do not fill out below. To be filled out by chairs post-approval"

- Start Date:
- URI:

## Summary

This project delivers a comparative study and reference implementation of **privacy-preserving revocation** for W3C Verifiable Credentials (VC).  
We will (1) catalogue real-world revocation scenarios, (2) benchmark leading cryptographic mechanisms (status lists, dynamic accumulators, zk-SNARK proofs, short-term credentials, etc.), and (3) provide an open-source prototype that can check computational costs aspect of Issuer and Holder and Verifier.

## Motivation

Revocation is essential when credentials are mis-issued, expired, compromised, or voluntarily withdrawn.  
Existing VC deployments mostly expose _who_ asked about revocation and _when_, creating new correlation vectors. While privacy-friendly schemes exist in the literature, there is **no consolidated guidance** on:

- which scheme fits which threat model,
- how large proofs grow on constrained devices,
- how implementation effort compares across stacks, and
- how to map cryptographic objects into the W3C/DIF data models.

Bridging this gap will accelerate trustworthy, user-respectful deployments in e-ID, university certificates, supply-chain certificates, and beyond.

## Coordination / Correspondence

- **Bi-weekly** GitHub project board updates on metrics & blockers
- **Monthly** Technical discussion will be in [TBD]
- Email correspondence may be sent to [TBD]

## Prior Art

| Category                   | Representative Work               |
| -------------------------- | --------------------------------- |
| **Status List**            | W3C StatusList2021 / 2024 draft   |
| **Bitmap Scheme**          |                                   |
| **Short-Term Credentials** |                                   |
| **CL Accumulators**        | Camenisch–Lysyanskaya 2002 (CL02) |
| **zk-SNARK Approaches**    | “Revocation via zk-SNARKS”        |

## Unresolved Questions

1. **Performance vs Privacy** Which accumulator variant minimises _both_ proof size and verifier CPU?
2. **Standards Alignment** How should evidence (e.g., non-membership proofs) be encoded in W3CVCDM or SD-JWT-VC?

## Outputs

| #     | Deliverable                                    | Description & Success Criteria                                                                                     |
| ----- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **1** | _Comparative Analysis Report_ (PDF & Markdown) | Survey of schemes, threat models, computational costs and data sizes                                               |
| **2** | _Reference Library_ (TypeScript + Rust crates) | Covers at least StatusList, CL accumulator, and one zk-SNARK path.                                                 |
| **3** | _Demo App_                                     | Browser + CLI demo ― issuer dashboard, holder wallet, verifier widget ― showcasing revocation without correlation. |

## Differentiation from Existing Work

**Primary Contribution**: This work provides the first Systematization of Knowledge (SoK) for privacy-preserving revocation in Verifiable Credentials. To our knowledge, no comprehensive academic survey systematically organizes revocation scenarios and compares cryptographic mechanisms within the VC context.

### Our SoK Contribution

1. **Systematic Taxonomy**: First comprehensive organization of VC revocation scenarios and threat models
2. **Comparative Analysis**: Rigorous multi-dimensional evaluation of cryptographic mechanisms (privacy, performance, complexity)
3. **Open-Source Systematization**: Unlike typical blog posts, we provide systematic academic analysis **with accessible OSS implementations** that anyone can use and build upon. **Where needed, we also provide reference implementations for specific revocation mechanisms.**
