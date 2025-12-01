import { View, Text, StyleSheet } from "react-native"
import { FormButton } from "../components/FormButton"
import { FormRegisterButton } from "../components/FormRegisterButton"
import { vehicule } from "../models/vehicule"

type SummaryScreenProps = {
    vehicule: vehicule;
    prevStep: () => void;
    registerVehicule: () => void;
}

// Pantalla Paso 3: Resumen del registro
export const SummaryScreen = ({ vehicule, prevStep, registerVehicule }: SummaryScreenProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro de un vehículo – Paso 3 de 3</Text>
            <Text style={styles.subtitle}>Resumen del registro</Text>

            <View style={styles.summaryContainer}>
                <View style={styles.summaryRow}>
                    <Text style={styles.label}>Marca:</Text>
                    <Text style={styles.value}>{vehicule.marca}</Text>
                </View>

                <View style={styles.summaryRow}>
                    <Text style={styles.label}>Modelo:</Text>
                    <Text style={styles.value}>{vehicule.modelo}</Text>
                </View>

                <View style={styles.summaryRow}>
                    <Text style={styles.label}>Placa:</Text>
                    <Text style={styles.value}>{vehicule.placa}</Text>
                </View>

                <View style={styles.summaryRow}>
                    <Text style={styles.label}>Nombre del dueño:</Text>
                    <Text style={styles.value}>{vehicule.nombreDueño}</Text>
                </View>

                <View style={styles.summaryRow}>
                    <Text style={styles.label}>Año:</Text>
                    <Text style={styles.value}>{vehicule.año}</Text>
                </View>

                <View style={styles.summaryRow}>
                    <Text style={styles.label}>Tipo de gasolina:</Text>
                    <Text style={styles.value}>{vehicule.tipoGasolina}</Text>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <FormButton
                    label="Regresar"
                    onPress={prevStep}
                    variant="secondary"
                />
                <FormRegisterButton
                    label="Registrar"
                    onPress={registerVehicule}
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
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#6b7280',
        marginBottom: 24,
        textAlign: 'center',
    },
    summaryContainer: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 20,
        marginBottom: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f3f4f6',
    },
    label: {
        fontSize: 15,
        color: '#6b7280',
        fontWeight: '500',
    },
    value: {
        fontSize: 15,
        color: '#111827',
        fontWeight: '600',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 16,
    }
})
