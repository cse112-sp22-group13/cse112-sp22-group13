# Search Bar Position

* Status: accepted <!-- optional -->
* Deciders: Anh, Kai, Lucius, Eric, TJ <!-- optional -->
* Date: 5-30-2022 <!-- optional -->

## Context and Problem Statement

We want to decide where to put the search bar. What location would make the most sense for the end user?

## Decision Drivers <!-- optional -->

* Want search bar to be noticeable -- reduce clutter
* Search should not always be accessible -- does not make too much sense contexually on the login page, for example

## Considered Options

* Ever-present on nav bar
* Moved down to the main recipe-related pages

## Decision Outcome

Chosen option: "Moved down to the main recipe-related pages", because it does not always make sense in the context of every part of the site. This also reduces clutter and draws attention to the search functionality.

### Positive Consequences <!-- optional -->

* Cleaner look/less cluttered UI
* More logical user flow

### Negative Consequences <!-- optional -->

* Somewhat more restrictive UX

## Pros and Cons of the Options

### Ever-present on nav bar

* Good, because user always has access to search
* Bad, because makes nav bar more cluttered
* Bad, because it does not always make sense for user to be able to search (when signing up, don't need to be worried about searching)

### Moved down to the main recipe-related pages

* Good, because more spread out UI looks better
* Good, because search bar is bigger (and thus highlighted as an important feature)
* Bad, because restricts users' ability to move around the site a little
