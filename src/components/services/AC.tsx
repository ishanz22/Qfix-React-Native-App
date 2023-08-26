import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Modal,
  TextInput
} from "react-native";

import { Formik } from "formik";


const screenWidth = Dimensions.get("window").width;
const buttonWidth = (screenWidth - 40 - 10) / 3; // 40 is the total horizontal padding, and 10 is the total horizontal margin for 3 buttons.


const AC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [totalCost, setTotalCost] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [isServiceSelected, setIsServiceSelected] = useState(false);
  const [isQuantitySet, setIsQuantitySet] = useState(false);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);


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

  };
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
       
      </View>
      {!showAdditionalInfo ? (
      <View style={styles.buttonContainer}>
         <Text style={styles.headerText}>AC SERVICES TYPE & QUANTITY</Text>
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
            onPress={() => handleServiceClick("Smart Installation", 250)}
            style={[
              styles.button,
              { width: buttonWidth },
              isQuantitySet && selectedService === "Smart Installation"
                ? styles.selectedButton
                : null,
            ]}
          >
            <Text style={styles.buttonText}>Smart{"\n"}Installation</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            onPress={() => handleServiceClick("Standard Installation", 250)}
            style={[
              styles.button,
              { width: buttonWidth },
              isQuantitySet && selectedService === "Standard Installation"
                ? styles.selectedButton
                : null,
            ]}
          >
            <Text style={styles.buttonText}>Standard{"\n"}Installation</Text>
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
                style={{ fontSize: 20, textAlign: "center", paddingBottom: 10 }}
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
                style={styles.modalButton}>
                  <Text style={styles.modalButtonText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={() => handleModalButtonClick(4)}
                style={styles.modalButton}>
                  <Text style={styles.modalButtonText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                 onPress={() => handleModalButtonClick(5)}
                style={styles.modalButton}>
                  <Text style={styles.modalButtonText}>5</Text>
                </TouchableOpacity>

                <TouchableOpacity
                   onPress={() => handleModalButtonClick(6)}
                style={styles.modalButton}>
                  <Text style={styles.modalButtonText}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                   onPress={() => handleModalButtonClick(7)}
                style={styles.modalButton}>
                  <Text style={styles.modalButtonText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                 onPress={() => handleModalButtonClick(8)}
                style={styles.modalButton}>
                  <Text style={styles.modalButtonText}>8</Text>
                </TouchableOpacity>
                {/* Add more rows as needed */}
              </View>
            </View>
          </View>
        </Modal>
      </View>
       ) : (
        
        <Formik
  initialValues={{
    address: "",
    flatAptNo: "",
    building: "",
    street:"",
    landmark:""

  }}
  // validationSchema={validationSchema}
  onSubmit={(values) => {
    console.log(values);
    setShowAdditionalInfo(false);
    setSubmitAttempted(false);
    // resetForm(); 
  }}
>
  {({ handleChange, handleSubmit, values, errors, touched }) => (
    <View style={{ width: "100%" }}>
      <View style={styles.additionalInfoBox}>
        <Text style={styles.inputLabel}>Address *</Text>
        <TextInput
          style={[
            styles.input,
         
          ]}
          onChangeText={handleChange("address")}
          value={values.address}
        />
        {submitAttempted && !values.address && (
          <Text style={styles.errorText}>Address is required</Text>
        )}
<View style={{paddingTop:20}}></View>
        <View style={styles.inlineInputGroup}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Flat/Apt No *</Text>
            <TextInput
              style={[
                styles.input,
              
              ]}
              onChangeText={handleChange("flatAptNo")}
              value={values.flatAptNo}
            />
            {submitAttempted && !values.flatAptNo && (
              <Text style={styles.errorText}>Flat/Apt No is required</Text>
            )}
          </View>
          <View style={[styles.inputGroup, styles.buildingInput]}>
            <Text style={styles.inputLabel}>Building *</Text>
            <TextInput
              style={[
                styles.input,
             
              ]}
              onChangeText={handleChange("building")}
              value={values.building}
            />
            {submitAttempted && !values.building && (
              <Text style={styles.errorText}>Building is required</Text>
            )}
          </View>
        </View>

        <View style={styles.inlineInputGroup}>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Street</Text>
                  <TextInput
                    style={[
                      styles.input,
                   
                    ]}
                    // onChangeText={handleChange("flatAptNo")}
                    onChangeText={handleChange("street")}
                    value={values.street}
                  />
               
                </View>
                <View style={[styles.inputGroup, styles.buildingInput]}>
                  <Text style={styles.inputLabel}>Landmark</Text>
                  <TextInput
                    style={[
                      styles.input,
                 
                    ]}
                    onChangeText={handleChange("landmark")}
                    value={values.landmark}
                  />
                
                </View>

                
              </View>
        {/* ...Other form fields... */}

        <TouchableOpacity
          // style={styles.backToServiceButton}
          onPress={() => setShowAdditionalInfo(false)}
        >
          <Text style={styles.backToServiceButtonTexti}>
            Back to Service
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backToServiceButton}
          onPress={() => {
            setSubmitAttempted(true);
            // setShowAdditionalInfo(false);
            // handleSubmit()
            // handleSubmitForm(values); 

            if (values.address && values.flatAptNo && values.building) {
              handleSubmitForm(values); // Call the custom submit function
              // setShowAdditionalInfo(false); // You can choose to keep this line if needed
            } else {
              console.log("Required fields are not filled ❌"); // Log a message for empty required fields
            }
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
            <View style={styles.separator}></View>
          </View>
        ) : null}

        <View style={styles.totalBox}>
          <Text style={styles.totalText}>
            Total: AED {selectedQuantity > 0 ? totalCost : 0}
          </Text>
        </View>
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
      </View>


   
    </View>
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
    paddingBottom:10,
    letterSpacing: 1,
    width:"100%"
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
    backgroundColor: "#007AFF",
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
    paddingTop:10
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

    borderBottomWidth: 1, 
    borderColor: "#ccc", 
    width:"100%"
  },
  inputAddress:{
width:'100%',

borderBottomWidth: 1, 
borderColor: "#ccc", 
  },
  backToServiceButton: {
    backgroundColor: "#FBB92B",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  
  },
  backToServiceButtonText: {
    color: "#3D4147",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  backToServiceButtonTexti:{
    color: "#FBB92B",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    paddingBottom:10
  },
  inlineInputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    width:"100%",
    marginBottom: 10,
  
  },
  inputGroup: {
    marginBottom: 10,
    width:"40%",
    // paddingTop:20
  },
  inputGroupAddress: {
    // marginBottom: 10,
    width:"100%",

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
});

export default AC;
