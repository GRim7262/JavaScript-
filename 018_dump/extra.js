const addharCardData = {
  firstName: "Rohan",
  lastName: "kumar",
  dob: "01-01-2000",
  adharNo: 479382749328749,
  address: { village: "xyz", district: "ranchi", state: "jharkhand" },
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// this -> this refers to current object
// in this example -> this === addharCardData

const fullName = addharCardData.fullName();
console.log(fullName);
