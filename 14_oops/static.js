class Ticket {
  status = "No booked";
  static increment = 1;

  constructor(name, trainNo, trainName) {
    this.name = name;
    this.trainName = trainName;
    this.trainNo = trainNo;
  }

  static calculatePNR() {
    return (Math.random() * 10000).toFixed(0).toString();
  }
  bookTicket(amount, source, destination) {
    this.amount = amount;
    this.source = source;
    this.destination = destination;
    this.status = "Booked";
    this.pnr = Ticket.calculatePNR() + Ticket.increment;
  }

  cancleTicket() {
    this.status = "Cancelled";
  }
}

class TatkalTicket extends Ticket {
  #fixedCharge = 150;
  #isRefundable = true;
  get fixedCharge() {
    return this.#fixedCharge;
  }

  bookTicket(amount, source, destination, isRefundable) {
    super.bookTicket(amount, source, destination);
    this.amount += this.#fixedCharge;
    this.#isRefundable === isRefundable;
  }

  set fixedCharge(charge) {
    if (typeof charge !== "number") {
      throw Error("Not a number");
    }
    this.#fixedCharge = charge;
  }
}

const anshuTatkalTicket = new TatkalTicket("anshu", 15666, "Duranto Express");
const anshuTicket = new Ticket("anshu plane ticket", 15666, "Duranto Express");

anshuTatkalTicket.bookTicket(500, "dhn", "rnc", false);
anshuTicket.bookTicket(500, "dhn", "rnc");

console.log(anshuTatkalTicket, anshuTicket);

// console.log(Ticket.calculatePNR());
