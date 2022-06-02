# Test Organization

* Status: accepted <!-- optional -->
* Deciders: Eric, TJ, Xavier <!-- optional -->
* Date: 6-1-2022 <!-- optional -->

## Context and Problem Statement

To improve DX, we want to consider our repo's test file organization. How should the test files be organized to bset improve clarity?

## Decision Drivers <!-- optional -->

* Feedback from team 3 in frenemy feedback session, at [052922-frenemy-feedback.md](../../admin/meetings/052922-frenemy-feedback.md)
* We have both unit and end to end testss in the same place currently

## Considered Options

* No change
* Separate Jest/E2E tests

## Decision Outcome

Chosen option: "Separate Jest/E2E tests", because it improves dev clarity and is good practice to separate things/functionaliy that is not entirely related.

### Positive Consequences <!-- optional -->

* Easier onboarding w.r.t. testing
* Helps us divide tests by their type

### Negative Consequences <!-- optional -->

* Tests are not organized by the features they are testing, aside from what file they are in

## Pros and Cons of the Options

### No change

* Good, because Less work for us
* Bad, because harder to distinguish unit/E2E tests at a glance within the repo

### Separate Jest/E2E tests

* Good, because improves clarity within repo
* Bad, because complicates file structure a little

## Links

* Issue brought to our attention in feedback session [052922-frenemy-feedback.md](../../admin/meetings/052922-frenemy-feedback.md).