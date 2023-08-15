import { Image, StyleSheet, Text, View } from "react-native"


const Card = (q1) =>{
    const {name,lastname,image,ID}= q1
    return(
    
      <View style={styles.card}>
          
        <View style={styles.TopContiner}>
  
          <View style={styles.imgcard}>
  
            <Image style={styles.imgcard}source={image}/>
             
          </View>
  
          <View style={styles.TextContiner}>
  
            <Text style={styles.textStyle}>{name}</Text>
            <Text style={styles.textStyle}>{lastname}</Text>
  
          </View>
  
        </View>
  
       <View style={styles.buttomContiner}>
       <Text style={styles.textStyle}>{ID}</Text>
       </View>
  
        
      </View>
  
    )
}
export default Card


  const styles = StyleSheet.create({

  textStyle:{
    fontSize:30,
    color:'gold',
    alignSelf:'center',
    marginRight:50,
    fontWeight:'700',

  },
  card:{
    borderColor:"blue",
    borderWidth:10,
    backgroundColor:'#00c9db',
    height:300,
    width:'100%',
    alignSelf:'center',
    borderRadius:20,
   
    
  },
  imgcard:{
    alignSelf:'flex-start',
    height:'100%',
    width:'60%',
    borderBottomRightRadius:15,
    
  },
  TopContiner:{
    height:'50%',
    width:'100%',
    flexDirection:'row',
    
  },
  TextContiner:{
    justifyContent:'center',
    alignItems:'flex-end',
    flexGrow:1,
  },
  buttomContiner:{
    flex:1,
    backgroundColor:'#Dc9e14'
  },
}) 