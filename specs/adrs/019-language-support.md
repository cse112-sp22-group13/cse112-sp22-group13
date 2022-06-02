# Language Support

* Status: accepted <!-- optional -->
* Deciders: Eric, TJ, Xavier <!-- optional -->
* Date: 6-1-2022 <!-- optional -->

## Context and Problem Statement

We want to decide whether/to what extent we could include multilingual support. Is this a feasible goal for accessibility?

## Decision Drivers <!-- optional -->

* Spoonacular (data) is only available in English

## Considered Options

* Include language support for the non-English languages we know
* Only support English

## Decision Outcome

Chosen option: "Only support English", because Spoonacular queries are only obtainable in English -- our recipes are locked to English (or we could machine-translate them for unreliable results), so it does not make too much sense to mess with the rest of our app's language as the recipes are the most text-heavy (and important) parts a user will be interacting with.

### Positive Consequences <!-- optional -->

* Less developer work
* More consistency of site

### Negative Consequences <!-- optional -->

* Less support for non-English speakers

## Pros and Cons of the Options

### Include other language support 

* Good, because makes site more accessible to non-English speakers
* Bad, because most text-heavy parts are the recipes which are locked to English

### Only support English

* Good, because easier for developers (current code is written with "magic strings")
* Bad, because less accessibility
