# Choosing Where To Store Documentation

* Status: accepted
* Deciders: Eric, Xavier, TJ <!-- optional -->
* Date: 2022-04-28 <!-- optional -->

## Context and Problem Statement

Since changes to main must go through the entire build pipeline (consuming GitHub Actions minutes and requiring manual review), where should we store documentation/artifacts that are not directly part of the app itself?

## Decision Drivers <!-- optional -->

* Having to go through the build process and manual approval for adding meeting notes/ADRs to the repo is annoying and stalls what should be a simple action
  * Furthermore, the workflow actions are more related to the codebase rather than documentation -- does not make much sense to run them every time we edit docs
* Docs/diagrams are not directly part of the source code -- we do not need it to be in the main branch, it simply needs to be easily accessible/consolidated
* We want to preserve the current file structure/organization scheme as much as possible, as the previous group has left some of their own documentation that we do not simply want to get rid of

## Considered Options

* Leave in main (as is)
* Move to Wiki page
* Move to GH Pages
* Move to separate branch
* Move to separate repository
* … <!-- numbers of options can vary -->

## Decision Outcome

Chosen option: "Move to separate branch", because this lets us add documentation without needing to run the workflows/get manual approvals each time. The wiki page does not let us create subfolders for file organization, and the GitHub Page for this repository is currently in use for the JSDoc. Between making a separate branch and creating a separate repository, the branch is a simpler solution that keeps our project consolidated in one repository.

### Positive Consequences <!-- optional -->

* Allows easier documentation management

### Negative Consequences <!-- optional -->

* More branches to keep track of

### Leave In Main

Leave our documentation as is, in the main branch. <!-- optional -->

* Good, because it is simplest and preserves the inherited file structure.
* Bad, because requiring manual review and CI/CD workflows to be run when pushing documentation is unnecessary.

### Move to Wiki Page

Move our documentation all to the Wiki page. <!-- optional -->

* Good, because we would have all of the onboarding content in one place.
* Good, because intuitively, having documentation in the wiki section makes sense.
* Bad, because GitHub Wiki does not support subfolders -- this would create clutter in the wiki.

### Move to GH Pages

Move our documentation to GitHub Pages.

* Good, because our documentation would be moved away from the repo itself.
* Bad, because the GH Pages is currently in use for our JSDoc.

### Move To Separate Branch

Move our documentation to a separate "docs" branch.

* Good, because this branch would not need the same protection as main, letting us add documentation without the aforementioned concerns.
* Good, because this leaves our codebase and documentation fairly consolidated (still in the same overall repository).
* Bad, because this makes our branch system slightly more complicated.

### Move To Separate Repository

* Good, because this repository would not need the extensive branch protection/workflows in the main repository.
* Bad, because this adds complexity.
* Bad, because this separates our code and documentation a little too much.