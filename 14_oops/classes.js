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

const anshuTicket = new Ticket("Anshu Raj", 14546, "hwh to ndls");

anshuTicket.bookTicket(100, "delhi", "howrah");

const rohanTicket = new Ticket("Rohan Raj", 56548, "hwh to rph");

rohanTicket.bookTicket(50, "howrah", "asansol");

console.log({
  anshuTicket,
  rohanTicket,
});
