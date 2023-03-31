import React from "react"
import {
  BackendSkiles,
  DataBases,
  DevOpsSkiles,
  FrontEndSkills,
  Skills,
} from "../content"

const SkillsList = ({ skill, title }) => {
  return (
    <div>
      <div className="mb-2 font-medium text-white text-base bg-slate-700 w-fit py-[2px] px-3 rounded-full">
        {title}
      </div>
      <div className="flex gap-4 flex-wrap">
        {skill.map((s, _id) => (
          <div key={_id} className="flex justify-center items-center gap-2">
            <div>{s.icon}</div>
            <div>{s.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const SkillsPage = () => {
  return (
    <div className="w-full max-w-screen-md m-auto">
      <div className="mb-4 font-medium text-white text-2xl">Skills</div>
      <div className="flex flex-col gap-6">
        <SkillsList skill={FrontEndSkills} title="Front-end" />
        <SkillsList skill={[...BackendSkiles, ...DataBases]} title="Back-end" />
        {/* <SkillsList skill={DataBases} title="Databases" /> */}
        {/* <SkillsList skill={DevOpsSkiles} title="Dev-Ops" /> */}
      </div>
    </div>
  )
}

export default SkillsPage
