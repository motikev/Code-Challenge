function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    let demeritPoints = 80;
  
    if (speed <= speedLimit) {
      console.log("Ok");
      return;
    }
  
    demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
  
    if (demeritPoints > 12) {
      console.log("License suspended");
    } else {
      console.log("Points: " + demeritPoints);
    }
  }
  
  calculateDemeritPoints(80); 2
  calculateDemeritPoints(120); License Suspended
  calculateDemeritPoints(65); Ok