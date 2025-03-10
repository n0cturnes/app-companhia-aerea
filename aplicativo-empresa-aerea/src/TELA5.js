import React, {useState} from "react";
import { Text, View, TouchableHighlight,Alert} from 'react-native';
import estilo from './stylesheet'

export default function Tela5({route,navigation}){
  return(
    <View style = {estilo.view}>
    <Text style = {[estilo.text,{textAlign:'left'}]}>DESTINO: {route.params.destino}{"\n"}
    VALOR: {route.params.valor}{"\n"}
    DATA DE IDA: {route.params.ida}{"\n"}
    DATA DE VOLTA: {route.params.volta}{"\n"}</Text>
    <TouchableHighlight style = {estilo.botao} onPress = {()=>navigation.navigate('Pacotes')}><Text style = {[estilo.text,{textAlign:'center'}]} onPress={()=>Alert.alert('Compra realizada!','Parabéns! Sua compra foi realizada com sucesso.',
      [{
        text: 'Ok',
        onPress: () => navigation.navigate('Pacotes'),
        style: 'ok',
      },
    ],)}>FINALIZAR</Text></TouchableHighlight>
    </View>
  )
}