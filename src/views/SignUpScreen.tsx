import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useFormik } from "formik"; // Import useFormik
import * as Yup from "yup"; // Import Yup for validation

import { FIRESTORE_DB } from "../../firebaseConfig";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import {  useToast } from 'react-native-toast-notifications'; // Import ToastProvider and useToast

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email:Yup.string().email("Invalid email").required("Email is required"),
  mobileNumber: Yup.string().required("Mobile number is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const SignUpScreen = () => {
  const navigation = useNavigation();
  const auth = getAuth();
  const [showPassword, setShowPassword] = React.useState(false);
  const  toast  = useToast(); 
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      mobileNumber: "",
      password: "",
    },
    validationSchema: validationSchema, // Set the validation schema
    onSubmit: async (values) => {
      try {
        // Create user with email and password using Firebase authentication
        await createUserWithEmailAndPassword(auth, values.email, values.password);

        // Get the current user
        const user = auth.currentUser;

        // Save additional user data to Firebase Firestore
        if (user) {
          const userData = {
            username: values.username,
            email: values.email,
            mobileNumber: values.mobileNumber,
          };

          // Save user data to Firestore using the previously defined FIRESTORE_DB
          await setDoc(doc(FIRESTORE_DB, "users", user.uid), userData);
          console.log("User registered and data saved to Firebase");
          toast.show("You are Successfully registered", {
            type: "success",
            placement: "bottom",
            duration: 3000,
          });
          setTimeout(() => {
            navigation.replace("login");
          }, 2000); 
        }
      } catch (error) {
        // console.error("Error registering user:", error);
        if (error.code === 'auth/email-already-in-use') {
          toast.show("Email is already in use", {
            type: "error",
            placement: "bottom",
            duration: 3000,
            animationType: "slide-in",
            style: {
              backgroundColor: '#CE0000'
            }
          });
        } else {
          toast.show("User Registration Error", {
            type: "error",
            placement: "bottom",
            duration: 3000,
            animationType: "slide-in",
            style: {
              backgroundColor: '#CE0000'
            }
          });
        }
      }
    },
  });

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

        {/* Username Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="grey"
            onChangeText={formik.handleChange("username")}
            onBlur={formik.handleBlur("username")}
            value={formik.values.username}
          />
          <Icon name="person-outline" size={20} color="gray" style={styles.icon} />
        </View>
        <View style={{alignSelf:'flex-start'}}>
        {formik.touched.username && formik.errors.username ? (
          <Text style={styles.errorText}>{formik.errors.username}</Text>
        ) : null}
            </View>
            <Text>{' '}</Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="grey"
            onChangeText={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            value={formik.values.email}
          />
          <Icon name="email" size={20} color="gray" style={styles.icon} />
        </View>
        <View style={{alignSelf:'flex-start'}}>
        {formik.touched.email && formik.errors.email ? (
          <Text style={styles.errorText}>{formik.errors.email}</Text>
        ) : null}
        </View>
            <Text>{' '}</Text>

        {/* Mobile Number Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            placeholderTextColor="grey"
            onChangeText={formik.handleChange("mobileNumber")}
            onBlur={formik.handleBlur("mobileNumber")}
            value={formik.values.mobileNumber}
          />
          <Icon name="phone" size={20} color="gray" style={styles.icon} />
        </View>
        <View style={{alignSelf:'flex-start'}}>
        {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
          <Text style={styles.errorText}>{formik.errors.mobileNumber}</Text>
        ) : null}
            </View>
            <Text>{' '}</Text>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="grey"
            secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword
            onChangeText={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
            value={formik.values.password}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.icon}
          >
            <MaterialCommunityIcons
              name={showPassword ? "eye-off" : "eye"}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        </View>
        <View style={{alignSelf:'flex-start'}}>
        {formik.touched.password && formik.errors.password ? (
          <Text style={styles.errorText}>{formik.errors.password}</Text>
        ) : null}
             </View>
            <Text>{' '}</Text>

        {/* Register Button */}
        <TouchableOpacity style={styles.loginButton} onPress={formik.handleSubmit}>
          <Text style={styles.loginButtonText}>Register</Text>
        </TouchableOpacity>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.replace("login")}>
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
  errorText: {
    color: "red",
    fontSize: 12,
  },
});

export default SignUpScreen;
