import "react-international-phone/style.css";
import { PhoneInput } from "react-international-phone";

function PhoneInputField({ value, onChange }) {
  return (
    <div className="phone-input-shiretechnik">
      <PhoneInput
        defaultCountry="in"
        value={value}
        onChange={(phone) => onChange(phone)}
        forceDialCode
        hideDropdown={false}
        style={{
          "--react-international-phone-background-color": "#05080d",
          "--react-international-phone-border-color": "rgba(255,255,255,0.08)",
          "--react-international-phone-text-color": "#fff",
          "--react-international-phone-selected-dropdown-item-background-color": "rgba(34,211,238,0.08)",
          "--react-international-phone-country-selector-background-color": "#05080d",
          "--react-international-phone-font-size": "14px",
          borderRadius: "0.75rem",
          border: "1px solid rgba(255,255,255,0.08)",
          overflow: "hidden",
          width: "100%",
          transition: "border-color 0.2s",
        }}
        inputStyle={{
          background: "#05080d",
          color: "#fff",
          border: "none",
          outline: "none",
          fontSize: "14px",
          width: "100%",
          paddingTop: "0.75rem",
          paddingBottom: "0.75rem",
        }}
        countrySelectorStyleProps={{
          buttonStyle: {
            background: "#05080d",
            border: "none",
            borderRight: "1px solid rgba(255,255,255,0.08)",
            paddingLeft: "12px",
            paddingRight: "8px",
          },
        }}
      />
    </div>
  );
}

export default PhoneInputField;