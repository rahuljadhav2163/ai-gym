import React from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Image,
  SafeAreaView 
} from "react-native";
import { Link } from 'expo-router';
import BottomBar from './bottombar';

const StarRating = ({ rating }) => (
  <View style={styles.ratingContainer}>
    <Text style={styles.ratingText}>{rating}</Text>
    {[1,2,3,4,5].map(star => (
      <Text key={star} style={styles.star}>★</Text>
    ))}
  </View>
);

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Hi Rahul <Text>👋</Text></Text>
          <TouchableOpacity>
            <Text style={styles.searchIcon}>🔍</Text>
          </TouchableOpacity>
        </View>

        {/* Discount Banner */}
        <View style={styles.bannerContainer}>
          <View style={styles.banner}>
            <Image
              source={{ uri: 'https://wallpaperaccess.com/full/834258.jpg' }}
              style={styles.bannerImage}
            />
            <View style={styles.bannerContent}>
              <Text style={styles.discountText}>25%</Text>
              <Text style={styles.discountTitle}>Discount</Text>
              <Text style={styles.discountPeriod}>This month only</Text>
            </View>
            <View style={styles.dotContainer}>
              <View style={[styles.dot, styles.activeDot]} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
          </View>
        </View>

        {/* Today's Classes */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Today's classes</Text>
            <Text style={styles.arrowIcon}>›</Text>
          </View>
          
          <TouchableOpacity style={styles.classCard}>
            <View style={styles.classTypeOverlay}>
              <Text style={styles.classTypeText}>Fitness</Text>
            </View>
            <Image
              source={{ uri: 'https://activecentres.org/wp-content/uploads/2018/03/Body-balance-min-1.jpeg' }}
              style={styles.classImage}
            />
            <View style={styles.classDetails}>
              <View style={styles.timeContainer}>
                <Text style={styles.timeIcon}>⏱️</Text>
                <Text style={styles.timeText}>50 min</Text>
              </View>
              <View style={styles.levelContainer}>
                <Text style={styles.levelText}>Beginners</Text>
              </View>
            </View>
            <View style={styles.ratingOverlay}>
              <StarRating rating="4.8" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Popular Classes */}
        

        {/* Top Instructors */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top instructors</Text>
            <Text style={styles.arrowIcon}>›</Text>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.instructorContainer}>
              <Image
                source={{ uri: 'https://thumbs.dreamstime.com/b/proud-fitness-trainer-his-gym-confident-exercise-coach-gym-indian-fit-man-arms-crossed-bodybuilding-creates-proud-263412438.jpg' }}
                style={styles.instructorImage}
              />
              <Text style={styles.instructorName}>Mila Rogerson</Text>
              <Text style={styles.instructorType}>Pilates</Text>
            </View>
            <View style={styles.instructorContainer}>
              <Image
                source={{ uri: 'https://www.mmagyms.net/wp-content/uploads/2020/01/Personal-Trainer-Packages.png' }}
                style={styles.instructorImage}
              />
              <Text style={styles.instructorName}>Alex Elderman</Text>
              <Text style={styles.instructorType}>Crossfit</Text>
            </View>
            <View style={styles.instructorContainer}>
              <Image
                source={{ uri: 'https://thumbs.dreamstime.com/b/confident-motivated-fitness-coach-posing-gym-105270802.jpg' }}
                style={styles.instructorImage}
              />
              <Text style={styles.instructorName}>Cristi Brown</Text>
              <Text style={styles.instructorType}>Yoga</Text>
            </View>
            <View style={styles.instructorContainer}>
              <Image
                source={{ uri: 'https://c.pxhere.com/photos/f6/41/fitness_training_gym_personal_trainer_woman-1363477.jpg!d' }}
                style={styles.instructorImage}
              />
              <Text style={styles.instructorName}>Julia Kameron</Text>
              <Text style={styles.instructorType}>Fitness</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular classes</Text>
            <Text style={styles.arrowIcon}>›</Text>
          </View>
          
          <TouchableOpacity style={styles.classCard}>
            <View style={styles.classTypeOverlay}>
              <Text style={styles.classTypeText}>Pilates</Text>
            </View>
            <Image
              source={{ uri: 'https://wallpaperaccess.com/full/2465431.jpg' }}
              style={styles.classImage}
            />
            <View style={styles.classDetails}>
              <View style={styles.timeContainer}>
                <Text style={styles.timeIcon}>⏱️</Text>
                <Text style={styles.timeText}>60 min</Text>
              </View>
              <View style={styles.levelContainer}>
                <Text style={styles.levelText}>Intermediate</Text>
              </View>
            </View>
            <View style={styles.ratingOverlay}>
              <StarRating rating="5.0" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      

      {/* Bottom Navigation */}
      <BottomBar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6eeff',
  },
  scrollViewContent: {
    paddingBottom: 70,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '600',
  },
  searchIcon: {
    fontSize: 20,
    color: '#FF9500',
  },
  bannerContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  banner: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#F5F5F5',
  },
  bannerImage: {
    width: '100%',
    height: 160,
    borderRadius: 20,
  },
  bannerContent: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  discountText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF9500',
  },
  discountTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF9500',
  },
  discountPeriod: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  dotContainer: {
    position: 'absolute',
    bottom: 15,
    left: 20,
    flexDirection: 'row',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#DDD',
    marginRight: 4,
  },
  activeDot: {
    backgroundColor: '#FF9500',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  arrowIcon: {
    fontSize: 24,
    color: '#666',
  },
  classCard: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#F5F5F5',
    marginBottom: 15,
  },
  classImage: {
    width: '100%',
    height: 160,
  },
  classTypeOverlay: {
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 1,
  },
  classTypeText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
  },
  classDetails: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  timeIcon: {
    marginRight: 5,
  },
  timeText: {
    color: '#FFF',
    fontSize: 14,
  },
  levelContainer: {
    backgroundColor: '#FF9500',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 15,
  },
  levelText: {
    color: '#FFF',
    fontSize: 12,
  },
  ratingOverlay: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    color: '#FFD700',
    fontSize: 12,
    marginLeft: 2,
  },
  ratingText: {
    color: '#FFF',
    fontSize: 14,
    marginRight: 4,
  },
  instructorContainer: {
    alignItems: 'center',
    marginRight: 20,
  },
  instructorImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 8,
  },
  instructorName: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 2,
  },
  instructorType: {
    fontSize: 12,
    color: '#666',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    paddingBottom: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 24,
    marginBottom: 4,
    opacity: 0.5,
  },
  activeNavIcon: {
    opacity: 1,
  },
  navText: {
    fontSize: 12,
    color: '#666',
  },
  activeNavText: {
    color: '#FF9500',
  },
});