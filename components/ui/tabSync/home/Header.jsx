import Link from "next/link";

const Header = ({currentTab}) => {
  return(
    <header>
          <Link href="/perks/tabsync?tab=editor">
            <button
              className={`bg-blue-400 p-2 rounded-lg m-2 cursor-pointer ${
                currentTab === "editor" ? "bg-green-600" : ""
              } `}
            >
              editor
            </button>
          </Link>
          <Link href="/perks/tabsync?tab=preview">
            <button
              className={`bg-blue-400 p-2 rounded-lg m-2 cursor-pointer ${
                currentTab === "preview" ? "bg-green-600" : ""
              }`}
            >
              preview
            </button>
          </Link>
          <Link  href="/perks/tabsync?tab=settings">
            <button
              className={`bg-blue-400 p-2 rounded-lg m-2 cursor-pointer ${
                currentTab === "settings" ? "bg-green-600" : ""
              }`}
            >
              settings
            </button>
          </Link>
        </header>
  )
};

export default Header;
