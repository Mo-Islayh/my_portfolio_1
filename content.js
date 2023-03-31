import { DiCss3, DiJavascript1 } from "react-icons/di"
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
    webSite: "https://speak-up.herokuapp.com/",
    youtubeVid: "Hhb2CQ9i-Vc",
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
    features: [
      "Voice-Chat and Messaging in Real Time",
      "Creating custom groups",
      "Adding and removing friends",
      "See friends in online groups",
      "Login Using Google",
    ],
  },
  {
    id: "1",
    webSite: "https://store-jo.vercel.app/",
    youtubeVid: "iQe5ixN7JkA",
    img: "/images/market.jpg",
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
    features: [
      "A full Store-Ordering Experience",
      "Dashboard for Admin to Add, Remove, Modify and Arrange Products and Items",
      "Receive orders in real time",
      "Close the store (stop receiving orders) and set the opening date,",
    ],
  },
  {
    id: "2",
    webSite: "https://free4english.vercel.app/",
    youtubeVid: "bajt1zeD5ZI",
    img: "/images/free4english.jpg",
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
    features: [
      "3600 essential English words",
      "Play audio, Save cards, Highlight text and more",
      "Navigate between cards",
      "Study and Practice on a Card-based layout",
      "Light and Dark Modes",
    ],
  },
  {
    id: "4",
    webSite: "https://yt-clone-ecru.vercel.app/",
    youtubeVid: "MMsx4loOZ6U",
    img: "/images/my-tube.jpg",
    title: "My Tube | Video App",
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
    features: [
      "A complete YouTube experience",
      "SingIn/SignUp",
      "Login Using Google Auth",
      "Uploading videos",
      "Subscribing to channels",
      "like and dislike videos",
      "Commenting",
      "Searching For Videos",
      "Trend Videos",
    ],
  },
]

export const FrontEndSkills = [
  {
    name: "HTML",
    icon: <AiFillHtml5 />,
  },
  {
    name: "CSS",
    icon: <DiCss3 />,
  },
  {
    name: "JavaScript",
    icon: <DiJavascript1 />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
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
    name: "Apollo Client(GQL)",
    icon: <SiApollographql />,
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
  {
    name: "Socket.io",
    icon: <SiSocketdotio />,
  },
  {
    name: "webRTC",
    icon: <SiWebrtc />,
  },
]
export const BackendSkiles = [
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
    name: "Apollo Server",
    icon: <SiApollographql />,
  },
  {
    name: "JavaScript",
    icon: <DiJavascript1 />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "NextJS",
    icon: <TbBrandNextjs />,
  },
  {
    name: "REST API",
    icon: (
      <div style={{}} className="">
        API
      </div>
    ),
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
]

export const DataBases = [
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
]

export const DevOpsSkiles = [
  { name: "Docker", icon: null },
  { name: "AWS", icon: null },
  { name: "Google Cloud", icon: null },
  { name: "Microsoft Azure", icon: null },
  { name: "Heroku", icon: null },
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
          background: "#7676764d",
          borderRadius: "6px",
          fontSize: "10px",
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
