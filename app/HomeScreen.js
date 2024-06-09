import { View, Text, ScrollView, Image, TextInput, StyleSheet, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { signOut } from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import Categories from '../components/categories';
import axios from 'axios';
import Recipes from '../components/recipes';

export default function HomeScreen() {
  const [firstName, setFirstName] = useState('');
  const [activeCategory, setActiveCategory] = useState('Beef');
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchUserName();
    getCategories();
    getRecipes();
  }, []);

  const fetchUserName = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          const fullName = userDoc.data().fullName;
          const firstName = fullName.split(' ')[0];
          setFirstName(firstName);
        }
      }
    } catch (error) {
      console.log('Error fetching user data: ', error);
    }
  };

  const handleChangeCategory = (category) => {
    getRecipes(category);
    setActiveCategory(category);
    setMeals([]);
  };

  const getCategories = async () => {
    try {
      const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php');
      if (response && response.data) {
        setCategories(response.data.categories);
      }
    } catch (err) {
      console.log('error: ', err.message);
    }
  };

  const getRecipes = async (category = "Beef") => {
    try {
      const response = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      if (response && response.data) {
        setMeals(response.data.meals);
      }
    } catch (err) {
      console.log('error: ', err.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        style={styles.scrollView}
      >
        {/* avatar and bell icon */}
        <View style={styles.header}>
          <Image source={require('../assets/images/avatar.png')} style={styles.avatar} />
          <BellIcon size={hp(4)} color="gray" />
        </View>

        {/* greetings and punchline */}
        <View style={styles.greetingsContainer}>
          <Text style={styles.greetingText}>Hello, {firstName}!</Text>
          <Text style={styles.punchlineText}>Make your own food,</Text>
          <Text style={styles.punchlineText}>stay at <Text style={styles.highlightText}>home</Text></Text>
        </View>

        {/* search bar */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder='Search any recipe'
            placeholderTextColor={'gray'}
            style={styles.searchInput}
          />
          <View style={styles.searchIconContainer}>
            <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" />
          </View>
        </View>

        {/* categories */}
        <View>
          {categories.length > 0 && <Categories categories={categories} activeCategory={activeCategory} handleChangeCategory={handleChangeCategory} />}
        </View>

        {/* recipes */}
        <View>
          <Recipes meals={meals} categories={categories} />
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
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    paddingTop: 14,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  avatar: {
    height: hp(5),
    width: hp(5.5),
  },
  greetingsContainer: {
    marginHorizontal: 16,
    marginBottom: 8,
  },
  greetingText: {
    fontSize: hp(1.7),
    color: 'gray',
  },
  punchlineText: {
    fontSize: hp(3.8),
    fontWeight: 'bold',
    color: 'gray',
  },
  highlightText: {
    color: 'orange',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 25,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  searchInput: {
    flex: 1,
    fontSize: hp(1.7),
    paddingLeft: 8,
  },
  searchIconContainer: {
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 6,
  },
  logoutContainer: {
    margin: 20,
    alignItems: 'center',
  },
});
