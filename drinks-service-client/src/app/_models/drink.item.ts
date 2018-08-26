export class DrinkItem{
    // Web.API model properties
    id: number = 0;
    img: string = '';
    name: string = '';
    price: number = 0;
    count: number = 0;

    /*
      Constructor to create an instance from an DrinkItem-like object
    */
    constructor(data: any = {}) {
      for (let key in data) {
        if (key in this) {
          this[key] = data[key];
        }
      }
    }

    available() {
      return this.count > 0;
    }

  }