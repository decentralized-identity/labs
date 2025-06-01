# Initial Proposal

## Metadata
- Proposal Author(s): [Brian Richter](https://github.com/brianorwhatever)
- Chair(s): [Brian Richter](https://github.com/brianorwhatever)
- Status: [Proposed]()
- Since: May 31, 2025
- Tags: verifiable-ai, bitcoin, ordinals plus, decentralized-identity
- Supersedes:
- Version: 0.0.1
- Start Date: <date>
- URI: <uri>

## Summary

**Agentic Bitcoin** is a verifiable AI framework for issuing and verifying autonomous agent actions and AI-generated content using Bitcoin-native infrastructure—specifically Ordinals Plus, `did:btco`, and verifiable credentials (VCs). It enables decentralized AI agents to anchor their identity, outputs, and provenance immutably on-chain and verifiably, without reliance on centralized systems.

## Motivation

With the rise of autonomous agents and generative AI, establishing verifiable identity, authorship, and integrity of machine-generated content is critical. Bitcoin offers a uniquely durable, decentralized substrate for persistent identity and credentials. This project leverages recent developments in Ordinals Plus and BTCO DIDs to make AI provenance and trust graph-based verification Bitcoin-native. DIF Labs offers the ideal collaborative space to shape specifications, tooling, and integrations with the wider decentralized identity ecosystem.

## Problem

Autonomous agents and AI-generated content today lack:
- Persistent, verifiable identity (especially across open networks)
- Verifiable provenance of outputs
- Open, cryptographically anchored credentialing systems for machine actions

These gaps enable misinformation, spoofed content, and unverifiable claims.

## Approach

**Agentic Bitcoin** combines:
- `did:btco` identities: Self-sovereign agent identifiers registered via Bitcoin Ordinal inscriptions
- **Verifiable Credentials (VCs)**: Cryptographically signed attestations of AI content, activity logs, model metadata
- **Anchored provenance**: Credentials are inscribed on-chain for verifiability and traceability

Deliverables include an open-source SDK, reference agent demo, and contribution to the Ordinals Plus BTCO specification set.

## Team

- **Brian Richter** — Lead Developer at Aviary Tech  
  - Author of the BTCO DID Method and Verifiable Metadata (BTCO-VM) specs  
  - Creator of Ordinals Plus  
  - Background in LLM agent architectures, Bitcoin scripting, and W3C VCs

Seeking collaborators that are interested in the project!

## Outputs

- **Agent SDK** with DID, VC issuance, credential linking, and Ordinals Plus integration
- **Reference Agent Implementation** issuing verifiable AI credentials on Bitcoin signet
- **Specification Contributions** to the BTCO-VM, BTCO DID Linked Resources, and `did:btco` method specifications
- **Documentation and Demos** for agent developers and infrastructure integrators

## Coordination Format

- Bi-weekly updates on progress and blockers
- Monthly community calls for feedback and discussion
- GitHub discussions for technical proposals
- Regular documentation updates

## Prior art

- [BTCO DID Method](https://identity.foundation/labs-ordinals-plus/btco-did-method/) – Defines decentralized identifiers anchored in Bitcoin
- [BTCO Verifiable Metadata (BTCO-VM)](https://identity.foundation/labs-ordinals-plus/btco-vm/) – Credential framework for inscriptions
- [BTCO DID Linked Resources](https://identity.foundation/labs-ordinals-plus/btco-did-linked-resources/) – Linked resources for DID documents
- [OpenAI Agent Guide](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf) – LLM-powered autonomous agent architecture
- [W3C VC Data Model 2.0](https://www.w3.org/TR/vc-data-model-2.0/) – Standard for machine-verifiable digital credentials

## Unresolved Questions

- Recommended standards for zero-knowledge proofs of inference in VC `proof` fields
- Sustainability models for agent credential indexing and discovery post-cohort

