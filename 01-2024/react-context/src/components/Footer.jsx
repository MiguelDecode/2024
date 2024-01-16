const Footer = ({ theme, text }) => {
  const { footerTitle } = text;

  return (
    <footer className={theme}>
      <h4>{footerTitle}</h4>
    </footer>
  );
};

export default Footer;
