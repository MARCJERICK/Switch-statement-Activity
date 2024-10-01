const ps = require("prompt-sync");
const prompt = ps();
// Prompt the user to enter a day of the week
let dayOfWeek = prompt("Enter a day of the week:");

// Convert the input to lowercase for easy comparison
dayOfWeek = dayOfWeek.toLowerCase();

// Map each day to a specific task 
switch (dayOfWeek) {
    case "monday":
        console.log("Task for Monday: Finising a quiz.");
        break;
    case "tuesday":
        console.log("Task for Tuesday: Finishing a Code.");
        break;
    case "wednesday":
        console.log("Task for Wednesday: Finising some quiz code.");
        break;
    case "thursday":
        console.log("Task for Thursday: Finishing a report.");
        break;
    case "friday":
        console.log("Task for Friday: Making a paiting project.");
        break;
    case "saturday":
        console.log("Task for Saturday: Planning what to do next week.");
        break;
    case "sunday":
        console.log("Task for Sunday: Rest and recharge.");
}