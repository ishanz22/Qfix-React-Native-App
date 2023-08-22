import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Platform,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FIRESTORE_DB } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";


const SignUpScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);

 const handleLogin = async () => {
  try {
    // Create user with email and password using Firebase authentication
    await createUserWithEmailAndPassword(auth, email, password);

    // Get the current user
    const user = auth.currentUser;

    // Save additional user data to Firebase Firestore
    if (user) {
      const userData = {
        username,
        email,
        mobileNumber,
      };

      // Save user data to Firestore using the previously defined FIRESTORE_DB
      await setDoc(doc(FIRESTORE_DB, "users", user.uid), userData);
      console.log("User registered and data saved to Firebase");
    }
  } catch (error) {
    console.error("Error registering user:", error);
  }
};


  const handleForgotPassword = () => {
    // Add your logic for handling forgot password here
    console.log("Forgot Password clicked");
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const renderContent = () => {
    return (
      <>
        <View style={styles.titleContainer}>
          <Image
            source={require("../assets/qlogo.png")}
            style={styles.loginIcon}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="grey"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <Icon name="person-outline" size={20} color="gray" style={styles.icon} />
        </View>
      
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="grey"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <Icon name="email" size={20} color="gray" style={styles.icon} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            placeholderTextColor="grey"
            onChangeText={(text) => setMobileNumber(text)}
            value={mobileNumber}
          />
          <Icon name="phone" size={20} color="gray" style={styles.icon} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="grey"
            secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)} // Toggle the password visibility
            style={styles.icon}
          >
            <MaterialCommunityIcons
              name={showPassword ? "eye-off" : "eye"}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Register</Text>
        </TouchableOpacity>
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text style={styles.registerLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return Platform.OS === "ios" ? (

    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {renderContent()}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>

  ) : (
    <View style={styles.container}>{renderContent()}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#3D4147",
    height: "100%",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 45,
    color: "white", // Set the text color to white
    fontSize: 16,  
  },
  icon: {
    marginRight: 5,
  },
  forgotPass: {
    width: "100%",
    marginBottom: 10,
  },
  forgotPassword: {
    textAlign: "right",
    color: "grey",
    fontWeight: "bold",
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
  },
  registerText: {
    color: "grey",
    marginRight: 5,
  },
  registerLink: {
    color: "#FFB923", // Change this color to your preference
    fontWeight: "bold",
  },
  loginButton: {
    backgroundColor: "#FFB923", // Change this color to your preference
    borderRadius: 15,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  loginButtonText: {
    color: "#3D4147",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  titleContainer: {
    alignItems: "center",
    paddingBottom: 60,
  },
  loginIcon: {
    width: 180,
    height: 88,
  },
});

export default SignUpScreen;
