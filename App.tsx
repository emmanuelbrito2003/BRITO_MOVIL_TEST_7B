import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useVehiculeForm } from './state/useVehiculeForm';
import { VehicleBasicInfoScreen } from './screens/VehicleBasicInfoScreen';
import { VehicleDetailsScreen } from './screens/VehicleDetailsScreen';
import { SummaryScreen } from './screens/SummaryScreen';
import { RegisteredVehiclesScreen } from './screens/RegisteredVehiclesScreen';

export default function App() {
  const {
    vehicule,
    step,
    registeredVehicules,
    updateField,
    nextStep,
    prevStep,
    registerVehicule,
    restart
  } = useVehiculeForm();

  // Renderizar la pantalla según el paso actual
  const renderScreen = () => {
    switch (step) {
      case 0:
        return (
          <VehicleBasicInfoScreen
            vehicule={vehicule}
            updateField={updateField}
            nextStep={nextStep}
          />
        );
      case 1:
        return (
          <VehicleDetailsScreen
            vehicule={vehicule}
            updateField={updateField}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 2:
        return (
          <SummaryScreen
            vehicule={vehicule}
            prevStep={prevStep}
            registerVehicule={registerVehicule}
          />
        );
      case 3:
        return (
          <RegisteredVehiclesScreen
            registeredVehicules={registeredVehicules}
            restart={restart}
          />
        );
      default:
        return (
          <VehicleBasicInfoScreen
            vehicule={vehicule}
            updateField={updateField}
            nextStep={nextStep}
          />
        );
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    paddingTop: 40,
  },
});
