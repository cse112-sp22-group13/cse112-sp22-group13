# Unfavorites/Hidden Recipes

* Status: accepted <!-- optional -->
* Deciders: Anh, Kai, Eric, TJ, Xavier <!-- optional -->
* Date: 5-30-2022 <!-- optional -->

## Context and Problem Statement

We want to decide if a user should have the ability to hide recipes they do not like. Should users be given this functionality?

## Decision Drivers <!-- optional -->

* We have chosen to remove the add recipe functionality for the reasons described in [ADR-015](015-adding-recipes.md)

## Considered Options

* Implement hidden recipes
* Do not implement hidden recipes

## Decision Outcome

Chosen option: "Do not implement hidden recipes", because although users may find this feature useful, since users cannot add recipes they could eventually run out of recipes if they hide everything -- in short, it makes less sense to allow taking away recipes if you cannot also add them.

### Positive Consequences <!-- optional -->

* Less work on developer side
* Users will never "softlock" themselves intentionally or unintentionally by hiding everything
* Symmetry in not allowing recipe addition/hiding

### Negative Consequences <!-- optional -->

* Hiding recipes would likely be a useful feature and this worsens UX

## Pros and Cons of the Options

### Implement hidden recipes

* Good, because seems like a useful feature
* Bad, because we do not have recipe addition -- this would give us "subtraction" without addition, which feels a little asymmetrical

### Do not implement hidden recipes

* Good, because more symmetrical design
* Good, because less work to do
* Good, because users will never be able to "softlock" their recipe book by hiding every recipe
* Bad, because we are not implementing a seemingly useful feature

## Links <!-- optional -->

* Decision heavily influenced by [ADR-015](015-adding-recipes.md) <!-- example: Refined by [ADR-0005](0005-example.md) -->
* Choices considered after feedback from Professor Powell (Google Docs): [Thoughts On UI](https://docs.google.com/document/d/1PzWbhGVm3FnmxUGQCKael-CvVAmySaCIZlY7YGBjkNE/edit?usp=sharing)