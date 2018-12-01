import React, { Component } from 'react';
import './ColorTileNav.css';

class ColorTileNav extends Component {
    handleItemClick = (e) => {
        this.props.updatePage(e.currentTarget.innerText);
    }
    renderNavItems = () => {
        let x = this.props.totalNum;
        let items = [];
        for(let i=0;i<x;i++){
            let selId = "";
            if(i===this.props.currentIndex) selId = "selected-tile-nav";
            items.push( <li id={selId} onClick={this.handleItemClick}>{i+1}</li>);
        }
        return items;
    }
    render() {
        return (
            <ul className="color-app-tile-nav">
                {this.renderNavItems()}
            </ul>
        );
    }
}

export default ColorTileNav;
