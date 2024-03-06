import { useState } from "react";
import "./App.css";
// import LoginButton from "./components/LoginButton";
// import LogoutButton from "./components/LogoutButton";
// import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { IImage } from "./models/IImage";
import { IImagePresentationWithSearchInfo } from "./models/IImagePresent";
import { SearchForm } from "./components/SearchForm";
import { SearchResult } from "./components/SearchResult";
import { ISearchTime } from "./models/ISearchTime";
import { ISpelling } from "./models/ISpelling";
import { Loading } from "./components/Loading";
// import { LoginStart } from "./components/LoginStart";

function App() {
  const [images, setImages] = useState<IImage[] | undefined>([]);
  const [searchTimer, setSearchTimer] = useState<ISearchTime | undefined>(
    undefined
  );
  const [spelling, setSpelling] = useState<ISpelling | undefined>(undefined);
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
      setSearchTimer(response.data.searchInformation);
      setSpelling(response.data.spelling);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // const { isAuthenticated, isLoading } = useAuth0();

  // if (isLoading) {
  //   return <Loading />;
  // }
  return (
    <>
      {/* {isAuthenticated ? ( */}
        <>
          <section>
            <h2>Image Search</h2>
            <SearchForm search={searchImages} />
            {loading && <Loading />}
            <SearchResult images={images} searchTimer={searchTimer} spelling={spelling} />
          </section>
          {/* <LogoutButton /> */}
        </>
      {/* // ) : (
      //   <>
      //     <LoginStart />
      //     <LoginButton />
      //   </>
      // )} */}
    </>
  );
}

export default App;
