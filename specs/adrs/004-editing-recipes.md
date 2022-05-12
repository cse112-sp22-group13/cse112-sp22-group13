# Editing Recipes

* Status: accepted
* Deciders: Eric, Kai, Lucius, Nat, TJ, Xavier, Anh, Jon, Peder, Rodney <!-- optional -->
* Date: 2022-05-02 <!-- optional -->

## Context and Problem Statement

We want to consider what should occur when users want to edit a recipe. What should they be able to edit and where should the edited recipe be stored?

## Decision Drivers <!-- optional -->

* We are moving the backend to Firebase
* We want the choice to be intuitive from a user perspective

## Considered Options

* While editing: only store notes vs. edit anything on the recipe
* Storing edits: store locally (localStorage) vs. store in database (Firebase)

## Decision Outcome

Chosen options: "edit anything on the recipe" and "store in database", because intuitively, it makes more sense to edit the recipes themselves with an "edit" button, and storing in database allows us to tie edits to user accounts

### Positive Consequences <!-- optional -->

* More intuitive for edit button to allow you to edit recipe
* Allows us to tie edits to user accounts so they are available anywhere you access the app

### Negative Consequences <!-- optional -->

* Takes more space to store copies of recipes
  * However, Firebase gives us 10GB of storage -- likely will not run into issues, though we will revisit this decision if space becomes a bigger concern

## Pros and Cons of the Options <!-- optional -->

### Edit anything on the recipe

* Good, because it is more inuitive design
* Good, because that is the current functionality
* Bad, because this needs us to clone recipes -- takes up more space than notes

### Only store notes

* Good, because it is more space-efficient
* Bad, because less intuitive for the user
* Bad, because more restrictive for the user

### Store locally

* Good, because it is more straightforward to use localStorage from a dev standpoint
* Bad, because edits would be tied to specific browser instances (not cross-browser/platform/device)

### Store in database

* Good, because we would be able to link edited recipes to accounts
* Bad, because currently everything is stored in localStorage (more work)
