import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,Image,TouchableOpacity } from 'react-native';


export default function App() {
  return (
   
    <View style={styles.container}>
       <Text style={styles.textLogIn}>LOGIN</Text>
      <View style={styles.editUser}>
        <Image style={styles.imgUser} source={require('./assets/user.png')} />
        <TextInput style={styles.inputUser} placeholder="Username"></TextInput>
      </View>
      <View style={styles.editPass}>
        <Image style={styles.imgPass} source={require('./assets/lock.png')}/>
        <TextInput style={styles.inputPass} placeholder="Password"></TextInput>
        <Image style={styles.imgEye} source={require('./assets/eye-1.png')}/>
      </View>
      <TouchableOpacity style={styles.btnRegis}>
                <Text style={styles.textOfBtnRegis}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.text2}>Forgot your password?</Text>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#F7C700',
  },
  textLogIn: {
    height:100,
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
      
  },
  editUser: {
    flexDirection: 'row',
    width:'90%',
    height: 50,
    border: 'solid',
    backgroundColor:'#ddd4d4'
  },
  imgUser: {
    left:1,
    width: 40,
  },
  inputUser: {
    flex:1,
    height: 20,
    margin: 12,
  },
  editPass: {
    flexDirection: 'row',
    marginTop: 20,
    width:'90%',
    border: 'solid',
    height: 50,
    backgroundColor:'#ddd4d4'
  },
  imgPass: {
    left:1,
    width: 40,
  },
  inputPass: {
    flex:1,
    height: 20,
    margin: 12,
  },
  imgEye: {
    width: 40,
    
  },
  btnRegis: {
    marginTop: 20,
    backgroundColor: 'black',
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    border: 'solid', 
  },
  textOfBtnRegis: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text2: {
    marginTop: 20,
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

