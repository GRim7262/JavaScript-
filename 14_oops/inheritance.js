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
  fixedCharge = 150;
}

const anshuTatkalTicket = new TatkalTicket("anshu", 15666, "Duranto Express");
const anshuTicket = new Ticket("anshu plane ticket", 15666, "Duranto Express");
console.log(anshuTatkalTicket.fixedCharge, anshuTicket.fixedCharge);
