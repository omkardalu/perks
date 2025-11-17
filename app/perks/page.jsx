import TabSyncHome from "@/components/ui/tabSync/home/TabSyncHome";
import ResizeablePanal from "@/components/ui/Resizeable/ResizeablePanal";
import Link from "next/link";
import ScrollSync from "@/components/ui/scrollSync/ScrollSync";

const Perks = () => {
  return (
    <div className=" dark:bg-black dark:text-white p-4 min-h-[92vh]">
      <section className="p-4 flex felx-col items-center justify-center min-h-full">
        <div className="flex flex-col gap-20 ml-30 mr-30 items-left">
          <ScrollSync/>
          <ResizeablePanal />
          <Link href="/perks/tabsync">
            <TabSyncHome />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Perks;
