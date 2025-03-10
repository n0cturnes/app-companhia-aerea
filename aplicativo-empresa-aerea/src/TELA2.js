import React, {Component} from "react";
import {Text,View,Image,TouchableHighlight, FlatList} from 'react-native';
import { Searchbar }  from 'react-native-paper';import { CheckBox } from '@rneui/themed';
import estilo from './stylesheet';



const data = [
  {
    id: 0,
    imagem: require('./assets/salvador.jpg'),
    name: 'Salvador',
    valor: 'R$760,00',
    keyword: 'Salvador, Brasil, América Latina, Nordeste'
  },
  {
    id: 1,
    imagem: require('./assets/recife.jpg'),
    name: 'Recife',
    valor: 'R$429,00',
    keyword: 'Recife, Brasil, América Latina, Nordeste'
  },
  {
    id: 2,
    imagem: require('./assets/buenos_aires.jpg'),
    name: 'Buenos Aires',
    valor: 'R$1658,00',
    keyword: 'Argentina, Buenos Aires, América Latina'
  },
  {
    id: 3,
    imagem: require('./assets/las_vegas.jpg'),
    name: 'Las Vegas',
    valor: 'R$3119,00',
    keyword: 'Estados Unidos, EUA, USA, Las Vegas, América do Norte'
  },
  {
    id: 4,
    imagem: require('./assets/paris.jpg'),
    name: 'Paris',
    valor: 'R$3627,00',
    keyword: 'Paris, França, Europa'
  },
  {
    id: 5,
    imagem: require('./assets/dubai.jpg'),
    name: 'Dubai',
    valor: 'R$3929,00',
    keyword: 'Dubai, Arábia Saudita, Oriente Médio'
  },
];

export default class TELA2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchquery: '',
    };
  }

  renderHeader = () => {
    return (
      <Searchbar
        placeholder="Buscar Pacotes"
        onChangeText={(searchquery) =>
          this.setState({
            searchquery,
          })
        }
        value={this.state.searchquery}
        style={{ marginTop: 20, marginHorizontal: 10 }}
      />
    );
  };

  renderItem = ({ item, index }) => {
    return (
      <View key={index} style={estilo.pacote}>
      <View style = {{flexDirection:'row'}}>
      <View style = {estilo.pacote}>
        <CheckBox
          iconType="material-community"
          checkedIcon="checkbox-outline"
          uncheckedIcon={'checkbox-blank-outline'}
          checked={this.state.checked === item.id}
          onPress={() => this.setState({checked: item.id})}
         />
      </View>
      <View>
        <Image source = {item.imagem} style={{height: 120,width:240, resizeMode:'contain', borderRadius:20}}/>
        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>
          Destino: {item.name}
        </Text>
        <Text style={estilo.text}>{item.valor} </Text>
        </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style = {[estilo.view, {paddingBottom:30}]}>
      <FlatList
        data={data.filter((item) => {
          if (!this.state.searchquery) return true;
          return item.keyword
            .toUpperCase()
            .includes(this.state.searchquery.toUpperCase());
        })}
        ListHeaderComponent={this.renderHeader}
        renderItem={this.renderItem}
      />
      <TouchableHighlight disabled = {this.state.checked==null} style = {(this.state.checked==null ? estilo.botaodisabled : estilo.botao)} onPress={() => { this.props.navigation.navigate('tela3',{id:this.state.checked})}}>
      <Text style = {[estilo.text,{textAlign:'center'}]}>CONFIRMAR</Text>
      </TouchableHighlight>
      </View>
    );
  }
}