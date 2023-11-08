import React from 'react'
import { BiSolidDownload } from 'react-icons/bi'

const resume_URL = "http://localhost:5173/PAULESTHAPPAN-resume.pdf";

const downloadresume = (url) => {
    const filename = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href = url;
    aTag.setAttribute = ('Download', filename)
    document.body.appendChild(aTag)
    aTag.click();
    aTag.remove();

}

function Resuma() {
  return (
    <div id='resuma' className=" flex pt-16 justify-center md:pl-16  ">
      <button
        className="bg-blue-900 text-gray-100 mt-4 p-4 rounded-lg flex items-center justify-center"
        onClick={() => {
          downloadresume(resume_URL);
        }}
      >
        Download Resuma <BiSolidDownload className="ml-2" />
      </button>
    </div>
  );
}

export default Resuma