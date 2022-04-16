import React from "react";
import { View, Text, Button, Alert } from "react-native";

import prompt from 'react-native-prompt-android';

import { HeaderTitle } from "../components/HeaderTitle";
import { styles } from "../theme/appTheme";

export const AlertScreen = () => {

    const showAlert = (  ) => {
        Alert.alert(
            "Título",
            "Este es el cuerpo de la alerta",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ],
            {
                cancelable: true,
                onDismiss: () => console.log('onDismiss pressed')
            }
          );
    }

    // const showPromp = () => {  //Solo funciona en IOS

    //     Alert.prompt(
    //         '¿Esta seguro?',
    //         'Esta accion no se puede revertir',
    //         ( valor:string ) => console.log('info: ', valor),
    //         'secure-text',
    //         'Hola Mundo',
    //         'number-pad'
            
    //     )

    // }

    const showPromp = (  ) => {
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    }
    


    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Alerts"/>

            <Button
                title="Mostrar alerta"    
                onPress={showAlert}
            />

            <View style={{height: 10}}/>
            <Button  // SOlo fuciona en IOS
                title="Mostrar Prompt"    
                onPress={showPromp}
            />
        </View>
    );
};

