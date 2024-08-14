import React from "react";
import WindowTitleBar from "./WindowTitleBar";
import Draggable from "react-draggable";
import ExplorerMenu from "./ExplorerMenu";

export default function Cv({ onClose }) {
  return (
    <Draggable bounds="parent">
      <div className="absolute notepad-window flex flex-col w-[850px] h-[620px] cardAndTableBorder box-shadow bg-customGrey p-1">
        <WindowTitleBar
          icon={"/notepad-1.png"}
          folderName={"CV - Anton Dvaravenka"}
          onClose={onClose}
        />
        <div>
          <ExplorerMenu />
        </div>
        <div className="flex flex-col bg-white w-full h-full p-2 text-lg gap-3 overflow-scroll">
          <span className="text-xl leading-3">
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - -
          </span>
          <h1 className="text-3xl text-center">Anton Dvaravenka</h1>
          <h2 className="text-xl text-center leading-3">Front-End Developer</h2>
          <span className="text-xl">
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - -
          </span>
          <p className="leading-5">
            Email:{" "}
            <a
              href="mailto:anton.dvaravenka@outlook.com"
              className="text-blue-500"
            >
              anton.dvaravenka@outlook.com
            </a>{" "}
          </p>
          <p className="leading-5">
            Tel:{" "}
            <a href="+44 7391 805 636" className="text-blue-500">
              +44 7391 805 636
            </a>
          </p>
          <p className="leading-5">
            Linkedin:{" "}
            <a
              href="https://www.linkedin.com/in/anton-dvaravenka/"
              className="text-blue-500"
            >
              /anton-dvaravenka
            </a>
          </p>
          <span className="text-xl">
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - -
          </span>
          <h2 className="text-2xl text-center">SKILL</h2>
          <span className="text-xl">
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - -
          </span>
          <p className="text-slate-700">
            <b className="text-black">Front-end:</b> HTML, CSS, TailwindCSS, Bootstrap, JavaScript, React, Next.js, Gatsby;
            <br />
            <b className="text-black">Back-end:</b> PHP, Wordpress Core, WooCommerce, MySQL;
            <br />
            <b className="text-black">Project management:</b> Git, Jira,
            ClickUp;
            <br />
            <b className="text-black">Testing:</b> Python + Selenium;
            <br />
            <b className="text-black">Other:</b> Figma, UX/UI, Responsive Web
            Design, SEO, Performance Optimization.
            <br />
          </p>
          <span className="text-xl">
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - -
          </span>
          <h2 className="text-2xl text-center">EXPERIENCE</h2>
          <span className="text-xl">
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - -
          </span>
          <h3 className="pb-0 mb-0 leading-3">
            <b>Pronetix, St. Helens 06/2022-05/2024</b>
          </h3>
          <p>(Wordpress/Frontend Developer)</p>
          <ul className="list-disc-important">
            <li>Developed custom responsive themes from scratch for the company’s corporate websites, utilizing ACF, custom post types, and REST API.</li>
            <li>Developed a cost-saving calculator and a CO2 emissions reduction calculator using JavaScript, MySQL, and WordPress hooks, leading to a 15% reduction in CO2 emissions for client companies.
            </li>
            <li>Collaborated with a designer to implement new designs, cutting implementation time by 30% via a structured task management system in Jira and ensuring pixel-perfect Figma accuracy.
            </li>
            <li>Participated in the large-scale frontend development of an indoor hospital navigation web portal using React, TailwindCSS, and DaisyUI, with Git used as the version control system.
            </li>
            <li>Conducted regular cross-platform testing using both manual methods and automated tests written in Python and Selenium, greatly reducing post-launch bug reports.
            </li>
            <li>Worked on optimizing the website for SEO and configured GA and GTM, improving conversion rates by 20% through accurate tracking and data-driven insights.
            </li>
          </ul>

          <h3 className="mt-8">
            <b>FREELANCE, International 02/2021 - 05/2022</b>
          </h3>
          <p className="leading-3">(Wordpress Developer)</p>
          <ul className="list-disc-important">
            <li>
              Developing websites for small and medium-sized businesses was my
              primary focus during my freelance work.
            </li>
          </ul>

          <h3 className="mt-8">
            <b>DELO RUK, MINSK 01/2018-12/2020</b>
          </h3>
          <p className="leading-3">(Wordpress Developer)</p>
          <ul className="list-disc-important">
            <li>
              Developed custom responsive themes from scratch for the company’s
              corporate websites, utilizing ACF, custom post types, and REST
              API.
            </li>
            <li>
              Developed a cost-saving calculator and a CO2 emissions reduction
              calculator using JavaScript, MySQL, and WordPress hooks, leading
              to a 15% reduction in CO2 emissions for client companies.
            </li>
            <li>
              Collaborated with a designer to implement new designs, cutting
              implementation time by 30% via a structured task management system
              in Jira and ensuring pixel-perfect Figma accuracy.
            </li>
            <li>
              Participated in the large-scale frontend development of an indoor
              hospital navigation web portal using React, TailwindCSS, and
              DaisyUI, with Git used as the version control system.
            </li>
            <li>
              Conducted regular cross-platform testing using both manual methods
              and automated tests written in Python and Selenium, greatly
              reducing post-launch bug reports.
            </li>
            <li>
              Worked on optimizing the website for SEO and configured GA and
              GTM, improving conversion rates by 20% through accurate tracking
              and data-driven insights.
            </li>
          </ul>

          <h2 className="mt-8">
            <b>Education</b>, 2013-2017
          </h2>
          <ul className="list-disc-important pb-4">
            <li>
              Academy of Public Administration under the aegis of the President
              of the Republic of Belarus - Bachelor of Laws (LLB)
            </li>
          </ul>
        </div>
      </div>
    </Draggable>
  );
}
