import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import appcss from './src/main/appcss'

const App = () => {

  const [clickCount, setClickCount] = useState(0);

  const handlePress = () => {
    if (clickCount <= 59) {
      setClickCount(clickCount + 1);
    }
    console.log(`Clicked ${clickCount} times`);
  }

  const renderImages = () => {
    const images = [];

    for (let i = 0; i < clickCount; i++) {
      function getRandomDegree() {
        return Math.floor(Math.random() * 360);
      }
      const imageStyle = {
        // transform: [{ rotate: `${getRandomDegree()}deg` }],
      };
      images.push(
        <View key={i} style={{width:10,height:10,margin:'5%' , display:'flex'}}>
          <Image
            source={require('./src/asset/Imge/Gobelek.png')}
            style={[appcss.img2,imageStyle]}
          />
        </View>
      );
    }

    return images;
  }

  return (
    <View style={appcss.view}>
      <View>
        <View style={appcss.imgview}>
          <Image
            source={require('./src/asset/Imge/Pizza.png')}
            style={appcss.img}
          />
        </View>
        <View style={appcss.view2}>
          {renderImages()}
        </View>
      </View>
      <TouchableOpacity style={appcss.touc} onPress={() => handlePress()} >
        <Image
          source={require('./src/asset/Imge/Gobelek.png')}
          style={appcss.img1}
        />
      </TouchableOpacity>
    </View>
  )
}

export default App