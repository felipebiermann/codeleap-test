import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import axios from "axios";

export function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState({
    username: "",
  });
  localStorage.setItem("loggedInUser", JSON.stringify(user));
  console.log(user);
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(AuthContext);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://dev.codeleap.co.uk/careers/",
        user
      );
      setLoggedInUser({ ...response.data });

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      navigate("/main");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Sign Up
      </button>
      {showModal ? (
        <>
          <div className="bg-black opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5">
                  <h3 className="text-xl font-bold">
                    Welcome to CodeLeap network!
                  </h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form
                    className="px-8 pt-6 pb-8 w-full"
                    onSubmit={handleSubmit}
                  >
                    <label className="block text-black text-sm font-bold mb-1">
                      Please enter your username
                    </label>
                    <input
                      autoFocus
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      onChange={handleChange}
                      // onChange={(e) => setUser(e.target.value)}
                      type="username"
                      name="username"
                      value={user.username}
                    />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  {/* <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button> */}
                  <Link to="/main">
                    <button
                      className="text-white bg-[#000] font-bold uppercase text-sm px-6 py-3 mr-1 mb-1"
                      type="button"
                      disabled={!user}
                    >
                      Enter
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
