import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated'
import React , { useEffect } from 'react';
import { View, Text, Image, StatusBar, StyleSheet } from 'react-native'

export default function IntroScreen() {

    const ring1padding = useSharedValue(0);
    const ring2padding = useSharedValue(0);

    useEffect(()=>{
        ring1padding.value = 0;
        ring2padding.value = 0;
        setTimeout(()=> ring1padding.value = withSpring(ring1padding.value+hp(5)), 100);
        setTimeout(()=> ring2padding.value = withSpring(ring2padding.value+hp(5)), 300);
    }, [])
    return (
        <View className="flex-1 justify center items-centera space y-10 bg-amber-500">
            <StatusBar style= "light" />

            {/*logo image with rings */}
            <Animated.View className= "bg-white/20 rounded-full" style={{padding: ring2padding}}>
                <Animated.View className= "bg-white/20 rounded-full" style={{padding: ring1padding}}>
                    {/* <Image source={require("../../assets/images/react-logo@3x.png")}//change this
                        style={{width: hp(20), height: hp(20)}} /> */}
                </Animated.View>
            </Animated.View>

        {/*title and punchline*/}
        <View className="flex items-center space-y-2">
            <Text style={{fontSize: hp(7)}} className="font-bold text-white tracking-widest">
                PlateMate!
            </Text>
            <Text style={{fontSize: hp(2)}} className="font-medium text-white tracking-widest">
                Meal prep & planning for foodies!
            </Text>
        </View>
        </View>
    )
}