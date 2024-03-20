import { useAuth0 } from "@auth0/auth0-react";
import { IImage } from "../models/IImage";

interface ISearchResultProps {
  images: IImage[] | undefined;
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
      body: JSON.stringify({ userEmail: user?.sub, imageUrl: image.link, imageTitle: image.title }),
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

  return (
    <div>
     
      {images?.map((image, index) => (
        <div key={index} className="width">
          <img src={image.link} alt={image.title} />
          <button onClick={() => handleSave(image)}>Save</button>
        </div>
      ))}
  
    </div>
  );
};
