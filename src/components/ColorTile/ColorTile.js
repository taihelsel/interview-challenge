import React, { Component } from 'react';
import './ColorTile.css';
class ColorTile extends Component {
    constructor(props){
        super(props);
        this.state = {
            colorName : this.props.colorName,
            colorHex : "",
            colorRGB : "",
        }
    }
    componentWillMount(){
        this.getColorLabel();
    }
    getColorLabel(){
        let temp = document.createElement("div");
        temp.style.backgroundColor = this.props.colorName;
        document.body.appendChild(temp);
        let rgb = getComputedStyle(temp).backgroundColor;
        let hex = '#' + rgb.substr(4, rgb.indexOf(')') - 4).split(',').map((color) => parseInt(color).toString(16)).join('');
        document.body.removeChild(temp);
        this.setState({colorRGB:rgb,colorHex:hex});
    }
    render() {
        const styles = {
            backgroundColor:this.props.colorName,
        }
        return (
            <div className="color-tile">
                <div className="color-tile-preview" style={styles} />
                <h3 className="color-tile-label">{this.state.colorHex}</h3>
            </div>
        );
    }
}

export default ColorTile;
