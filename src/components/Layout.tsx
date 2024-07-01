import React, { useEffect, useState } from "react";

import ListCountries from "./CountryGrid";
import PrimarySearchAppBar from "./Header";

import { fetchGetCountries } from "../api";
import { CountryInfo } from "../type";

import Fuse from "fuse.js";

const AppLayout = () => {
  const [data, setData] = useState<CountryInfo[]>([]);
  const [mainData, setMainData] = useState<CountryInfo[]>([]);
  const [page, setPage] = React.useState(0);
  const [limit, setLimit] = React.useState(25);
  const [count, setCount] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  //1 = Asc, 2= Desc
  const [sort, setSort] = useState<number>(1);

  useEffect(() => {
    const getCountries = async () => {
      let getData = await fetchGetCountries();
      setCount(getData.length);
      setMainData(getData);

      getData = getData.sort((a: CountryInfo, b: CountryInfo) => {
        const nameA = a.name.official.toLowerCase();
        const nameB = b.name.official.toLowerCase();
        if (sort === 1) return nameA < nameB ? -1 : 1;
        return nameA > nameB ? -1 : 1;
      });

      getData = getData.slice(page * limit, limit + page * limit);

      setData(getData);
    };
    getCountries();
  }, []);

  useEffect(() => {
    handleSearchAndSort();
  }, [search, sort, page, limit]);

  const handleSearchAndSort = () => {
    const fuse = new Fuse(mainData, {
      keys: ["name.official"],
      threshold: 0.3,
    });

    let filtered = search
      ? fuse.search(search).map((result) => result.item)
      : mainData;

    filtered = filtered.sort((a, b) => {
      const nameA = a.name.official.toLowerCase();
      const nameB = b.name.official.toLowerCase();
      if (sort === 1) return nameA < nameB ? -1 : 1;
      return nameA > nameB ? -1 : 1;
    });

    filtered = filtered.slice(page * limit, limit + page * limit);

    setData(filtered);
  };

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

  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearch(e.target.value);
  };

  const handleClickSort = () => {
    setSort((preVal) => (preVal === 1 ? 2 : 1));
  };

  return (
    <>
      <PrimarySearchAppBar
        handleSearch={handleSearch}
        search={search}
        handleClickSort={handleClickSort}
        sort={sort}
      />
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
