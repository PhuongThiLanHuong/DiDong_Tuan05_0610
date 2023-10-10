import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,Image,TouchableOpacity } from 'react-native';


const Screen2_b = () => {
  return(
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image style={styles.img1} source={require('./assets/usb.png')} />  
        <Text style={styles.text1}>USB Bluetooth Music Receiver HJX </Text> 
      </View>
      <View>
        <Text style={styles.text2}>Cuc ky hai long</Text>
      </View>
      <View style={styles.view2}>
        <Image style={styles.img2} source={require('./assets/star.png')} />
        <Image style={styles.img2} source={require('./assets/star.png')} />
        <Image style={styles.img2} source={require('./assets/star.png')} />
        <Image style={styles.img2} source={require('./assets/star.png')} />
        <Image style={styles.img2} source={require('./assets/star.png')} />
      </View>
      <View style={styles.view3}>
        <Image style={styles.img3} source={require('./assets/camera.png')} />
        <Text style={styles.text3}>Them hinh anh</Text>
      </View>
      <View style={styles.view4}>
        <Text style={styles.text4}>Hay chia se nhung dieu ma ban thich ve san pham</Text>
      </View>
      <View style={styles.view5}>
        <TouchableOpacity>
          <Text style={styles.text5}>Gui</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  view1: {
    flexDirection: 'row',
    width: '90%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  img1: {
    width: 60,
    height: 50,
  },
  text1: {
    fontSize: 20,
    fontWeight: '700',
    paddingLeft: 10,
  },
  
  img2: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  text2: {
    fontSize: 20,
    fontWeight: '700',
    paddingTop: 10,
  },
  view2: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  img3: {
    width: 30,
    height: 30,
    paddingRight:30,
  },
  text3: {
    fontSize: 20,
    fontWeight: '700',
    paddingLeft: 10,
  },
  view3: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent:'center',
    borderWidth: 1,
    borderColor:'blue',
    borderRadius: 10,
  },
  view4: {
    flexDirection: 'row',
    width: '90%',
    height: 300,
    justifyContent:'center',
    borderWidth: 1,
    borderColor:'gray',
    borderRadius: 10,
    marginTop: 10,
  },
  text4: {
    fontSize: 20,
    paddingLeft: 10,
    opacity: 0.5,
  },
 
  view5: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent:'center',
    borderWidth: 1,
    backgroundColor: 'blue',
    borderRadius: 10,
    marginTop: 10,
  },
  text5: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },
}); export default Screen2_b;
