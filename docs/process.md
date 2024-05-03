# Operating Process

Please provide a PR in the following format: 

1. Create a branch with the following name:

`proposal/<proposal-name>`

For names, there may be no spaces, and please use snake case with lower case. i.e `<>-<>`

2. Please copy the file from `000_template.md` into `proposals/<proposal-name>/<03d>_proposal.md`.

For example, in the case of decentralized linkedin:

```sh
# clone this repo
git clone git@github.com:decentralized-identity/applications-and-implmentations-wg.git

## go into it

cd applications-and-implmentations-wg
# from the root 
mkdir proposals/decentralized-linkedin

# copy the file over
cp docs/000_template.md proposals/decentralized-linkedin/000_proposal.md

# edit it
EDITOR docs/000_template.md proposals/decentralized-linkedin/000_proposal.md # edit the file

# make a branch with it
git checkout -b proposal/decentralized-linkedin
git add . 
git commit -m "added decentralied linkedin proposal"
```

Now send a PR and request the `CODEOWNERS` to review the PR. If approved, they
will approve it, convert the status to `ACCEPTED`. 

Once it has been accepted, a repository with the following name: 

`appimp-<proposal-name>` will be created. For example, in the case of
decentralized linkedin: 

`appimp-decentralized-linkedin`

## Proposal States

### Meta States

* `PROPOSED`: This item has been proposed to the chairs of the WG, and is waiting for review. 
* `ACCEPTED`: This item has been accepted by the chairs of the WG into action.
* `PAUSED`: This working item has been accepted but not currently being worked on.
* `PROMOTED`: This working item has been promoted and has moved on to either a WG or another SDO.
* `CANCELLED`: This working item has been cancelled. A cancelled item may not be re-activated. 
* `ACTIVE`: This working item has been accepted and is currently being worked on.
* `COMPLETED`: This working item has been completed and is done and has not been promoted.

```mermaid
graph LR
  Proposed[PROPOSED] --> INREVIEW[In Review] --> |if accepted| ACCEPTED[ACCEPTED] 
  INREVIEW -->|if not accepted submit another proposal| DECLINED
 
  subgraph ActiveStates[Active States]
     ACTIVE{{ACTIVE}}
  end
  ACCEPTED --> ACTIVE
  subgraph InActiveStates[InActiveStates]
    CANCELLED{{CANCELLED}}
    COMPLETED{{COMPLETED}}
    PAUSED
    PROMOTED{{PROMOTED}}
  end
  ACTIVE --> CANCELLED{{CANCELLED}}
  ACTIVE --> COMPLETED{{COMPLETED}}
  ACTIVE --> PAUSED
  ACTIVE --> PROMOTED{{PROMOTED}}
  PAUSED --> ACTIVE
```

### State Transition Governance Framework

Acceptance from a proposal requires _all_ chairs to approve the working item within a 7 day timeframe from the notification. If a chair has not put a position between then, or requested additional time, it is assumed via in-absentia that it is a vote for approval. 

State transitions past propsal requires _all_ WG chairs, and likely SC approval in the case that the promotion is a new WG _except_ for PAUSED, which require at least a majority approval by the chairs of the WG.

### Evaluation Criteria 

#### Proposal Acceptance Criteria

- consistent with WG charter
- viable: participant interest
- need established; doesn’t conflict with existing efforts
- related to decentralized identity
  
#### Proposal Promoted Criteria

- Evaluated on an ad-hoc basis, but reasonable criteria _MAY_ include:
   - On-brand for what DIF represents.
   - Work has been done, and artifacts are available for review.
   - Functioning code/work. 
   - Use of decentralized identity standards / tech 
   - viability (technical and participation)
   - consistent with DIF goals
   - Continual interest/activity in the Working Item for a long peroid of time.

Note: Any WI that wants to be promoted into a WG will need to go through the standard working group creation process, which includes Steering Committee approval. 

#### Proposal Paused Criteria

- No _reasonable_ activity has been happening on this Working Item, but may re-visited in the future.
- Reasonable activity MAY include:
  - Not enough members in a meeting over many consecutive meetings.
  - No activity in any of the items accepted over a period of time.  

#### Proposal Cancelled Criteria

Cancellation can happen for some of the following reasons:

* If a breach of the WG charter has been found, a Working Item MAY be cancelled.
* If a proposal is obsolete and there's no _reasonable_ way this can move forward.

