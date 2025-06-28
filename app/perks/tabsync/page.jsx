import TabSyncHome from "@/components/ui/tabSync/home/TabSyncHome";

const page = async ({ searchParams }) => {
  const searchedPairs = await searchParams;
  const allowedTabs = ["editor", "preview", "settings"];
  const currentTab = allowedTabs.includes(searchedPairs.tab)? searchedPairs.tab : "editor";
  


  return (
    <section className="dark:bg-black dark:text-white p-4 min-h-[92vh] flex flex-col items-center justify-start">
      <TabSyncHome currentTab={currentTab} />
    </section>
  );
};

export default page;
