import React from "react"
import LinkButton from "./LinkButton"

const Contact = () => {
  return (
    <div className="max-w-screen-md m-auto w-full">
      <h3 className="mb-4 font-medium text-white text-2xl">Contact</h3>
      <div className="mb-5 flex gap-4">
        <LinkButton
          goTo={"https://www.linkedin.com/in/mo-islayh"}
          name={"LinkedIn"}
          type={"link"}
          isContact={true}
        />
        <LinkButton
          goTo={"https://github.com/Mo-Islayh"}
          name={"GitHub"}
          type={"link"}
          isContact={true}
        />
      </div>

      <div className="mb-5 flex gap-4 flex-wrap">
        <a
          href="mailto:moislayh@gmail.com"
          className="flex justify-center items-center gap-4 font-medium text-white text-1xl bg-indigo-600 hover:bg-indigo-700  w-fit py-3 px-5 rounded-xl"
        >
          <p>moislayh@gmail.com</p>
        </a>
        <a
          href="tel:+962790702148"
          className="flex justify-center items-center gap-4 font-medium text-white text-1xl bg-indigo-600 hover:bg-indigo-700  w-fit py-3 px-5 rounded-xl"
        >
          <p>+962 790702148</p> <JordanFlag />
        </a>
      </div>
    </div>
  )
}

export default Contact

const JordanFlag = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="15"
      viewBox="0 0 10080 5040"
    >
      <title>Flag of Jordan</title>
      <path fill="#fff" d="m0 0h10080v5040H0z" />
      <path d="m0 0h10080v1680H0z" />
      <path fill="#007a3d" d="m0 3360h10080v1680H0z" />
      <path
        fill="#ce1126"
        d="m5040 2520L0 5040V0m1557 2160-78 198-203-62 106 184-176 120 211 32-16 212 156-144 157 144-16-212 210-32-175-120 106-184-203 62z"
      />
    </svg>
  )
}
