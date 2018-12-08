import React, { Component } from 'react';
import './ColorDetails.css';
//react components
import ColorTile from "../ColorTile/ColorTile.js";
class ColorDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorName: "",
            colorHex: this.props.descData.hex,
            colorRGB: this.props.descData.rgb,
            colorHSL:[],
            shades:[],
            maxShadesToRender:5
        }
    }
    componentWillMount = () => {
        let rgb = this.props.descData.rgb;
        rgb = rgb.replace("rgb(","");
        rgb = rgb.replace(")","");
        rgb = rgb.split(",");
        const HSL = this.getHSL(rgb[0],rgb[1],rgb[2]);
        const shades = this.generateTileShades(HSL);
        this.setState({
            colorHSL:HSL,
            shades:shades,
        });
    }
    getHSL = (r, g, b) => {
        r = parseInt(r) / 255;
        g = parseInt(g) / 255;
        b = parseInt(b) / 255;
        let max = Math.max(r, g, b)
        let min = Math.min(r, g, b);
        let h = 0;
        let s = 0;
        let l = (max + min) / 2;
        if(max != min){
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max){
                case r: h = (g - b) / d; break;
                case g: h = ((b - r) / d) + 2; break;
                case b: h = ((r - g) / d) + 4; break;
            }
            h = h * 60;
            if (h < 0) h = h + 360;
        }
        return [h,s,l*100];
    }
    handleTileClick = (e) => {
        console.log("tile clicked");
    }
    generateTileShades = (HSL) => {
        const shadesList = [];
        let shadeOffset  = null;
        let l = HSL[2];
        switch(true){
            case l >=95:shadeOffset = [l-20,l-10,l,l+2,l+3.5]; break;
            case l >=75:shadeOffset = [l-20,l-10,l,l+5,l+10]; break;
            case l>=50:
            case l>=25:shadeOffset = [l-20,l-10,l,l+10,l+20]; break;
            case l<=5:shadeOffset = [l+10,l+20,l,l+30,l+40]; break;
            case l<=20:shadeOffset = [l-5,l-2,l,l+10,l+20]; break;
        }
        for(let i=0;i<this.state.maxShadesToRender;i++){
            shadesList.push(`hsl(${HSL[0]},${HSL[1]*100}%,${shadeOffset[i]}%)`);
        }
        return shadesList;
    }
    renderTileShades = () => {
        let maxShades = this.state.maxShadesToRender;
        let i = 0;
        const allShades = [];
        while (i<maxShades) {
                allShades.push(
                    <li>
                        <ColorTile colorName={"null"} colorHex={this.state.colorHex} colorHSL={this.state.shades[i]} colorRGB={this.state.colorRGB} handleClick={this.handleTileClick} />
                    </li>
                )
            i++;
        }
        return allShades;
    }
    render() {
        const styles = {
            backgroundColor: this.props.descData.hex,
        }
        return (
            <div className="color-detail">
                <div className="color-detail-primary">
                    <div style={styles} className="color-detail-preview">&nbsp;</div>
                    <div className="color-detail-label">
                        <h3> {this.props.descData.hex}</h3>
                    </div>
                </div>
                <ul className="color-detail-shades">
                    {this.renderTileShades()}
                </ul>
            </div>
        );
    }
}

export default ColorDetails;
