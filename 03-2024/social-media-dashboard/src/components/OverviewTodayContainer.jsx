import data from "../../data/data.json";
import { OverviewTodayCard } from "./OverviewTodayCard";

const todayData = data["overview-today"];

export const OverviewTodayContainer = () => {
  return (
    <section className="my-12 flex flex-col">
      <h2 className="text-Dark-Grayish-Blue dark:text-Very-Pale-Blue text-3xl font-bold mb-8 ">
        Overview - Today
      </h2>
      <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 ">
        {todayData.map((today) => (
          <OverviewTodayCard key={today.id} {...today} />
        ))}
      </div>
    </section>
  );
};
