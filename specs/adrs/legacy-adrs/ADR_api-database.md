# RECIPE LIST STORAGE AND RETRIEVAL

* Status: Resolved <!-- optional -->
* Deciders: Scott, Alanna, Bryan, Andy, and Sanat <!-- optional -->
* Date: 11/16/2021 <!-- optional -->

## Context and Problem Statement

From where does our recipe webapp retrieve its recipes?

## Decision Drivers <!-- optional -->

* cost
* ease of implementation
* amount of content
* functionality

## Considered Options

* Established Recipe API
* Webscraping and storing in database
* Webscraping and storing in static files on repo

## Decision Outcome

We chose an established recipe API called Spoonacular.

### Positive Consequences <!-- optional -->

* No web scraping
* Easy to integrate
* Lots of functionality from the get go

### Negative Consequences <!-- optional -->

* Unwieldy and large schema
* Recipe amount may be limited
* awkward fetch pattern

## Pros and Cons of the Options <!-- optional -->

### Established Recipe API

Get a subscription to established recipe API and just use it as we need to.

* Good, because we get a lot of functionality out of the box.
* Good, search is simple to work with.
* Good, no need to put together a recipe list.
* Bad, we have no control of what we get. Schema is too large for our needs.
* Bad, we have to conform to API pattern for searching, we don't get the info we want on the small explorotary searches.

### Webscraping Database Store

Find a bunch of recipes, throw them onto a MongoDB or SQL server and get those recipes from the database as they are needed.

* Good, because it's nimble. We only work with the data we deem necessary, javascript wouldn't be as overloaded.
* Good, because the database takes care of a lot of search functionality for us, as long as we use the query functions as intended.
* Bad, most databases can't be directly called from the webpage, it is a huge security issue. Limits options drastically.
* Bad, difficult to find recipes with good schema just laying around the web. Takes time.

### Webscraping Repo Store

Put a bunch of recipes into json format and upload them to repo, have the webapp download these static files from the repo.

* Good, because it's nimble. We would only work with the data we need.
* Bad, difficult to find recipes with good schema just laying around the web. Takes time.
* Bad, search would need to be hand coded.
* Bad, it would make the repo structure very complex. Would have to split the recipes into modules, so we don't download one gigantic json.