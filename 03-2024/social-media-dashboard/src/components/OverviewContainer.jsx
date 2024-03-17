import data from "../../data/data.json";
import { OverviewCard } from "./OverviewCard";

const { overview } = data;

export const OverviewContainer = () => {
  return (
    <section className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between -mt-10">
      {overview.map((card) => (
        <OverviewCard key={card.id} {...card} />
      ))}
    </section>
  );
};
