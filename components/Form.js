'use client'
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Form = ({ endpoint, fields, title, redirectTo }) => {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(endpoint, formData);
      setMessage("Successfully saved!");
      router.push(redirectTo);
    } catch (error) {
      setMessage(error.response.data.error || "An error occurred.");
    }
  };

  return (
    <div className="w-[500px] p-10 bg-[#E8E2EE] rounded-xl mt-10 shadow-sm shadow-white">
      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col mt-5 ju">
            <label htmlFor={field.name}>{field.label}:</label>
            <input
              type={field.type || "text"}
              name={field.name}
              id={field.name}
              required={field.required}
              onChange={handleChange}
              className="bg-[transparent] border-b-2 border-black rounded-md w-full px-3"
            />
          </div>
        ))}
        <button
          type="submit"
          className="mt-5 w-full bg-[#6C2CA7] text-white py-1 rounded-full shadow-md shadow-black"
        >
          Submit
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Form;
