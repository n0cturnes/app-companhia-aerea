import {TouchableHighlight, Text,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import estilo from './src/stylesheet'
import TELA_LOGIN from './src/TELA_LOGIN';
import TELA2 from './src/TELA2';
import TELA3 from './src/TELA3';
import TELA_CONTA from './src/TELA_CONTA';
import TELA4 from './src/TELA4';
import TELA5 from './src/TELA5'

const Stack = createNativeStackNavigator();

function LogoTitle(){
  return (
    <Image
      style={{ width: 75, height: 40 }}
      source={require('./src/assets/logosemtexto.png')}
    />
  );
}

export default function App() {
  return (<NavigationContainer>
      <Stack.Navigator initialRouteName = 'Login'>
      <Stack.Screen name='Login' component = {TELA_LOGIN}
      options = {{headerShown: false}}/>
      <Stack.Screen name='Pacotes' component = {TELA2}
      options={({ navigation,route }) => ({
              headerTitle: (props) => <LogoTitle {...props} />,
              headerRight: () => (
                <TouchableHighlight
                  onPress={() => navigation.navigate('telaConta',{user:route.params.user})}>
                  <Text style = {estilo.textopequeno}>Ver conta</Text>
                  </TouchableHighlight>
              ),
            })}
      />
      <Stack.Screen name = 'tela3' component = {TELA3}
      options = {{headerShown: false}}/>
      <Stack.Screen name = 'telaConta' component = {TELA_CONTA}
      options = {{headerTitle:'Minha Conta'}}/>
      <Stack.Screen name = 'tela4' component = {TELA4} options = {{headerTitle: 'Dados de pagamento'}}/>
      <Stack.Screen name = 'tela5' component = {TELA5} options = {{headerTitle: 'Finalizar'}}/>
      </Stack.Navigator>
  </NavigationContainer>
);
}
