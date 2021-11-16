import React from 'react';
import { Text, View, Image, Button } from 'react-native';

const SobreApp = ({ navigation }) => {
  return(
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>Melhores Jogos da FromSoftware App</Text>
        <Text>Versão 1.0</Text>
        <Text style={{marginTop: 30, fontWeight: 'bold'}}>Desenvolvido por:</Text>
        <Text>Adilson Gomes Piqué Junior</Text>
        <Text>José Matheus Teixeira de Souza</Text>
        <Text>Kaique Sousa Farias</Text>
        <Text>Loriano Araujo Junior</Text>
        <Text style={{marginBottom: 30}}>Wallace Leal Barbosa</Text>

        <Button 
            title="Voltar"
            onPress={() => navigation.goBack()}
        />
    </View>
  )
}

export default SobreApp;