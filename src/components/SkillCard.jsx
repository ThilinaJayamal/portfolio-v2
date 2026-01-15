import React from "react";

// Single reusable card component
const SkillCard = ({ title, items, icon }) => {
  return (
    <div className="cursor-pointer bg-linear-to-bl from-blue-200/10 to-purple-900/20 border hover:-translate-y-1 border-blue-200/20 backdrop-blur-md p-6 rounded-xl text-white/80 transition-transform duration-300 w-full">
      <div className="text-lg font-semibold mb-6 flex items-center gap-2">
        <div className="bg-white flex items-center justify-center size-10 rounded-full">{icon}</div>
        <h3>
          {title}
        </h3>
      </div>
      <div className="flex gap-4 flex-wrap">
        {items.map((item) => (
          <div className="text-purple-400 bg-purple-900/40 w-fit px-4 py-1 rounded-full" key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
