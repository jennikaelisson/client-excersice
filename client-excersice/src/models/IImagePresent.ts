import { IImage } from "./IImage";
import { ISearchTime } from "./ISearchTime";
import { ISpelling } from "./ISpelling";

export interface IImagePresentationWithSearchInfo {
  items: IImage[];
  searchInformation: ISearchTime;
  spelling: ISpelling; 
}
