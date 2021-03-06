import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import { MenuItem } from '../interfaces/appInterfaces'



interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({menuItem}: Props) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate( menuItem.component as any)}
        >
            <View style={styles.container}>

                <Icon
                    name={menuItem.icon}
                    color="#585454"
                    size={23}
                />

                <Text style={styles.itemText} >
                    {menuItem.name} 
                </Text>

                <View style={{flex: 1}} />

                <Icon
                    name="chevron-forward-outline"
                    color="#585454"
                    size={23}
                />

            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    itemText:{
        marginLeft: 10,
        fontSize: 19,
    }
})