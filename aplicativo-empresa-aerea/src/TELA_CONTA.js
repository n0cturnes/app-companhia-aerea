import React, {Component} from "react";
import {Text,View,TouchableHighlight} from 'react-native';
import estilo from './stylesheet'

export default function TELA_CONTA({navigation,route}){
  const usuario = route.params.user[0]
  const nome = route.params.user[1]
  const dtnasc = route.params.user[2]
  const tel = route.params.user[3]
  const email = route.params.user[4]
  return(
    
    <View style = {estilo.view}>
    <Text style = {[estilo.text,{textAlign:'left'}]}>USUÁRIO: {usuario}{"\n"}
    NOME COMPLETO: {nome}{"\n"}
    DATA DE NASCIMENTO: {dtnasc}{"\n"}
    TELEFONE: {tel}{"\n"}
    EMAIL: {email}</Text>

    <TouchableHighlight onPress={()=>navigation.navigate('Login')}><Text style = {[estilo.text,{color:'red'}]}>SAIR</Text></TouchableHighlight>
    </View>
  )
}