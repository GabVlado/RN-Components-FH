import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";

import { HeaderTitle } from "../components/HeaderTitle";
import { styles } from "../theme/appTheme";
import { useForm } from "../hooks/useForm";
import CustomSwitch from "../components/CustomSwitch";

export const TextInputScreen = () => {



    const { form, onChange , isSubscribed} = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    })



    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >

            <ScrollView

            >
                <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}
                >


                    <View style={styles.globalMargin}>

                        <HeaderTitle title="Text Inputs" />

                        <TextInput
                            style={stylesScreen.inputStyle}
                            placeholder="Ingrese su nombre"
                            autoCorrect={false}
                            autoCapitalize="words"
                            onChangeText={(value) => onChange(value, 'name')}
                        />

                        <TextInput
                            style={stylesScreen.inputStyle}
                            placeholder="Ingrese su email"
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType="email-address"
                            keyboardAppearance="dark"

                        />

                        <View style={stylesScreen.switchRow}>
                            <Text style={stylesScreen.switchText}>Suscribirse</Text>
                            <CustomSwitch 
                                isOn={isSubscribed} 
                                onChange={(value) => onChange(value, 'isSubscribed')} 
                            />
                        </View>





                        <HeaderTitle title={JSON.stringify(form, null, 5)} />

                        <HeaderTitle title={JSON.stringify(form, null, 5)} />


                        <TextInput
                            style={stylesScreen.inputStyle}
                            placeholder="Ingrese su telefono"
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType="phone-pad"
                        />

                        <HeaderTitle title={JSON.stringify(form, null, 5)} />

                    </View>
                </TouchableWithoutFeedback>

            </ScrollView>

        </KeyboardAvoidingView>
    );
};

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    switchText: {
        fontSize: 25
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    }
})