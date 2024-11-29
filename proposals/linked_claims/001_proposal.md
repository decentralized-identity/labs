# Linked Claims

## Metadata
- Proposal Author(s): [Golda Velez](https://github.com/gvelez17), [Agnes Koinange](https://github.com/Agneskoinange) and [Phil Long](https://www.linkedin.com/in/longpd/)
- Lead(s): [Golda Velez](https://www.linkedin.com/in/goldavelez/), [Agnes Koinange](https://github.com/Agneskoinange) and [Phil Long](https://www.linkedin.com/in/longpd/)
- Status: [Proposed]()
- Since: November 19, 2024
- Expected End Date: February 6, 2025
- Tags: trust
- Supersedes: 
- Version: 0.0.1
- URI: https://linkedtrust.us/
---
[//]: # (Do not fill out below. To be filled out by chairs post-approval)
- Start Date: 
- URI: 

## Summary 

The intention is to have a broad standard that is implementation independent, for making claims that can be connected together across different platforms, storages and implementations. Such claims may be public or private/access-gated.

In order to connect claims together, they must be addressable.  A key part of this work is to define what it means for a claim to be addressable and qualify as a LinkedClaim.
That is, for a claim to have a long lived identifier so that it is possible to make validation or audit claims ABOUT the claim itself.  

<img width="672" alt="patterns enabled by LinkedClaims" src="https://github.com/user-attachments/assets/bfc3aa76-e21c-4201-a40b-9ecbdfca1824">


The goal of this work is to finalize and release the high level spec for 
LinkedClaims with https://github.com/Cooperation-org/LinkedClaims/blob/main/LinkedClaimsRFC.md as a starting point, with input from potential users and implementors.

## Motivation

Trust shapes every interaction in our digital lives, from verifying academic credentials to tracking humanitarian aid. Yet we lack a universal 
way to connect and verify claims across different systems. Verifiable Credentials enable the secure signing of a credential, but the credibility of that credential still relies on some trusted central registry, or cannot be verified at all.  

The real nature of trust is decentralized and relative to the trusting party. 

LinkedClaims addresses this fundamental need by providing a minimal but powerful specification for **addressable claims** and the **cryptographic linking** of independently issued credentials or attestations, referred to here simply as "claims". This enables 
verifiers to evaluate the credibility of claims based on their own roots of trust, as well as including data from both within and outside the Verifiable Credential ecosystem.  LinkedClaims also enable individuals and organizations 
the agency to make and verify claims on their own terms, including the possibility of adversarial claims.  Whether tracking disaster relief funds, documenting community development,
or validating project reviews and research papers, LinkedClaims creates chains of trust that can be verified and connected. 

<img width="756" alt="image" src="https://github.com/user-attachments/assets/be515883-4b17-40eb-81db-eed6a96ed8f3">


By facilitating rich shared datasets that inform trust decisions while satisfying domain specific requirements, we believe LinkedClaims will pave the way for a more connected and verifiable digital world.


## Coordination/Correspondence

- Several workshop events will be set up and posted under the page https://linkedtrust.us/getstarted
- Email correspondence may be sent to connect@linkedtrust.us

## Prior art and References

Proposed [RFC for Linked Claims](https://github.com/Cooperation-org/LinkedClaims/blob/main/LinkedClaimsRFC.md)

[Composing Credentials via LinkedClaims and Cryptographic Binding](https://github.com/WebOfTrustInfo/rwot11-the-hague/blob/master/final-documents/composable-credentials.pdf) published in Rebooting the Web of Trust XI proceedings.

Live demo of a general implementation of LinkedClaims at https://live.linkedtrust.us

Live demo of a skills credentials implementation of LinkedClaims at https://opencreds.net sponsored by the US Chambers of Commerce Foundation and the T3 Innovation Network.  

- Open source repositories: https://github.com/Cooperation-org.
- NPM libraries: https://www.npmjs.com/org/cooperation
- PyPI libraries: https://pypi.org/project/linked-claims-extractor/
   
We have interest in the concept of LinkedClaims from the [UN CRM/CEFACT committee](https://uncefact.github.io/project-crm/) on critical raw materials, the [US Chamber of Commerce Foundation](https://www.uschamberfoundation.org/), [SidiHub Digital Identity Community](https://sidi-hub.community/), and some other groups and individuals.  

The intention is to have this be a lightweight open standard.

## Unresolved Questions



## Outputs

- Specification: https://github.com/Cooperation-org/LinkedClaims/blob/main/LinkedClaimsRFC.md
