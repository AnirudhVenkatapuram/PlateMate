// import React from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import { signOut } from 'firebase/auth'
// import { auth } from '../config/firebase'

// const Home = () => {

//   const logout = async () => {
//     await signOut(auth);
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Welcome to the Home Screen!</Text>
//       {/* <Button title="Logout" onPress={logout} />; */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//   },
// });

// export default Home;

import { View, Text, ScrollView, Image, TextInput, StyleSheet, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
//import Categories from '../components/categories';
//import axios from 'axios';
//import Recipes from '../components/recipes';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function HomeScreen() {
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-14"
      >
        {/* avatar and bell icon */}
        <View className="mx-4 flex-row justify-between items-center mb-2">
          <Image source={require('../assets/images/avatar.png')} style={{ height: hp(5), width: hp(5.5) }} />
          <BellIcon size={hp(4)} color="gray" />
        </View>

        {/* greetings and punchline */}
        <View className="mx-4 space-y-2 mb-2">
          <Text style={{ fontSize: hp(1.7) }} className="text-neutral-600">Hello, Insert Name Here</Text>
          <View>
            <Text style={{ fontSize: hp(3.8) }} className="font-semibold text-neutral-600">Make your own food,</Text>
          </View>
          <Text style={{ fontSize: hp(3.8) }} className="font-semibold text-neutral-600">
            stay at <Text className="text-amber-400">home</Text>
          </Text>
        </View>

        {/* search bar */}
        <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
          <TextInput
            placeholder='Search any recipe'
            placeholderTextColor={'gray'}
            style={{ fontSize: hp(1.7) }}
            className="flex-1 text-base mb-1 pl-3 tracking-wider"
          />
          <View className="bg-white rounded-full p-3">
            <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" />
          </View>
        </View>

        {/* Logout button */}
        <View style={styles.logoutContainer}>
          <Button title="Logout" onPress={logout} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  logoutContainer: {
    margin: 20,
    alignItems: 'center',
  },
});