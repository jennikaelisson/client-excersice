import { useState, ChangeEvent, FormEvent } from "react";

interface ISearchFormProps {
    search: (text: string) => void;
}

export const SearchForm = (props: ISearchFormProps) => {
  const [searchText, setSearchText] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.search(searchText);
  };

  return <><form onSubmit={handleSubmit}>
        <input value={searchText}  placeholder="Search here" onChange={handleChange} />
        <button>Search</button>
      </form></>;
};
