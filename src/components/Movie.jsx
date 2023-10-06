const Movie = ({ title, img }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={img} alt={title} />
    </div>
  );
};

export default Movie;
