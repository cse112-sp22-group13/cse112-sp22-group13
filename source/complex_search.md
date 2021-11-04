
Put this at top of main.js:

`import { complexSearch_c, complexSearch_f } from './source/apiComplexSearch.js';`

Obviously, change the location of file what is appropriate.

First, you need to create the object complexSearch_c, for example:
`let complexObj = new complexSearch_c('', 5, 5, complexSearch_c.bread_t.BREAD);`

So far, the four parameters, in order, to it are:
 * query:  NLP search query, words can be seperated by spaces.
 * number: Number of results to return on search.
 * offset: offset is for skipping results, like moving to next page (if number_p is 5, and offset is 5 you go to page 2, offset 10 would be page 3)
 * bread:  type of bread you want the search to focus on, defaults to bread. Please use the "enum", complexSearch_c.breat_t, I made in the object. The autocomplete will show you the options (if you don't use bread_t enum make sure there is a space after the word, like 'bread ')

To change any of these parameters after they are set, just access them by their name. Like this `complexObj.query = 'banana';`

To actually initiate a search, just call the complexSearch_f function and pass the object inside:
`await complexSearch_f(complexObj);` (the await seems to be necessary)
The data returned will be stored in the `data` field of the object, `complexObj.data` </br>
In addition to that, the object has a changeAll() method that allows you to change all the fields at once after the object is made, like `complexObj.changeAll('chocolate', 10, 0, complexSearch_c.breat_t.BAGEL);` and then you can initiate a brand new search with complexSearch_f (_c is class, _f is function)

complexSearch_c.bread_t holds all the types of bread which we can prepend to the string of the query.

Schema of data returned:
```
number: {number} // same number value we sent in through options
offset: {number} // same offset value we sent in through options
results: {
   id: {number}
   image: {string} //image link
   imageType: {string} //jpg, png, etc
   title: {string}
}
totalResults: {number} // total number of recipes that can possibly be accessed through the query we sent (with different number, offset values of course)
```
 