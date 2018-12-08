import React, { Component } from 'react';
import './ColorTile.css';
class ColorTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorName: "",
            colorHex: "",
            colorRGB: "",
        }
    }
    componentWillMount() {
        this.getColorLabel();
    }
    getColorLabel() {
        if(this.props.colorName === "null" && this.state.colorName!== "null"){
            let temp = document.createElement("div");
            temp.style.backgroundColor = this.props.colorHSL;
            document.body.appendChild(temp);
            let rgb = getComputedStyle(temp).backgroundColor;
            let hex = '#' + rgb.substr(4, rgb.indexOf(')') - 4).split(',').map((color) => parseInt(color).toString(16)).join('');
            document.body.removeChild(temp);
            this.setState({ colorName:"null", colorRGB: rgb, colorHex: hex });
        }else if (this.props.colorName !== this.state.colorName) {
            let temp = document.createElement("div");
            temp.style.backgroundColor = this.props.colorName;
            document.body.appendChild(temp);
            let rgb = getComputedStyle(temp).backgroundColor;
            let hex = '#' + rgb.substr(4, rgb.indexOf(')') - 4).split(',').map((color) => parseInt(color).toString(16)).join('');
            document.body.removeChild(temp);
            this.setState({ colorName: this.props.colorName, colorRGB: rgb, colorHex: hex });
        }else return this.state.colorHex;
    }
    handleClick = (e) =>{
        this.props.handleClick({name:this.state.colorName,hex:this.state.colorHex,rgb:this.state.colorRGB});
    }
    render() {
        const styles = {
            backgroundColor: this.props.colorName!=="null"?this.props.colorName:this.state.colorHex,
        }
        console.log(styles);
        return (
            <div className="color-tile">
                <div onClick={this.handleClick} className="color-tile-preview" style={styles} />
                <h3 className="color-tile-label">{this.getColorLabel()}</h3>
            </div>
        );
    }
}

export default ColorTile;
