export let bear = {
  foodLevel: 10,
  setHunger: function () {
    const hungerInterval = setInterval(() => {
      this.foodLevel--;
      if (this.didYouGetEaten() == true) {
        clearInterval(hungerInterval);
        this.foodLevel = 0;
      }
    }, 1000);
  },
  didYouGetEaten: function () {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  },
  feed: function (amount) {
    return (food) => {
      this.foodLevel += amount;
      return `The bear ate ${food}! Food level goes up ${amount}`;
    };
  }
};

bear.eatSmall = bear.feed(5);
bear.eatMedium = bear.feed(10);
bear.eatLarge = bear.feed(15);
bear.eatYuck = bear.feed(-10);

