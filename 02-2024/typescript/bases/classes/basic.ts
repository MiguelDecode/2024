(() => {
  class Avenger {
    // private name: string
    // private team: string;
    // public realName?: string;
    // Propiedad estática, no es necesario instanciar una nueva clase para acceder a ella.
    static avgAge: number = 35;
    static getAvgAge() {
      return this.name;
    }

    constructor(
      private name: string,
      private team: string,
      public realName?: string,
      avgAge: number = 55
    ) {
      Avenger.avgAge = avgAge;
    }

    public bio() {
      return `${this.name} (${this.team})`;
    }
  }

  // const antman: Avenger = new Avenger("Antman", "Capitán", "Scott Lang");
  // console.log(antman);

  // console.log(antman.bio());
  // console.log(Avenger.getAvgAge());
})();
