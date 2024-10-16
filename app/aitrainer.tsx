import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import BottomBar from './bottombar';
import Header from './header';

export default function AIGymTrainer() {
  const [workout, setWorkout] = useState(null);

  const workoutPlans = [
    {
      id: 1,
      name: 'Full Body Workout',
      details: [
        '10 mins warm-up',
        '15 squats',
        '15 push-ups',
        '10 lunges (each leg)',
        'Plank for 1 min',
      ],
    },
    {
      id: 2,
      name: 'Cardio Burst',
      details: [
        '5 mins jumping jacks',
        '5 mins high knees',
        '3 sets of 20 burpees',
        '2 sets of mountain climbers',
        'Cool down for 5 mins',
      ],
    },
    {
      id: 3,
      name: 'Strength Training',
      details: [
        '10 push-ups',
        '10 dumbbell rows (each arm)',
        '15 squats',
        '20 sit-ups',
        'Plank for 1 min',
      ],
    },
    {
      id: 4,
      name: 'Flexibility Stretching',
      details: [
        '5 mins neck and shoulder rolls',
        '5 mins toe touch stretch',
        '3 sets of 20 leg stretches',
        '2 sets of hip rotations',
        'Cool down with breathing exercises',
      ],
    },
    {
      id: 5,
      name: 'Yoga Flow',
      details: [
        '5 mins Child’s Pose',
        '10 mins Downward Dog',
        '3 sets of Warrior Pose (1 min each)',
        'Plank for 1 min',
        '5 mins Savasana (relaxation)',
      ],
    },
    {
      id: 6,
      name: 'HIIT Circuit',
      details: [
        '5 mins warm-up',
        '30 secs jumping jacks',
        '30 secs burpees',
        '30 secs high knees',
        'Repeat 3 times',
        'Cool down for 5 mins',
      ],
    },
    {
      id: 7,
      name: 'Core Blaster',
      details: [
        '10 crunches',
        '20 bicycle crunches',
        '15 leg raises',
        'Plank for 1 min',
        '20 mountain climbers',
      ],
    },
    {
      id: 8,
      name: 'Upper Body Strength',
      details: [
        '10 push-ups',
        '15 tricep dips',
        '10 dumbbell rows (each arm)',
        '15 bicep curls',
        'Plank for 1 min',
      ],
    },
    {
      id: 9,
      name: 'Lower Body Burn',
      details: [
        '15 squats',
        '20 lunges (each leg)',
        '15 glute bridges',
        '20 calf raises',
        'Cool down for 5 mins',
      ],
    },
    {
      id: 10,
      name: 'Morning Energizer',
      details: [
        '5 mins light stretching',
        '10 mins fast-paced walking or running',
        '10 jumping jacks',
        'Plank for 1 min',
        '5 mins cool-down stretches',
      ],
    },
  ];
  
  const generateWorkout = () => {
    const randomIndex = Math.floor(Math.random() * workoutPlans.length);
    setWorkout(workoutPlans[randomIndex]);
  };

  const renderWorkoutDetails = ({ item }) => (
    <View style={styles.workoutItem}>
      <Text style={styles.workoutStep}>• {item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="AI Gym Trainer" />
      
      <View style={styles.content}>
        <Text style={styles.subHeader}>Need a workout plan?</Text>

        {workout ? (
          <View style={styles.workoutContainer}>
            <Text style={styles.workoutTitle}>{workout.name}</Text>
            <FlatList
              data={workout.details}
              renderItem={renderWorkoutDetails}
              keyExtractor={(item, index) => `${workout.id}-${index}`}
            />
          </View>
        ) : (
          <Text style={styles.noWorkoutText}>Let me generate a workout for you!</Text>
        )}

        <TouchableOpacity style={styles.generateButton} onPress={generateWorkout}>
          <Text style={styles.generateButtonText}>Generate Workout</Text>
        </TouchableOpacity>
      </View>

      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6eeff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  subHeader: {
    fontSize: 20,
    color: '#555',
    marginBottom: 15,
  },
  workoutContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  workoutTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#008000',
  },
  workoutItem: {
    marginBottom: 8,
  },
  workoutStep: {
    fontSize: 16,
    color: '#333',
  },
  noWorkoutText: {
    fontSize: 18,
    color: '#888',
    marginBottom: 20,
    textAlign: 'center',
  },
  generateButton: {
    backgroundColor: '#00C853',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
  },
  generateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
