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

Trust shapes every interaction in our digital lives, from verifying academic credentials to tracking humanitarian aid. Yet we lack a universal 
way to connect and verify claims across different systems. The Verifiable Credential ecosystem has encountered numerous use cases requiring third-party
assertions and endorsements, but current solutions remain fragmented and inflexible.

LinkedClaims addresses this fundamental need by providing a minimal but powerful format for connecting credentials cryptographically. This enables 
verifiers to evaluate the credibility of claims from both within and outside the Verifiable Credential ecosystem, while giving individuals and organizations 
the agency to make and verify claims on their own terms. Whether tracking disaster relief funds, documenting community development,
or validating project reviews and research papers, LinkedClaims creates chains of trust that can be verified and connected. 

By facilitating rich shared datasets that inform trust decisions while satisfying domain specific requirements, 
we know LinkedClaims will pave the way for a more connected and verifiable digital world.


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
