import { IImage } from "../models/IImage";
import { ISearchTime } from "../models/ISearchTime";
import { ISpelling } from "../models/ISpelling";

interface ISearchResultProps {
  images: IImage[] | undefined;
  searchTimer: ISearchTime | undefined;
  spelling: ISpelling | undefined;
}

export const SearchResult = ({ images, searchTimer, spelling }: ISearchResultProps) => {
  return (
    <div>
      {images?.map((image, index) => (
        <div key={index} className="width">
          <img src={image.link} alt={`Image ${index}`} />
        </div>
      ))}
      {searchTimer !== undefined && (
        <div>
          <p>Search Time: {searchTimer.searchTime} seconds</p>
        </div>
      )}
      {spelling !== undefined && (
        <div>
          <p>Suggested spelling: {spelling.correctedQuery}</p>
        </div>
      )}
    </div>
  );
};
