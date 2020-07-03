import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import ConfirmButton from "./buttons/ConfirmButton";
import BackButton from "./buttons/BackButton";

export default class FormPersonalDetails extends Component {
    continue = e => {
        //e.preventDefault();
        this.props.nextStep();
    };

    back= e => {
        //e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {values, handleChange} = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Enter Personal Details'/>
                    <TextField
                        hintText='Enter Your Occupation'
                        floatingLabelText='Occupation'
                        defaultValue={values.occupation}
                        onChange={handleChange('occupation')}
                    /> <br/>
                    <TextField
                        hintText='Enter Your City'
                        floatingLabelText='City'
                        defaultValue={values.city}
                        onChange={handleChange('city')}
                    /> <br/>
                    <TextField
                        hintText='Enter Your Bio'
                        floatingLabelText='Bio'
                        defaultValue={values.bio}
                        onChange={handleChange('bio')}
                    /> <br/>
                    <ConfirmButton onClick={this.continue}/>
                    <BackButton onClick={this.back}/>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}