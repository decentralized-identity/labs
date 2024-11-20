# Linked Claims

## Metadata
- Proposal Author(s): [Golda Velez](https://github.com/gvelez17) and [Agnes Koinange](https://github.com/Agneskoinange)
- Lead(s): [Golda Velez]()
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

The intention is to have a broad standard that is implementation independent, for making claims about 
entities that can be connected together across different platforms, storages and implementations. Such claims may be public or private/access-gated.

In order to connect claims together, they must be addressable.  A key part of this work is to define what it means for a claim to be addressable and qualify as a LinkedClaim.
That is, for a claim to have a long lived identifier so that it is possible to make validation or audit claims ABOUT the claim itself.  

The goal of this work is to finalize and release the high level spec for 
LinkedClaims with https://github.com/Cooperation-org/LinkedClaims/blob/main/LinkedClaimsRFC.md as a starting point, with input from potential users and implementors.

## Motivation

The Verifiable Credential (VC) ecosystem has encountered several use cases that require a third-party assertion,
or a linked claim to an existing object (another VC, a PDF, a web page, etc). 
Whether it is product reviews, linked claims of self-created credentials, provenance of academic paper reviews, 
or some other general purpose third-party assertion, these use cases have several requirements in common. 
Each use case may also require a domain-specific set of fields.

We propose a minimal format for connecting (and optionally cryptographically binding) 
credentials that will allow each use of third-party assertions to be represented as a set of LinkedClaims. 
Such a data set will enable verifiers to evaluate the credibility of claims, including those sourced from outside the Verifiable Credential ecosystem.

Further, we propose to demonstrate the ability to compose several Verifiable Credentials into a single domain-specific 
credential using the LinkedClaim vocabulary that will satisfy the domain requirements of the likely users.

This approach will enable rich shared datasets to inform trust decisions while satisfying the requirements of 
domain-specific end users. One of the intentions of LinkedClaims Verifiable Credentials is to give individuals 
the agency to make such claims about themselves and others on their own terms.

## Coordination/Correspondence

- TBD:

## Prior art and References

Our current live demo and Rebooting the Web of Trust paper are available from our
site https://linkedtrust.us and the work we are doing for the US Chambers of Commerce Foundation 
is being published at http://opencreds.net (in process, one item is not working there yet). 

Our open source repositories are under https://github.com/Cooperation-org.
   
We have interest in the concept of LinkedClaims from the UN CRM/CEFACT committee on critical resource mining,
from the US Chambers Foundation, SidiHub for digital identity, and some other groups and individuals.  

The intention is to have this be a lightweight open standard.

## Unresolved Questions

## Outputs

- Specification: https://github.com/Cooperation-org/LinkedClaims/blob/main/LinkedClaimsRFC.md
