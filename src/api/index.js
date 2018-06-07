import React from "react";
import axios from "axios";

const getData = async () => {
  const result = await axios.get(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );

  return result.data;
};

export default getData;
