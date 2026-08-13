import TabPill from "./TabPill";

const TabNavigation = ({ tabs, active, setActive }) => {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 p-1.5 rounded-2xl bg-white/[0.02] border border-white/10 w-full sm:w-fit backdrop-blur-md">
      {tabs.map((tab, index) => (
        <TabPill
          key={tab.id}
          title={tab.title}
          active={active === index}
          onClick={() => setActive(index)}
        />
      ))}
    </div>
  );
};

export default TabNavigation;