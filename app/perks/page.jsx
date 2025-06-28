import TabSyncHome from "@/components/ui/tabSync/home/TabSyncHome";
import ResizeablePanal from "@/components/ui/Resizeable/ResizeablePanal";
import Link from "next/link";

const Perks = () => {
  return (
    <div className=" dark:bg-black dark:text-white p-4 min-h-[92vh]">
      <section className="p-4 flex felx-col items-center justify-center min-h-full">
        <div>
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
