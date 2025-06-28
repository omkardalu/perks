import Header from "./Header.jsx";
import Editor from "./Editor.jsx";
import Preview from "./Preview.jsx";
import Settings from "./Settings.jsx";

const TabSyncHome = ({ currentTab }) => {
  return (
    <section className="w-[70vw] my-50">
      <h1 className="text-2xl font-bold p-4">Tab Sync Home</h1>

      <div className="text-white bg-blue-950 p-4">
        <Header currentTab={currentTab} />
        <main>
          {currentTab === "editor" && <Editor />}
          {currentTab === "preview" && <Preview />}
          {currentTab === "settings" && <Settings />}
        </main>
      </div>
      
    </section>
  );
};

export default TabSyncHome;
