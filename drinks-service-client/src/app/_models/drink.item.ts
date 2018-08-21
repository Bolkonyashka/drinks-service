export class DrinkItem{
    img: string;
    name: string;
    price: number;
    count: number;

    constructor(cImg: string, cName: string, cPrice: number, cCount: number) {
      this.img = cImg;
      this.name = cName;
      this.price = cPrice;
      this.count = cCount;
    }

    available() {
      return this.count != 0;
      //alert(this.count)
    }

  }