class Ship {
  constructor(name, startingPort) {
    this.name = name;
    this.startinPort = startingPort;
  }

  setSail() {
    this.startinPort = null;
    return `${this.name} is a sea`;
  }
}

module.exports = Ship;

module.exports = Ship;
