import React from "react"
import LinkButton from "./LinkButton"

const Resume = () => {
  return (
    <div className="max-w-screen-md m-auto  w-full">
      <h3 className="mb-4 font-medium text-white text-2xl">Resume</h3>
      <div className="mb-5 flex gap-4">
        <LinkButton
          goTo={
            "https://drive.google.com/file/d/1GFWFHkiolnhnB-hFpSiaNnGi4FdMkuEZ/view?usp=share_link"
          }
          name={"Google Drive"}
          type={"link"}
          isContact={true}
        />
      </div>
    </div>
  )
}

export default Resume
