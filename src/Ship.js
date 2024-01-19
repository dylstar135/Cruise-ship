const Port = require("./Port");
const Itinerary = require("./Itinerary");

class Ship {
  constructor(name, itinerary) {
    this.name = name;
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
  }

  setSail() {
    const itinerary = this.itinerary;
    const currentPortIndex = itinerary.ports.indexOf(this.currentPort);
    if (currentPortIndex === this.itinerary.ports.length - 1) {
      throw new Error("End of Itinerary reached");
    }
    return `${this.name} is at sea`;
  }

  dock() {
    const itinerary = this.itinerary;
    const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

    this.currentPort = itinerary.ports[previousPortIndex + 1];
  }
}

module.exports = Ship;
