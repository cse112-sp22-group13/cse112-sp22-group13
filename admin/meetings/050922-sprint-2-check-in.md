# Sprint 2 Check-In

## Meeting Information

**Date/Location:** 05-09-22 @ 3:00 PM, Zoom

**Present:** Eric, Kai, Lucius, TJ, Xavier, Jon, Peder, Anh, Nat,

**Absent:** Rodney

## Tasks

**Current Objective:** Evaluate our progress at the midpoint of this sprint and make a decision about the frontend language/framework.

**Unresolved tasks:** None

**Current tasks:** See objective.

**Undiscussed tasks/TODO:** None

## Notes/Decisions

**Features:** 
* Set up Firebase API key
* Issue with node modules and Heroku -- create package.json in src with Firebase dependencies
* Want to move API keys away from codebase -- BTS needs to take a look at how to do this
* Next steps: Work on adding Firebase backend

**UI:** 
* Coded the front page and recipes pages with React
  * Still need to implement navigation bar
* TJ, Kai, Lucius, Anh will continue with moving to React to get experience that will help with testing on the BTS side
* Created circular icons for front page
* Issue with authorization when using Spoonacular key to make requests (not authorized error -- 401): check https://spoonacular.com/food-api/docs#Authentication
  * Potentially too many requests -- transfer data into localStorage as JSONs -- wait and see
* Goal to get rest of the app ported by end of this sprint as hard deadline (front page, recipe page, login pages)

**BTS:** 
* A few tweaks with the linting
* Some documentation (team rules, ADRs) added
* Primitive local endpoint for E2E set up, likely will need more experimenting to fully work out
* Created visualization of roadmap for the rest of the quarter
* Next steps: Add more of the documentation in the backlog, improve tests/testing tools
  * Can likely help out with other groups with more high-priority tasks
  * Look into React linting and building -- change Heroku to support React/Firebase (should be Node-based), get ESLint to work with React (.jsx)
    * Create second package.json, to be pulled/deployed to Heroku (unless we can get it to pull from the existing one)
  * Consider where we're going to put the API keys (Spoonacular, Firebase, etc.)

**End Time:** 4:00 PM
