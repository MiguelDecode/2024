import { useState } from "react";
import { TabItem } from "./types/types";
import styles from "./tabsView.module.css";

interface TabsViewProps {
  items: TabItem[];
  onChange: (item: TabItem) => void;
}

export default function TabsView({ items, onChange }: TabsViewProps) {
  const [selected, setSelected] = useState(items.length >= 0 ? 0 : null);

  const handleClick = (index: number, item: TabItem) => {
    setSelected(index);
    onChange(item);
  };

  if (selected === null) return null;

  return (
    <div>
      <div className={styles.tabsContainer}>
        {items.map((item, index) => (
          <TabView
            index={index}
            isActive={index === selected}
            item={item}
            onClick={handleClick}
            key={item.id}
          />
        ))}
      </div>

      <div>
        <div className={styles.contentContainer}>
          {items.map((item, index) => (
            <>{selected === index && <item.content key={item.id} />}</>
          ))}
        </div>
      </div>
    </div>
  );
}

interface TabViewProps {
  index: number;
  isActive: boolean;
  item: TabItem;
  onClick: (index: number, item: TabItem) => void;
}

function TabView({ index, isActive, item, onClick }: TabViewProps) {
  return isActive ? (
    <div className={styles.activeTab}>{item.title}</div>
  ) : (
    <button className={styles.tab} onClick={() => onClick(index, item)}>
      {item.title}
    </button>
  );
}
