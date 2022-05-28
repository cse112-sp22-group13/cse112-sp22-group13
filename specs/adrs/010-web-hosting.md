# Web Hosting

* Status: accepted <!-- optional -->
* Deciders: Eric, TJ, Xavier <!-- optional -->
* Date: 5-18-2022 <!-- optional -->

## Context and Problem Statement

Heroku has had some security issues that made a few of its deployment features unavailable for our project. Should we consider switching our website hosting to a different platform?

## Decision Drivers <!-- optional -->

* We are unable to use some of Heroku's features, like live previews of PRs before merging

## Considered Options

* Heroku
* Netlify
* GitHub Pages

## Decision Outcome

Chosen option: "Netlify", because it is easy to switch to and offers the features that were currently unavailable with Heroku.

### Positive Consequences <!-- optional -->

* Simple deployment so not too much change in the pipeline
* Live previews help manual code reviews so we get less buggy/higher quality code deployed

### Negative Consequences <!-- optional -->

* We are changing something that works -- could introduce bugs that we were not expecting

## Pros and Cons of the Options <!-- optional -->

### Heroku

* Good, because it works and is what we currently have
* Bad, because some useful features are currently unavailable

### Netlify

* Good, because we gain access to features like live previews
* Good, because seems to be pretty easy (we have a demo deployment branch)
* Bad, because we are changing something when we do not necessarily need to since Heroku still works

### GitHub Pages

* Good, because it is very simple deployment
* Bad, because we are already using it for JSDocs