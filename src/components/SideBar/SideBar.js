import React, { Component } from 'react';
import './SideBar.css';

class SideBar extends Component {
    render() {
        return (
            <div className="app-sidebar">
                <div className="app-sidebar-randomclr">
                    <h3>Random Color</h3>
                </div>
                <ul className="app-sidebar-colors">
                    <li>Red</li>
                    <li>Orange</li>
                    <li>Yellow</li>
                    <li>Green</li>
                    <li>Blue</li>
                    <li>Purple</li>
                    <li>Brown</li>
                    <li>Gray</li>
                </ul>
            </div>
        );
    }
}

export default SideBar;
