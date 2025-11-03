'use client';
import 'react-phone-number-input/style.css'
import { useState } from "react";
import PhoneInput from "react-phone-number-input/input";

export default function PhoneNumber({register}:any) {
  const [value, setValue] = useState('')
  return (
        <PhoneInput
            {...register}
            countryselectprops={{ unicodeFlags: true }}
            value={value}
            defaultCountry="US"
            onChange={setValue}/>
            );
}
