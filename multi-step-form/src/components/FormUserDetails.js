import React, { Component } from 'react';
import ConfirmButton from "./buttons/ConfirmButton";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

export default class FormUserDetails extends Component {

    continue = e => {
        //e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const {values, handleChange} = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Enter User Details'/>
                    <TextField
                        hintText='Enter Your First Name'
                        floatingLabelText='First Name'
                        defaultValue={values.firstName}
                        onChange={handleChange('firstName')}
                    /> <br/>
                    <TextField
                        hintText='Enter Your Last Name'
                        floatingLabelText='Last Name'
                        defaultValue={values.lastName}
                        onChange={handleChange('lastName')}
                    /> <br/>
                    <TextField
                        hintText='Enter Your Email'
                        floatingLabelText='Email'
                        defaultValue={values.email}
                        onChange={handleChange('email')}
                    /> <br/>
                    <ConfirmButton onClick={this.continue}/>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}