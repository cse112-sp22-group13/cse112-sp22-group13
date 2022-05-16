# Frontend Language

* Status: Accepted <!-- optional -->
* Deciders: Eric, Kai, Lucius, Nat, TJ, Xavier, Anh, Jon, Peder <!-- optional -->
* Date: 2022-05-09 <!-- optional -->

## Context and Problem Statement

We want to assess our decision to use React and our progress in migrating the current codebase to React. How feasible will it be to continue using React for our frontend?

## Decision Drivers <!-- optional -->

* React has useful frontend libraries/components
* Our UI/frontend team still wants to use React
* We have limited time left, so we need to carefully consider how much we want to achieve this quarter

## Considered Options

* Stay with React
* Discard our plans for React and move back to vanilla JS

## Decision Outcome

Chosen option: "Stay with React", because our UI team has made a lot of progress in implementing the new designs in React.

### Positive Consequences <!-- optional -->

* React's frontend libraries mean we have less work to do in implementing new UI components, increasing reliability/robustness
* We do not have to discard our current work in React -- less discarded progress

### Negative Consequences <!-- optional -->

* The way React is currently built locally is different -- we will have to revise our current CI/CD workflows for deployment/linting/testing

## Pros and Cons of the Options <!-- optional -->

### Stay with React

* Good, because our app's robustness/reliability is increased
* Good, because we keep our current progress
* Bad, because we need to change our CI/CD workflow
* Bad, beacuse we need to do more work to integrate frontend/backend

### Move back to vanilla JavaScript

* Good, because it reduces complexity/lets us preserve the current/initial codebase and CI/CD pipelines
* Good, because almost everyone knows JS on our team (from previous Powell courses)
* Bad, because we have to implement and test new UI components ourselves

## Links <!-- optional -->

* Replaces [001-frontend-language.md](001-frontend-language.md)
