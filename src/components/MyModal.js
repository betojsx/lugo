import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {colors} from '../shared/styles';

const MyModal = ({modalVisible, setModalVisible}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.modal}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>
            <Text style={styles.bold}>LUGO</Text> não é real
          </Text>
          <Text style={styles.text}>
            We are lucky to live in a glorious age that gives us everything we
            could ask for as a human race.
          </Text>
          <Text style={styles.text}>
            What more could you need when you have meat covered in cheese
            nestled between bread as a complete meal. From smashed patties at
            Shake Shack to Glamburgers at Honky Tonk, there’s a little something
            for everyone. Some burgers are humble, and some are ostentatious,
            and you just have to try them all to figure out what you want.
          </Text>
          <Text style={styles.text}>
            Estarei a disposição se quiser conversar:
            <Text style={styles.bold}>contato@betoo.com.br</Text>
          </Text>
          <TouchableHighlight
            style={styles.modalClose}
            onPress={() => {
              setModalVisible(false);
            }}>
            <Icon name="times" color={colors.primary} size={18}></Icon>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

export default MyModal;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    flex: 1,
  },
  modalContent: {
    padding: 40,
  },
  modalClose: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 14,
  },
  text: {
    lineHeight: 20,
    marginBottom: 18,
  },
  bold: {
    fontFamily: 'Roboto-Bold',
  },
});
