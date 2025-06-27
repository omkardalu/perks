import Link from "next/link";
import Theme from "../ui/theme";

const Header = () => {
  return (
    <header className="dark:text-white dark:bg-black flex items-center justify-between p-4 sticky top-0 right-0 left-0">
      <Link href={'/'}>
      <h1 className="font-bold text-2xl">Perks</h1>
      </Link>
      <Theme />
    </header>
  )
};

export default Header;