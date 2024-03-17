import { Header } from "./components/Header";
import { OverviewContainer } from "./components/OverviewContainer";
import { OverviewTodayContainer } from "./components/OverviewTodayContainer";

function App() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1440px] px-8">
        <OverviewContainer />
        <OverviewTodayContainer />
      </main>
    </>
  );
}

export default App;
