// import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { IImage } from "../models/IImage";
// import { ISearchTime } from "../models/ISearchTime";
// import { ISpelling } from "../models/ISpelling";

interface ISearchResultProps {
  images: IImage[] | undefined;
  // searchTimer: ISearchTime | undefined;
  // spelling: ISpelling | undefined;
}

export const SearchResult = ({ images }: ISearchResultProps) => {
const { user } = useAuth0();

  const handleSave = async (image: IImage) => {
  try {
    const response = await fetch('http://localhost:3002/favorites', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userEmail: user?.sub, imageUrl: image.link }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Image saved:", data);
    } else {
      console.error("Failed to save image.");
    }
  } catch (error) {
    console.error("Error saving image:", error);
  }
};

// const handleSpelling = () => {
  
// }
  return (
    <div>
      {/* {spelling !== undefined && (
        <div>
          <p>Did you mean <i onClick={() => handleSpelling()}>{spelling.correctedQuery}</i>?</p>
        </div>
      )} */}
      {images?.map((image, index) => (
        <div key={index} className="width">
          <img src={image.link} alt={`Image ${index}`} />
          <button onClick={() => handleSave(image)}>Save</button>
        </div>
      ))}
      {/* {searchTimer !== undefined && (
        <div>
          <p>Search Time: {searchTimer.searchTime} seconds</p>
        </div>
      )} */}
    </div>
  );
};
