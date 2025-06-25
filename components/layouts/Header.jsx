import Theme from "../ui/theme";

const Header = () => {
  return (
    <header className="dark:text-white flex items-center justify-between p-4 fixed top-0 right-0 left-0">
      <h1 className="font-bold text-2xl">Perks</h1>
      <Theme />
    </header>
  )
};

export default Header;