import { Button, SafeAreaView, ScrollView, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import Card from './src/componnt/card'


const w1=[
  {name:'noor', lastname:'mneer',ID:7319852, image:require("../AwesomeProject/src/pic/a.jpeg")},
  {name:'RakaN', lastname:'MneeR',ID:1975203, image:require("../AwesomeProject/src/pic/w.jpeg")},
  {name:'nabeel', lastname:'mnEEr',ID:4567891, image:require("../AwesomeProject/src/pic/s.jpeg")},
  {name:'ben', lastname:'gors',ID:1597530, image:require("../AwesomeProject/src/pic/q.jpeg")}

]

const Rcard =()=>{
  return(
    w1.map((it,i)=>
      <Card Key={i} name={it.name}lastname={it.lastname}image={it.image}ID={it.ID}/>
    )
  )
}

const App = () => {
  return (
  
    <View style={styles.mainContenir}>
  
    <ScrollView style={styles.mainContenir}>
    <Rcard/>
    </ScrollView>
    <Button title='Z' onPress={()=>{console.log("hey")
    }}/>


    </View>
  )
}

export default App



const styles = StyleSheet.create({
  mainContenir:{
    flex:1,
    backgroundColor:"black",
    // justifyContent:'center'
  
  },
})  

