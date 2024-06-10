import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MasonryList from '@react-native-seoul/masonry-list';
import Animated, { FadeInDown } from 'react-native-reanimated';
import Loading from './loading';
import { CachedImage } from '../helpers/image';
import { useRouter } from 'expo-router';

export default function Recipes({ categories, meals }) {
  const router = useRouter();
  return (
    <View style={styles.recipesContainer}>
      <Text style={styles.recipesTitle}>Recipes</Text>
      <View>
        {categories.length === 0 || meals.length === 0 ? (
          <Loading size="large" style={styles.loading} />
        ) : (
          <MasonryList
            data={meals}
            keyExtractor={(item) => item.idMeal}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, i }) => <RecipeCard item={item} index={i} router={router} />}
            onEndReachedThreshold={0.1}
          />
        )}
      </View>
    </View>
  );
}

const RecipeCard = ({ item, index, router }) => {
  let isEven = index % 2 === 0;
  return (
    <Animated.View entering={FadeInDown.delay(index * 100).duration(600).springify().damping(12)}>
      <Pressable
        style={[styles.recipeCard, { paddingLeft: isEven ? 0 : 8, paddingRight: isEven ? 8 : 0 }]}
        onPress={() => router.push(`/recipe-detail/${item.idMeal}`)}
      >
        <CachedImage
          uri={item.strMealThumb}
          style={[
            styles.recipeImage,
            { height: index % 3 === 0 ? hp(25) : hp(35) }
          ]}
        />
        <Text style={styles.recipeText}>
          {item.strMeal.length > 20 ? item.strMeal.slice(0, 20) + '...' : item.strMeal}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  recipesContainer: {
    marginHorizontal: 16,
    marginTop: 20,
  },
  recipesTitle: {
    fontSize: hp(3),
    fontWeight: 'bold',
    color: 'gray',
  },
  loading: {
    marginTop: 20,
  },
  recipeCard: {
    width: '100%',
    marginBottom: 16,
  },
  recipeImage: {
    width: '100%',
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
  },
  recipeText: {
    fontSize: hp(1.5),
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 8,
  },
});
