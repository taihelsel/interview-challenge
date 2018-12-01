import React, { Component } from 'react';
import './ColorTile.css';
class ColorTile extends Component {
    render() {
        const styles = {
            backgroundColor:this.props.colorName,
        }
        return (
            <div className="color-tile">
                <div className="color-tile-preview" style={styles} />
                <h3 className="color-tile-label">#cfff1</h3>
            </div>
        );
    }
}

export default ColorTile;
