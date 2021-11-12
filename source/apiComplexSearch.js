// put "import { complexSearch_c } from './apiComplexSearch.js';" in main.js without quotes
import axios from 'axios'
/**
 * @param {string} input
 *
 */
export class cComplexSearch {
   data = {};
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
     this.options = input
     this.bread = cComplexSearch.bread_t.BREAD
     this.options.params.query = this.#helpCalc(this.options.params.query)
   }

   changeAll (input) {
     this.options = input
     this.options.params.query = this.#helpCalc(this.options.params.query)
   };

   /**
    * @param {any} input
    */
   set query (input) {
     this.options.params.query = this.#helpCalc(input)
   };

   get query () {
     return this.options.params.query
   }

   /**
    * @param {any} input
    */
   set number (input) {
     this.options.params.number = input
   };

   get number () {
     return this.options.params.number
   }

   /**
    * @param {any} input
    */
   set offset (input) {
     this.options.params.offset = input
   };

   get offset () {
     return this.options.params.offset
   }

   // Use when assigning this.options.params.query
   #helpCalc (input) {
     return (input.toLowerCase().indexOf(this.bread.substr(0, this.bread.length - 1)) >= 0)
       ? input
       : this.bread + input
   };

   /**
    * Loads recipes in data field of complexSearch_c object
    * @param {*} object complexSearch_c object
    */
   static async fComplexSearch (object) {
     await axios.request(object.options).then(function (response) {
       object.data = response.data
     }).catch(function (error) {
       console.log(error)
     })
   }
}
