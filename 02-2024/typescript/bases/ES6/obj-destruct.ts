(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    active: boolean;
    power: number;
  };

  const avengers = {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downey Jr.",
    vision: "Paul Bettany",
    active: true,
    power: 1500,
  };

  // const { nick, ironman, vision, active, power } = avengers;
  // console.log(nick, ironman, vision.toUpperCase(), active, power.toFixed(2));

  const printAvenger = ({ vision, ...restParams }: Avengers) => {
    console.log(vision, restParams);
  };

  // printAvenger(avengers);

  const avengersArr: [string, boolean, number] = ["Cap. América", true, 150.15];

  const [capitan, ironman, seriaUnNumero] = avengersArr;

  // console.log(ironman);
})();
