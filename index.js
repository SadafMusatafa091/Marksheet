"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
//Asking for Roll Number
var roll = await inquirer_1.default.prompt({
    type: "number",
    name: "num1",
    message: "Enter your roll number:",
});
// Roll Number
var rollNum = roll.num1;
//Checking Roll Number
if (rollNum === 323245) {
    //asking roll number
    var marks = await inquirer_1.default.prompt([
        {
            name: "english",
            type: "number",
            message: "Please Enter your english number:"
        },
        {
            name: "urdu",
            type: "number",
            message: "Please Enter your urdu number:"
        },
        {
            name: "biology",
            type: "number",
            message: "Please Enter your biology number:"
        },
        {
            name: "physics",
            type: "number",
            message: "Please Enter your physics number:"
        },
        {
            name: "chemistry",
            type: "number",
            message: "Please Enter your chemistry number:"
        },
    ]);
    // extract marks
    var eng = marks.english;
    var ud = marks.urdu;
    var bio = marks.biology;
    var phy = marks.physics;
    var chem = marks.chemistry;
    //Percentage
    var totalMaeks = 500;
    var obtainMarks = eng + ud + bio + phy + chem;
    var percent = ((obtainMarks / totalMaeks) * 100);
    //answers
    console.log("Name: Mohsin Raza");
    console.log("Father Name: Fida Hussain");
    console.log("English marks = ".concat(eng, " out of 100"));
    console.log("Urdu marks = ".concat(ud, " out of 100"));
    console.log("Biology marks = ".concat(bio, " out of 100"));
    console.log("Physics marks = ".concat(phy, " out of 100"));
    console.log("chemistry marks = ".concat(chem, " out of 100"));
    console.log("Obtain Marks = ".concat(obtainMarks, " Total Marks = ").concat(totalMaeks));
    console.log("Percentage = ".concat(percent, " %"));
}
else {
    console.log("Invalid Roll Number");
}
