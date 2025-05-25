import { Fa } from "./Fa";

function IconCircle({ bg, icon }) {
  return (
    <div
      className={`${bg} text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto`}
    >
      <Fa icon={icon} className="text-2xl" />
    </div>
  );
}

export function MissionCard({ bg, icon, title, children }) {
  return (
    <div className="bg-petmeLight p-8 rounded-xl card-hover transition-all text-center">
      <IconCircle bg={bg} icon={icon} />
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  );
}
