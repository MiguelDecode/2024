(() => {
  class Apocalipsis {
    static instance: Apocalipsis;

    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis("Soy Apocalipsis el verdadero.");
      }

      return Apocalipsis.instance;
    }

    changeName(newName: string): void {
      this.name = newName;
    }
  }

  // const apocalipsis = new Apocalipsis("Soy Apocalipsis... el único");

  const apocalipsis1 = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();

  console.log(apocalipsis1, apocalipsis2, apocalipsis3);

  // const apocalipsis2 = new Apocalipsis("Soy Apocalipsis2... el único");
  // const apocalipsis3 = new Apocalipsis("Soy Apocalipsis3... el único");
  // const apocalipsis4 = new Apocalipsis("Soy Apocalipsis4... el único");

  // console.log(apocalipsis, apocalipsis2, apocalipsis3, apocalipsis4);
})();
