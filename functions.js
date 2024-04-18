// JavaScript
// timetable.js 
// Project for IT 240
// Last updated: 4-2-2024

// Define your availability
const availability = {
    Monday: ["1:30pm - 1:45pm", "3:00pm - 4:00pm", "6:00pm - 9:00pm"],
    Tuesday: ["10:30am - 1:40pm", "6:00pm - 8:00pm"],
    Wednesday: ["1:00pm - 1:45pm", "3:00pm - 4:00pm", "6:00pm - 9:00pm"],
    Thursday: ["10:30am - 12:00pm", "6:00pm - 8:00pm"],
    Friday: ["1:00pm - 1:45pm", "3:00pm - 4:00pm"]
};

// Function to populate availability for each day
function populateAvailability() {
    for (const day in availability) {
        const availabilityCell = document.getElementById(day.toLowerCase() + "Availability");
        availabilityCell.textContent = availability[day].join(", ");
    }
}
