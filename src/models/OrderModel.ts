class OrderModel {
  public size: string;
  public exceptions: string[] = [];

  constructor(size: string, exceptions: string[]) {
    this.size = size;
    this.exceptions = exceptions;
  }
}

export default OrderModel;
