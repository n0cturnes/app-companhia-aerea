import React, {useState} from "react";
import {Text,View,Image,TextInput,TouchableHighlight,ScrollView,Modal, Switch, Alert} from 'react-native';
import estilo from './stylesheet';
import { MaskedTextInput } from "react-native-mask-text";

var cadastros = [["anna","Anna Clara","17/05/2004","11111111","email@email.com","123abc"]]

function Login({navigation}){
  const [modalVisible, setModalVisible] = useState(false);
  const [senhaprotegida1, setSenhaprotegida1] = useState(true)
  const toggleSwitch1 = () => setSenhaprotegida1(previousState => !previousState);
  const [senhaprotegida2, setSenhaprotegida2] = useState(true)
  const toggleSwitch2 = () => setSenhaprotegida2(previousState => !previousState);
  const [textoUsuario,setTextoUsuario] = useState('')
  const [textoSenha,setTextoSenha] = useState('')
  const [txtCadastroUsuario,setTxtCadastroUsuario] = useState('')
  const [txtCadastroNome,setTxtCadastroNome] = useState('')
  const [txtDtNasc, setTxtDtNsc] = useState('')
  const [txtTel, setTel] = useState('')
  const [txtCadastroEmail,setTxtCadastroEmail] = useState('')
  const [txtCadastroSenha,setTxtCadastroSenha] = useState('')
  const [txtConfirmaSenha, setTxtConfirmaSenha] = useState('')

function cadastrar(){
  if(txtCadastroUsuario=='' || txtCadastroNome =='' || txtDtNasc == ''||txtTel==''||txtCadastroEmail==''||txtCadastroSenha==''||txtConfirmaSenha==''){
    Alert.alert(
      'Campo vazio',
      'Todos os campos devem ser preenchidos'
    )
  }
  else if(txtCadastroSenha == txtConfirmaSenha){
    for(let i = 0; i<cadastros.length; i++){
      if (cadastros[i][0]==txtCadastroUsuario){
        Alert.alert(
  'Usuário em uso',
  'O usuário digitado já está en uso. Tente novamente ou faça login.'
        )
        break;
    }
    else if (cadastros[i][4]==txtCadastroEmail){
        Alert.alert(
  'Email em uso',
  'O email digitado já está en uso. Tente novamente ou faça login.'
      )
      break;
    }
    else{
      cadastros.push([txtCadastroUsuario,txtCadastroNome,txtDtNasc,txtTel,txtCadastroEmail,txtCadastroSenha,txtConfirmaSenha])
      Alert.alert(
  'Cadastro realizado',
  'Cadastro realizado com sucesso!'
      )
      setTxtCadastroUsuario('')
      setTxtCadastroNome('')
      setTxtDtNsc('')
      setTel('')
      setTxtCadastroEmail('')
      setTxtCadastroSenha('')
      setTxtConfirmaSenha('')
      break;
    }
    
  }
  }
  else{
    Alert.alert('Senhas diferentes', 'As senhas devem ser iguais.')
  }
}

  function validarLogin(){
  let usuarioexiste = false;
  {for(let i = 0; i<cadastros.length; i++){
    if (cadastros[i][0]==textoUsuario){
      usuarioexiste=true;
      if(cadastros[i][5]==textoSenha){
        setTextoUsuario('');
        setTextoSenha('');
        navigation.navigate('Pacotes',{user:cadastros[i]})
        break;
      }
      else{
        Alert.alert(
        'Senha incorreta',
        'A senha digitada está incorreta. Tente novamente.'
      )
      break;
    }
    }
  }
  if (textoUsuario != '' && !usuarioexiste){
  Alert.alert(
  'Usuário inexistente',
  'O usuário digitado não foi encontrado. Tente novamente ou cadastre o usuário.'
  )
  }
  }
}
  
  return (
    <View style={estilo.view}>
    <Image source = {require('./assets/logo1.png')} style={{height: 150,width:200, resizeMode:'contain'}}/>
    <View style = {{paddingBottom:15}, estilo.view2}>
        <Text style = {estilo.text}>LOGIN:</Text>
        <TextInput placeholder="Login" style = {estilo.textInput} value = {textoUsuario} onChangeText={textoUsuario=>setTextoUsuario(textoUsuario)}/>
        <Text style = {estilo.text}>SENHA: </Text>
        <TextInput placeholder="Senha" style = {estilo.textInput} secureTextEntry = {senhaprotegida1} value = {textoSenha} onChangeText={textoSenha=>setTextoSenha(textoSenha)}/>
        <View style = {{flexDirection:'row'}}>
          <Text style = {estilo.textopequeno}>Esconder senha</Text>
          <Switch onValueChange={toggleSwitch1} value={senhaprotegida1}/>
      </View>
      <TouchableHighlight style={estilo.botao}><Text style = {[estilo.text, {textAlign:'center'}]}onPress = {validarLogin}>LOGIN</Text></TouchableHighlight>
      </View>
      <Modal visible = {modalVisible} animationType="slide">
      <ScrollView style = {estilo.scrollView}>
      <Text style = {estilo.text}>USUÁRIO:</Text>
          <TextInput placeholder="Usuário" style = {estilo.textInput} value = {txtCadastroUsuario} onChangeText={txtCadastroUsuario=>setTxtCadastroUsuario(txtCadastroUsuario)}/>
          <Text style = {estilo.text}>Nome Completo:</Text>
          <TextInput placeholder="Nome completo" style = {estilo.textInput} value = {txtCadastroNome} onChangeText={txtCadastroNome=>setTxtCadastroNome(txtCadastroNome)}/>
          <Text style = {estilo.text}>Data de nascimento:</Text>
          <MaskedTextInput placeholder="Data de nascimento" mask = {'99/99/9999'} style = {estilo.textInput} value = {txtDtNasc} onChangeText={txtDtNasc=>setTxtDtNsc(txtDtNasc)}/>
          <Text style = {estilo.text}>Telefone:</Text>
          <MaskedTextInput placeholder="Telefone" style = {estilo.textInput} mask = {'(99)99999-9999'} value = {txtTel} onChangeText={txtTel=>setTel(txtTel)}/>
          <Text style = {estilo.text}>Email:</Text>
          <TextInput placeholder="Email" style = {estilo.textInput} value = {txtCadastroEmail} onChangeText={txtCadastroEmail=>setTxtCadastroEmail(txtCadastroEmail)}/>
          <Text style = {estilo.text}>Senha:</Text>
          <TextInput placeholder="Senha" style = {estilo.textInput} secureTextEntry = {senhaprotegida2} value = {txtCadastroSenha} onChangeText={txtCadastroSenha=>setTxtCadastroSenha(txtCadastroSenha)}/>
          <Text style = {estilo.text}>Confirmar a senha:</Text>
          <TextInput placeholder="Confirmar senha" style = {estilo.textInput} secureTextEntry = {senhaprotegida2} value = {txtConfirmaSenha} onChangeText={txtConfirmaSenha=>setTxtConfirmaSenha(txtConfirmaSenha)}/>
          <View style = {{alignItems:'center'}}>
          <View style = {[{flexDirection:'row'}, estilo.view]}>
            <Text style = {estilo.textopequeno}>Esconder senha</Text>
            <Switch onValueChange={toggleSwitch2} value={senhaprotegida2}/>
            
        </View>
        <TouchableHighlight
        style={[estilo.botao,{width:170}]}
        onPress={() => setModalVisible(!modalVisible)}>
        <Text style={[estilo.text,{textAlign:'center'}]}>VOLTAR</Text>
      </TouchableHighlight>
      <TouchableHighlight style = {[estilo.botao,{width:170}]} onPress={cadastrar}>
            <Text style = {[estilo.text,{textAlign:'center'}]}>CONFIRMAR</Text>
          </TouchableHighlight>
        </View>
        </ScrollView>
      </Modal>
      <TouchableHighlight
        style={estilo.botao}
        onPress={() => setModalVisible(true)}>
        <Text style={[estilo.text,{textAlign:'center'}]}>CADASTRAR</Text>
      </TouchableHighlight>
      
    </View>
  )
}

export default Login