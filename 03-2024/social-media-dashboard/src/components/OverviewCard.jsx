export const OverviewCard = ({
  network,
  user,
  audienceType,
  audience,
  today,
  isUp,
}) => {
  const todayIconUrl = () =>
    isUp
      ? "/src/assets/images/icon-up.svg"
      : "/src/assets/images/icon-down.svg";

  const todayColor = () => (isUp ? "text-Lime-Green" : "text-Bright-Red");

  const formatAudience = (audience) => {
    if (audience >= 10000) {
      return String(audience).slice(0, -3) + "k";
    } else {
      return audience;
    }
  };

  const networkColors = {
    youtube: "bg-Youtube",
    facebook: "bg-Facebook",
    twitter: "bg-Twitter",
    instagram: "bg-Instagram",
  };

  return (
    <article className="bg-Light-Grayish-Blue hover:brightness-95 hover:dark:brightness-125 cursor-pointer dark:bg-Dark-Desaturated-Blue h-[216px] rounded-[5px] relative flex flex-col items-center justify-center gap-2 overflow-hidden">
      <div
        className={`h-[4px] w-full absolute top-0 ${networkColors[network]}`}
      ></div>
      <h2 className="flex items-center gap-2 text-Dark-Grayish-Blue dark:text-Desaturated-Blue">
        <img
          src={`/src/assets/images/icon-${network}.svg`}
          alt={`${network} icon`}
        />
        <span className="text-xs text-Dark-Grayish-Blue font-bold">{user}</span>
      </h2>
      <p className="text-[56px] text-Very-Dark-Blue dark:text-White font-bold">
        {formatAudience(audience)}
      </p>
      <p className="uppercase font-light tracking-widest text-center text-Dark-Grayish-Blue -mt-4">
        {audienceType}
      </p>
      <p className={`flex items-center gap-1 font-semibold ${todayColor()}`}>
        <img src={todayIconUrl()} alt="Arrow icon" />
        {today} Today
      </p>
    </article>
  );
};
