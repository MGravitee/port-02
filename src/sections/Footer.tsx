function Footer() {
  const Year = new Date().getFullYear();
  return (
      <footer className="footer">
          <p className="footer-txt">
              © Matt Garvey {Year} | All Rights Reserved
          </p>
      </footer>
  );
}
export default Footer;
