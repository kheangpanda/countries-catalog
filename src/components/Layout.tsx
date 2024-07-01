import React, { useEffect, useState } from "react";

import ListCountries from "./CountryGrid";
import PrimarySearchAppBar from "./Header";

import { fetchGetCountries } from "../api";
import { CountryInfo } from "../type";

const AppLayout = () => {
  const [data, setData] = useState<CountryInfo[]>([]);
  const [page, setPage] = React.useState(0);
  const [limit, setLimit] = React.useState(25);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const getCountries = async () => {
      let data = await fetchGetCountries();
      setCount(data.length);
      data = data.slice(page * limit, limit + page * limit);
      setData(data);
    };
    getCountries();
  }, [page, limit]);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLimit(parseInt(event.target.value));
    setPage(0);
  };

  return (
    <>
      <PrimarySearchAppBar />
      <ListCountries
        items={data}
        page={page}
        limit={limit}
        count={count}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};

export default AppLayout;
