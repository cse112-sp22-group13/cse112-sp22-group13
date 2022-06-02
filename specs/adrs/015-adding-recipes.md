# Adding Recipes

* Status: accepted <!-- optional -->
* Deciders: Anh, Kai, Lucius, Eric, TJ, Xavier, Nat, Rodney, Peder, Jon <!-- optional -->
* Date: 5-30-2022 <!-- optional -->

## Context and Problem Statement

We want to decide whether/how a user could add a recipe to the manager. What solution would provide the best balance between UX/DX and make sense from a practical standpoint?

## Decision Drivers <!-- optional -->

* Low on time
* Many people (that we knew) typically would be looking for recipes rather than finding places to write or add their own
  * In addition, physical recipe books and online recipe sites do not typically have users adding recipes as "intended functionality" -- it is not necessarily an intrinsic feature
  * Want to prioritize recipe exploration
* Current database stores one instance of the recipe list shared among accounts


## Considered Options

* Add recipe by manuall specifying fields
* Add recipe through url
* No adding recipes functionality

## Decision Outcome

Chosen option: "No adding recipes functionality", because we do not have the resources to dedicate to integrating this feature with our database and feel it is not intrinsic to the core idea of a recipe app -- it would not necessarily see a lot of use even if implemented.

### Positive Consequences <!-- optional -->

* Save resources (developer hours) we can use on more utilized functionality/ensuring reliability
* Easier to manage on DX side

### Negative Consequences <!-- optional -->

* Will want to ahve more recipes in the database from the start so users feel they still have many options
* There still would be users who have their own recipes they want to add to the app

## Pros and Cons of the Options

### Add recipe by manuall specifying fields

* Good, because allows full-customization of recipes
* Bad, because a little tedious if the recipe is not your own
* Bad, because we would have to manage user-specific recipes and the general-access/default recipes

### Add recipe through url

* Good, because simple for the user
* Bad, because less customizability of recipes (or if you have your own)
* Bad, because we would have to manage user-specific recipes and the general-access/default recipes

### No adding recipes functionality

* Good, because easier DX-wise
* Bad, because some users would want this feature