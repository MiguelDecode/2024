const Header = ({
  theme,
  handleTheme,
  handleLanguage,
  text,
  auth,
  handleAuth,
}) => {
  const {
    headerTitle,
    headerSubtitle,
    headerLight,
    headerDark,
    buttonLogin,
    buttonLogout,
  } = text;
  return (
    <header className={theme}>
      <h2>{headerTitle}</h2>
      <h3>{headerSubtitle}</h3>
      <select name="language" onChange={handleLanguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input
        type="radio"
        name="theme"
        id="light"
        onClick={handleTheme}
        value="light"
      />
      <label htmlFor="light">{headerLight}</label>
      <input
        type="radio"
        name="theme"
        id="dark"
        onClick={handleTheme}
        value="dark"
      />
      <label htmlFor="dark">{headerDark}</label>
      <button onClick={handleAuth}>{auth ? buttonLogout : buttonLogin}</button>
    </header>
  );
};

export default Header;
