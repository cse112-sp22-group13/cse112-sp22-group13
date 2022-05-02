# Sprint 1 Retro/Sprint 2 Kickoff

## Meeting Information

**Date/Location:** 05-02-22 @ 3:00 PM, Zoom

**Present:** Eric, Kai, Lucius, Nat, TJ, Xavier, Anh, Jon, Peder, Rodney

**Absent:** None

## Tasks

**Current Objective:** Hold a retrospective to review our first sprint and kick off our second sprint.

**Unresolved tasks:** None

**Current tasks:** Discuss changes and tasks for our next sprint.

**Undiscussed tasks/TODO:** Make sure linting/the build pipeline works for everyone

## Notes

**Retro:** https://retro.tools/Oih4D9XgwM9WfcfBmCay
- Want sub-group leads to improve communication channels within the team 
- Want more inter-group communication -- this will likely occur more often as we get past exploratory/familiarizing phases and with the group leads
- Subdividing into groups made work more efficient, although it has worsened our overall group communication a bit -- try to be a bit more active in Slack
  -  Ideally, more meetings throughout the week -- not extremely feasible because our schedules do not line up very well

**Features:** 
- which database for hosting/which API? => Firebase (Most familiarity)
  - Highest priority -- most restructuring
- API keys as plaintext is bad => store in Secrets
- Backlog based on order of priority
- Move to react, create backend w/ Firebase in parallel
- Spoonacular -- scrape API call and cache it in Firebase to initialize it, then use Firebase as main recipe database

**UI:**
- basic redesign of main/recipe list/recipe pages on Figma -- added category pages based on tagging
- Search based on tagging system -- probably will be able to work with our API
  -  UNION (or AND) search queries
- Need to add: Favorites "bar", mobile/web display (infinitely scrolling or finite), add recipe
  -  Prioritize web, mobile will be based on it if we have time
-  Let user edit notes at the end of recipes rather than editing the recipe itself
-  Keep bread aesthetic while allowing any recipe (not just bread-related) -- preserves original feel while broadening potential use cases
- Edit recipe: makes a local clone/"fork" of the recipe for the user
  -  Should be kept in Firebase -- doesn't make sense to put it in localstorage
    - localstorage is local to device, with login system it doesn't make sense to use both for recipes
    - Edits should only be notes rather than cloning entire recipe? => For now, database size should not be too much of a concern -- stick with forking for now
- Color mocks: 
  -  Warmer/brighter colors look nicer -- more inviting, more "bread"-y
  -  Bread logos/shapes are fun
  -  Highlighting/drop shadow make elements a lot clearer
  -  Orange/tan palette is more in-line with bread
    -  Check with Google Lighthouse to check if there is enough contrast
  -  Wood aesthetic -- like the cutting board feel
  -  UI design is trending towards minimalism
  -  Off-white feels more inviting, more aesthetically appealing than pure white
    -  Gray, white feel more mechanical/professional

**BTS:**
- Jest and Puppeteer testing online
- Local linting -- check the wiki
- Set up project boards for issues
- Next: creating more repo artifacts that the previous group was missing, implement tests (on hold -- React should require some changes to testing)

Team leads: Decide by tomorrow, they will be responsible for taking charge of intra-group communication (at least once at the midway point)

**End Time:** 4:20 PM
