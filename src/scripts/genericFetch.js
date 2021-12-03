/**
 * Generic fetch that can be used for most of the Spoonacular API calls
 */
export class GenericFetch {
  /**
   * Take in object to parse into axios fetch call.
   * @param {Object} input Options object to be parsed into
   */
  constructor (input) {
    this.options = input;
    this.data = {};
  }
  
  /**
   * Async function will request data from api, if there is an error it will
   * be caught and console log the error.
   * @param {Object} input
   */
  static async fGenericFetch (input) {
    await axios.request(input.options).then(function (response) {
      input.data = response.data;
    }).catch(function (error) {
      console.log(error);
    });
  }
}
