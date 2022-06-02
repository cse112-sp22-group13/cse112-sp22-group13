# Ingredients or Aisles

* Status: accepted <!-- optional -->
* Deciders: Anh, Kai, Lucius, Eric, TJ, Xavier, Nat, Rodney, Peder, Jon <!-- optional -->
* Date: 5-30-2022 <!-- optional -->

## Context and Problem Statement

We want to decide which specific categories we want in the ingredients section -- specific proteins as in the Figma, or broader grocery store aisles. Which would be more suitable given the current state of our project?

## Decision Drivers <!-- optional -->

* Not a lot of time left -- do not want to add too much complexity
* A lot more design work if we go with specific ingredients
* Aisles are extensible as part of a future roadmap

## Considered Options

* Specific ingredients
* Aisles

## Decision Outcome

Chosen option: "Aisles", because this is more in line with our current work (design and backend-wise).

### Positive Consequences <!-- optional -->

* Less work design-wise -- more feasible
* Less complex hierarchy in the recipe manager

### Negative Consequences <!-- optional -->

* A bit less useful than the specific ingredients themselves

## Pros and Cons of the Options

### Specific Ingredients

* Good, because intuitive for the user
* Bad, because more work for our designer
* Bad, because it can be hard to create meaningful icons for each ingredient (e.g. chicken vs. duck)

### Aisles

* Good, because easier implementation-wise
* Good, because it is extensible (could use aisles as categories for the ingredients in the future)
* Bad, because less UX-friendly