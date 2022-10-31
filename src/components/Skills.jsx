import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import DevOps from "../assets/devops.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import CSharp from "../assets/csharp.png";
import Azure from "../assets/azure.png";
import NodeJS from "../assets/node.png";
import VSCode from "../assets/vscode.png";
import VS2022 from "../assets/vs2022.png";
import NETCore from "../assets/netcore.png";
import Bootstrap from "../assets/bootstrap.png";
import Bash from "../assets/bash.png";
import Webpack from "../assets/webpack.png";
import Npm from "../assets/npm.png";
import NUnit from "../assets/nunit.png";
import TypeScript from "../assets/typescript.png";
import NextJS from "../assets/nextjs.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="pt-96 sm:pt-2 w-full h-screen bg-[#0a192f] text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto pt-96 sm:pt-2 p-4 flex flex-col justify-center w-full h-full">
        <div className="pt-96 sm:pt-5">
        </div>
        <div className="pt-96 sm:pt-5">
        </div>
        <div className="pt-20 sm:pt-5">
        </div>
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-[#dd3333] ">
              Skills
            </p>
            <p className="py-4">
              // These are the technologies I've worked with
            </p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] group">
              <img
                className="group-hover:animate-bounce m w-20 m mx-auto"
                src={HTML}
                alt="HTML icon"
              />
              <p className="my-4 group-hover:text-bold group-hover:scale-125">
                HTML
              </p>
            </div>
            <div className="shadow-md shadow-[#040c16] group">
              <img
                className="group-hover:animate-bounce m w-20 m mx-auto"
                src={CSS}
                alt="CSS icon"
              />
              <p className="my-4 group-hover:text-bold group-hover:scale-125">
                CSS
              </p>
            </div>
            <div className="shadow-md shadow-[#040c16] group">
              <img
                className="group-hover:animate-bounce m w-20 m mx-auto"
                src={JavaScript}
                alt="JavaScript icon"
              />
              <p className="my-4 group-hover:text-bold group-hover:scale-125">
                JAVASCRIPT
              </p>
            </div>
            <div className="shadow-md shadow-[#040c16] group">
              <img
                className="group-hover:animate-bounce m w-20 m mx-auto"
                src={ReactImg}
                alt="React icon"
              />
              <p className="my-4 group-hover:text-bold group-hover:scale-125">
                REACTJS
              </p>
            </div>
            <div className="shadow-md shadow-[#040c16] group">
              <img
                className="group-hover:animate-bounce m w-20 m mx-auto"
                src={GitHub}
                alt="GitHub icon"
              />
              <p className="my-4 group-hover:text-bold group-hover:scale-125">
                GITHUB
              </p>
            </div>
            <div className="shadow-md shadow-[#040c16] group">
              <img
                className="group-hover:animate-bounce m w-20 m mx-auto"
                src={DevOps}
                alt="DevOps icon"
              />
              <p className="my-4 group-hover:text-bold group-hover:scale-125">
                DEVOPS
              </p>
            </div>
            <div className="shadow-md shadow-[#040c16] group">
              <img
                className="group-hover:animate-bounce m w-20 m mx-auto"
                src={Tailwind}
                alt="Tailwind icon"
              />
              <p className="my-4 group-hover:text-bold group-hover:scale-125">
                TAILWIND
              </p>
            </div>
            <div className="shadow-md shadow-[#040c16] group">
              <img
                className="group-hover:animate-bounce m w-20 m mx-auto"
                src={CSharp}
                alt="CSharp icon"
              />
              <p className="my-4 group-hover:text-bold group-hover:scale-125">
                CSHARP
              </p>
            </div>
            <div className="shadow-md shadow-[#040c16] group">
              <img
                className="group-hover:animate-bounce m w-20 m mx-auto"
                src={Azure}
                alt="Azure icon"
              />
              <p className="my-4 group-hover:text-bold group-hover:scale-125">
                AZURE
              </p>
            </div>
            <div className="shadow-md shadow-[#040c16] group">
              <img
                className="group-hover:animate-bounce m w-20 m mx-auto"
                src={NodeJS}
                alt="NodeJS icon"
              />
              <p className="my-4 group-hover:text-bold group-hover:scale-125">
                NODEJS
              </p>
            </div>
            <div className="shadow-md shadow-[#040c16] group">
              <img
                className="group-hover:animate-bounce m w-20 m mx-auto"
                src={VSCode}
                alt="VSCode icon"
              />
              <p className="my-4 group-hover:text-bold group-hover:scale-125">
                VSCODE
              </p>
            </div>
            <div className="shadow-md shadow-[#040c16] group">
              <img
                className="group-hover:animate-bounce m w-20 m mx-auto"
                src={VS2022}
                alt="VS2022 icon"
              />
              <p className="my-4 group-hover:text-bold group-hover:scale-125">
                VS2022
              </p>
            </div>
            <div className="shadow-md shadow-[#040c16] group">
              <img
                className="group-hover:animate-bounce m w-20 m mx-auto"
                src={NETCore}
                alt="NETCore icon"
              />
              <p className="my-4 group-hover:text-bold group-hover:scale-125">
                DOTNET
              </p>
            </div>
            <div className="shadow-md shadow-[#040c16] group">
              <img
                className="group-hover:animate-bounce m w-20 m mx-auto"
                src={Bash}
                alt="Bash icon"
              />
              <p className="my-4 group-hover:text-bold group-hover:scale-125">
                BASH
              </p>
            </div>
            <div className="shadow-md shadow-[#040c16] group">
              <img
                className="group-hover:animate-bounce m w-20 m mx-auto"
                src={Bootstrap}
                alt="Bootstrap icon"
              />
              <p className="my-4 group-hover:text-bold group-hover:scale-125">
                BOOTSTRAP
              </p>
            </div>
            <div className="shadow-md shadow-[#040c16] group">
              <img
                className="group-hover:animate-bounce m w-20 m mx-auto"
                src={Webpack}
                alt="Webpack icon"
              />
              <p className="my-4 group-hover:text-bold group-hover:scale-125">
                WEBPACK
              </p>
            </div>
            <div className="shadow-md shadow-[#040c16] group">
              <img
                className="group-hover:animate-bounce m w-20 m mx-auto"
                src={Npm}
                alt="Npm icon"
              />
              <p className="my-4 group-hover:text-bold group-hover:scale-125">
                NPM
              </p>
            </div>
            <div className="shadow-md shadow-[#040c16] group">
              <img
                className="group-hover:animate-bounce m w-20 m mx-auto"
                src={NUnit}
                alt="NUnit icon"
              />
              <p className="my-4 group-hover:text-bold group-hover:scale-125">
                NUNIT
              </p>
            </div>
            <div className="shadow-md shadow-[#040c16] group">
              <img
                className="group-hover:animate-bounce m w-20 m mx-auto"
                src={TypeScript}
                alt="TypeScript icon"
              />
              <p className="my-4 group-hover:text-bold group-hover:scale-125">
                TYPESCRIPT
              </p>
            </div>
            <div className="shadow-md shadow-[#040c16] group">
              <img
                className="group-hover:animate-bounce m w-20 m mx-auto"
                src={NextJS}
                alt="NextJS icon"
              />
              <p className="my-4 group-hover:text-bold group-hover:scale-125">
                NEXTJS
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
