// Smart Home System Variables
let RoomEmpty = true;
let season = "winter"; 
let HomeEmpty = true;
if (RoomEmpty) {
    console.log("Turning off the lights.");
}
if (season === "winter") {
    console.log("Setting temperature to 22°C.");
} 
else if (season === "summer") {
    console.log("Setting temperature to 18°C.");
}
if (HomeEmpty) {
    console.log("Locking the doors.");
}

// Student Scores
let mathScore = 60;
let scienceScore = 45;
if (mathScore >= 50 && scienceScore >= 50) {
    console.log("The student passes and can graduate.");
} else {
    console.log("The student does not graduate.");
}


// Flight Booking Variables
let ticket = 450;
let MorningFlight = true;
let providesMeal = false;
if (ticket < 500 && (MorningFlight || providesMeal)) {
    console.log("Buying the ticket.");
} else {
    console.log("Looking for another flight.");
}


// Laptop Purchase Variables
let ram = 8; 
let GraphicsCard = true;
let price = 75000; 
if (ram >= 8 && GraphicsCard && price <= 80000) {
    console.log("Buying the laptop.");
} else {
    console.log("Looking for alternatives.");
}

// Student Trip Eligibility Variables
let attendance = 85; 
let grade = 'A'; 
if (attendance > 80 && (grade === 'A' || grade === 'B')) {
    console.log("Student can attend the class trip.");
} else {
    console.log("Student cannot attend the class trip.");
}






