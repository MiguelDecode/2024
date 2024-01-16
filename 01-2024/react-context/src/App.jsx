import "./App.css";
import MyPage from "./components/MyPage";
import MyPageContext from "./components/MyPageContext";

function App() {
  return (
    <>
      <h1>React Context API</h1>
      <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
        React Documentation
      </a>

      <hr />

      <MyPage />

      <hr />

      <MyPageContext />
    </>
  );
}

export default App;
