import React, {Component} from 'react';
import {RaisedButton} from "material-ui";

const DEFAULT_LABEL = "Back";
const styles = {
    button: {
        margin: 15
    }
};
export default class BackButton extends Component {
    render() {
        let label = DEFAULT_LABEL;
        if (this.props.label) {
            label = this.props.label;
        }
        return(
            <RaisedButton
                label={label}
                style={styles.button}
                onClick={this.props.onClick}
            />
        );
    }
}