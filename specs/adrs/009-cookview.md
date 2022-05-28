# Cookview

* Status: accepted <!-- optional -->
* Deciders: Eric, Rodney, Xavier, TJ, Anh, Peder, Jon, Nat, Lucius, Kai <!-- optional -->
* Date: 5-10-2022 <!-- optional -->

## Context and Problem Statement

Our recipe manager's features should be useful and follow a natural user flow. With this in consideration, should we keep or remove the cookview functionality, which shows a recipe step by step that a user must manually navigate through?

## Decision Drivers <!-- optional -->

* When cooking it is typically more useful to have the full recipe open for ease of navigation
* Users likely want to minimize interaction with technology while cooking -- hands will be occupied/dirty touching/preparing ingredients

## Considered Options

* Keep cookview feature
* Remove cookview feature

## Decision Outcome

Chosen option: "Remove cookview feature", because it is not very useful in the typical use case of reading through a recipe while cooking.

### Positive Consequences <!-- optional -->

* Less design/migration to React work for us
* Less complexity in website
* Removes a somewhat counterintuitive feature

### Negative Consequences <!-- optional -->

* There can still be potential use cases for the cookview functionality -- always can be some people who find it useful

## Pros and Cons of the Options <!-- optional -->

### Keep Cookview

* Good, because it is not a very useful feature and users might get annoyed using it
* Good, because less work for us to remove the feature
* Bad, because some people may still find it useful

### Remove Cookview

* Good, because we are preserving existing functionality
* Bad, because the feature is not very useful/may annoy users
* Bad, because putting time into an unpopular feature is time that could have been spent on more important areas of the app
