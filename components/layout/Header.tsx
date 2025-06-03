const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Alx Listing App</h1>
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
    </header>
  );
};

export default Header;