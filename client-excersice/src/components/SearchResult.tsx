import { IImage } from "../models/IImage";

interface ISearchResultProps {
    images: IImage[] | undefined;
  }
  
  export const SearchResult = ({ images }: ISearchResultProps) => {
    return (
        <div>
              {images?.map((image, index) => (
                <div key={index} className="width">
                  <img src={image.link} alt={`Image ${index}`} />
                </div>
              ))}
            </div>
    )}