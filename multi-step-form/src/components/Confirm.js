import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import ConfirmButton from "./buttons/ConfirmButton";
import BackButton from "./buttons/BackButton";

export default class Confirm extends Component {
    continue = e => {
        //e.preventDefault();
        // send data to backend
        this.props.nextStep();
    };

    back = e => {
        //e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {values: {firstName, lastName, email, occupation, city, bio }} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Confirm User Data'/>
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={firstName}
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={lastName}
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText={email}
                        />
                        <ListItem
                            primaryText="Occupation"
                            secondaryText={occupation}
                        />
                        <ListItem
                            primaryText="City"
                            secondaryText={city}
                        />
                        <ListItem
                            primaryText="Bio"
                            secondaryText={bio}
                        />
                    </List>
                    <ConfirmButton
                        label='Confirm & Continue'
                        onClick={this.continue}
                    />
                    <BackButton
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}