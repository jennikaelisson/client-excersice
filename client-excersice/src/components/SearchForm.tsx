import { useState, ChangeEvent, FormEvent } from "react";
import { ISearchTime } from "../models/ISearchTime";
import { ISpelling } from "../models/ISpelling";

interface ISearchFormProps {
    search: (text: string) => void;
    searchTimer: ISearchTime | undefined;
  spelling: ISpelling | undefined;
}

export const SearchForm = ({search, searchTimer, spelling} : ISearchFormProps) => {
  const [searchText, setSearchText] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    search(searchText);
  };

  const handleSpelling = () => {
    setSearchText(spelling?.correctedQuery || "");
    search(spelling?.correctedQuery || "");
  }

  return <><form onSubmit={handleSubmit}>
        <input value={searchText}  placeholder="Search here" onChange={handleChange} />
        <button>Search</button>
      </form>
      
      <div>
      {spelling !== undefined && (
        <div>
          <p>Did you mean <i className="clickable" onClick={() => handleSpelling()}>{spelling.correctedQuery}</i>?</p>
        </div>
      )}
        {searchTimer !== undefined && (
        <div>
          <p>Search Time: {searchTimer.searchTime} seconds</p>
        </div>
      )}</div></>;

};
