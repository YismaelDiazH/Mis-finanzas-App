import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/themed';
import { initializeApp } from "firebase/app";
import Login from './modules/auth/adapters/components/Login';
import Navigation from './config/navigation/Navigation';
export default function App() {
  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDessoijjGF7R9oqGo08Rq8IcYti4zN_gc",
  authDomain: "mis-finanzas-593df.firebaseapp.com",
  projectId: "mis-finanzas-593df",
  storageBucket: "mis-finanzas-593df.appspot.com",
  messagingSenderId: "501186145955",
  appId: "1:501186145955:web:8a252785a41b971cbd1916"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  return (
   <Navigation></Navigation>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
