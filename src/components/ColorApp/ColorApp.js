import React, { Component } from 'react';
import './ColorApp.css';
//static data
import { colors } from "../../data/colors.js";
//react components
import Nav from "../Nav/Nav.js";
import SideBar from "../SideBar/SideBar.js";
import ColorTile from "../ColorTile/ColorTile.js";
import ColorTileNav from "../ColorTileNav/ColorTileNav.js";
import ColorDetails from "../ColorDetails/ColorDetails.js";
class ColorApp extends Component {
    constructor() {
        super();
        this.state = {
            colors: colors,
            pages: [],
            pageIndex: 0,
            isDescActive: false,
            descData : {},
        }
    }
    componentWillMount() {
        this.generatePages();
    }
    updatePage = (i) => this.setState({ pageIndex: parseInt(i) - 1 });
    calcMaxTiles = () => {
        let maxCol = Math.floor((window.innerWidth - 300) / 200);
        let maxRow = Math.floor((window.innerHeight - 272) / 187);
        return maxCol * maxRow;
    }
    generatePages = () => {
        const newPages = [];
        const maxPerPage = this.calcMaxTiles();
        let allColors = this.state.colors;
        const x = Math.ceil(allColors.length / maxPerPage);
        for (let i = 0; i < x; i++) {
            if (allColors.length >= maxPerPage) newPages.push(allColors.splice(0, maxPerPage));
            else newPages.push(allColors.splice(0, allColors.length - 1));
        }
        this.setState({ pages: newPages });
    }
    handleColorTileClick = (colorData) => {
        this.setState({
            isDescActive:true,
            descData:colorData,
        });
    }
    renderContent = () => {
        return this.state.isDescActive===false? (
            <div>
                {this.state.pages[this.state.pageIndex].map((color) => {
                    return <ColorTile handleClick={this.handleColorTileClick} colorName={color} />
                })}
                <ColorTileNav totalNum={this.state.pages.length} currentIndex={this.state.pageIndex} updatePage={this.updatePage} />

            </div>
        ):(
            <ColorDetails descData={this.state.descData}  />
        )
    }
    render() {
        return (
            <div className="color-app">
                <Nav />
                <div className="color-app-body">
                    <SideBar />
                    <div className="color-app-tile-wrapper">
                        {this.renderContent()}
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorApp;
