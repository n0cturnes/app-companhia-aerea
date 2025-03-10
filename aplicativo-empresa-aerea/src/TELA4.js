import React, {useState} from "react";
import { Text, View, TouchableHighlight,TextInput,Alert,Image} from 'react-native';
import { MaskedTextInput } from "react-native-mask-text";
import estilo from './stylesheet'

export default function Tela4({navigation,route}){
  const [txtNumero,setTxtNumero] = useState('');
  const [txtNome,setTxtNome] = useState('');
  const [txtCVV,setTxtCVV] = useState('');
  const [txtValidade,setTxtValidade] = useState('');

function ir(){
  if(txtNome=='' || txtNumero==''||txtCVV==''||txtValidade==''){
    Alert.alert('Campos vazios','Os campos do cartão não podem estar vazios!')
  }
  else{
  navigation.navigate('tela5',{destino:route.params.destino,valor:route.params.valor,ida:route.params.ida,volta:route.params.volta})
  }
}

  return(
  <View style = {estilo.view}>
  <Image source={require('./assets/creditcard.png')} style = {{width:220, height:140}}/>
  <Text style = {estilo.text}>
  Insira os dados de pagamento:
  </Text>
  <MaskedTextInput style = {estilo.textInput} placeholder = {'N° do cartão'} value = {txtNumero} mask={'9999-9999-9999-9999'} onChangeText={txtNumero=>setTxtNumero(txtNumero)}/>
  <TextInput style = {estilo.textInput} placeholder = {'Nome do titular'} value = {txtNome} onChangeText={txtNome=>setTxtNome(txtNome)}/>
  <View style = {{flexDirection:"row"}}>
  <MaskedTextInput style = {[estilo.textInput,{width:125}]} mask={'999'} placeholder = {'CVV'} value = {txtCVV} onChangeText={txtCVV=>setTxtCVV(txtCVV)}/>
  <MaskedTextInput style = {[estilo.textInput,{width:125}]} placeholder = {'Validade'} mask = {'99/9999'} value = {txtValidade} onChangeText={txtValidade=>setTxtValidade(txtValidade)}/>
  </View>
  <TouchableHighlight style = {estilo.botao} onPress = {()=>navigation.navigate('Pacotes')}><Text style = {[estilo.text,{textAlign:'center'}]}>CANCELAR</Text></TouchableHighlight>
  <TouchableHighlight style = {estilo.botao} onPress = {ir}><Text style = {[estilo.text,{textAlign:'center'}]}>CONFIRMAR</Text></TouchableHighlight>
  </View>
  )
}