// put "import { ComplexSearch } from './apiComplexSearch.js';" in main.js without quotes
/**
 * Object to perform make axios fetch for recipe information (images, ids).
 * @param {string} input Options object holding parameters for fetch call
 *
 */
export class ComplexSearch {
   static tBread = {
     WAFFLE: 'waffle ',
     BUN: 'bun ',
     BREAD: 'bread ',
     BAGEL: 'bagel ',
     MUFFIN: 'muffin ',
     CROISSANT: 'croissant ',
     BAGUETTE: 'baguette ',
     BRIOCHE: 'brioche ',
     CHALLAH: 'challah ',
     SOURDOUGH: 'sourdough ',
     NAAN: 'naan ',
     FOCACCIA: 'focaccia ',
     PITA: 'pita ',
     CAKE: 'cake ',
     PRETZEL: 'pretzel ',
     BISCOTTI: 'biscotti ',
     BISCUIT: 'biscuit ',
     PANCAKE: 'pancake ',
     SCONE: 'scone '
   };

   constructor (input) {
     this.data = {};
     this.options = input;
     this.bread = ComplexSearch.tBread.BREAD;
     this.options.params.query = this.helpCalc(this.options.params.query);
   }
   /**
    * Change all the options parameters by passing in new options object
    * @param {Object} input Object holding options parameters for fetch call
    */
   changeAll (input) {
     this.options = input;
     this.options.params.query = this.helpCalc(this.options.params.query);
   };
   /**
    * Changing the query parameter
    * @param {String} input New search query
    */
   set query (input) {
     this.options.params.query = this.helpCalc(input);
   };
   /**
    * Get the query parameter
    */
   get query () {
     return this.options.params.query;
   }
   /**
    * Changing the number parameter
    * @param {String} new number
    */
   set number (input) {
     this.options.params.number = input;
   };
   /**
    * Get the number parameter
    */
   get number () {
     return this.options.params.number;
   }
   /**
    * Set the offset parameter
    * @param {String} new offset
    */
   set offset (input) {
     this.options.params.offset = input;
   };
   /**
    * Get the offset parameter
    */
   get offset () {
     return this.options.params.offset;
   }
   /**
    * Use when assigning this.options.params.query to prepend a bread noun to force a bread search in this bread universe
    */
   helpCalc (input) {
     return (input.toLowerCase().indexOf(this.bread.substr(0, this.bread.length - 1)) >= 0)
       ? input
       : this.bread + input;
   };
   /**
    * Loads recipes in data field of complexSearch_c object
    * @param {*} object complexSearch_c object
    */
   static async fComplexSearch (input) {
     await axios.request(input.options).then(function (response) {
       input.data = response.data;
     }).catch(function (error) {
       console.log(error);
     });
   }
}
