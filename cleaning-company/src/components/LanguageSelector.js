import React, { useState } from "react";
import i18n from "../i18n";
import ReactFlagsSelect from "react-flags-select";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const chooseLanguage = (e) => {
    switch (e) {
      case "DE":
        i18n.changeLanguage("de");
        break;
      case "GB":
        i18n.changeLanguage("EN");
        break;
      case "RO":
        i18n.changeLanguage("ro");
        break;
      default:
        console.log(`Sorry, something went wrong`);
    }

    setSelectedLanguage(e);
  };

  return (
    <ReactFlagsSelect
      countries={["DE", "GB", "RO"]}
      customLabels={{ DE: "Deutsch", GB: "English", RO: "Română" }}
      placeholder="Select Language"
      selected={selectedLanguage}
      onSelect={chooseLanguage}
    />
  );
};

export default LanguageSelector;
