(() => {
  const hero: string = "Flash";

  function returnName() {
    return hero;
  }

  const activateBatSignal = () => "BatSignal activate";

  console.log(typeof activateBatSignal);

  const heroName = returnName();
})();
