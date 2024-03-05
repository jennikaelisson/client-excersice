import { useState } from "react";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { IImage } from "./models/IImage";
import { IImagePresentationWithSearchInfo } from "./models/IImagePresent";
import { SearchForm } from "./components/SearchForm";
// import { ISearchTime } from "./models/ISearchTime";
// import { ISpelling } from "./models/ISpelling";
import { SearchResult } from "./components/SearchResult";

function App() {
  const [images, setImages] = useState<IImage[] | undefined>([]);
  const [searchTimer, setSearchTimer] = useState<number | undefined>(undefined);
  const [spelling, setSpelling] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const searchImages = async (searchText: string) => {
    setLoading(true);
    try {
    const response = await axios.get<IImagePresentationWithSearchInfo>(
      `https://www.googleapis.com/customsearch/v1?key=${
        import.meta.env.VITE_GOOGLE_API_KEY
      }&cx=${
        import.meta.env.VITE_GOOGLE_SEARCH_ENGINE_ID
      }&num=10&searchType=image&q=${searchText}`
    );
    setImages(response.data.items);
    setSearchTimer(response.data.searchInformation.searchTime);
    setSpelling(response.data.spelling.correctedQuery)
  } catch(error) {
    console.error("Error fetching data:", error);
    
    } finally {
      setLoading(false); 
    }
  }

  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <>
      {isAuthenticated ? (
        <>
          <section>
            <h2>Image Search</h2>
            <SearchForm search={searchImages} />
            {loading && <p>Loading...</p>}
            <SearchResult images={images}/>
            {searchTimer !== undefined && (
              <div>
                <p>Search Time: {searchTimer} seconds</p>
                <p>Suggested spelling: {spelling}</p>
              </div>
            )}
          </section>
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </>
  );
}

export default App;
