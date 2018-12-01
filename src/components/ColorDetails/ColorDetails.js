import React, { Component } from 'react';
import './ColorDetails.css';
class ColorDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorName: "",
            colorHex: "",
            colorRGB: "",
        }
    }
    // componentWillMount() {
    //     this.getHSL();
    // }
    // getHSL() {
    //     if (this.props.colorName !== this.state.colorName) {
    //         console.log("find hsl");
    //     }
    //     return this.state.colorHex;
    // }
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
            </div>
        );
    }
}

export default ColorDetails;
