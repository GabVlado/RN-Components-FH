import React, { useState } from 'react';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';

import { useAnimation } from '../hooks/useAnimation';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle> ;
}

export const FadeInImage = ({ uri, style }: Props) => {

    const { opacity, fadeIn } = useAnimation()

    const [isLaoding, setIsLoading] = useState(true);
    
    const finishLoading = ( ) => {
        setIsLoading(false);
        fadeIn();
    }
    

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            {
                isLaoding && 
                    <ActivityIndicator               // Activity indicator se posciciona detras de la imagen
                        style={{position: 'absolute'}} 
                        color="#5856D6" 
                        size={ 30 } />
            }
            <Animated.Image
                source={{ uri }}
                //onLoadEnd={() => fadeIn(400)}

                onLoadEnd={finishLoading}
                style={{
                    ...style as any,
                    opacity
                }}
                // style={{
                //     width: '100%',
                //     height: 400,
                //     opacity
                // }}
            />
        </View>
    )
};
