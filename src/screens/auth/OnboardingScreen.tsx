import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { globalStyles } from '../../style/globalStyles'
import Swiper from 'react-native-swiper'
import { images } from '../../assets/images'
import { appInfo } from '../../constants/appInfos'
import { appColors } from '../../constants/appColors'

const OnboardingScreen = ({ navigation }: any) => {
    const [index, setIndex] = useState(0);
    // const swiperRef = useRef<Swiper>(null); // Tạo ref cho Swiper

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setIndex(prevIndex => (prevIndex + 1) % 3);
    //         swiperRef.current?.scrollBy(1); // Cuộn đến trang tiếp theo
    //     }, 2000);

    //     return () => clearInterval(interval);
    // }, []);


    return (
        <View style={[globalStyles.container]}>
            <Swiper
                style={[]}
                loop={false}
                onIndexChanged={num => setIndex(num)}
                // showsButtons
                index={index}
                activeDotColor={appColors.white}>
                <Image source={images.onboarding_1} style={[styles.onboarding]} />
                <Image source={images.onboarding_2} style={[styles.onboarding]} />
                <Image source={images.onboarding_3} style={[styles.onboarding]} />
            </Swiper>
            <View style={[styles.ContainerText]}>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={[styles.Text, { color: appColors.gray2 }]} >Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => index < 2 ? setIndex(index + 1) : navigation.navigate('LoginScreen')}>
                    <Text style={[styles.Text]} >Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    onboarding: {
        flex: 1,
        width: appInfo.sizes.WIDTH,
        height: appInfo.sizes.HEIGHT,
        resizeMode: 'cover',
    },
    ContainerText: {
        paddingHorizontal: 16,
        paddingVertical: 15,
        bottom: 0,
        right: 0,
        left: 0,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Text: {
        color: appColors.white,
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 34,
        fontStyle: 'normal'
    }

})

export default OnboardingScreen