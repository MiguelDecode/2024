import "./App.css";
import TabsView from "./components/tabs/tabsView";
import { TabItem } from "./components/tabs/types/types";

const ContentOne = () => <div>Content 1</div>;
const ContentTwo = () => <div>Content 2</div>;
const ContentThree = () => <div>Content 3</div>;

const items: TabItem[] = [
  { id: crypto.randomUUID(), title: "Tab: 1", content: ContentOne },
  { id: crypto.randomUUID(), title: "Tab: 2", content: ContentTwo },
  { id: crypto.randomUUID(), title: "Tab: 3", content: ContentThree },
];

function App() {
  const handleChange = (item: TabItem) => console.log(item.title);

  return (
    <>
      <TabsView items={items} onChange={handleChange} />
    </>
  );
}

export default App;
