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
      {/* <div>Full stack</div>
      <div>Portfolios</div>
      <div>Moblie Apps</div>
      <div>Clones</div> */}

      {/* <div className="mb-4 font-medium text-white text-2xl">Projects</div> */}
      <div className="mb-4 font-bold text-white text-base bg-orange-700 w-fit py-[2px] px-3 rounded-full">
        Projects
      </div>
      {Posts.map((post, _id) => (
        <div key={_id} className="flex flex-col bg-[#333f53] my-2  rounded-xl">
          <div className="bg-gradient-to-r from-orange-500 to-orange-300 project-backdrop rounded-lg p-4 mb-2 w-full flex justify-center items-center">
            <div className=" w-full h-full ">
              {/* <img
                src={post.img}
                alt="preview image fro project"
                className=" rounded sm:rounded-lg max-h-full shadow-lg shadow-yellow-900"
              /> */}
              <iframe
                className="rounded-lg"
                width="100%"
                height={300}
                src={`https://www.youtube-nocookie.com/embed/${post.youtubeVid}`}
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="p-2">
            <div className="flex justify-between items-center mb-2">
              <div className="font-bold text-white text-base bg-orange-400 w-fit py-[2px] px-3 rounded-full">
                {post.title}
              </div>
              <div className="flex gap-3">
                <a
                  href={post.webSite}
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="font-bold text-white text-base bg-indigo-500 hover:bg-indigo-600 w-fit py-[2px] px-3 rounded-full flex justify-center items-center gap-2"
                >
                  <span>Link</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    width={20}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mb-4">{post.description}</div>
            <div className="mb-4 font-bold text-white text-base bg-blue-400 w-fit py-[2px] px-3 rounded-full">
              Tech used
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
