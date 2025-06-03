const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4 px-8 flex justify-between items-center">
      <p className="text-sm">© 2023 Alx Listing App</p>
      <nav className="flex gap-4">
        <a href="#" className="text-blue-500">
          Home
        </a>
        <a href="#" className="text-blue-500">
          About
        </a>
        <a href="#" className="text-blue-500">
          Contact
        </a>
      </nav>
    </footer>
  );
};

export default Footer;