(() => {
  abstract class Mutante {
    constructor(public name: string, public realName: string) {
      // console.log("Llamado constructor mutante");
    }
  }

  class Xmen extends Mutante {
    salvarMundo() {
      return "Mundo a salvo";
    }
  }

  class Villian extends Mutante {
    conquistarMundo() {
      return "Mundo conquistado";
    }
  }

  const wolverine: Xmen = new Xmen("Wolverine", "Logan");
  const magneto: Villian = new Villian("Magneto", "Magnus");

  // console.log(wolverine.salvarMundo());
  // console.log(magneto.conquistarMundo());

  const printName = (character: Mutante) => {
    console.log(character.realName);
  };

  // printName(wolverine);
})();
