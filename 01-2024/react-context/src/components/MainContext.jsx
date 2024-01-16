import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";
import AuthContext from "../context/AuthContext";

const MainContext = () => {
  const { theme } = useContext(ThemeContext);
  const { text } = useContext(LanguageContext);
  const { auth } = useContext(AuthContext);


  return (
    <main className={theme}>
      {auth ? <p>{text.mainWelcome}</p> : <p>{text.mainHello}</p>}
      <p>{text.mainContent}</p>
    </main>
  );
};

export default MainContext;
