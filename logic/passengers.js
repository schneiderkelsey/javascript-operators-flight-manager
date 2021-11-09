function Passengers() {
    function checkFlightCapacity(capacity, passengers) {
        let numPassengers = 0; 
        for (let i = 0; i < passengers.length; i++) {
            numPassengers += passengers[i];
        }
   //If the total number of passengers is less than the capacity of the flight, return it. 
   if (numPassengers <= capacity) { 
       return numPassengers;
   }

   //If there are more passengers than the flight capacity, you should throw an error. 
   if (numPassengers > capacity) {
       throw new Error("There are more passengers than the flight capacity"); 
    }
}

return { checkFlightCapacity }; 
}

module.exports = Passengers();

