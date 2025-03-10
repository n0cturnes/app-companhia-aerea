import React, {useState} from "react";
import { Text, View, ImageBackground, TouchableHighlight,Modal,Alert} from 'react-native';
import { MaskedTextInput } from "react-native-mask-text";
import estilo from './stylesheet'

const data = [
  {
    id: 0,
    imagem: require('./assets/salvadorbackground.jpg'),
    name: 'Salvador',
    valor: 'R$760,00',
    descricao:'Salvador, a capital do estado da Bahia no nordeste do Brasil, é conhecida pela arquitetura colonial portuguesa, pela cultura afrobrasileira e pelo litoral tropical. O bairro do Pelourinho é seu coração histórico, com vielas de paralelepípedo terminando em praças grandes, prédios coloridos e igrejas barrocas, como São Francisco, com trabalhos em madeira revestidos com ouro.'
  },
  {
    id: 1,
    imagem: require('./assets/recifebackground.jpg'),
    name: 'Recife',
    valor: 'R$429,00',
    descricao: 'Recife, a capital do estado de Pernambuco, no nordeste do Brasil, distingue-se pelos seus vários rios, pontes, ilhéus e penínsulas. Recife Antigo, na própria ilha junto ao porto, é o centro histórico da cidade antiga que data do século XVI. A sul, a popular Praia de Boa Viagem é protegida por recifes e está ladeada de blocos de apartamentos elevados, hotéis modernos e restaurantes.'
  },
  {
    id: 2,
    imagem: require('./assets/buenosairesbackground.jpg'),
    name: 'Buenos Aires',
    valor: 'R$1658,00',
    descricao:'Buenos Aires é a capital cosmopolita da Argentina. Seu centro é a Praça de Maio, com imponentes edifícios do século 19, como a Casa Rosada, o emblemático palácio presidencial com sacadas. Outras importantes atrações são o Teatro Colón, uma casa de ópera inaugurada em 1908 com cerca de 2.500 lugares, e o moderno museu MALBA, com sua coleção de arte latino-americana.'
  },
  {
    id: 3,
    imagem: require('./assets/lasvegasbackground.jpg'),
    name: 'Las Vegas',
    valor: 'R$3119,00',
    descricao:'as Vegas, localizada no deserto de Mojave, em Nevada, é uma cidade turística famosa pela vida noturna vibrante, com cassinos 24 horas e outras opções de entretenimento. Sua rua principal é The Strip, com quase 7 quilômetros de comprimento. A avenida concentra hotéis temáticos, com atrações sofisticadas, como as fontes sincronizadas com música e réplicas de uma pirâmide egípcia, do Grande Canal de Veneza e da Torre Eiffel.'
  },
  {
    id: 4,
    imagem: require('./assets/parisbackground.jpg'),
    name: 'Paris',
    valor: 'R$3627,00',
    descricao:'Paris, a capital da França, é uma importante cidade europeia e um centro mundial de arte, moda, gastronomia e cultura. Sua paisagem urbana do século XIX é cortada por avenidas largas e pelo rio Sena. A cidade é conhecida por monumentos como a Torre Eiffel e a Catedral de Notre-Dame, uma construção gótica do século XII, sendo famosa também pela cultura dos cafés e por lojas de estilistas famosos na Rue du Faubourg Saint-Honoré.'
  },
  {
    id: 5,
    imagem: require('./assets/dubaibackground.jpeg'),
    name: 'Dubai',
    valor: 'R$3929,00',
    descricao:'Dubai é uma cidade e um emirado dos Emirados Árabes Unidos conhecida pelos shoppings de luxo, pela arquitetura ultramoderna e pela animada vida noturna. Burj Khalifa, uma torre de 830 metros de altura, domina a linha do horizonte repleta de arranha-céus. Na base, há a Fonte de Dubai, com jatos de água e luzes coreografados ao som de música. Nas ilhas artificiais próximas à costa, fica o Hotel Atlantis, um resort com parques aquáticos e de animais marinhos.'
  },
];

export default function Tela3({route, navigation}) {
  
const [txtIda,setTxtIda] = useState('');
const [txtVolta,setTxtVolta] = useState('');

function ir(){
  if(txtIda=='' || txtVolta==''){
    Alert.alert('Campos vazios','Os campos de ida e volta não podem estar vazios!')
  }
  else{
  navigation.navigate('tela4',{destino:data[route.params.id].name,valor:data[route.params.id].valor,ida:txtIda,volta:txtVolta,})
  }
}

    return(
      <ImageBackground source={data[route.params.id].imagem} resizeMode={"stretch"} style = {estilo.view}>
      <Modal transparent = {true}>
      <View style = {[estilo.view,{justifyContent:'space-evenly'}]}>
      <View style = {estilo.modal}>
        <Text style = {estilo.text}>{data[route.params.id].name}</Text>
        <Text style = {{textAlign:'justify'}}>{data[route.params.id].descricao}</Text>
        <Text style = {{fontSize:20,fontWeight:'bold'}}>{data[route.params.id].valor}</Text>
        <Text style = {[estilo.text,{fontSize:15}]}>IDA:</Text>
        <MaskedTextInput placeholder = {'__/__/____'} style = {estilo.textInput} mask={'99/99/9999'} value = {txtIda} onChangeText={txtIda=>setTxtIda(txtIda)}/>
        <Text style = {[estilo.text,{fontSize:15}]}>VOLTA:</Text>
        <MaskedTextInput placeholder = {'__/__/____'} style = {estilo.textInput} mask={'99/99/9999'} value = {txtVolta} onChangeText={txtVolta=>setTxtVolta(txtVolta)}/>
        </View>
        <TouchableHighlight style = {[estilo.botao,{alignContent:'center'}]} onPress={() => navigation.goBack()}>
        <Text style = {[estilo.text,{textAlign:'center'}]}>VOLTAR</Text>
        </TouchableHighlight>
        <TouchableHighlight style = {[estilo.botao,{alignContent:'center'}]} onPress={ir}>
        <Text style = {[estilo.text,{textAlign:'center'}]}>CONFIRMAR</Text>
        </TouchableHighlight>
      </View>
      </Modal>
      </ImageBackground>
    )
  }
