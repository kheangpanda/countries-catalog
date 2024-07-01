
interface iddProp {
    root: string;
    suffixes: string[];
  }

  
  export interface CountryInfo {
    name: any;
    flags: any;
    cca2: string;
    cca3: string;
    cioc: string;
    altSpellings: string[];
    idd: iddProp;
  };


export interface paginationProp {
  page: number;
  limit: number;
  count: number;
  handleChangePage: any
  handleChangeRowsPerPage: any
}