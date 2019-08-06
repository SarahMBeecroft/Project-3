import React, {Component} from "react";
import API from "../utils/API";

function AddBar(props) {
    return (
        <div>
            <p>User ID: {props.userID}</p>
            <p>Beer ID: {props.beerID}</p>
        </div>
    );
}

export default AddBar;