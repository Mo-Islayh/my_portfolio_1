/* eslint-disable @next/next/no-img-element */
import React from "react"
import { Posts, Skills } from "../content"
import LinkButton from "./LinkButton"

const Projects = () => {
  const FindIcon = (tag) => {
    const x = Skills.find((ss) => ss.name == tag)
    if (x) {
      return x.icon
    }
    return <div className="text-xs select-none">{tag}</div>
  }

  return (
    <div className="flex flex-col max-w-screen-md m-auto w-full mb-4">
      <div className="mb-4 font-medium text-white text-2xl">Projects</div>
      {Posts.map((post, _id) => (
        <div key={_id} className="flex flex-col bg-[#333f53] my-2  rounded-xl">
          <div className="bg-gradient-to-r from-orange-500 to-orange-300 project-backdrop rounded-lg p-4 mb-2 w-full flex justify-center items-center">
            <div className=" w-full h-full ">
              <img
                src={post.img}
                alt="preview image fro project"
                className=" rounded sm:rounded-lg max-h-full shadow-lg shadow-yellow-900"
              />
            </div>
          </div>

          <div className="p-2">
            <div className="flex justify-between items-center mb-2">
              <h3 className="grow font-medium text-white text-2xl ">
                {post.title}
              </h3>
              <div className="flex gap-3">
                <LinkButton
                  goTo={post.webSite}
                  name={"Link"}
                  type={"link"}
                  isContact={false}
                />
                <LinkButton
                  goTo={post.youtubeVid}
                  name={"Watch on"}
                  type={"youtube"}
                  isContact={false}
                />
              </div>
            </div>
            <div className="mb-3">{post.description}</div>
            <div className="mb-1 font-medium   text-xl  w-fit p-1">
              Technologies used
            </div>
            <div className="mb-3 flex flex-wrap gap-2 items-center">
              {post.tags.map((tag, _id) => (
                <div
                  className="relative group flex justify-center items-center gap-2  p-1 border border-dashed rounded-lg border-slate-500"
                  key={_id}
                >
                  {FindIcon(tag)} {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
