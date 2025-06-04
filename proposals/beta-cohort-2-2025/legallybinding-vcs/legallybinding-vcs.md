# Legally-Binding Proof of Personhood for Verifiable Credentials via QES

## Metadata
- Proposal Author(s): [Jon Bauer](coveloper) [Roberto Carvajal](robertocarvajal)
- Chair(s): 
- Status: [Proposed]()
- Since: May 31, 2025
- Tags:
- Supersedes:
- Version: 0.0.1
- Start Date: 
- URI: 

## Summary

We propose a verifiable credential schema tailored for decentralized applications that require proof of personhood, enabling a secure, tamper-proof and standardized format to bind any W3C Verifiable Credential to a Qualified Electronic Signature (QES). This brings a legally accepted Proof of Personhood to Verifiable Credentials in decentralized ecosystems.

## Problem

While Verifiable Credentials offer a flexible way to represent attributes and claims, there is currently no standardized method to anchor them to a legally recognized, high-assurance proof of an individual's identity. [Qualified Electronic Signatures (QES)](https://en.wikipedia.org/wiki/Qualified_electronic_signature), recognized by eIDAS in the European Union, represent the highest level of electronic signature, carrying the same legal weight as a handwritten signature. Obtaining a QES involves a rigorous identity verification process, effectively performing a strong Know Your Customer (KYC) check on the individual.

The absence of a standard way to bind a QES to a Verifiable Credential means that VCs, by themselves, may lack the necessary legal standing or the robust identity assurance required for high-value or legally sensitive transactions in decentralized ecosystems. By creating a standardized mechanism to attach a QES to any VC, we can bind that credential to the strong proof of personhood and KYC attributes inherent in the QES. This allows any existing or future VC to be "upgraded" with a legally binding attestation of the holder's identity, regardless of the VC's original content or issuer.

## Approach

We aim to standardize this foundational building block, unlocking a legally recognized Proof of Personhood across digital ecosystems, effectively allowing any VC to carry embedded KYC assurance.

This diagram illustrates the overall flow of how a user can bind a Qualified Electronic Signature (QES) to an existing Verifiable Credential (VC), resulting in a Qualified Verifiable Credential (QVC) that carries enhanced legal standing and embedded KYC assurance.

**Explanation of the Diagram:**

*   It starts with the **User** having an **Existing VC**.
*   The **"QES Acquisition & Usage Process"** subgraph details the interaction with the **QTSP**, the crucial **KYC/Identity Verification** step, obtaining the QES certificate, preparing the VC's payload, and the actual signing action using the QES.
*   The **"QVC Creation"** subgraph shows how the new standardized **QVC** is formed. This QVC incorporates the **Original VC** (or a reference to it), the **QES Signature** generated in the previous step, and relevant **QES Certificate Information**.
*   The final outcome is the User possessing this **QVC**, which now carries the strong legal assertion and embedded KYC value of the QES.

```mermaid
%%{init: { "themeVariables": { "background": "#ffffff" } }}%%
graph TD
    A["User has an Existing Verifiable Credential (VC)"] --> B{"User wants to bind QES to Existing VC"};

    subgraph QES Acquisition & Usage Process
        direction TB
        B --> C(Step 1: User interacts with Qualified Trust Service Provider - QTSP);
        C -- KYC/Identity Verification --> D(Step 2: QTSP issues QES Certificate to User);
        B --> E(Step 3: User selects Existing VC);
        E --> F(Step 4: User prepares payload of Existing VC for signing);
        D --> G(Step 5: User signs VC Payload using their QES Certificate & Private Key);
        F --> G;
        G --> H(Step 6: QES Signature over VC Payload is generated);
    end

    subgraph Qualified VC Creation Standardized by Proposal
        direction TB
        H --> I(Step 7: New QVC is created);
        E -- Original VC is included/referenced --> I;
        I --> J[QVC contains:];
        J --> K[The Original VC];
        J --> L[The QES Signature];
        J --> M[QES Certificate Information];
    end

    I --> N[Outcome: User possesses QVC - a QES-enhanced VC with embedded KYC];

    classDef qesInteractionNode fill:#fef2f2,stroke:#dc2626,stroke-width:2px,color:#b91c1c;
    class C,D,G qesInteractionNode;

    style A fill:#e0f2fe,stroke:#0ea5e9,stroke-width:1px
    style E fill:#e0f2fe,stroke:#0ea5e9,stroke-width:1px
    style K fill:#e0f2fe,stroke:#0ea5e9,stroke-width:1px
    style H fill:#dcfce7,stroke:#22c55e,stroke-width:1px
    style L fill:#dcfce7,stroke:#22c55e,stroke-width:1px
    style I fill:#ede9fe,stroke:#8b5cf6,stroke-width:2px
    style J fill:#ede9fe,stroke:#8b5cf6,stroke-width:1px
    style M fill:#ede9fe,stroke:#8b5cf6,stroke-width:1px
    style N fill:#ffedd5,stroke:#f97316,stroke-width:2px
```

## Team

Good Future, LLC is a collective of like-minded collaborators working on Decentralized Identity applications, including Csign, a SSI-based e-signature platform, allowing confidential and privacy-preserving agreement signing between parties.

Good Future, LLC is a member of DIF:
- Roberto Carvajal: Csign / Identus Maintainer - roberto@goodfuture.io
- Jon Bauer: Csign / Identus Maintainer - jon@goodfuture.io
- Matthew Merino: Csign / Identus / Decentralized Finance - matthew@goodfuture.io

## Outputs

1. We will create a W3C VCDM-1.1 compatible credential schema that will codify a binding between a Qualified Electronic Signature and a Holder's existing (unspecified) credential.

2. Documentation on how to adopt this schema.

3. Compliance Test Suite

Outputs will be published by August 31, 2025.

Once released, we would love to work with other e-signature platforms to refine it for broad adoption.

## Coordination Format

- Bi-weekly updates on progress and blockers
- Monthly community calls for feedback and discussion
- GitHub discussions for technical proposals
- Regular documentation updates

## Prior art

Unknown but unaware of a similar standard existing

## Unresolved Questions
