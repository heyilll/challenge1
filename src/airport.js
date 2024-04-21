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

    }, 
    currentlyLanded: [],
    checkIfLanded: function () {
        
    }, 
    instructLanding: function () {

    },
    instructTakeoff: function () {

    },
};

export default airport;