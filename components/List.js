"use client"
import { useEffect, useState } from "react";
import axios from "axios";

const List = ({ endpoint, title }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(endpoint);
      setData(response.data);
    };

    fetchData();
  }, [endpoint]);

  return (
    <div>
      <h2 className="text-center font-bold text-4xl text-[#E8E2EE]">{title}</h2>
      <ul className="flex gap-10 flex-wrap mt-10">
        {data.map((item) => (
          <li
            key={item.id}
            className="bg-[#E8E2EE] p-5 rounded-md flex flex-col gap-2"
          >
            {Object.keys(item).map((key) => (
              <div key={key}>
                <b>{key}:</b> {item[key]}
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
