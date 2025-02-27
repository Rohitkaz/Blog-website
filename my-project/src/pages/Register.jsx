import React from "react";
import Header from "./Header";
import BlogForm from "./BlogForm";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { redirect } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [error,setError]=useState();
  const navigate = useNavigate();
  const Register = async (e) => {
    e.preventDefault();
    console.log("hi");
    try {
      const result = await axios.post("http://localhost:8000/Auth/register", {
        name: name,
        password: password,
      });
      console.log(result.status);

      
        return navigate("/Login");
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <>
      <Header />
      <div className=" border-blue-800  w-screen h-dvh border-t-8 flex justify-center   bg-slate-300   ">
        <div className=" border-2 border-white rounded shadow-md shadow-slate-100 w-3/4 mt-10  md:mb-20 md:mt-10 md:h-3/4 h-[400px] md:w-[450px] flex-col flex  bg-slate-50  ">
          <div className="w-full border-b-2 border-gray-500 mt-[10px] font-sans text-lg  p-4 font-bold text-center ">
            WELCOME BACK!
          </div>
          <form onSubmit={Register} className="flex flex-col mt-[50px] gap-5 justify-center items-center   ">
            <input
              name={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Name"
              className="  border-green border-2  w-3/4 md:h-[40px] pl-2"
           required ></input>
            <input
              name={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Password"
              className="  border-green border-2  w-3/4 md:h-[40px] pl-2 "
            required></input>
            <button
              type="submit"
              className=" border-none bg-blue-800 mt-5 h-[50px] text-center pt-2 w-3/4 text-white hover:bg-teal-500 hover:text-blue-900 "
            >
              REGISTER
            </button>
          </form>

          <div className=" border-gray-500 border-t-2 mt-10 flex flex-row justify-between md:p-5 p-1">
            <div className="text-blue-600 font-heading hover:text-green-500">
              <Link to="/login">Already have an account?</Link>
            </div>
            <div>forgot Password?</div>
          </div>
          <h1 className=" text-red-600 text-center  ">{error}</h1>
        </div>
      </div>
    </>
  );
};

export default Register;
