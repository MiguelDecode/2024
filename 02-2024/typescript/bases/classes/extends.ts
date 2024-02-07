(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      // console.log("Constructor Avenger llamado.");
    }

    protected getFullName() {
      return `${this.name} - ${this.realName}`;
    }

    get fullName() {
      return `${this.name} - ${this.realName}`;
    }

    set fullName(name: string) {
      if (name.length < 3) {
        throw new Error("El nombre debe de ser mayor de tres letras.");
      }
      this.name = name;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      // console.log("Constructor de Xmen llamado");
    }

    getFullNameXmen() {
      console.log(super.getFullName());
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan", true);

  // console.log(wolverine.fullName);
  // Set of class Avenger
  // wolverine.fullName = "Lobezno";
  // console.log(wolverine.fullName);

  // wolverine.getFullNameXmen();
})();
