import React from "react";
import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    view:{
      flexGrow:1,
      justifyContent: 'center',
      alignItems:'center',
    },
    view2:{
      backgroundColor:'#00c1d5',
      padding: 15,
      borderRadius:20,
    },
    text:{
        fontSize:18,
        color:'#000',
        fontWeight:'600',
        textAlign:'left'
    },
    textopequeno:{
        fontSize:15,
        paddingHorizontal: 10
    },
    textInput:{
        fontSize: 19,
        padding:15,
        color:'#202020',
        borderRadius: 20
    },
    botao:{
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: "#ffd900",
        width:200,
        height:45,
        borderRadius: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 20,
        paddingTop:7
    },
    botaodisabled:{
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: "#adadad",
        width:200,
        height:45,
        borderRadius: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 20,
        paddingTop:7
    },
    scrollView: {
    marginHorizontal: 20,
    marginVertical: 30
  },
  pacote:{
    padding:10,
    paddingBottom:20,
    alignItems:'center',
    justifyContent:'center',
    flexGrow:1
  },
  modal:{
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    margin: 20,
    padding: 5,
    paddingTop:50,
    borderRadius: 20,
    justifyContent: 'center',
    flexGrow:0.8
  }
})

export default estilo