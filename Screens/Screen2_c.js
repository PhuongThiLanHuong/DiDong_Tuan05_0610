import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,Image,TouchableOpacity } from 'react-native';


const Screen2_c = () => {
  return(
    <View style={styles.container}>
      <View style={styles.viewin}>
      <View style={styles.view1}>
        <Text style={styles.text1}>PASSWORD GENERATOR </Text>
      </View>
      <View style={styles.view2}>
        <TextInput style={styles.input1} placeholder=""></TextInput>
      </View>    
      <View style={styles.view3}>
        <Text style={styles.text2}>Password length</Text>
        <TextInput style={styles.input2} placeholder=""></TextInput>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text2}>Include lower case letters</Text>
        <TextInput style={styles.input3} placeholder=""></TextInput>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text2}>Include upper case letters</Text>
        <TextInput style={styles.input3} placeholder=""></TextInput>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text2}>Include numbers</Text>
        <TextInput style={styles.input4} placeholder=""></TextInput>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text2}>Include special symbols</Text>
        <TextInput style={styles.input5} placeholder=""></TextInput>
      </View>
      <View style={styles.view4}>
        <TouchableOpacity>
          <Text style={styles.text5}>GENERATOR PASSWORD</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#3b5998',
  },
  view1: {
    flexDirection: 'row',
    width: '90%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  text1: {
    fontSize: 20,
    fontWeight: '700',
    paddingLeft: 10,
    color:'white',
  },
  view2: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input1: {
    flex:1,
    height: 30,
    margin: 12,
    backgroundColor:'#151537',
  },
  view3: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text2: {
    fontSize: 20,
    fontWeight: '700',
    paddingLeft: 10,
    color:'white',
  },
  input2: {
    flex:1,
    height: 30,
    width: 30,
    marginLeft: 45,
    marginRight: 30,
    backgroundColor:'white',
  },
  input3: {
    flex:1,
    height: 30,
    width: 30,
    marginLeft: 70,
    marginRight: 30,
    backgroundColor:'white',
  },
  input4: {
    flex:1,
    height: 30,
    width: 20,
    marginLeft:70,
    marginRight: 30,
    backgroundColor:'white',
  },
  input5: {
    flex:1,
    height: 30,
    width: 30,
    marginLeft:10,
    marginRight: 30,
    backgroundColor:'white',
  },
  view4:{
    flexDirection: 'row',
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#3B3B98',
    marginTop: 20,
  },
  text5: {
    fontSize: 20,
    fontWeight: '700',
    alignItems: 'center',
    color:'white',
  },
  viewin:{
    backgroundColor:'#23235B',
    width:'90%',
    height:'100%',
    alignItems: 'center',
  },
}); export default Screen2_c;
