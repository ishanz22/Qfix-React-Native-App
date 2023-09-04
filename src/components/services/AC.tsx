import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Modal,
  TextInput,
  ScrollView,
  Image,
} from "react-native";

import { Formik } from "formik";
import { useStripe } from "@stripe/stripe-react-native";
import { Calendar } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";
import { collection, doc, setDoc, addDoc, getDoc } from "firebase/firestore";
import { FIRESTORE_DB } from "../../../firebaseConfig";
import {
  httpsCallable,
  Functions,
  httpsCallableFromURL,
  getFunctions,
} from "firebase/functions";

import {
  getAuth,
  signInWithEmailAndPassword,
  AuthCredential,
  onAuthStateChanged,
} from "firebase/auth";

const screenWidth = Dimensions.get("window").width;
const buttonWidth = (screenWidth - 40 - 10) / 3; // 40 is the total horizontal padding, and 10 is the total horizontal margin for 3 buttons.

import * as firebase from "firebase/app";
import "firebase/functions";



const AC = () => {
 const { initPaymentSheet, presentPaymentSheet } = useStripe();
   const [paymentSheetInitialized, setPaymentSheetInitialized] =
     useState(false);

  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [totalCost, setTotalCost] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [isServiceSelected, setIsServiceSelected] = useState(false);
  const [isQuantitySet, setIsQuantitySet] = useState(false);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [addressValue, setAddressValue] = useState(""); // Add this line
  const [isAddressAdded, setIsAddressAdded] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const auth = getAuth();

  const [inputValues, setInputValues] = useState({
    address: "",
    flatAptNo: "",
    building: "",
    street: "",
    landmark: "",
  });

  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const scrollViewRef = useRef(null);

  const [showBookingDetails, setShowBookingDetails] = useState(false); // New state

  const handleServiceClick = (service, cost) => {
    setSelectedService(service);
    setTotalCost(cost);
    setSelectedQuantity(0); // Reset the selected quantity
    setIsServiceSelected(true);
    setIsQuantitySet(false); // Reset the quantity set flag
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleModalButtonClick = (quantity) => {
    setSelectedQuantity(quantity); // Update the selected quantity

    // Calculate total cost based on quantity and selected service cost
    const newTotalCost = quantity * totalCost; // Use the total cost
    setTotalCost(newTotalCost);

    setIsQuantitySet(true);

    handleCloseModal();
  };

  const handleSubmitForm = (values) => {
    console.log("Form Data:", values); // Log the form data to the console
    setAddressValue(values.address); // Add this line
    setIsAddressAdded(true);
    setInputValues(values);
  };

  const handleContinue1ButtonClick = () => {
    setShowAdditionalInfo(false); // Hide the additional info form
    setShowCalendar(!showCalendar); // Toggle the calendar
    // Toggle the showCalendar state
  };

  const handleBackButtonClicsk = () => {
    setShowAdditionalInfo(false); // Show the additional info section
    setShowCalendar(true); // Hide the calendar
  };

  const onDayPress = (day) => {
    const currentDate = new Date();
    const selectedDateTime = new Date(day.dateString);

    if (selectedDateTime >= currentDate) {
      setSelectedDate(day.dateString);
      console.log("Selected date:", day.dateString);
    }
  };

  const markedDates = {
    [selectedDate]: {
      selected: true,
      disableTouchEvent: true,
      selectedColor: "#007bff",
      selectedTextColor: "white",
    },
  };

  const handleTimeSlotSelection = (selectedTime) => {
    setSelectedTimeSlot(selectedTime); // Set the selected time slot
    console.log(`Selected time: ${selectedTime}`);
    scrollViewRef.current.scrollToEnd({ animated: true });
  };
  const [showServiceButtons, setShowServiceButtons] = useState(true);
  const handleConfirmButtonClick = () => {
    setShowCalendar(false);
    setShowAdditionalInfo(false);
    setShowServiceButtons(false);
    setShowBookingDetails(true);
  };

  const handleBackButtonClick = () => {
    setShowServiceButtons(false); // Show the AC service buttons again
    setShowBookingDetails(true); // Hide the booking details
    setShowCalendar(false); // Show the calendar
    setShowAdditionalInfo(true);
  };

  const handleShowPreviousSections = () => {
    setShowServiceButtons(true);
    setShowBookingDetails(false);
    setShowCalendar(true);
  };


// function to initializee stripe 
  const initializePaymentSheet = async (value:any) => {
    console.log(value);
    try {
      const generatePaymentIntentFn = httpsCallable(
        getFunctions(),
        "createPaymentIntent"
      );
      console.log("==============================")
      const { data } = await generatePaymentIntentFn({ amount: value * 100 }); // Replace with the actual amount
     
      console.log("==============================")
      if (data.clientSecret) {
        const { error } = await initPaymentSheet({
          paymentIntentClientSecret: data.clientSecret,
          merchantDisplayName: "QFix", // Provide a valid merchant display name
        });
        // console.log(error);
        if (!error) {
          return true; // Indicate successful initialization
        }
      }
    } catch (error) {
      console.log("Error initializing PaymentSheet:", error?.message);
      return false; // Indicate failure to initialize
    }
  };



  const payFunction = async () => {
    if (selectedService &&inputValues && selectedDate && selectedTimeSlot && totalCost) {
      // Get the current user's UID
      const user = auth.currentUser;
  
      if (user) {
        try {
          const userId = user.uid;
          
  
          // Retrieve the user's document from Firestore
          const userDocRef = doc(FIRESTORE_DB, "users", userId);
          const userDocSnapshot = await getDoc(userDocRef);
  
          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            const userName = userData.username;
            const mobileNumber = userData.mobileNumber;
  
            // Define paymentInfo object with user details included
            const paymentInfo = {
              service:selectedService,
              location: inputValues,
              Date: selectedDate,
              Tima: selectedTimeSlot,
              totalCost: totalCost,
              userName: userName,
              mobileNumber: mobileNumber,
              email: user.email,
            };


 if (!paymentSheetInitialized) {
   const initializationSuccessful = await initializePaymentSheet(totalCost);
   console.log(initializationSuccessful);
   if (!initializationSuccessful) {
     console.log("Payment sheet initialization failed");
     return;
   }
 }

 const { error } = await presentPaymentSheet();

 if (error) {
   console.log("Payment failed:", error.message);
 }
 else{

   // Save paymentInfo to a subcollection under the user's UID
   await addDoc(collection(FIRESTORE_DB, "users", userId, "payments"), paymentInfo);
  
   // Display user data and other information in the console
   console.log("Payment data saved to Firestore successfully!");
   console.log(
     "Username:",
     userName,
     "\nMobile Number:",
     mobileNumber,
     "\nUser UID:",
     userId,
     "\nUser Email:",
     user.email,
     "\nUser totalCost:",
     totalCost
   );
         navigation.replace("success");
 }


  
  
            // Place your payment logic here
      
          } else {
            console.log("User document does not exist.");
          }
        } catch (error) {
          console.error("Error saving payment data:", error);
        }
      } else {
        console.log("User not authenticated.");
      }
    } else {
      console.log("Please fill in all required fields.");
    }
  };
  
  
  
  
  

  return (
    <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.containerTracker}>
          <Text
            style={[
              styles.headerTracker,
              (!isServiceSelected || isQuantitySet || showAdditionalInfo) &&
                styles.yellowText,
            ]}
          >
            Service
          </Text>

          <TouchableOpacity
            onPress={handleBackButtonClick}
            disabled={!selectedService || !selectedQuantity}
          >
            <Text
              style={[
                styles.headerTracker,
                (showCalendar || showAdditionalInfo || showBookingDetails) &&
                  styles.yellowText,
              ]}
            >
              Location
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleBackButtonClicsk}
            disabled={
              !selectedService ||
              !selectedQuantity ||
              !selectedDate ||
              !selectedTimeSlot
            }
          >
            <Text
              style={[
                styles.headerTracker,
                (showCalendar || showBookingDetails) && styles.yellowText,
              ]}
            >
              Datetime
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleConfirmButtonClick}
            disabled={
              !selectedService ||
              !selectedQuantity ||
              !selectedDate ||
              !selectedTimeSlot
            }
          >
            <Text
              style={[
                styles.headerTracker,
                showBookingDetails && styles.yellowText,
              ]}
            >
              Payment
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.header}></View>

        {showCalendar ? (
          <View style={styles.calendarBox}>
            <View>
              <Calendar
                onDayPress={onDayPress}
                markedDates={markedDates}
                minDate={new Date().toISOString()} // Convert to ISO string
              />
              <TouchableOpacity onPress={handleBackButtonClick}>
                <Text>Back</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.timeSlotsContainer}>
              <View style={styles.separatorTime} />
              <Text style={styles.headerTextTime}>
                What time should the service start?
              </Text>

              <View style={styles.timeSlotsGrid}>
                <TouchableOpacity
                  style={[
                    styles.timeSlotButton,
                    selectedTimeSlot === "9:00 am"
                      ? styles.selectedButton
                      : null,
                    !selectedDate ? styles.disabledTimeSlotButton : null,
                  ]}
                  onPress={() => handleTimeSlotSelection("9:00 am")}
                  disabled={!selectedDate}
                >
                  <Text style={styles.timeSlotButtonText}>9:00 am</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.timeSlotButton,
                    selectedTimeSlot === "10:00 am"
                      ? styles.selectedButton
                      : null,
                    !selectedDate ? styles.disabledTimeSlotButton : null,
                  ]}
                  onPress={() => handleTimeSlotSelection("10:00 am")}
                  disabled={!selectedDate}
                >
                  <Text style={styles.timeSlotButtonText}>10:00 am</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.timeSlotButton,
                    selectedTimeSlot === "11:00 am"
                      ? styles.selectedButton
                      : null,
                    !selectedDate ? styles.disabledTimeSlotButton : null,
                  ]}
                  onPress={() => handleTimeSlotSelection("11:00 am")}
                  disabled={!selectedDate}
                >
                  <Text style={styles.timeSlotButtonText}>11:00 am</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.timeSlotButton,
                    selectedTimeSlot === "12:00 am"
                      ? styles.selectedButton
                      : null,
                    !selectedDate ? styles.disabledTimeSlotButton : null,
                  ]}
                  onPress={() => handleTimeSlotSelection("12:00 pm")}
                  disabled={!selectedDate}
                >
                  <Text style={styles.timeSlotButtonText}>12:00 pm</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.timeSlotButton,
                    selectedTimeSlot === "1:00 pm"
                      ? styles.selectedButton
                      : null,
                    !selectedDate ? styles.disabledTimeSlotButton : null,
                  ]}
                  onPress={() => handleTimeSlotSelection("1:00 pm")}
                  disabled={!selectedDate}
                >
                  <Text style={styles.timeSlotButtonText}>1:00 pm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.timeSlotButton,
                    selectedTimeSlot === "2:00 pm"
                      ? styles.selectedButton
                      : null,
                    !selectedDate ? styles.disabledTimeSlotButton : null,
                  ]}
                  onPress={() => handleTimeSlotSelection("2:00 pm")}
                  disabled={!selectedDate}
                >
                  <Text style={styles.timeSlotButtonText}>2:00 pm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.timeSlotButton,
                    selectedTimeSlot === "3:00 pm"
                      ? styles.selectedButton
                      : null,
                    !selectedDate ? styles.disabledTimeSlotButton : null,
                  ]}
                  onPress={() => handleTimeSlotSelection("3:00 pm")}
                  disabled={!selectedDate}
                >
                  <Text style={styles.timeSlotButtonText}>3:00 pm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.timeSlotButton,
                    selectedTimeSlot === "4:00 pm"
                      ? styles.selectedButton
                      : null,
                    !selectedDate ? styles.disabledTimeSlotButton : null,
                  ]}
                  onPress={() => handleTimeSlotSelection("4:00 pm")}
                  disabled={!selectedDate}
                >
                  <Text style={styles.timeSlotButtonText}>4:00 pm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.timeSlotButton,
                    selectedTimeSlot === "5:00 pm"
                      ? styles.selectedButton
                      : null,
                    !selectedDate ? styles.disabledTimeSlotButton : null,
                  ]}
                  onPress={() => handleTimeSlotSelection("5:00 pm")}
                  disabled={!selectedDate}
                >
                  <Text style={styles.timeSlotButtonText}>5:00 pm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.timeSlotButton,
                    selectedTimeSlot === "6:00 pm"
                      ? styles.selectedButton
                      : null,
                    !selectedDate ? styles.disabledTimeSlotButton : null,
                  ]}
                  onPress={() => handleTimeSlotSelection("6:00 pm")}
                  disabled={!selectedDate}
                >
                  <Text style={styles.timeSlotButtonText}>6:00 pm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.timeSlotButton,
                    selectedTimeSlot === "7:00 pm"
                      ? styles.selectedButton
                      : null,
                    !selectedDate ? styles.disabledTimeSlotButton : null,
                  ]}
                  onPress={() => handleTimeSlotSelection("7:00 pm")}
                  disabled={!selectedDate}
                >
                  <Text style={styles.timeSlotButtonText}>7:00 pm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.timeSlotButton,
                    selectedTimeSlot === "8:00 pm"
                      ? styles.selectedButton
                      : null,
                    !selectedDate ? styles.disabledTimeSlotButton : null,
                  ]}
                  onPress={() => handleTimeSlotSelection("8:00 pm")}
                  disabled={!selectedDate}
                >
                  <Text style={styles.timeSlotButtonText}>8:00 pm</Text>
                </TouchableOpacity>
                {/* ... and so on for the rest of the time slots */}
              </View>
            </View>
          </View>
        ) : !showAdditionalInfo ? (
          <View>
            {showServiceButtons && (
              <View style={styles.buttonContainer}>
                <Text style={styles.headerText}>
                  AC SERVICES TYPE & QUANTITY
                </Text>

                <View style={styles.buttonRow}>
                  <TouchableOpacity
                    onPress={() => handleServiceClick("AC Repair", 250)}
                    style={[
                      styles.button,
                      { width: buttonWidth },
                      isQuantitySet && selectedService === "AC Repair"
                        ? styles.selectedButton
                        : null,
                    ]}
                  >
                    <Text style={styles.buttonText}>AC{"\n"}Repair</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => handleServiceClick("AC Soft Cleaning", 250)}
                    style={[
                      styles.button,
                      { width: buttonWidth },
                      isQuantitySet && selectedService === "AC Soft Cleaning"
                        ? styles.selectedButton
                        : null,
                    ]}
                  >
                    <Text style={styles.buttonText}>AC Soft{"\n"}Cleaning</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleServiceClick("AC Duct Cleaning", 250)}
                    style={[
                      styles.button,
                      { width: buttonWidth },
                      isQuantitySet && selectedService === "AC Duct Cleaning"
                        ? styles.selectedButton
                        : null,
                    ]}
                  >
                    <Text style={styles.buttonText}>AC Duct{"\n"}Cleaning</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                  <TouchableOpacity
                    onPress={() => handleServiceClick("AC Deep Cleaning", 250)}
                    style={[
                      styles.button,
                      { width: buttonWidth },
                      isQuantitySet && selectedService === "AC Deep Cleaning"
                        ? styles.selectedButton
                        : null,
                    ]}
                  >
                    <Text style={styles.buttonText}>AC Deep{"\n"}Cleaning</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleServiceClick("AC Maintenance", 250)}
                    style={[
                      styles.button,
                      { width: buttonWidth },
                      isQuantitySet && selectedService === "AC Maintenance"
                        ? styles.selectedButton
                        : null,
                    ]}
                  >
                    <Text style={styles.buttonText}>AC{"\n"}Maintenance</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      handleServiceClick("Smart Installation", 250)
                    }
                    style={[
                      styles.button,
                      { width: buttonWidth },
                      isQuantitySet && selectedService === "Smart Installation"
                        ? styles.selectedButton
                        : null,
                    ]}
                  >
                    <Text style={styles.buttonText}>
                      Smart{"\n"}Installation
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonRow}>
                  <TouchableOpacity
                    onPress={() =>
                      handleServiceClick("Standard Installation", 250)
                    }
                    style={[
                      styles.button,
                      { width: buttonWidth },
                      isQuantitySet &&
                      selectedService === "Standard Installation"
                        ? styles.selectedButton
                        : null,
                    ]}
                  >
                    <Text style={styles.buttonText}>
                      Standard{"\n"}Installation
                    </Text>
                  </TouchableOpacity>
                </View>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={handleCloseModal}
                >
                  <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                      <Text
                        style={{
                          fontSize: 20,
                          textAlign: "center",
                          paddingBottom: 10,
                        }}
                      >
                        Select Your Quantity
                      </Text>

                      <Text
                        style={{
                          fontSize: 16,
                          textAlign: "center",
                          paddingBottom: 10,
                          color: "#DAA520",
                        }}
                      >
                        ( 1 {selectedService} : 250AED )
                      </Text>

                      {/* <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
              Selected Service: 
            </Text> */}
                      <View style={styles.gridContainer}>
                        {/* First Row */}
                        <TouchableOpacity
                          onPress={() => handleModalButtonClick(1)}
                          style={styles.modalButton}
                        >
                          <Text style={styles.modalButtonText}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => handleModalButtonClick(2)}
                          style={styles.modalButton}
                        >
                          <Text style={styles.modalButtonText}>2</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={() => handleModalButtonClick(3)}
                          style={styles.modalButton}
                        >
                          <Text style={styles.modalButtonText}>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => handleModalButtonClick(4)}
                          style={styles.modalButton}
                        >
                          <Text style={styles.modalButtonText}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => handleModalButtonClick(5)}
                          style={styles.modalButton}
                        >
                          <Text style={styles.modalButtonText}>5</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={() => handleModalButtonClick(6)}
                          style={styles.modalButton}
                        >
                          <Text style={styles.modalButtonText}>6</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => handleModalButtonClick(7)}
                          style={styles.modalButton}
                        >
                          <Text style={styles.modalButtonText}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => handleModalButtonClick(8)}
                          style={styles.modalButton}
                        >
                          <Text style={styles.modalButtonText}>8</Text>
                        </TouchableOpacity>
                        {/* Add more rows as needed */}
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
            )}

            {/* Back Button */}
            {/* {showBookingDetails && (
              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={styles.backButton}
                  onPress={handleBackButtonClicsk}
                >
                  <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
              </View>
            )} */}
          </View>
        ) : (
          <Formik
            initialValues={inputValues}
            // validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
              setShowAdditionalInfo(false);
              setSubmitAttempted(false);
            }}
          >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
              <View style={{ width: "100%" }}>
                <View style={styles.additionalInfoBox}>
                  <Text style={styles.inputLabel}>Address *</Text>
                  <TextInput
                    style={[styles.input]}
                    placeholder="123 Sheikh Zayed Road, Dubai Marina"
                    onChangeText={handleChange("address")}
                    value={values.address}
                  />
                  {submitAttempted && !values.address && (
                    <Text style={styles.errorText}>Address is required</Text>
                  )}
                  <View style={{ paddingTop: 20 }}></View>
                  <View style={styles.inlineInputGroup}>
                    <View style={styles.inputGroup}>
                      <Text style={styles.inputLabel}>Flat/Apt No *</Text>
                      <TextInput
                        style={[styles.input]}
                        onChangeText={handleChange("flatAptNo")}
                        value={values.flatAptNo}
                        placeholder="301"
                      />
                      {submitAttempted && !values.flatAptNo && (
                        <Text style={styles.errorText}>
                          Flat/Apt No is required
                        </Text>
                      )}
                    </View>
                    <View style={[styles.inputGroup, styles.buildingInput]}>
                      <Text style={styles.inputLabel}>Building *</Text>
                      <TextInput
                        style={[styles.input]}
                        placeholder="SBK"
                        onChangeText={handleChange("building")}
                        value={values.building}
                      />
                      {submitAttempted && !values.building && (
                        <Text style={styles.errorText}>
                          Building is required
                        </Text>
                      )}
                    </View>
                  </View>

                  <View style={styles.inlineInputGroup}>
                    <View style={styles.inputGroup}>
                      <Text style={styles.inputLabel}>Street</Text>
                      <TextInput
                        style={[styles.input]}
                        // onChangeText={handleChange("flatAptNo")}
                        placeholder=" Sheikh Zayed"
                        onChangeText={handleChange("street")}
                        value={values.street}
                      />
                    </View>
                    <View style={[styles.inputGroup, styles.buildingInput]}>
                      <Text style={styles.inputLabel}>Landmark</Text>
                      <TextInput
                        style={[styles.input]}
                        placeholder="Dubai Mall"
                        onChangeText={handleChange("landmark")}
                        value={values.landmark}
                      />
                    </View>
                  </View>
                  {/* ...Other form fields... */}

                  {/* <TouchableOpacity
                    // style={styles.backToServiceButton}
                    onPress={() => setShowAdditionalInfo(false)}
                  >
                    <Text style={styles.backToServiceButtonTexti}>
                      Back to Service
                    </Text>
                  </TouchableOpacity> */}

                  <TouchableOpacity
                    style={styles.backToServiceButton}
                    onPress={() => {
                      setSubmitAttempted(true);
                      // setShowAdditionalInfo(false);
                      // handleSubmit()
                      // handleSubmitForm(values);

                      if (
                        values.address &&
                        values.flatAptNo &&
                        values.building
                      ) {
                        handleSubmitForm(values); // Call the custom submit function
                        // setShowAdditionalInfo(false); // You can choose to keep this line if needed
                      } else {
                        console.log("Required fields are not filled ❌"); // Log a message for empty required fields
                      }
                      scrollViewRef.current.scrollToEnd({ animated: true });
                    }}
                  >
                    <Text style={styles.backToServiceButtonText}>
                      Add Address
                    </Text>
                  </TouchableOpacity>
                </View>
                {/* ... */}
              </View>
            )}
          </Formik>
        )}

        {/* Booking Details Box */}

        <View style={styles.bookingDetailsBox}>
          <Text style={styles.bookingDetailsHeading}>BOOKING DETAILS</Text>

          {selectedQuantity > 0 ? (
            <View>
              <Text style={styles.bookingDetailsText}>AC</Text>
              <Text style={styles.bookingDetailsTextItem}>
                {selectedService} (Quantity: {selectedQuantity})
              </Text>

              {addressValue && (
                <View
                  style={{
                    paddingTop: 5,
                    flexDirection: "row",
                    alignItems: "flex-start",
                    width: "80%",
                  }}
                >
                  <Text
                    style={{
                      ...styles.bookingDetailsTextItem,
                      textAlign: "left",
                      width: "30%",
                    }}
                  >
                    Address:{" "}
                  </Text>
                  <Text
                    style={{
                      ...styles.bookingDetailsTextItem,
                      textAlign: "left",
                      fontWeight: "bold",
                    }}
                  >
                    {addressValue}
                  </Text>
                </View>
              )}

              {selectedDate && (
                <View
                  style={{
                    paddingTop: 5,
                    flexDirection: "row",
                    alignItems: "flex-start",
                    width: "80%",
                  }}
                >
                  <Text
                    style={{
                      ...styles.bookingDetailsTextItem,
                      textAlign: "left",
                      width: "30%",
                    }}
                  >
                    Date:{" "}
                  </Text>

                  <Text
                    style={{
                      ...styles.bookingDetailsTextItem,
                      textAlign: "left",
                      fontWeight: "bold",
                    }}
                  >
                    {selectedDate}
                  </Text>
                </View>
              )}
              {selectedTimeSlot && (
                <View
                  style={{
                    paddingTop: 5,
                    flexDirection: "row",
                    alignItems: "flex-start",
                    width: "80%",
                  }}
                >
                  <Text
                    style={{
                      ...styles.bookingDetailsTextItem,
                      textAlign: "left",
                      width: "30%",
                    }}
                  >
                    Time:{" "}
                  </Text>

                  <Text
                    style={{
                      ...styles.bookingDetailsTextItem,
                      textAlign: "left",
                      fontWeight: "bold",
                    }}
                  >
                    {selectedTimeSlot}
                  </Text>
                </View>
              )}

              <View style={styles.separator}></View>
            </View>
          ) : null}

          <View style={styles.totalBox}>
            <Text style={styles.totalText}>
              Total: AED {selectedQuantity > 0 ? totalCost : 0}
            </Text>
          </View>
          {showAdditionalInfo ? (
            <TouchableOpacity
              style={[
                styles.continueButton,
                !addressValue && styles.disabledButton,
              ]}
              disabled={!addressValue}
              onPress={() => {
                handleContinue1ButtonClick();
                scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
              }}
            >
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
          ) : showCalendar ? (
            <TouchableOpacity
              style={[
                styles.continueButton,
                (!selectedTimeSlot || !selectedDate) && styles.disabledButton,
              ]}
              onPress={handleConfirmButtonClick}
              disabled={!selectedTimeSlot || !selectedDate}
            >
              <Text style={styles.continueButtonText}>Confirm</Text>
            </TouchableOpacity>
          ) : showBookingDetails ? (
            <TouchableOpacity
              style={[
                styles.continueButton,
                // Add any additional conditions for disabling the button if needed
              ]}
              onPress={payFunction}
            >
              <Text style={styles.continueButtonText}>Pay</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[
                styles.continueButton,
                selectedQuantity === 0 && styles.disabledButton,
              ]}
              disabled={selectedQuantity === 0}
              onPress={() => setShowAdditionalInfo(true)}
            >
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.bottom} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3D4147",
  },
  header: {
    paddingTop: 10,
    paddingLeft: 20,
    backgroundColor: "#3D4147",
  },
  headerText: {
    fontSize: 19,
    // fontWeight: "bold",
    color: "white",
    textAlign: "center",
    paddingBottom: 10,
    letterSpacing: 1,
    width: "100%",
  },
  buttonContainer: {
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  buttonRow: {
    flexDirection: "row",
    paddingBottom: 10,
  },
  button: {
    backgroundColor: "#007bff",
    borderRadius: 8,
    paddingVertical: 9,
    marginHorizontal: 5,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 14,
  },
  bookingDetailsBox: {
    backgroundColor: "white", // Yellow color
    alignItems: "center",
    padding: 20,
    marginTop: 20,
    borderRadius: 8,
  },
  bookingDetailsHeading: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    color: "#3D4147",
  },
  bookingDetailsText: {
    fontSize: 18,
    color: "#FBB92B",
    textAlign: "center",
    paddingTop: 10,
  },
  bookingDetailsTextItem: {
    fontSize: 15,
    color: "#b28c1a",
    textAlign: "center",
    paddingTop: 5,
  },
  totalBox: {
    backgroundColor: "rgba(251, 185, 43, 0.2)",
    padding: 10,
    // borderRadius: 8,
    marginVertical: 10,
    width: "100%",
  },
  totalText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#3D4147",
  },
  continueButton: {
    backgroundColor: "#FBB92B",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 5,
    width: "100%",
  },
  continueButtonText: {
    color: "#3D4147",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  separator: {
    height: 2,
    width: "100%",
    backgroundColor: "rgba(251, 185, 43, 0.2)",
    marginVertical: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
  },
  modalButton: {
    backgroundColor: "#3D4147",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    width: "23.5%", // 2% gap for the wrap
    paddingVertical: 10,
  },
  modalButtonText: {
    color: "white",
    fontSize: 13,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#FBB92B",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  closeButtonText: {
    color: "#3D4147",
    fontSize: 16,
    textAlign: "center",
  },
  selectedButton: {
    backgroundColor: "#FBB92B", // Change this to your desired color
  },
  disabledButton: {
    color: "#3D4147", // Darker gray color for disabled button
    opacity: 0.6, // Adjust the opacity for a disabled look
  },
  additionalInfoBox: {
    backgroundColor: "white",
    padding: 20,
    marginTop: 20,
    borderRadius: 8,
  },
  input: {
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    width: "100%",
  },
  inputAddress: {
    width: "100%",

    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  backToServiceButton: {
    backgroundColor: "#3D4147",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "50%",
    alignSelf: "center",
  },
  backToServiceButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  backToServiceButtonTexti: {
    color: "#FBB92B",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    paddingBottom: 10,
  },
  inlineInputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  inputGroup: {
    marginBottom: 10,
    width: "40%",
    paddingTop: 15,
  },
  inputGroupAddress: {
    // marginBottom: 10,
    width: "100%",
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "bold",
    // marginBottom: 5,
    color: "#3D4147",
  },
  errorText: {
    color: "red",
    fontSize: 11,
  },
  errorInput: {
    borderColor: "red",
    // borderWidth: 1,
  },
  calendarBox: {
    backgroundColor: "#FFFFFF", // Calendar box background color
    borderRadius: 8,
    padding: 15,
    marginTop: 10,
    // Other calendar box styles...
  },
  headerTextTime: {
    fontSize: 17,
    // fontWeight: 'bold',
    textAlign: "center",
    marginBottom: 10,
  },
  separatorTime: {
    height: 1,
    backgroundColor: "#E0E0E0", // Light gray color
    marginBottom: 10,
  },
  timeSlotsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  timeSlotButton: {
    width: "30%", // Adjust width to fit three buttons in a row
    paddingVertical: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0", // Light gray color
    backgroundColor: "#007bff",
    borderRadius: 10,
    marginHorizontal: "1.5%", // Add margin horizontally between buttons
    marginBottom: 10, // Add margin at the bottom of the button
  },

  timeSlotButtonText: {
    fontSize: 14,
    color: "white",
  },
  disabledTimeSlotButton: {
    backgroundColor: "#b3d7ff", // Different background color for disabled buttons
    opacity: 0.7,
  },
  bottom: {
    height: 20,
  },
  successBox: {
    marginTop: 20,
    alignItems: "center",
  },
  successImage: {
    width: 80,
    height: 80,
  },
  successText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: "white",
  },
  thanksMessage: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center",
    color: "white",
  },
  goToHomeButton: {
    backgroundColor: "#007bff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  goToHomeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  containerTracker: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,

    alignItems: "center",
  },
  headerTracker: {
    fontSize: 16,
    color: "white",
  },
  yellowText: {
    color: "yellow",
  },
});

export default AC;
