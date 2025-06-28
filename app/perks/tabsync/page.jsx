import TabSyncHome from "@/components/ui/tabSync/home/TabSyncHome";

const page = async({ searchParams }) => {
  const searchedPairs = await searchParams;  
  return (
    <section className="dark:bg-black dark:text-white p-4 min-h-[92vh] flex flex-col items-center justify-start">
      <TabSyncHome currentTab={searchedPairs.tab} />
    </section>
  );
};

export default page;
