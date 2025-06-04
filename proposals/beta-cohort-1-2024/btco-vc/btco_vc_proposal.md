# Bitcoin Ordinals Verifiable Credentials Framework

## Metadata
- Proposal Author(s): [Brian Richter](https://github.com/brianorwhatever)
- Chair(s): Brian Richter
- Status: [Proposed]()
- Since: November 28, 2024
- Tags: bitcoin, ordinals, verifiable-credentials, did
- Expected End Date: January 31, 2025
- Version: 0.0.1

[//]: # (Do not fill out below. To be filled out by chairs post-approval)
- Start Date: <date>
- URI: <uri>

> **_NOTE:_**  during the incubation period, BTCO VC was renamed to [Ordinals Plus](https://ordinals.plus).

## Summary

This proposal outlines a framework for implementing verifiable credentials on Bitcoin using Ordinal inscriptions. The framework builds on the `did:btco` method, which associates DIDs with specific ordinals and implements DID Linked Resources, enabling tamper-proof and decentralized verification of digital artifacts without intermediaries. The inherent content-addressing nature of Ordinal inscriptions makes them particularly well-suited for implementing DID Linked Resources. The project aims to standardize these capabilities for various use cases including event tickets, digital collectibles, ownership records, and Verifiable AI Inference (VAI) credentials that prove the authenticity and origin of AI-generated content.

## Motivation

Bitcoin's Ordinal inscriptions provide a unique opportunity to create immutable, publicly verifiable digital artifacts. However, there is currently no standardized way to use this capability for verifiable credentials. The permanent and content-addressed nature of inscriptions creates an ideal foundation for implementing DID Linked Resources, as each inscription naturally serves as a globally addressable resource. This framework aims to:

- Enable creation of tamper-proof verifiable credentials directly on Bitcoin
- Provide a standardized approach for digital artifact verification
- Leverage Bitcoin's security and decentralization for credential issuance
- Create interoperable standards for credential verification
- Address privacy considerations in public blockchain deployments
- Utilize inscriptions' content-addressing capabilities for robust DID Linked Resources

## Coordination/Correspondence

- Bi-weekly updates on progress and blockers
- Monthly community calls for feedback and discussion
- GitHub discussions for technical proposals
- Regular documentation updates

## Prior art

Several key technologies and specifications inform this proposal:

1. [Bitcoin Ordinal Theory & Inscriptions Protocol](https://docs.ordinals.com/) - Casey Rodarmor. The foundational protocol that enables inscribing arbitrary data onto individual satoshis on Bitcoin.

2. [BRC-20](https://domo-2.gitbook.io/brc-20-experiment/) - Domo. An experimental token standard built on Bitcoin Ordinals that demonstrated the viability of implementing standards and protocols using inscriptions.

3. [Verifiable Credentials Data Model 2.0](https://www.w3.org/TR/vc-data-model-2.0/) - Manu Sporny, Dave Longley, David Chadwick, et al. The W3C standard that defines the data model and formats for verifiable credentials.

4. [DID Core Specification](https://www.w3.org/TR/did-core/) - Manu Sporny, Amy Guy, Markus Sabadello, Drummond Reed, et al. The W3C specification that establishes the foundation for decentralized identifiers and their resolution.

5. [DID Linked Resources](https://w3c-ccg.github.io/did-linked-resources/) - Alex Tweeddale. The DIF specification for associating verifiable resources with DIDs in a tamper-evident way.

6. [`did:btco` Method Specification](https://github.com/ordinalsreserve/did-btco) - Brian Richter. A DID method that enables associating DIDs with Bitcoin using Ordinal Theory & Inscriptions.

## Unresolved Questions

1. Scalability Considerations:
   - What are the optimal inscription sizes for different credential types?
   - How to handle credential revocation on Bitcoin?
   - What are the cost implications of different deployment approaches?

2. Privacy Concerns:
   - How to balance public verifiability with privacy requirements?
   - What data should be stored on-chain vs off-chain?
   - How to implement selective disclosure?

3. Technical Implementation:
   - Best practices for key management in the did:btco method
   - Approach to handling credential updates and versioning
   - Integration with existing Bitcoin wallets and infrastructure

4. Deployment Platform:
   - Evaluation criteria for selecting optimal Bitcoin L2 or sidechain
   - Trade-offs between different scaling solutions
   - Integration requirements for Fractal Bitcoin deployment

## Outputs

1. Technical Specifications:
   - Specification for verifiable credential backed digital artifacts on Bitcoin
   - Updated `did:btco` method specification
   - Reference implementation documentation

2. Implementation Deliverables:
   - Reference implementation of the digital artifact issuance system
   - Verification library for digital artifact validation
   - Sample applications demonstrating common use cases

3. Documentation:
   - Technical documentation and API references
   - Implementation guides
   - Best practices for deployment and security

4. Testing and Validation:
   - Test suite for specification compliance
   - Security audit recommendations
   - Performance benchmarks on different platforms 