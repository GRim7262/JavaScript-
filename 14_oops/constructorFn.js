function Ticket(name, trainNo, trainName) {
  this.name = name;
  this.trainNo = trainNo;
  this.trainName = trainName;
  this.status = "Not booked";
}

Ticket.prototype.bookTicket = function bookTicket(amount, source, destination) {
  this.amount = amount;
  this.source = source;
  this.destination = destination;
  this.status = "Booked";
  this.pnr = (Math.random() * 10000).toFixed(0).toString();
};

Ticket.prototype.cancleTicket = function cancleTicket() {
  this.status = "Cancelled";
};

const anshuTicket = new Ticket("Anshu Raj", 14546, "hwh to ndls");

anshuTicket.bookTicket(100, "delhi", "howrah");

const rohanTicket = new Ticket("Rohan Raj", 56548, "hwh to rph");

rohanTicket.bookTicket(50, "howrah", "asansol");

rohanTicket.cancleTicket();

console.log({
  anshuTicket,
  rohanTicket,
});
