(() => {
  class Avenger {
    name;
    power;

    constructor(name = "No name", power = 0) {
      this.name = name;
      this.power = power;
    }

    saveTheWorld() {
      console.log("Mundo salvado");
    }
  }

  const hulk = new Avenger("Hulk", 1500);

  console.log(hulk);
  hulk.saveTheWorld();

  class FlyingAvenger extends Avenger {
    flying;

    constructor(name, power, flying = false) {
      super(name, power);
      this.flying = flying;
    }

    canFly() {
      return `Volar: ${this.flying}`;
    }
  }

  const falcon = new FlyingAvenger("Falcón", 100, true);
  console.log(falcon);
  console.log(falcon.canFly());
})();
