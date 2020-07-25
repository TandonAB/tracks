import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const TrackListScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>TrackList Screen</Text>
      <Button
        title="Go to Track Details"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </View>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    margin: 24,
  },
});
