import React from "react";
import { BackendSkiles, DataBases, FrontEndSkills } from "./content";

const SkillsList = ({
  skill,
  title,
}: {
  skill: { name: string; icon: React.ReactNode }[];
  title: string;
}) => {
  return (
    <div>
      <h4 className="mb-2 font-medium text-white text-base bg-slate-700 w-fit py-[2px] px-3 rounded-full">
        {title}
      </h4>
      <ul className="flex gap-4 flex-wrap">
        {skill.map((s, _id) => (
          <li key={_id} className="flex justify-center items-center gap-2">
            <div>{s.icon}</div>
            <div>{s.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SkillsPage = () => {
  return (
    <section className="w-full max-w-screen-md m-auto">
      <h3 className="mb-4 font-medium text-white text-2xl">Skills</h3>
      <div className="flex flex-col gap-6">
        <SkillsList skill={FrontEndSkills} title="Front-end" />
        <SkillsList skill={[...BackendSkiles, ...DataBases]} title="Back-end" />
        {/* <SkillsList skill={DataBases} title="Databases" /> */}
        {/* <SkillsList skill={DevOpsSkiles} title="Dev-Ops" /> */}
      </div>
    </section>
  );
};

export default SkillsPage;
