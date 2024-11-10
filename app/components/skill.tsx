import React from "react";

// Define props for the SkillItem component
interface SkillItemProps {
  title: string;
  level: string;
  width: string;
}

// Main Skill component
const Skill: React.FC = () => {
  return (
    <div id="skills">
      <section className="text-center p-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-lg text-blue-500 font-bold mb-2">My Skills</h2>
          <p className="text-gray-600 mb-8">These are some of the things I know and love!</p>
          
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Skill: HTML */}
            <SkillItem title="HTML" level="100%" width="100%" />
            {/* Skill: CSS */}
            <SkillItem title="CSS" level="95%" width="95%" />
            {/* Skill: JavaScript/TypeScript */}
            <SkillItem title="JavaScript/TypeScript" level="90%" width="90%" />
            {/* Skill: NEXT JS */}
            <SkillItem title="NEXT JS" level="80%" width="80%" />
          </div>
        </div>
      </section>
    </div>
  );
};

// SkillItem component with props typed using the SkillItemProps interface
const SkillItem: React.FC<SkillItemProps> = ({ title, level, width }) => (
  <div className="bg-white shadow rounded-lg p-4">
    <h3 className="text-blue-600 font-semibold text-lg mb-2">{title}</h3>
    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
      <div className="bg-blue-500 h-3 rounded-full" style={{ width }}></div>
    </div>
    <p className="text-sm font-medium text-blue-500 text-right">{level}</p>
  </div>
);

export default Skill;
