import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d6297ce7c8mshe598ed6504f5846p1750a1jsn3ba0a6f51372",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  const data = await res.json();

  return data;
};

async function axiosRequest() {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "d6297ce7c8mshe598ed6504f5846p1750a1jsn3ba0a6f51372",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return data;
}
