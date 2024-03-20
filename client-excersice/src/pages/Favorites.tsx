import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';

interface ISavedImage {
  imageUrl: string;
  imageTitle: string
}

export const Favorites = () => {
  const { user } = useAuth0();
  const [savedImages, setSavedImages] = useState<ISavedImage[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3002/favorites/${user?.sub}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          console.log('Favorites gathered successfully');
          const data = await response.json();
          console.log(data);
        
          setSavedImages(data.imageUrls);
        } else {
          console.error('Failed to gather favorites.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }; fetchData(); 

}, []);

  return (
    <div>
      <h2>Saved Images</h2>
      {savedImages.map((image, index) => (
        <div key={index} className="width">
          <img src={image.imageUrl} alt={image.imageTitle} />
        </div>
      ))}
    </div>
  );
};
