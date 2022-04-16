import { View, Text, Switch, Platform } from "react-native";
import React, { useState } from "react";

interface Props {
    isOn: boolean;
    onChange: (value : boolean) => void;
}


const CustomSwitch = ({isOn, onChange}: Props) => {

    const [isEnabled, setIsEnabled] = useState(isOn);

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled)  //cambia el estado interno del Custom Hook
        onChange(!isEnabled)  //
    }
    

    return (
        <Switch
            trackColor={{ false: "#D9D9DB", true: "#5856D6" }}
            //thumbColor={isEnabled ? "#f5dd4b" : "#CC1ECC"}
            thumbColor={(Platform.OS === 'android') ? '#5856D6' : ''}
            //ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />

    );
};

export default CustomSwitch;
