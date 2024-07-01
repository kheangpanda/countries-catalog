import React, { useEffect, useState } from "react";

import ListCountries from "./CountryGrid";
import PrimarySearchAppBar from "./Header";

import { fetchGetCountries } from "../api";
import { CountryInfo } from "../type";

const AppLayout = () => {
  const [data, setData] = useState<CountryInfo[]>([]);

  useEffect(() => {
    const getCountries = async () => {
      const data = await fetchGetCountries();
      setData(data);
    };
    getCountries();
  }, []);
  return (
    <>
      <PrimarySearchAppBar />
      <ListCountries items={data} />
    </>
  );
};

export default AppLayout;
