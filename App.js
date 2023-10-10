import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,Image,TouchableOpacity } from 'react-native';


export default function App() {
  return(
    <View style={styles.container}>
      <View style={styles.viewin}>
      <View style={styles.view1}>
          <Image style={styles.bookIcon} source={require("./assets/book.png")}></Image>
          <Text style={styles.text1}>{'Nguyên hàm tích phân và ứng dụng \n Cung cấp bởi Tiki Trading'}</Text>  
          <Text style={styles.text2}>141.800d</Text>
        </View>
        <View style={styles.view2}>
          <View style={styles.view3}> 
            <Text style={styles.text3}> Ma giam gia</Text>
          </View>
          <View style={styles.view4}>
          <TouchableOpacity>Ap dung</TouchableOpacity>
        </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#C4C4C4',
  },
  viewin: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  view1: {
    flexDirection: 'row',
    width: '90%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookIcon: {
    width: 50,
    height:70,
  },
  text1: {
    fontSize: 10,
    fontWeight: '600',
    paddingLeft: 10,
  },
  text2: {
    fontSize: 10,
    fontWeight: '600',
    paddingLeft: 10,
    color:'red',
    marginLeft: 50,
  },
  view2: {
    flexDirection: 'row',
    width: '90%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    height: 30,
    width:'50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  
  text3: {
    fontSize: 10,
    fontWeight: '600',
    paddingLeft: 10,
    
  },
  view4: {
    height: 30,
    width:'40%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'blue',
    border:'solid',
    color:'white',
  },
  view5: {
    marginTop: 10,
    flexDirection: 'row',

    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text5: {
    fontSize: 10,
    fontWeight: '600',
    paddingLeft: 10,
  },
  text6: {
    fontSize: 10,
    fontWeight: '600',
    paddingLeft: 10,
    color:'red',
    marginLeft: 50,
  },
});
