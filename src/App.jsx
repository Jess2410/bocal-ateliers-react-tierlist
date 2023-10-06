// import { useState } from "react";
import "./App.css";
import films from "./data.json";
// import ArticleWithProps from "./components/ArticleWithProps";
// import Menu from "./components/Menu";

function App() {
  // const [tirage, setTirage] = useState(0);
  // const [historiqueTirage, setHistoriqueTirage] = useState([]);
  // const articles = [
  //   {
  //     key: 1,
  //     title: "Article 1",
  //     img: "/vite.svg",
  //     date: "23/09/2023",
  //     content: "C'est super sympa React !",
  //   },
  //   {
  //     key: 2,
  //     title: "Article 2",
  //     img: "/vite.svg",
  //     date: "24/09/2023",
  //     content: "Ceci est le deuxième article.",
  //   },
  //   {
  //     key: 3,
  //     title: "Article 3",
  //     img: "/vite.svg",
  //     date: "25/09/2023",
  //     content: "Ceci est le troisième article.",
  //   },
  //   {
  //     key: 4,
  //     title: "Article 4",
  //     img: "/vite.svg",
  //     date: "26/09/2023",
  //     content: "Ceci est le quatrième article.",
  //   },
  //   {
  //     key: 5,
  //     title: "Article 5",
  //     img: "/vite.svg",
  //     date: "27/09/2023",
  //     content: "Ceci est le cinquième article.",
  //   },
  // ];
  // const handleClick = () => {
  //   setTirage(Math.floor(Math.random() * 10));
  //   if (!historiqueTirage.includes(tirage)) {
  //     setHistoriqueTirage([...historiqueTirage, tirage]);
  //   }
  // };
  return (
    <>
      {/* <Menu /> */}
      {/* {articles.map((item) => (
        <ArticleWithProps
          key={item.key}
          title={item.title}
          img={item.img}
          date={item.date}
          content={item.content}
        />
      ))} */}
      {/* <p>Tirage : {tirage}</p>
      <button onClick={handleClick}>Clic</button>
      <ul>
        {historiqueTirage.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul> */}
      {Object.keys(films.list).map((letter, index) => (
        <>
          <h2 key={index}>{letter}</h2>
          <ul className="list">
            {films.list[letter].map((letter2, index) => (
              <h3 key={index}>{letter2.title}</h3>
            ))}
          </ul>
        </>
        // <>
        //   <h2 key={index}>{letter}</h2>
        //   <ul>
        //     {letter.map((film) => (
        //       <>
        //         <li>{film.title}</li>
        //         <img src={film.imageLink} alt={film.title} />
        //       </>
        //     ))}
        //   </ul>
        // </>
      ))}
    </>
  );
}

export default App;
