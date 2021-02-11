import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, TouchableOpacity, Image } from 'react-native';

export default function App() {


  const [count, setCount] = useState(0)

  // 以下的countColor變數是為了指定給container使用的
  const [countColor, setCountColor] = useState(3)
  //  原來希望做三種container
  //  container0, container1, container2 一樣用count+1的方式每按一次"頁面變色" countColor就+1，再用3去除，
  // 所得的餘數應為0,1,2三種數,將餘數帶入到containerX的尾數中以實現每點選一次就循環變換，但是沒有做成功，
  // 請問老師，這裡要怎麼實現呢？
  // 另外再請問，如果我只想要將一個變數插入到像:<View style={styles.container0}> 左方的0的部份，我的
  // 外層包覆的符號應該要怎麼寫呢?這裡的規則我一直沒有搞懂。


  const printOpacity = () => {
    console.log(count)
  }
  return (
    <View style={styles.container0}>
      
      <Text>已經按了{count}次</Text>
      {/* 計數器+1 */}
      <TouchableOpacity style={styles.containerOpacity} onPress={() => setCount(count + 1)}>
        <Image
          style={{ width: 250, height: 53 }}
          source={require('./src/image/001.png')}
        />
      </TouchableOpacity>

      {/* 計數器歸零 */}
      <TouchableOpacity style={styles.containerOpacity} onPress={() => setCount(0)}>
        <Image
          style={{ width: 250, height: 53 }}
          source={require('./src/image/002.png')}
        />
      </TouchableOpacity>

      {/* 頁面變色 */}
      <TouchableOpacity style={styles.containerOpacity} onPress={() => setCountColor(countColor + 1)}>
        <Image
          style={{ width: 250, height: 53 }}
          source={require('./src/image/003.png')}
        />
      </TouchableOpacity>

      {/* 頁面換圖 */}
      <TouchableOpacity style={styles.containerOpacity} onPress={() => printOpacity()}>
        <Image
          style={{ width: 250, height: 53 }}
          source={require('./src/image/004.png')}
        />
        {/* <Text>按一下 TouchableOpacity</Text> */}
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View >
  );
}


const styles = StyleSheet.create({
  container0: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerHighlight: {
    height: 30,
    width: 300,
    backgroundColor: '#e83030',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOpacity: {
    padding: 5
  },

});
