import React from 'react';
import { Text, View, Image, Button, TouchableOpacity } from 'react-native';

const HomeApp = ({ navigation }) => {
  return(
    <View style={{flex: 1}}>
      <View style={{flex: 4, flexDirection: 'row', alignItems: 'stretch'}}>
        <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('DemonsSouls')} style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{width: 140, height: 190}}
              source={require('./imagens/Demons_Souls_capa.png')}
            />
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Demons Souls</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('DarkSouls')} style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{width: 120, height: 150}}
              source={require('./imagens/Dark_Souls_1_capa.png')}
            />
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Dark Souls</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('DarkSouls2')} style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{width: 150, height: 177}}
              source={require('./imagens/Dark_Souls_2_capa.png')}
            />
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>Dark Souls 2</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('DarkSouls3')} style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{width: 150, height: 150}}
              source={require('./imagens/Dark_Souls_3_capa.png')}
            />
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>Dark Souls 3</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 4, flexDirection: 'row', alignItems: 'stretch'}}>
      <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Sekiro')} style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{width: 150, height: 177}}
              source={require('./imagens/Sekiro_Shadows_Die_Twice_capa.png')}
            />
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>Sekiro</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Bloodborne')} style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{width: 150, height: 199}}
              source={require('./imagens/Bloodborne_capa.png')}
            />
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>Bloodborne</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button 
          title="Sobre o APP"
          onPress={() => navigation.navigate('Sobre')}
        />
      </View>
    </View>
  );
}

export default HomeApp;