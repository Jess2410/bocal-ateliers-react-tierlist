// import React from "react";

const ArticleWithProps = ({ title, date, content, img }) => {
  //   return React.createElement(
  //     "div",
  //     null,
  //     React.createElement("h2", null, "Title"),
  //     React.createElement("p", null, "Content")
  //   );
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <span>Date : {date}</span>
        <p>{content}</p>
        <img src={img} alt={title} />
      </div>
    </div>
  );
};

export default ArticleWithProps;
