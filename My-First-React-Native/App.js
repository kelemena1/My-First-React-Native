import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView } from 'react-native';
import Button from './assets/Components/Button';

export default function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [name, setName] = useState('');
  const [namesList, setNamesList] = useState([]); 
  const [counter, setCounter] = useState(0);

  const handleSubmit = () => {
    if (name.trim()) { 
      setNamesList([...namesList, name]);
      setName(''); 
      setIsFormVisible(false); 
    }
  };

  return (
    <View style={styles.container}>
      <Text>Balázs kussoljon?</Text>
      <Button buttonStyle={{backgroundColor: 'green'}} title="Igen" onPress={() => {setIsFormVisible(false); {setCounter(counter + 1)}; alert('Balázs KUSSOLJ!')}} />
      <Button buttonStyle={{backgroundColor: 'red'}} title="Nem" onPress={() => setIsFormVisible(true)} />
      <Text>Balázs elkussoltatva: {counter}</Text>
      {isFormVisible && (
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Írd be a neved"
          />
          <Pressable style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Küldés</Text>
          </Pressable>
     
        </View>
      )}
      <ScrollView style={styles.namesList}>
        {namesList.length > 0 && (
          <Text>A következők szerint Balázsnak nem kellene kussolnia:</Text>
        )}
        {namesList.map((submittedName, index) => (
          <Text style={{fontSize : 50}} key={index}>{submittedName}</Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: 200,
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  namesList: {
    marginTop: 20,
  },
});
