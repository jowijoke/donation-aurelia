//defines a message of interest - namely an update to the total donations received.
export class TotalUpdate {
  constructor(total) {
    this.total = total;
  }
}

export class LoginStatus {
  constructor(status) {
    this.status = status;
  }
}
