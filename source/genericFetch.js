export class GenericFetch {
  constructor (input) {
    this.options = input;
    this.data = {};
  }

  static async fGenericFetch (input) {
    await axios.request(input.options).then(function (response) {
      input.data = response.data;
    }).catch(function (error) {
      console.log(error);
    });
  }
}
