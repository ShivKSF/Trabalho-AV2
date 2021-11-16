import React from 'react';
import { Text, View, Image, Button } from 'react-native';

const BrasilApp = ({ navigation }) => {
    return(
        <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'white'}}>
        <Text style={{marginTop: 30, fontSize: 32, fontWeight: 'bold', color: 'black'}}>Demons Souls</Text>
        <Image
            style={{width: 125, height: 88, marginTop: 30, marginBottom: 30}}
            source={require('./imagens/Demons_Souls_capa.png')}
        />
        
        <Text style={{marginBottom: 30, fontSize: 18, fontWeight: 'bold', color: 'black'}}>------------------</Text>
        <Text style={{marginBottom: 30, fontSize: 18, fontWeight: 'bold', color: 'black'}}>------------------</Text>
        <Text style={{marginBottom: 30, fontSize: 18, fontWeight: 'bold', color: 'black'}}>------------------</Text>
        
        <Button 
            title="Voltar"
            onPress={() => navigation.goBack()}
        />
    </View>
  )
}

export default BrasilApp;