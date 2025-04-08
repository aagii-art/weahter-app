"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export const White = () => {
  const apiKey = "105555e8dcc8463192223159250704";
  const [city, setcity] = useState("ulaanbaatar");
  const [input, setinput] = useState("")
  const [data, setdata] = useState(null);
  const [suggest, setsuggest] = useState([]);

  const suggestF = async (v) => {
    try {
      const hariu = await axios.get(
        `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${v}`
      );
      setsuggest(hariu.data);
    } catch (e) {
      console.log("aldaa");
      setsuggest([])
    }
  };

   
  const inputChange = (e) => {
    const value = e.target.value;
    suggestF(value);
    setinput(value)
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hariu = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}`
        );
        setdata(hariu.data);
      } catch (e) {
        console.log("aldaa");
        setdata(null)
      }
    };
   
    fetchData();
  }, [city]);

  const selectCity = (v) => {
     setcity(v);
     setsuggest([])
     setinput("")
  }

  return (
    <div className="  w-[50%] bg-[blue] p-[40px] ">
      <input
        type="text"
        placeholder="search"
        value={input}
        onChange={inputChange}
        className=" w-1/2 bg-[red] mt-[40px] "
      />

      {suggest.length > 0 &&
        suggest.map((obj) => {
          return (
            <li key={`${obj.name} ${obj.country}`} onClick={() => selectCity(obj.name)}>
              {obj.name}, {obj.country}
            </li>
          );
        })}

      <div className="  mt-[40px]  h-[828px] w-[414px] bg-[white]  ">
        {data && (
          <>
            <p> { data.forecast.forecastday[0].date } </p>
            <p> { data.location.name } </p>
            <p> udur: { data.forecast.forecastday[0].day.maxtemp_c } C</p>
            <p>shunu: { data.forecast.forecastday[0].day.mintemp_c } C </p>
            <p> tuluw: { data.forecast.forecastday[0].day.condition.text } </p>
          </>
        )}
      </div>
    </div>
  );
};
