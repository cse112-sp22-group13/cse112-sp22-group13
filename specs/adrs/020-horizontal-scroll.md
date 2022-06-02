# Horizontal Scroll Bar

* Status: accepted <!-- optional -->
* Deciders: Eric, TJ, Anh, Kai <!-- optional -->
* Date: 6-1-2022 <!-- optional -->

## Context and Problem Statement

In user testing/feedback, we found that the horizontal scroll bars for the categories was not immediately apparent to all users. We want to improve our app's usability by making our UI more intuitive. How can we draw attention to the scroll bar/functionality?

## Decision Drivers <!-- optional -->

* Feedback from team 3 in frenemy feedback session, at [052922-frenemy-feedback.md](../../admin/meetings/052922-frenemy-feedback.md)
* Users should easily figure out the horizontal scrolling functionality
* Want to maintain app's "clean" look/reduce number of things on the screen at once

## Considered Options

* No change
* Scroll bar always visible
* Scroll bar visible while hovering over the recipes in that category

## Decision Outcome

Chosen option: "Visible while hovering", because it is a good balance between preserving our current aesthetic/minimizing clutter and providing users with enough information to streamline their experience

### Positive Consequences <!-- optional -->

* Clear to users that there is horizontal scrolling once they hover over a recipe/category
* Reduces clutter until user needs the information/feature

### Negative Consequences <!-- optional -->

* Possibly unintuitive if users interact in unconventional ways

## Pros and Cons of the Options

### No change

* Good, because best DX
* Bad, because worst UX

### Scroll bar always visible

* Good, because highest clarity
* Bad, because increases page clutter

### Scroll bar visible while hovering over the recipes in that category

* Good, because improves clarity while not sacrificing as much regarding page clutter
* Bad, because it is possible users may never hover over a recipe/category and leave once they see the initial categories

## Links

* Issue brought to our attention in feedback session [052922-frenemy-feedback.md](../../admin/meetings/052922-frenemy-feedback.md).