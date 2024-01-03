class Ticket {
  status = "No booked";

  constructor(name, trainNo, trainName) {
    this.name = name;
    this.trainName = trainName;
    this.trainNo = trainNo;
  }

  bookTicket(amount, source, destination) {
    this.amount = amount;
    this.source = source;
    this.destination = destination;
    this.status = "Booked";
    this.pnr = (Math.random() * 10000).toFixed(0).toString();
  }

  cancleTicket() {
    this.status = "Cancelled";
  }
}

class TatkalTicket extends Ticket {
  #fixedCharge = 150;

  #changeFixedByAdmin() {
    this.#fixedCharge = 500;
  }

  get fixedCharge() {
    return this.#fixedCharge;
  }

  set fixedCharge(charge) {
    if (typeof charge !== "number") {
      throw Error("Not a number");
    }

    this.#changeFixedByAdmin();
  }
}

const anshuTatkalTicket = new TatkalTicket("anshu", 15666, "Duranto Express");
const anshuTicket = new Ticket("anshu plane ticket", 15666, "Duranto Express");

anshuTatkalTicket.fixedCharge = 200;

console.log(anshuTatkalTicket.fixedCharge);
