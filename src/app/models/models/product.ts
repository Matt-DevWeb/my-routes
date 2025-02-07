export class Product {
  constructor(productId: number, productName: string, productPrice: number) {
    this.productId = productId;
    this.productName = productName;
    this.productPrice = productPrice;
  }
  productId: number;
  productName: string;
  productPrice: number;
}
