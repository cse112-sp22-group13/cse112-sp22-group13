# Sprint 2 Retro

## Meeting Information

**Date/Location:** 05-16-22 @ 3:00 PM, Zoom

**Present:** Eric, Kai, Lucius, TJ, Xavier, Jon, Anh, Nat, Rodney

**Absent:** Peder

## Tasks

**Current Objective:** Discuss the past sprint and work on our next dues.

**Unresolved tasks:** None

**Current tasks:** Hold a quick retrospective, discuss/do branch integration, talk about progress presentation, kickoff for sprint 3, review Powell feedback

**Undiscussed tasks/TODO:** None

## Notes/Decisions

### Retro

* https://retro.tools/K7GGfm1g1aYBgtn12Lwk


### Integration

* Firebase: got the recipe list to work, need to add actual recipe displays, adding recipes
  * Not using node modules -- just importing it as URL
* BTS: reorganized repository to optimize node modules/building, need to adapt other branches to this reorg and confirm current functionality
  * Firebase is hosted by Google servers, just using functions from a JS file -- no need to separate client/source
* React: 
  * Integrate individual React branches, for merge to main
* Result: React branches all live on main, backend (Firebase) on separate branch we will merge next sprint/after the presentation

### Presentation

* UI: Show off our designs on Figma, frontend pages (merged)
  * Next steps: review Powell feedback and integrate it, fine-tune current page implementations
* Features: Show the Firebase console/how we're getting data
  * Next steps: User accounts, finish Firebase migration (getting rid of localStorage); better performance features (only loading a certain # of recipes at a time), search 
* BTS: CI/CD pipeline, documentation
  * Next steps: Implementing more tests, document changes w/ React/rewrites
* Deadline for clips for each group: 5/17, noon
  * Describe what you did and demo, plans for next sprint

### Sprint 3 Kickoff

* Refer to presentation (Next steps)

### Powell Feedback

* Go over it (mainly UI stuff, a little bit of backend/code-related commentary), see if you have any questions

### Grading Midterms

* By Thursday
* Team: 2 points per question, 3 free (be lenient)
* General: If they've written something kind of relevant, be generous/at least half credit (rest is up to your discretion)

**End Time:** 4:00 PM
