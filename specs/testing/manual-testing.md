* Bryan's Testing:

** Hidden Cards
Commit edadc21887a7e2496978aae4e740da605eec1b16 on Nov 29,
- Buttons were using the hidden class inappropriately and not dissapearing when they should
- Redid the classlist logic on applying the hidden classes to buttons

** Update/Scaling
Commit 1d2167f9121ae2f685577d4d5924ca60c87379e1 On Nov 30,
- The update feature for scaling our servings had to grab the integer from the page, which means
  that our parser to generate recipe expand had to be updated to adjust for this feature.
- Redid the html generation in recipe expand to account for updating the servings

Commit 2006127d6563ea5f290e335c8484b0e45d463161 On Nov 30,
- Ryan fixed the update servings button and relevant code as we had two different paradigms on how.
  we were interacting with the recipe expand page and the fixes were undone due to large amount
  of pushes and old code went through
- Redid Ryan's fixes.

** Delete Card
Commit 64d146ada40c396303fa32b1b84b5146b15fb784 On Dec 1,
- Deleting from the favorites list did not actually update localstorage to delete the recipe visually
  from both recipe list and favorites.
- Updated the favorites list deletion code to correctly update the map in localstorage

** Reinsert Deleted
Commit 4690b4211c14f30f8d415df262e60e551207bfd2 on Dec 1,
- Reinserting a deleted inserted recipe would not correctly show the recipe in recipe list because the
  deleted class was not applying correctly
- Updated the recipe logic to correctly remove the deleted tag in the html on generation and update

** Recipe Expand Parsing
Commit 682ae0879ff87be19edd4d5a9d1c1ecafd485250 on Dec 1,
- New styling for the ui broke recipe expand's parsing.
- Redid recipe expand's html generation to account for the new ui and updated servings parsing
  to account for the new ui changes also

** Enter Key Binded to 2 text inputs at same time
Commit 8c08471d75bddc30ac94c1550128a414de5fa0bc on Dev 2,
- Fixed a conflicting enter key bug since both add and search bars utilized the same html
  and triggered a overlapping input function.
- New code to differentiate whether a user has the search bar or add bar is active

** Conflicting Inits
Commit 48c6946e3b43a7d3096bdcbf799d5970e050b1ae on Dec 2,
- The fix for the conflicting error key bug was not being correctly applied due to another initialize function
  in a separate file overriding the original fix attempting to do a similar fix.
- Removed the conflicting init function and uncessarry function.

* Alanna's Testing:


