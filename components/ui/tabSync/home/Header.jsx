"use client";

import { useRouter, useSearchParams } from "next/navigation";

const Header = () => {
  const allowedTabs = ["editor", "preview", "settings"];
  const router = useRouter();
  const currentTab = useSearchParams().get("tab");

  const buttons = allowedTabs.map((tab) => {
    return (
      <button
        key={tab}
        className={`bg-blue-400 p-2 rounded-lg m-2 ${
          currentTab === tab && "bg-green-700"
        } cursor-pointer`}
        onClick={() => {
          router.push(`?tab=${tab}`);
        }}
      >
        {tab}
      </button>
    );
  });

  return <header>{buttons}</header>;
};

export default Header;
