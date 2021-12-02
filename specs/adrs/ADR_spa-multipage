# SPA VS MULTIPAGE

* Status: Resolved
* Deciders: Scott, Alanna, Bryan, and Andy
* Date: 12/02/2021 

## Context and Problem Statement

Should we change design to a single HTML page for our app with spa design, or keep using a multi page network of HTML files

## Decision Drivers

* ease of implementation
* time
* feature conflict

## Considered Options

* Switch to SPA - Single Page Application, or all the HTML on one page
* Continue with Multipage - A network of HTML pages

## Decision Outcome

We chose not to pursue SPA

### Positive Consequences

* Not having to train feature coders
* No refactoring
* Avoided working with a Frankenstein's monster HTML page

### Negative Consequences

* App continues being more bandwith inefficient than it has to be
* We gain no experience from not trying

## Pros and Cons of the Options

### SPA

Have a single HTML page

* Good, because we avoid making unecessary API calls and lessen dependence on local storage access.
* Good, because it is a more modern way to develop, would give us useful experience
* Bad, we have to refactor all our JS and HTML code.
* Bad, it complicates future feature design for coders unfamiliar with SPA design principles
* Bad, while it is more bandwith efficient, it is not more memory efficient (but this is a minor issue).

### Multi Page

Find a bunch of recipes, throw them onto a MongoDB or SQL server and get those recipes from the database as they are needed.

* Good, because we already have a multipage design so we get it without doing anything
* Good, because coders are familiar with design and would not have to reassemble design plans for features
* Bad, pages have to access all information through local storage and api calls, nothing is preserved otherwise. Can be wasteful of computation and bandwith.
