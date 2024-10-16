import React, { useState, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import BottomBar from './bottombar';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;
const SPACING = 20;

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const MembershipCard = React.memo(({ membership, index, scrollX }) => {
  const inputRange = [
    (index - 1) * (CARD_WIDTH + SPACING),
    index * (CARD_WIDTH + SPACING),
    (index + 1) * (CARD_WIDTH + SPACING),
  ];

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.9, 1, 0.9],
    extrapolate: 'clamp',
  });

  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.5, 1, 0.5],
    extrapolate: 'clamp',
  });

  return (
    <AnimatedLinearGradient
      colors={membership.color}
      style={[
        styles.card,
        {
          transform: [{ scale }],
          opacity,
        },
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <BlurView intensity={20} style={styles.blurOverlay}>
        <Text style={styles.title}>{membership.title}</Text>
        <Text style={styles.price}>{membership.price}</Text>
        <View style={styles.divider} />
        <Text style={styles.subHeader}>Benefits:</Text>
        {membership.benefits.map((benefit, i) => (
          <View key={i} style={styles.benefitContainer}>
            <Ionicons name="checkmark-circle" size={24} color="#fff" style={styles.checkIcon} />
            <Text style={styles.benefit}>{benefit}</Text>
          </View>
        ))}
        <TouchableOpacity
          style={styles.selectButton}
        >
          <Text style={styles.selectButtonText}>Select Plan</Text>
        </TouchableOpacity>
      </BlurView>
    </AnimatedLinearGradient>
  );
});

const Membership = () => {
  const [scrollX] = useState(new Animated.Value(0));

  const memberships = useMemo(
    () => [
      {
        title: 'Basic',
        price: '₹ 700/month',
        benefits: [
          'Access to gym facilities',
          'Free group classes',
          '1 personal training session',
          'Access to gym facilities',
          'Free group classes',
          '1 personal training session',
          'Access to gym facilities',
          'Free group classes',
        ],
        color: ['#4776E6', '#8E54E9'],
      },
      {
        title: 'Standard',
        price: '₹ 999/month',
        benefits: [
          'All Basic benefits',
          'Unlimited group classes',
          '2 personal training sessions',
          'Nutrition guidance',
          'All Standard benefits',
          '24/7 gym access',
          'Unlimited personal training',
          'Free merchandise',
        ],
        color: ['#FF8008', '#FFC837'],
      },
      {
        title: 'Premium',
        price: '₹ 1199/month',
        benefits: [
          'All Standard benefits',
          '24/7 gym access',
          'Unlimited personal training',
          'Free merchandise',
          'All Standard benefits',
          '24/7 gym access',
          'Unlimited personal training',
          'Free merchandise',
        ],
        color: ['#56CCF2', '#2F80ED'],
      },
    ],
    []
  );

  const renderMembershipCard = useCallback(
    ({ item, index }) => (
      <MembershipCard membership={item} index={index} scrollX={scrollX} />
    ),
    [scrollX]
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#000000', '#fff']}
        style={styles.background}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.header}>Choose Your Plan</Text>
        <Animated.FlatList
          data={memberships}
          renderItem={renderMembershipCard}
          keyExtractor={(item) => item.title}
          horizontal
          pagingEnabled
          snapToInterval={CARD_WIDTH + SPACING}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardContainer}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        />
       <BottomBar/>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    paddingTop: 50,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginTop:-20
  },
  cardContainer: {
    paddingHorizontal: SPACING,
  },
  card: {
    width: CARD_WIDTH,
    height:555,
    borderRadius: 20,
    padding: 25,
    marginHorizontal: SPACING / 2,
  },
  blurOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
    padding: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  price: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 15,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginVertical: 15,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  benefitContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkIcon: {
    marginRight: 10,
  },
  benefit: {
    fontSize: 16,
    color: '#fff',
    flex: 1,
  },
  selectButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    paddingVertical: 12,
    marginTop: 20,
  },
  selectButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  joinButton: {
    backgroundColor: '#00C853',
    borderRadius: 15,
    paddingVertical: 15,
    marginBottom: 30,
    marginHorizontal: 29,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginTop:10
  },
  joinButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

export default Membership;