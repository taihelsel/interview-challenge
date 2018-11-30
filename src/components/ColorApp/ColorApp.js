import React, { Component } from 'react';
import './ColorApp.css';

//react components
import Nav from "../Nav/Nav.js";
import SideBar from "../SideBar/SideBar.js";
class ColorApp extends Component {
    render() {
        return (
            <div className="color-app">
                <Nav />
                <div className="color-app-body">
                    <SideBar />
                </div>
            </div>
        );
    }
}

export default ColorApp;
