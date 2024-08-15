import React, {useState,useEffect} from "react";
import WindowTitleBar from "./WindowTitleBar";
import Draggable from "react-draggable";
import ExplorerMenu from "./ExplorerMenu";


export default function Cv({ onClose }) {
const [apiData, setApiData] = useState(null);
const api = process.env.NEXT_PUBLIC_API_URL;


useEffect(() => {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      setApiData(data.acf);
    })
    .catch((error) => {
      console.log('Error fetching data:', error);
    })
}, [])

const getParagraphs = (summary) => {
  return summary
    .split('\r\n')
    .map(paragraph => paragraph.trim().replace('*', ''))
    .filter(paragraph => paragraph.length > 0);
};

if (!apiData){
  return <div className="cv-window"></div>
}

const paragraphs_1 = getParagraphs(apiData.work_section_1['summary-1']);
const paragraphs_2 = getParagraphs(apiData.work_section_2['summary-2']);
const paragraphs_3 = getParagraphs(apiData.work_section_3['summary-3']);

  return (
    <Draggable bounds="parent">
      <div className="absolute cv-window flex flex-col w-[850px] h-[620px] cardAndTableBorder box-shadow bg-customGrey p-1">
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
          <h1 className="text-3xl text-center">{apiData.name}</h1>
          <h2 className="text-xl text-center leading-3">{apiData.role}</h2>
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
          <h2 className="text-2xl text-center">SKILL'S</h2>
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
            <b>{apiData.work_section_1['company-name-1']}</b>
          </h3>
          <p>{apiData.work_section_1['job_title-1']}</p>
          <ul className="list-disc-important">
            {paragraphs_1.map((paragraph, index) => (
              <li key={index}>{paragraph}</li>
            ))} 
          </ul>
          <h3 className="mt-8">
            <b>{apiData.work_section_2['company-name-2']}</b>
          </h3>
          <p className="leading-3">{apiData.work_section_2['job_title-2']}</p>
          <ul className="list-disc-important">
          {paragraphs_2.map((paragraph, index) => (
              <li key={index}>{paragraph}</li>
            ))}
          </ul>

          <h3 className="mt-8">
            <b>{apiData.work_section_3['company-name-3']}</b>
          </h3>
          <p className="leading-3">{apiData.work_section_3['job_title-3']}</p>
          <ul className="list-disc-important">
          {paragraphs_3.map((paragraph, index) => (
              <li key={index}>{paragraph}</li>
            ))}
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
