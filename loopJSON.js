//Student details JSON

let studentData = [
  { id: "101", name: "Cyril", course: "CSE" },
  { id: "102", name: "Senapathi", course: "CSE" },
  { id: "103", name: "Gopinath", course: "EEE" },
  { id: "104", name: "Saravanan", course: "EEE" },
  { id: "105", name: "Hariharan", course: "ECE" },
];

//Display student details using for loop
console.log("\t\t------Display student details using for loop------");
for (let i = 0; i < studentData.length; i++) console.log(studentData[i]);

//Display student details using for in loop
console.log("\t\t----Display student details using for-in loop----");
for (let i in studentData) console.log(studentData[i]);

//Display student details using for of loop
console.log("\t\t----Display student details using for-of loop----");
for (let data of studentData) console.log(data);

//Display student details using forEach loop
console.log("\t\t----Display student details using forEach loop----");
Object.keys(studentData).forEach((key) => {
  console.log(studentData[key]);
});
