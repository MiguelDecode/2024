import "./App.css";
import MyPage from "./components/MyPage";
import MyPageContext from "./components/MyPageContext";
import CrudApi from "./components/CrudApi.jsx";
import { CrudProvider } from "./context/CrudContext.jsx";

function App() {
  return (
    <>
      <h1>React Context API</h1>
      <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
        React Documentation
      </a>
      <hr />

      <CrudProvider>
        <CrudApi />
      </CrudProvider>

      <hr />

      <MyPageContext />

      <hr />

      <MyPage />
    </>
  );
}

export default App;
