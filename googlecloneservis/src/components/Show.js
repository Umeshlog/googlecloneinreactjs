import React from "react";
import { NavLink } from "react-router-dom";

const show = (props) => {
  const { result, info } = props;
  console.log(result, info);
  console.log(result.link);
  return (
    <div className="show">
      <div className="show__info">
        {info ? `Total results :${info.totalResults}` : ""}
        {/* {result ? `Total results :${result.totalResult}` : ""} */}
      </div>
      {result.length > 0
        ? result.map((results) => {
            return (
              <div className="show__details" key={results}>
                <div className="show__link">
                  <a href={results.displayLink} >{results.displayLink}</a>
                </div>
                <div className="show__title">
                  <a href={results.link}> {results.title}</a>
                </div>
                <div className="show__description">
                  <p>{results.snippet}</p>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default show;
