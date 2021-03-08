import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)
  const [countColor, setCountColor] = useState(2)
  const [countPicture, setCountPicture] = useState(2)

  // 宣告更換圖片的三張圖片矩陣
  const images = {
    image0: require('./src/image/0.png'),
    image1: require('./src/image/1.png'),
    image2: require('./src/image/2.png')
  }

  const printOpacity = () => {
    console.log('按到頁面變色按鈕了')
    setCountColor((countColor + 1) % 3)
    console.log(countColor)
  }
  const printOpacity1 = () => {
    console.log('按到更換圖片按鈕了')
    setCountPicture((countPicture + 1) % 3)
    console.log(countPicture)

  }
  return (
    <View style={styles[`container${countColor}`]}>
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
      <TouchableOpacity style={styles.containerOpacity} onPress={() => printOpacity()}>
        <Image
          style={{ width: 250, height: 53 }}
          source={require('./src/image/003.png')}
        />
      </TouchableOpacity>

      {/* 頁面換圖 */}
      <TouchableOpacity style={styles.containerOpacity} onPress={() => printOpacity1()}>
        <Image
          style={{ width: 250, height: 53 }}
          source={require('./src/image/004.png')}
        />
        {/* <Text>按一下 TouchableOpacity</Text> */}
      </TouchableOpacity>
      <StatusBar style="auto" />
      <Text>{countPicture}</Text>
      <Image
        style={{ width: 150, height: 213 }}
        // source={require('./src/image/1.png')}
        source={images["image" + countPicture.toString()]}
      />
      {/* countPicture */}

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
