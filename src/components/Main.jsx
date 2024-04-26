import React from 'react'
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin } from "react-icons/fa";
import { RiThreadsFill } from "react-icons/ri";
import dp from "../../public/1699203081062.jpg"

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover top-0 left-0"
        src={dp}
        alt="Paul Esthappan"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 ">
            I'm Paul Esthappan
          </h1>
          <h2 className="flex sm:text-3xl text-2xl text-gray-800">
            I'm
            <TypeAnimation
              sequence={[
                "a Developer",
                1000,
                "a Coder",
                1000,
                "Creative",
                1000,
                "Human",
                1000,
              ]}
              wrapper="div"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-2 max-w-[50px] w-full">
            <FaLinkedin className="cursor-pointer" size={20} />
            <RiThreadsFill className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main