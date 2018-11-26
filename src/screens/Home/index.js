import React from 'react';
import { View, Text, Button } from 'react-native';

export default ({navigation})=>{
    return(
        <View style={{flex: 1}}>
            <Text>HOME</Text>
            <Button 
                title="VOLTAR" 
                onPress={()=>navigation.goBack()}/>
        </View>
    )
}