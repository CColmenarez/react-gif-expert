import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFecthGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isloanding, setIsLoanding] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoanding(false);
  };
  useEffect(() => {
    getImages();
  }, []);
  return {
    images,
    isloanding,
  };
};