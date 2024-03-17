export const OverviewTodayCard = ({
  network,
  statsType,
  stats,
  porcentage,
  isUp,
}) => {
  const todayIconUrl = () =>
    isUp
      ? "/src/assets/images/icon-up.svg"
      : "/src/assets/images/icon-down.svg";

  const todayColor = () => (isUp ? "text-Lime-Green" : "text-Bright-Red");

  const formatStats = (stats) => {
    if (stats >= 10000) {
      return String(stats).slice(0, -3) + "k";
    } else {
      return stats;
    }
  };

  return (
    <article className="bg-Light-Grayish-Blue dark:bg-Dark-Desaturated-Blue rounded-[5px] p-6 flex flex-col justify-center hover:brightness-95 hover:dark:brightness-125 cursor-pointer">
      <div className="flex justify-between items-center">
        <p className="text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold text-xl">
          {statsType}
        </p>
        <img
          src={`/src/assets/images/icon-${network}.svg`}
          alt={`Icon ${network}`}
        />
      </div>
      <div className="flex justify-between items-baseline">
        <p className="text-Very-Dark-Blue dark:text-White font-bold text-[42px]">
          {formatStats(stats)}
        </p>
        <p className={`${todayColor()} flex items-center gap-1`}>
          <img src={todayIconUrl()} alt="Arrow Icon" /> {porcentage}%
        </p>
      </div>
    </article>
  );
};
