import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Home = ({route,navigation}) => {


  return (
    <View style={{flex:1}}>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
header:{
    flex:1,
    justifyContent:'center'
   
},
footer:{
    flex:2,
alignItems:'center',
justifyContent:'center',

margin:30
},
profileimage:{
height:'174',
width:'179'
,  borderColor:'black', // Background color of the ellipse
borderRadius: 100,
 borderWidth: 3,
alignSelf:'center',

justifyContent:'center',
margin:20

},
logout:{
    color:'white',
    
    fontSize:20,
     fontWeight: 'bold'
}
,  logoutButton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    margin:50
  }
})