import { View, Text, StyleSheet } from "react-native"
import { FormInput } from "../components/FormInput"
import { FormButton } from "../components/FormButton"
import { vehicule } from "../models/vehicule"

type VehicleBasicInfoScreenProps = {
    vehicule: vehicule;
    updateField: (field: keyof vehicule, value: string | number) => void;
    nextStep: () => void;
}

// Pantalla Paso 1: Datos básicos del vehículo (Marca y Modelo)
export const VehicleBasicInfoScreen = ({ vehicule, updateField, nextStep }: VehicleBasicInfoScreenProps) => {

    const isFormValid = vehicule.marca.trim() !== '' && vehicule.modelo.trim() !== ''

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro de vehículos</Text>
            <Text style={styles.step}>Paso 1 de 3</Text>

            <View style={styles.form}>
                <FormInput
                    label="Marca"
                    value={vehicule.marca}
                    onChangeText={(text) => updateField('marca', text)}
                    placeholder="Ej: Toyota"
                />

                <FormInput
                    label="Modelo"
                    value={vehicule.modelo}
                    onChangeText={(text) => updateField('modelo', text)}
                    placeholder="Ej: Corolla"
                />
            </View>

            <View style={styles.buttonContainer}>
                <FormButton
                    label="Continuar"
                    onPress={nextStep}
                    disabled={!isFormValid}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fafb',
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 4,
        textAlign: 'left',
    },
    step: {
        fontSize: 14,
        color: '#6b7280',
        marginBottom: 20,
        textAlign: 'left',
    },
    form: {
        flex: 1,
    },
    buttonContainer: {
        alignItems: 'center',
        paddingVertical: 16,
    }
})
