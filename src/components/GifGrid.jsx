import { useFecthGifs } from "../hooks/useFecthGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isloandig } = useFecthGifs(category);
  return (
    <>
      <h3>{category} </h3>
      {isloandig && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
