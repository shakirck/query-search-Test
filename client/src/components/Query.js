import React from "react";
import tagImage from "../assets/tag.svg";
export default function Query({ query }) {
  let key = 0; //simple alternate approach for solving the unique key error !!!Not recommended though
  return (
    <div className="Query">
      <div className="topic"> {query.topic}</div>
      <div className="query"> {query.query}</div>
      <div className="tags">
        <img src={tagImage} alt="tags" />
        {query.tags.map((tag) => (
          <div className="tag" key={key++}>
            {" "}
            {tag}{" "}
          </div>
        ))}{" "}
      </div>
    </div>
  );
}
