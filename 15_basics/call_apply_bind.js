// CALL
// const student1 = {
//   name: "Anshu Raj",
//   marks: 25,
//   isPassed: function () {
//     if (this.marks > 25) {
//       console.log("Passed");
//     } else {
//       console.log("Failed");
//     }
//   },
// };
// const student2 = {
//   name: "Rohan",
//   marks: 88,
// };
// student1.isPassed();
// student1.isPassed.call(student2);

// APPLY
const address1 = {
  city: "Patna",
  state: "Bihar",

  address: function (street, pincode) {
    console.log(`${street}, ${pincode}, ${this.city}, ${this.state}`);
  },
};

const address2 = {
  city: "Ranchi",
  state: "Jharkhand",
};
// FOR CALL
address1.address.call(address2, "STREET", 123456);
// FOR APPLY
address1.address.apply(address2, ["STREET", 123456]);
// FOR BIND
const bindAddressValue = address1.address.bind(address2, "STREET", 123456);
bindAddressValue();
