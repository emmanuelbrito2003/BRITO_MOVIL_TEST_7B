import { View, Text, StyleSheet } from "react-native"
import { FormInput } from "../components/FormInput"
import { FormButton } from "../components/FormButton"
import { vehicule } from "../models/vehicule"

type VehicleDetailsScreenProps = {
    vehicule: vehicule;
    updateField: (field: keyof vehicule, value: string | number) => void;
    nextStep: () => void;
    prevStep: () => void;
}

// Pantalla Paso 2: Detalles del vehículo (Placa, Dueño, Año, Tipo de Gasolina)
export const VehicleDetailsScreen = ({ vehicule, updateField, nextStep, prevStep }: VehicleDetailsScreenProps) => {

    const isFormValid =
        vehicule.placa.trim() !== '' &&
        vehicule.nombreDueño.trim() !== '' &&
        vehicule.año > 0 &&
        vehicule.tipoGasolina.trim() !== ''

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro de un vehículo – Paso 2 de 3</Text>

            <View style={styles.form}>
                <FormInput
                    label="Placa"
                    value={vehicule.placa}
                    onChangeText={(text) => updateField('placa', text.toUpperCase())}
                    placeholder="Ej: ABC-1234"
                    autoCapitalize="characters"
                />

                <FormInput
                    label="Nombre del dueño"
                    value={vehicule.nombreDueño}
                    onChangeText={(text) => updateField('nombreDueño', text)}
                    placeholder="Ej: Juan Pérez"
                />

                <FormInput
                    label="Año"
                    value={vehicule.año > 0 ? vehicule.año.toString() : ''}
                    onChangeText={(text) => updateField('año', text ? parseInt(text) : 0)}
                    placeholder="Ej: 2020"
                    keyboardType="numeric"
                />

                <FormInput
                    label="Tipo de gasolina"
                    value={vehicule.tipoGasolina}
                    onChangeText={(text) => updateField('tipoGasolina', text)}
                    placeholder="Ej: Super"
                />
            </View>

            <View style={styles.buttonContainer}>
                <FormButton
                    label="Regresar"
                    onPress={prevStep}
                    variant="secondary"
                />
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
        marginBottom: 24,
        textAlign: 'center',
    },
    form: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 16,
    }
})
