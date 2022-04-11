import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CollapsibleCard from './CollapsibleCard';
import SampleEasing from './SampleEasing';

function App() {
  return (
    <View style={styles.app}>
      <CollapsibleCard
        title="Collapsible Card Default"
        style={{ marginBottom: 16 }}>
        <View style={{ padding: 8 }}>
          <Text style={styles.paragraph}>Content</Text>
          <Text style={styles.paragraph}>Hello World</Text>
        </View>
      </CollapsibleCard>

      <CollapsibleCard title="Collapsible Card Bezier" useBezier>
        <View style={{ padding: 8 }}>
          <Text style={styles.paragraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </View>
      </CollapsibleCard>

      <SampleEasing />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ddd',
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 19,
  },
});

export default App;
