import { View, Text, Image } from 'react-native'
import React from 'react'
import appcss from './src/main/appcss'

const App = () => {
  return (
    <View style={appcss.view}>
      <View style={appcss.imgview}>
        <Image
          source={require('./src/asset/Imge/Pizza.png')}
          style={appcss.img}
        />
      </View>
    </View>
  )
}

export default App