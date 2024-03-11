// import { useState } from "react";
import { IImage } from "../models/IImage";
import { ISearchTime } from "../models/ISearchTime";
import { ISpelling } from "../models/ISpelling";

interface ISearchResultProps {
  images: IImage[] | undefined;
  searchTimer: ISearchTime | undefined;
  spelling: ISpelling | undefined;
}

export const SearchResult = ({ images, searchTimer, spelling }: ISearchResultProps) => {
  // const [savedImage, setSavedImage] = useState<string | null>(null);

  // const handleSave = async (image: IImage) => {
  //   console.log("Before update:", savedImage);
  
  //   // Uppdatera lokal state med bildens URL
  //   await setSavedImage(image.link);
  
  //   console.log("After update:", savedImage);
  
  //   try {
  //     // Skicka bildens URL till servern för att spara den
  //     const response = await fetch("/favorites", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ imageUrl: image.link }),
  //     });
  
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log("Image saved:", data);
  //     } else {
  //       console.error("Failed to save image.");
  //     }
  //   } catch (error) {
  //     console.error("Error saving image:", error);
  //   }
  // };

  // ...

const handleSave = async (image: IImage) => {
  // console.log("Before update:", savedImage);

  // // Uppdatera lokal state med bildens URL
  // await setSavedImage((prevImage) => {
  //   console.log("Previous state:", prevImage);
  //   return image.link; // Update the state with the new image link
  // });

  // console.log("After update:", savedImage);



  try {
    // Skicka bildens URL till servern för att spara den
    const response = await fetch('http://localhost:3001/favorites', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageUrl: image.link }),
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

// ...

const handleSpelling = () => {
  
}

  
  return (
    <div>
      {" "}
      {spelling !== undefined && (
        <div>
          <p>Did you mean <i onClick={() => handleSpelling()}>{spelling.correctedQuery}</i>?</p>
        </div>
      )}
      {images?.map((image, index) => (
        <div key={index} className="width">
          <img src={image.link} alt={`Image ${index}`} />
          <button onClick={() => handleSave(image)}>Save</button>{" "}
        </div>
      ))}
      {searchTimer !== undefined && (
        <div>
          <p>Search Time: {searchTimer.searchTime} seconds</p>
        </div>
      )}
    </div>
  );
};

// const handleSave = (image: IImage) => {
  //   console.log("Before update:", savedImage);
  //   setSavedImage(image.link);
  //   console.log("After update:", savedImage);

  //   // Skicka bildens URL till servern för att spara den
  //   fetch("/favorites", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ imageUrl: image.link }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log("Image saved:", data))
  //     .catch((error) => console.error("Error saving image:", error));
  // };