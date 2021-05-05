import { render } from "react-dom";
import ReactPhoneInput from "react-phone-input-2";
import React, { Component } from 'react'
import 'react-phone-input-2/lib/style.css'

export default class PhoneInput extends Component {
    state = { phone: "" };

    handleOnChange = value => {
      console.log(value);
      this.setState({ phone: value }, () => {
        console.log(this.state.phone);
      });
    };

    render() {
        return (
            <div>
               <ReactPhoneInput
                    inputExtraProps={{
                        name: "phone",
                        required: true,
                        autoFocus: true
                    }}
                    defaultCountry={"sg"}
                    value={this.state.phone}
                    onChange={this.handleOnChange}
                /> 
            </div>
        )
    }
}

