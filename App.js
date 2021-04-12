import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      numero: 0,
      botao: 'VAI',
      ultimo: null
    }

    this.timer = null
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai(){

    if(this.timer != null){
      //Aqui pausa o timer

      clearInterval(this.timer);
      this.timer = null;
      this.setState({botao: 'VAI'})
      
    }else{

      //começa a girar o timer
      this.timer =  setInterval(() => {
        this.setState({numero: this.state.numero + 0.1})
      },100);

      //quando pausar o botão vai trocar de nome

      this.setState({botao: 'PARAR' })
    }
    }
  limpar(){

    //AQUI ZERA O CRONOMETRO

    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      botao: 'VAI'
    })
  }
  render(){
    return(
      <View style={styles.container}>
          <Image 
            source={require('./src/assets/cronometro.png')}
            style={styles.cronometro}
          />

          <Text style={styles.timer}> {this.state.numero.toFixed(1)} </Text>

          <View style={styles.btnArea}>
            <TouchableOpacity style={styles.btn} onPress={this.vai}>
              <Text style={styles.btnTexto}>{this.state.botao}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnTexto} onPress={this.limpar}>Limpar</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.areaUltimo}>
                <Text style={styles.textoTempo}>
                  {this.state.ultimo > 0 ? 'Ultimo Tempo: '  + this.state.ultimo.toFixed(2) : ''}
                </Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },

  timer:{
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold'
  },

  btnArea:{
    flexDirection: 'row',
    marginTop: 90,
    height: 40
  },

  btn:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },

  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',

  },
  areaUltimo:{
    marginTop: 40,
  },
  textoTempo:{
    fontSize: 25,
    fontStyle: 'italic',
    color: '#fff'
  }
});

export default App;