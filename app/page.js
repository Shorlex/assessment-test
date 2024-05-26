"use client";
import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Link from "next/link";

const Home = () => {
  const [activeForm, setActiveForm] = useState("teacher");

  return (
    <div className="w-full flex flex-col justify-center items-center pt-10 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#6C2CA7] via-[#120130] to-black">
      <div className="flex flex-col justify-center items-center lg:flex-row gap-4 md:gap-12">
        <h1 className="text-4xl font-bold text-[#E8E2EE] text-center">
          Teacher and Student Information System
        </h1>
        <nav className="mt-3">
          <ul className="text-white flex gap-4">
            <li>
              <Link
                href="/teachers"
                className="mt-5 w-full bg-[#6C2CA7] text-white p-3 rounded-full shadow-md shadow-black"
              >
                Teachers Record
              </Link>
            </li>
            <li>
              <Link
                href="/students"
                className="mt-5 w-full bg-[#6C2CA7] text-white p-3 rounded-full shadow-md shadow-black"
              >
                Students Record
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-10">
        <button
          className={`btn px-8 py-3 rounded-full cursor-pointer transition-all duration-400 mx-2 shadow-sm shadow-[grey] ${
            activeForm === "teacher"
              ? "bg-[#6C2CA7] text-white shadow-white"
              : "bg-white"
          }`}
          onClick={() => setActiveForm("teacher")}
        >
          Teachers
        </button>
        <button
          className={`btn px-8 py-3 rounded-full cursor-pointer transition-all duration-400 mx-2 shadow-sm shadow-black ${
            activeForm === "student"
              ? "bg-[#6C2CA7] text-white shadow-white"
              : "bg-white"
          }`}
          onClick={() => setActiveForm("student")}
        >
          Students
        </button>
      </div>

      <div className="flex flex-row overflow-hidden pb-5 ">
        <div
          className={`transition-transform duration-400 transform ${
            activeForm === "teacher"
              ? "translate-x-[40%] opacity-100"
              : "translate-x-full opacity-0"
          } rounded-lg w-96`}
        >
          <Form
            endpoint="/api/teachers"
            title="Teacher Form"
            redirectTo="/teachers"
            fields={[
              {
                label: "National ID Number",
                name: "nationalId",
                required: true,
              },
              { label: "Title", name: "title", required: true },
              { label: "Name", name: "name", required: true },
              { label: "Surname", name: "surname", required: true },
              {
                label: "Date of Birth",
                name: "dateOfBirth",
                required: true,
                type: "date",
              },
              {
                label: "Teacher Number",
                name: "teacherNumber",
                required: true,
              },
              { label: "Salary", name: "salary", required: false },
            ]}
          />
        </div>
        <div
          className={`transition-transform duration-400 transform ${
            activeForm === "student"
              ? "-translate-x-[60%] opacity-100"
              : "translate-x-full opacity-0"
          }  rounded-lg w-96`}
        >
          <Form
            endpoint="/api/students"
            title="Student Form"
            redirectTo="/students"
            fields={[
              {
                label: "National ID Number",
                name: "nationalId",
                required: true,
              },
              { label: "Name", name: "name", required: true },
              { label: "Surname", name: "surname", required: true },
              {
                label: "Date of Birth",
                name: "dateOfBirth",
                required: true,
                type: "date",
              },
              {
                label: "Student Number",
                name: "studentNumber",
                required: true,
              },
            ]}
          />
        </div>
      </div>

      {/* <List endpoint="/api/teachers" title="Teachers List" />

      <List endpoint="/api/students" title="Students List" /> */}
    </div>
  );
};

export default Home;
