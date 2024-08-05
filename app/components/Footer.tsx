const Footer = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto p-10 flex justify-center">
      <div className="w-full flex justify-center">
        <div className="mt-auto text-gray-800 dark:text-dark-sub">
          © {new Date().getFullYear()} Atsushi Hatakeyama
        </div>
      </div>
    </footer>
  );
};

export default Footer;
