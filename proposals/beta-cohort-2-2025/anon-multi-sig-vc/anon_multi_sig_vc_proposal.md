# Anonymous Multi-Signature Verifiable Credentials

## Metadata

- Proposal Author(s): [Seohee Park](https://github.com/dvlprsh) and [Lukas Han](https://github.com/lukasjhan)
- Status: [Proposed]()
- Since: May 20, 2025
- Tags: verifiable-credentials, multi-sig, semaphore, privacy, cryptography
- Supersedes: N/A
- Version: 0.0.1

[//]: # "Do not fill out below. To be filled out by chairs post-approval"

- Start Date: <date>
- URI: <uri>

## Summary

This proposal outlines a protocol for Verifiable Credential (VC) issuance that requires approval from multiple members within an issuing organization (i.e., `m-of-n` multi-signature issuance),
while keeping the identities of the individual signers anonymous to the credential holder and verifier.
The goal is to enable decentralized governance for VC issuance in organizations such as DAOs or government agencies,
using Semaphore to cryptographically prove sufficient participation without revealing the identities of participating members.

## Motivation

General Verifiable Credential (VC) issuance models assume that a single entity signs and issues credentials. However, many decentralized or collective organizations (such as DAOs, government agencies, or multi-stakeholder boards) require collective decision-making. Moreover, these entities may wish to maintain internal confidentiality while still issuing externally verifiable credentials.

While threshold signature schemes (e.g., BLS) exist, they often lack native anonymity and are incompatible with existing JOSE-based standards like SD-JWT. There is currently no widely adopted protocol that enables:

- Decentralized, `m-of-n` VC issuance
- Compatibility with general VC format (e.g., W3C VCDM, IETF SD-JWT VC)
- Public visibility of the issuer organization, while preserving cryptographic privacy for individual signers

This proposal fills that gap by combining proven ZK techniques (Semaphore) with existing verifiable credential formats.

## Coordination/Correspondence

- Bi-weekly updates on progress and blockers
- GitHub discussions for technical proposals

## Prior art

- [OID4VCI](https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html)
- [OID4VP](https://openid.net/specs/openid-4-verifiable-presentations-1_0.html)
- [W3C VCDM](https://www.w3.org/TR/vc-data-model-2.0/)
- [SD-JWT VC](https://datatracker.ietf.org/doc/draft-ietf-oauth-sd-jwt-vc/)
- [Semaphore](https://semaphore.pse.dev/)

## Unresolved Questions

- Technical Implementation:
  - Binding multi-signature proofs to credentials while maintaining compatibility with standard credential specifications
  - Interoperability with standard credential issuance and verification workflows
- Policy design:
  - Membership updates in Semaphore groups
    > A policy needs to be defined to determine whether previously issued Verifiable Credentials should remain verifiable or be revoked when the member list of the Semaphore group changes (e.g., signer additions/removals).
  - Internal visibility of signer participation
    > Should the issuer organization have an internal mechanism to view or audit which specific members participated in each credential issuance, despite maintaining external anonymity?

## Outputs

- Protocol specification for verifiable credential issuance and verification based on anonymous multi-sig approval using Semaphore
- A TypeScript-based reference implementation library
- Demonstration projects showcasing end-to-end credential flows using the protocol and library
