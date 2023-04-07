import React from "react";

const Home = () => {
  return (
    <div name="home" className="pt-96 sm:pt-5 w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#dd3333]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Halgurd Hussein
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Software Engineer & Music Producer.
        </h2>
        <div className="text-center">
          <p className="top-50 left-80 text-[#8892b0] py-4 max-w-[700px]">
            In my spare time I like to work on personal projects, on myself and
            my daily routines. <br /> In June 2017 I graduated with a{" "}
            <b className="text-[#dd3333]">Bachelor in Software Engineering</b>{" "}
            at the Hogeschool: "Windesheim Flevoland" in Almere. In the
            meantime, I have{" "}
            <b className="text-[#dd3333]">5 years of experience</b> as a
            software engineer. Specialized in the <b className="text-[#dd3333]">Microsoft EcoSystem</b>, like C#, .NET, Azure and more.
            <br/>
            <br/>
            Checkout my <b className="text-[#dd3333]">Spotify (Lofi-Beats) & Soundcloud (Game Audio)</b> for my music works. 
            I am specialized in: <b className="text-[#dd3333]">Adaptive Music</b>, where you can make the 
            exciting part of your gameplay <b className="text-[#dd3333]">POP out</b> by creating (vertical) layers of music. 
            You can create triggers in your game to make the music come to life at the right moment in game.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
