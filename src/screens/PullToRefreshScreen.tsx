import React, { useState } from "react";
import { View, Text, ScrollView, RefreshControl } from "react-native";

import { HeaderTitle } from "../components/HeaderTitle";
import { styles } from "../theme/appTheme";

export const PullToRefreshScreen = () => {

    const [refreshing, setRefreshing] = useState(false);
    const [data , setData] = useState<string>();
    
    const onRefresh = (  ) => {
        setRefreshing(true);

        setTimeout(() => {
            console.log('Terminamos')
            setRefreshing(false)
            setData('Hola Mundo')
        }, 3000);
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl 
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor="#5856D6"
                    colors={['white','red','orange']}  //android
                    style={{backgroundColor: '#5856D6'}} //ios
                    tintColor="white" //ios
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title="Pull to Refres" />
                {
                    data &&  <HeaderTitle title={data}/>
                }
               
                


            </View>
        </ScrollView>
    );
};


