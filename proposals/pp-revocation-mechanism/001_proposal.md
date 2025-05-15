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

summary here

## Motivation

motivation here

## Coordination/Correspondence

- Bi-weekly updates on progress and blockers
- Monthly community calls for feedback and discussion
- GitHub discussions for technical proposals
- Regular documentation updates

## Prior Art

Write related works with explanations and some context.

- Status List
- Camenisch–Lysyanskaya (CL) accumulator schemes.
- Idemix / U-Prove
- Revocation bitmap scheme (Hyperledger Indy AnonCreds)
- etc....

## Unresolved Questions

- Performance vs. privacy: Which accumulator variant balances proof size and verification cost?
- Standards alignment: How to map the chosen design to existing DIF & W3C data models?
- Key management: Issuer-side key rotation without breaking accumulator state.

## Outputs

1. Comparative Analysis Report (PDF/Markdown): Detailed survey of revocation approaches, with privacy and performance metrics.
2. Reference Implementation: A modular library (TypeScript/Rust) demonstrating the selected privacy-preserving revocation protocol.
3. Demo Application: Simple verifier/holder demo showing end-to-end issuance, presentation, and revocation checks.
4. (Optional) Spec Proposal: A draft specification for a privacy-preserving revocation extension, to be completed if time and community consensus allow.
