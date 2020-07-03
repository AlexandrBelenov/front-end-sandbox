import React, {Component} from 'react';
import {RaisedButton} from "material-ui";

const styles = {
    button: {
        margin: 15
    }
};
const DEFAULT_LABEL = 'Continue';
export default class ConfirmButton extends Component {

    render() {
        let label = DEFAULT_LABEL;
        if (this.props.label) {
            label = this.props.label;
        }
        return (
            <RaisedButton
                label={label}
                primary={true}
                style={styles.button}
                onClick={this.props.onClick}
            />
        );
    }
}