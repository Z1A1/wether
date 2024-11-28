import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput, FlatList } from 'react-native';
import React, { useEffect,useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Entypo from 'react-native-vector-icons/Entypo'

const Login = () => {
  const[ forcastHistroy,setForcastHistroy]=useState()
  const[ curentStatus,setCurentStatus]=useState()
  useEffect(()=>{
    const url = `https://apps.org.in/weather/forecast/`;

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        setForcastHistroy(
          data.daily_forecast);
console.log("the datas of wether",data.daily_forecast)
      })
      .catch(error => {});
  },[]);
  useEffect(()=>{
    const url = `https://apps.org.in/weather/live/`;

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        setCurentStatus(
          data);
console.log("the datas ",data.current_weather
)
      })
      .catch(error => {});
  },[]);
  const renderItem = ({item}) => (
 <View style={{   height:200,width:100,borderRadius:30,backgroundColor:'blue',alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
  <Text style={{  color:'white'}} >
         {item.
date

}
      </Text>
    <Text style={{  color:'white'}} >
  {item.max_temperature}° 
      </Text>
      <Text style={{ color:'white'}} >
      {item.min_temperature}° 
      </Text>
      <Text style={{  color:'white'}} >
         {item.
weather_conditions
}
      </Text>
   
 </View>
 
  );
  
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>

      <LinearGradient colors={['#0096FF', '#191970']} style={styles.background}>
        <View style={styles.lineargradient}>
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

        <Entypo name="location-pin" size={50} color="red"/>
        <Text style={{ fontSize:20, color:'white'}} >
         {curentStatus?.location?.city}



      </Text>
          </View>
          <FontAwesome6 name="cloud" size={100} color="white"/>

          <Text style={{  fontSize: 100,
    fontWeight: 'bold',padding:10,color:'white'}}>
 {curentStatus?.current_weather.temperature}°
</Text>
<Text style={{  fontSize: 40,
    fontWeight: 'bold',padding:10,color:'white'}}>
 {curentStatus?.current_weather.weather_conditions}
</Text>
<TextInput
        style={styles.input}
        placeholder="Enter city name"
        placeholderTextColor={"white"}
      />
        </View>
      </LinearGradient>
      </View>
   <View style={styles.footer}>
  
   <FlatList
          data={forcastHistroy} 
          horizontal
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()} 
          showsHorizontalScrollIndicator={false}
        
          contentContainerStyle={{gap:10}}
        />
   </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  header: {
    flex: 1,
       backgroundColor:'black'
  },
  background: {
    flex: 1,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  lineargradient: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  footer: {
    flex: .5,

  backgroundColor:'black',
      alignItems: 'center', 
    justifyContent: 'center'
  ,
  
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%',
  
  }
});
