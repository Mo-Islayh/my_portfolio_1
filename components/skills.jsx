import React from "react"
import { Skills } from "../content"

const SkillsPage = () => {
  return (
    <div className="max-w-screen-md m-auto">
      <div className="mb-4 font-medium text-white text-2xl">Skills</div>
      <div className="flex gap-4 flex-wrap">
        {Skills.map((skill, _id) => (
          <div key={_id} className="flex justify-center items-center gap-2">
            <div>{skill.icon}</div>
            <div>{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsPage
