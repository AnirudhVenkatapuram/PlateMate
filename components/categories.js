import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { CachedImage } from '../helpers/image';

export default function Categories({ categories, activeCategory, handleChangeCategory }) {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        {categories.map((cat, index) => {
          let isActive = cat.strCategory === activeCategory;
          let activeButtonClass = isActive ? styles.activeButton : styles.inactiveButton;
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleChangeCategory(cat.strCategory)}
              style={styles.categoryContainer}
            >
              <View style={[styles.categoryIconContainer, activeButtonClass]}>
                <CachedImage
                  uri={cat.strCategoryThumb}
                  style={styles.categoryImage}
                />
              </View>
              <Text style={styles.categoryText}>
                {cat.strCategory}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 15,
  },
  categoryContainer: {
    alignItems: 'center',
    marginRight: 8,
  },
  categoryIconContainer: {
    padding: 6,
    borderRadius: 50,
  },
  activeButton: {
    backgroundColor: '#FFA500',
  },
  inactiveButton: {
    backgroundColor: '#E0E0E0',
  },
  categoryImage: {
    width: hp(6),
    height: hp(6),
    borderRadius: 50,
  },
  categoryText: {
    fontSize: hp(1.6),
    color: 'gray',
  },
});
