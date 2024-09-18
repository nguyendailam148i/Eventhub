import { View, Text, ImageBackground, Image, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { appInfo } from '../constants/appInfos'
import { images } from '../assets/images'
import { SpaceComponent } from '../components'
import { appColors } from '../constants/appColors'

const SplashScreen = () => {
  useEffect(() => {

  }, [])
  return (
    <ImageBackground source={images.splashImg}
      style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }} imageStyle={{ flex: 1 }}>
      <Image source={images.logo}
        style={{
          width: appInfo.sizes.WIDTH * 0.7,
          resizeMode: 'contain',
        }} />
      <SpaceComponent height={16} />
      <ActivityIndicator color={appColors.gray} size={22} />
    </ImageBackground>
  )
}

export default SplashScreen