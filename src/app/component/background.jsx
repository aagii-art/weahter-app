"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Black } from "./black";
import { White } from "./white";

export const Background = () => {
  const apiKey = "105555e8dcc8463192223159250704";
  const [city, setcity] = useState("ulaanbaatar");
  const [input, setinput] = useState("");
  const [data, setdata] = useState(null);
  const [suggest, setsuggest] = useState([]);
  const [load, loading] = useState(false);

  const suggestF = async (v) => {
    try {
      loading(true)
      const hariu = await axios.get(
        `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${v}`
      );
      // loading(false)
      setsuggest(hariu.data);
    } catch (e) {
      loading(true)
      console.log("axios get error");
      setsuggest([]);
    } finally {

    }
  };
  

  const inputChange = (e) => {
    const value = e.target.value;
    suggestF(value);
    setinput(value);
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
        setdata(null);
      }
    };
    fetchData();
  }, [city]);
console.log( "suggest", suggest);
console.log("data", data);


  const selectCity = (v) => {
    setcity(v);
    setsuggest([]);
    setinput("");
    loading(false)
  };

  return (
    <div className=" flex min-h-screen  ">
      <White
        inputChange={inputChange}
        input={input}
        suggest={suggest}
        data={data}
        load={load}
        selectCity={selectCity}
        value={input}
      />
      <Black data={data} load={load} />
    </div>
  );
};
