import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { AnimationScreen101 } from '../screens/AnimationScreen101';
import { AnimationScreen102 } from '../screens/AnimationScreen102';
import {SwitchScreen} from '../screens/SwitchScreen';
import { AlertScreen } from '../screens/AlertScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { PullToRefreshScreen } from '../screens/PullToRefreshScreen';
import { CustomSectionListScreen } from '../screens/CustomSectionListScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';


const Stack = createStackNavigator();



export const  Navigator = () =>  {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="AnimationScreen101" component={AnimationScreen101} />
            <Stack.Screen name="AnimationScreen102" component={AnimationScreen102} />
            <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
            <Stack.Screen name="AlertScreen" component={AlertScreen} />
            <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
            <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
            <Stack.Screen name="CustomSectionListScreen" component={CustomSectionListScreen} />
            <Stack.Screen name="ModalScreen" component={ModalScreen} />
            <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
        </Stack.Navigator>
  );
} 