class birdFace {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this.name;
  }
  set name(value) {
    if (value.length !== 7) {
      return "BUT WHY!?";
    }
  }
}

module.exports = {
  birdFace
};
