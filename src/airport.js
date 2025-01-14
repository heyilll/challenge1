import Airplane from "./airplane.js";

const airport = {
    getCapacity: function () {
        return this.capacity;
    }, 
    capacity: 5, 
    updateCapacity: function (input) {
        if (!Number(input)) {
            return;
        }
        this.capacity = input;
        return;
    }, 
    checkIfFull: function () {
        return this.currentlyLanded.length === this.capacity;
    }, 
    currentlyLanded: [],
    checkIfLanded: function (planeID) {
        if (!typeof planeID === "string") {
            return false;
        }
        return this.currentlyLanded.some(x => x.getID() === planeID);
    }, 
    instructLanding: function (planeID) { 
        if (!this.checkIfLanded(planeID) && !this.checkIfFull()&& typeof planeID === "string") { 
            if (this.weather === "stormy") {
                return false;
            }
            const x = new Airplane(planeID);
            this.currentlyLanded.push(x);
            return true;
        }
        return false;
    },
    instructTakeoff: function (planeID) {
        if (this.checkIfLanded(planeID)) {
            if (this.weather === "stormy") {
                return false;
            }
            let ind = this.currentlyLanded.findIndex(x => x.getID() === planeID);
            this.currentlyLanded = this.currentlyLanded.splice(ind, 1);
            return true;
        }
        return false;
    },
    weather: "normal",
    updateWeather: function () {
        const weatherConditions = ["normal", "stormy"]
        this.weather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    }
};

export default airport;