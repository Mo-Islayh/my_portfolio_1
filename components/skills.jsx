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
        {/* {Skills.map((type, _id) => (
          <div key={_id} className="mb-4">
            <div className="font-medium text-white text-1xl">{type.name}</div>
            <div className="flex gap-2 flex-wrap">
              {type.Skills.map((skill, _id) => (
                <div key={_id}>
                  <div>{skill}</div>
                </div>
              ))}
            </div>
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default SkillsPage
