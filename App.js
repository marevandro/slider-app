import React, {useState}from "react";
import { View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from "react-native-app-intro-slider";


 const slides = [
    {
      key: '1',
      image: require('./src/assets/s1.jpeg')
    },
    {
      key:'2',
      image: require('./src/assets/s2.jpeg')
    },
];

export default function App () {
  const [showHOme, setShowHome] = useState(false);
 
  function renderSlides ({ item }){
    return(
      <View style={{flex:1}}>
        <Image
          source={item.image}
          style={{
            resizeMode:'cover',
            marginTop:25,
            width: '100%',
          
            
          }}
        

        /> 
        <Text 
        style={{
          paddingTop: 25,
          paddingBottom: 10,
          fontSize: 23,
          fontWeight: 'bold',
          color: '#009CFF',
          alignSelf: 'center'
        }}>
          {item.title}
        </Text>

        <Text
        style={{
          textAlign: 'center',
          color: '#b5b5b5',
          paddingHorizontal: 25,
          fontSize: 15
        }}>
          {item.text}
        </Text>
           

      </View>
    )
  }

 if (showHOme){
   return <Text>ENTROU NA HOME</Text>
 } else {
   return (
   <AppIntroSlider
    renderItem={renderSlides}
    data={slides}
    activeDotStyle={{
      backgroundColor: "#18A09A",
      width: 10,
    }}
    renderNextButton={ () => <Text style={{fontSize:20}}>Próximo</Text>}
    renderDoneButton={ () => <Text style={{fontSize: 20}}>Acessar!</Text>}
    onDone={ () => alert('ENTROU NO APP')}
   />
   );
 } 
}

const styles = StyleSheet.create({
  buttonCircle: {
    width: 70,
    height: 40,
    backgroundColor: '#18A09A',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 25
  },
});