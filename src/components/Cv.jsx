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
            <b className="text-black">Front-end:</b> HTML, CSS, TailwindCSS,
            Bootstrap, JavaScript;
            <br />
            <b className="text-black">Back-end:</b> PHP, Wordpress Core,
            WooCommerce, MySQL;
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
            <b>DRIVERNET, St. Helens 06/2022-05/2024</b>
          </h3>
          <p>(Wordpress/Frontend Developer)</p>
          <ul className="list-disc-important">
            <li>
              Contributed to the design and development of the frontend part of
              a new company product aimed at optimizing navigation processes
              within medical institutions, baked by the European Space Agency.
            </li>
            <li>
              Migrated the company’s website from Wix to WordPress, developing
              and scaling it in line with the company’s growth. Added
              interactive JavaScript features to enhance user experience,
              including a cost-saving calculator and a CO2 emissions savings
              tool designed to optimize paper-based workflows. Enhanced database
              security, implemented DDoS protection, and set up performance
              monitoring systems. Configured GA for accurate traffic tracking,
              including filters, goals, and custom events, and used GTM to track
              key user interactions.
            </li>
            <li>
              Performed regular cross-platform testing to ensure seamless
              functionality on both mobile and desktop devices.
            </li>
            <li>Managed task scheduling and deadline estimation using Jira.</li>
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
              Defined the target audience, analyzed business needs, and
              formulated functional requirements for the online store. Developed
              the site using WordPress with Elementor and WooCommerce, achieving
              readiness for payment acceptance in just 3 weeks from initial
              concept.
            </li>
            <li>
              Integrated payment gateways and configured anti-fraud systems on
              the website, ensuring uninterrupted and secure payment processing.
              These measures significantly enhanced transaction protection
              against fraud and guaranteed users a high level of trust in the
              payment process.
            </li>
            <li>
              Set up custom events for tracking in Google Analytics, closely
              collaborated with the marketing department, conducted A/B testing,
              and optimized the store, achieving a conversion rate of 4.5%,
              which is 1.5% higher than the industry average.
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
