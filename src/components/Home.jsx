import React from "react";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#dd3333]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Halgurd Hussein
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <div className="text-center">
          <p className="top-50 left-80 text-[#8892b0] py-4 max-w-[700px]">
            In my spare time I like to work on personal projects, on myself and
            my daily routines. <br/> In June 2017 I graduated with a <b className="text-[#dd3333]">Bachelor
            in Software Engineering</b> at the Hogeschool: "Windesheim Flevoland" in
            Almere. In the meantime, I have <b className="text-[#dd3333]">5 years of experience</b> as a software
            engineer. I have mainly been involved with new technologies. <br/> These
            new technologies have allowed me to learn new programming languages
            and improve others from <b className="text-[#dd3333]">C# .NET to Solidity</b> (for Smart Contracts in
            Ethereum). I am also working in <b className="text-[#dd3333]">React JS and Javascript</b> in general.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
