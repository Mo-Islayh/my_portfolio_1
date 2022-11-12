import React from "react"
import LinkButton from "./LinkButton"

const Footer = () => {
  return (
    <div className="max-w-screen-md m-auto">
      <h3 className="mb-4 font-medium text-white text-2xl">Contact</h3>
      <h3 className="mb-4 font-medium text-white text-2xl">Links</h3>
      <p className="mb-5">
        <LinkButton
          goTo={"https://www.linkedin.com/in/mo-islayh"}
          name={"LinkedIn"}
          type={"link"}
          isContact={true}
        />
      </p>
      <p className="mb-5">
        <LinkButton
          goTo={"https://github.com/Mo-Islayh"}
          name={"GitHub"}
          type={"link"}
          isContact={true}
        />
      </p>
    </div>
  )
}

export default Footer
