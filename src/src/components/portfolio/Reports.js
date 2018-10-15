import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';

class Reports extends React.Component {
    axios.get().then(res => {
        console.log(res.data);
        this.setState({
            runners: res.data;
        })
    }).catch((error) => {
        alert(error);
    });
}