import { useState, useEffect } from "react";
import { api } from "../../api/api";
import axios from "axios";

export function Main() {
  const [user, setUser] = useState({
    username: "",
    title: "",
    content: "",
  });

  function handleChange(e) {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("https://dev.codeleap.co.uk/careers/", user);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="bg-black">
        <p className="text-xl font-bold text-white py-4 ml-4">
          CodeLeap Network
        </p>
      </div>
      <div className=" px-5 border border-[#000] m-4">
        <div className="mx-auto ">
          <form onChange={handleChange}>
            <p className="w-72 h-5 text-xl font-bold py-10">
              What’s on your mind?
            </p>

            <div className="mb-5">
              <label
                htmlFor="title"
                className="mb-3 block text-base font-medium "
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Hello world"
                className="w-full rounded-md border border-[#000] bg-white py-3 px-6 text-base font-medium  outline-none  focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="content"
                className="mb-3 block text-base font-medium "
              >
                Content
              </label>
              <textarea
                rows="4"
                name="content"
                id="content"
                placeholder="Content here"
                className="w-full resize-none rounded-md border border-[#000] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                className="hover:shadow-form flex justify-end uppercase mb-4 bg-[#000] py-3 px-8 text-base font-semibold text-white outline-none"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
