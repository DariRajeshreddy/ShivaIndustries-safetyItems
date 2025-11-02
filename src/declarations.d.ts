declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.svg";
declare module "*.gif";
declare module "react-phone-input-2" {
    import * as React from "react";

    export interface PhoneInputProps {
        country?: string;
        value?: string;
        onChange?: (value: string, data: any, event: any, formattedValue: string) => void;
        onlyCountries?: string[];
        preferredCountries?: string[];
        enableSearch?: boolean;
        disableSearchIcon?: boolean;
        inputStyle?: React.CSSProperties;
        dropdownStyle?: React.CSSProperties;
        specialLabel?: string;
    }

    const PhoneInput: React.FC<PhoneInputProps>;
    export default PhoneInput;
}
