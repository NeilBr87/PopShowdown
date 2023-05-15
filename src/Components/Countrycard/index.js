import React from "react";
import "./style.css";
import { Helmet } from 'react-helmet';


export default function Countrycard(props) {
    return (
        <div className="countrycard">
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Helmet>
          <div className="wordwrap">
            <h2 className="countrytitle">{props.countryName}</h2>
          </div>
          <p className="countryContents">Capital: {props.countryCapital}</p>
          <p className="countryContents">Region: {props.countryRegion}</p>
          <img id="flagimage" src={props.countryFlag} alt="country flag" />
        </div>
    );
}