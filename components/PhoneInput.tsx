'use client'
import IntlTelInput from "intl-tel-input/react";

export default function PhoneInput (){
    return (
        <IntlTelInput
        initOptions={{
        separateDialCode:true,
        initialCountry: "bd",
        }}
        />
    )
}