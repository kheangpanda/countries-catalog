
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