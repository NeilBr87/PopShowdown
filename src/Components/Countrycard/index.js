import React from "react";
import "./style.css";

export default function Countrycard(props) {
    return (
        <div className="countrycard">
          <div className="wordwrap">
            <h2 className="countrytitle">{props.countryName}</h2>
          </div>
          <p>Capital: {props.countryCapital}</p>
          <p>Region: {props.countryRegion}</p>
          <img id="flagimage" src={props.countryFlag} alt="country flag" />
        </div>
    );
}