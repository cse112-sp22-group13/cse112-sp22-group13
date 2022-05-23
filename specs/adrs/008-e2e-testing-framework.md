# E2E Testing Framework

* Status: accepted <!-- optional -->
* Deciders: Eric, Xavier, TJ <!-- optional -->
* Date: 4-29-2022 <!-- optional -->

## Context and Problem Statement

We want to consider how to run E2E tests. Which framework should we use?

## Decision Drivers <!-- optional -->

* Currently, pipeline is built with Jest for unit testing and an attempt at Puppeteer for E2E testing

## Considered Options

* Puppeteer
* Cypress

## Decision Outcome

Chosen option: "Puppeteer", because it is what more of the group is familiar with and has direct compatibility with Jest (Jest-Puppeteer).

### Positive Consequences <!-- optional -->

* Less changes to make
* Less onboarding time with new tech

### Negative Consequences <!-- optional -->

* Need to be careful in how we split E2E/unit tests because we are using Jest-Puppeteer

## Pros and Cons of the Options <!-- optional -->

### Puppeteer

* Good, because we need to modify the pipeline less to get Jest-Puppeteer working
* Good, because easy to pick up/learn and more people have used it in the past

### Cypress

* Good, because it was recommended in some (perhaps not all?) iterations of CSE 110
* Bad, because less people are familiar with it
