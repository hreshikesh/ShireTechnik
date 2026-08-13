import TabButton from "./TabButton";

const Tabs = ({ tabs, active, setActive }) => {
  return (
    <div className="flex flex-wrap gap-8 border-b border-white/10 pb-4">
      {tabs.map((item, index) => (
        <TabButton
          key={item.id}
          title={item.tab}
          active={index === active}
          onClick={() => setActive(index)}
        />
      ))}
    </div>
  );
};

export default Tabs;