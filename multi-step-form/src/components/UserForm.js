import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export class UserForm extends Component {

    state = {
        step: FormUserDetails,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    };

    // to the step of type
    nextStep = (type) => {
        const {step} = this.state;
        this.setState({step: type});
    };

    // handle fields change
    handleChange = input => e => this.setState({[input]: e.target.value});

    render() {
        const { step, firstName, lastName, email, occupation, city, bio } = this.state;
        const values = {firstName, lastName, email, occupation, city, bio};
        if (step === FormUserDetails) {
            return (
                <FormUserDetails
                    nextStep={() => this.nextStep(FormPersonalDetails)}
                    handleChange={this.handleChange}
                    values={values}
                />)
        } else if (step === FormPersonalDetails) {
            return (
                <FormPersonalDetails
                    nextStep={() => this.nextStep(Confirm)}
                    prevStep={() => this.nextStep(FormUserDetails)}
                    handleChange={this.handleChange}
                    values={values}
                />)
        } else if (step === Confirm) {
            return (
                <Confirm
                    nextStep={() => this.nextStep(Success)}
                    prevStep={() => this.nextStep(FormPersonalDetails)}
                    values={values}
                />)
        } else if (step === Success) {
            return <Success/>
        }
    }
}
