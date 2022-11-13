import { DiCss3, DiFirebase, DiJavascript1 } from "react-icons/di"
import {
  SiApollographql,
  SiExpress,
  SiFirebase,
  SiGraphql,
  SiJsonwebtokens,
  SiMaterialui,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiReduxsaga,
  SiSocketdotio,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiWebrtc,
} from "react-icons/si"
import { AiFillHtml5, AiOutlineAntDesign } from "react-icons/ai"
import { GrReactjs } from "react-icons/gr"
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb"
import { FaBootstrap, FaReact } from "react-icons/fa"
import { IoLogoNodejs } from "react-icons/io"

export const Posts = [
  {
    id: "3",
    webSite: "https://lang-speakup.herokuapp.com/",
    youtubeVid: "https://youtu.be/Hhb2CQ9i-Vc",
    img: "/images/speakup.png",
    title: "Speak-Up",
    description:
      "Voice-Chat App, language exchange and practice, Fully functional voice and chat app, create custom groups, add and remove friends, see friends in online groups, and more great features.",
    tags: [
      "ReactJS",
      "JavaScript",
      "NodeJS",
      "Express",
      "REST API",
      "Mongodb",
      "Socket.io",
      "webRTC",
      "JWT",
      "styled-components",
      "Auth",
      "Recoil",
      "Ant Design",
    ],
  },
  {
    id: "1",
    webSite: "https://market-jo-v1.herokuapp.com/",
    youtubeVid: "https://youtu.be/iQe5ixN7JkA",
    img: "/images/market.png",
    title: "Talabat Alternative",
    description:
      "A full Store-Order experience, comprehensive site for ordering products especially food on the Internet, it allows the admin to add, remove and modify products and items from the control panel, receive orders in real time, close the store (stop receiving orders) and set the opening date, and much more!",
    tags: [
      "ReactJS",
      "JavaScript",
      "NodeJS",
      "Express",
      "REST API",
      "Tailwind",
      "Firebase",
      "Recoil",
    ],
  },
  {
    id: "2",
    webSite: "https://free4english.com",
    youtubeVid: "https://youtu.be/bajt1zeD5ZI",
    img: "/images/free4english.png",
    title: "Free4English",
    description:
      "A WebApp that contains the 3600 essential English words, it helps people to study the most common English words in a modren way for free",
    tags: [
      "ReactJS",
      "NextJS",
      "JavaScript",
      "NodeJS",
      "Express",
      "REST API",
      "Tailwind",
    ],
  },
  {
    id: "4",
    webSite: "https://yt-clone-ecru.vercel.app/",
    youtubeVid: "https://youtu.be/MMsx4loOZ6U",
    img: "/images/yt-clone.png",
    title: "Youtube Clone",
    description:
      "By using next.js for front and backend, i built a complete YouTube experience.. Sign-up Sign-in, uploading videos, subscribing to channels, liking videos,Commenting, Searching and Some other cool features",
    tags: [
      "ReactJS",
      "NextJS",
      "JavaScript",
      "NodeJS",
      "REST API",
      "Tailwind",
      "Firebase",
      "Redux",
      "JWT",
      "Mongodb",
    ],
  },
]

export const Skills = [
  {
    name: "JavaScript",
    icon: <DiJavascript1 />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "HTML",
    icon: <AiFillHtml5 />,
  },
  {
    name: "CSS",
    icon: <DiCss3 />,
  },
  {
    name: "ReactJS",
    icon: <GrReactjs />,
  },
  {
    name: "NextJS",
    icon: <TbBrandNextjs />,
  },
  {
    name: "React-Native",
    icon: <FaReact />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },
  {
    name: "Ant Design",
    icon: <AiOutlineAntDesign />,
  },
  {
    name: "Material UI",
    icon: <SiMaterialui />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
  },
  {
    name: "NodeJS",
    icon: <IoLogoNodejs />,
  },

  {
    name: "Express",
    icon: <SiExpress />,
  },
  {
    name: "GraphQL",
    icon: <SiGraphql />,
  },
  {
    name: "Apollo Client",
    icon: <SiApollographql />,
  },
  {
    name: "Apollo Server",
    icon: <SiApollographql />,
  },
  {
    name: "REST API",
    icon: (
      <div
        style={{
          border: "1px solid #fff",
          borderRadius: "50%",
          fontSize: "8px",
          padding: "2px",
        }}
      >
        API
      </div>
    ),
  },
  {
    name: "Mongodb",
    icon: <SiMongodb />,
  },
  {
    name: "Postgres",
    icon: <SiPostgresql />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
  },
  {
    name: "Socket.io",
    icon: <SiSocketdotio />,
  },
  {
    name: "webRTC",
    icon: <SiWebrtc />,
  },
  {
    name: "JWT",
    icon: <SiJsonwebtokens />,
  },
  {
    name: "styled-components",
    icon: <SiStyledcomponents />,
  },
  {
    name: "Recoil",
    icon: <SiReduxsaga />,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    name: "React Query",
    icon: <TbBrandReactNative />,
  },
]

export const about = [
  "I am a software developer.",
  "Im 26, I live In Jordan / Madaba .",
  "I been freelancing since Three Years , React Since 2 Years.",
  "I have made quite a number of Apps for clients all over the world.",
  "",
  "if you didn't find me online i would be probably playing football ⚽.",
  // "I Really love Tea, Tea is my real cup of tea, you know .. 🍵.",
]
