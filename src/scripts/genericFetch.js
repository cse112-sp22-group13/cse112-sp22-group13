/**
 * Generic fetch that can be used for most of the Spoonacular API calls
 */
export class GenericFetch {
  /**
   * @param {Object} input Options object to be parsed into
   */
  constructor (input) {
    this.options = input;
    this.data = {};
  }
  /**
   * Makes the fetch call
   * @param {Object} input Options object held by an instance of this class
   */
  static async fGenericFetch (input) {
    await axios.request(input.options).then(function (response) {
      input.data = response.data;
    }).catch(function (error) {
      console.log(error);
    });
  }
}
