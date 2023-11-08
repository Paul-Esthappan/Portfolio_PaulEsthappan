import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl py-4 font-bold text-center text-blue-900">
        Contact
      </h1>
      <form
        action="https://getform.io/f/458b513f-f351-4ddd-9397-0659fa3310ff"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex broder-gray-300 "
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone</label>
            <input
              className="border-2 rounded-lg p-3 flex broder-gray-300 "
              type="text"
              name="phoneNumber"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2">Email</label>
          <input
            className="border-2 rounded-lg p-3 flex broder-gray-300 "
            type="text"
            name="email"
          />
        </div>

        <div className="flex flex-col">
          <label className="uppercase text-sm py-2">Subject</label>
          <input
            className="border-2 rounded-lg p-3 flex broder-gray-300 "
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea
            className="border-2 rounded-lg p-3 broder-gray-300 "
            name="message"
            rows="10"
          ></textarea>
        </div>
        <button className="bg-blue-900 text-gray-100 mt-4 w-full p-4 rounded-lg ">
          Sent Message
        </button>
      </form>
    </div>
  );
}

export default Contact