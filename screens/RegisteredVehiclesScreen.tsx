import { View, Text, StyleSheet, ScrollView } from "react-native"
import { FormRegisterButton } from "../components/FormRegisterButton"
import { vehicule } from "../models/vehicule"

type RegisteredVehiclesScreenProps = {
    registeredVehicules: vehicule[];
    restart: () => void;
}

// Pantalla final: Listado de vehículos registrados
export const RegisteredVehiclesScreen = ({ registeredVehicules, restart }: RegisteredVehiclesScreenProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Vehículos Registrados</Text>
            <Text style={styles.subtitle}>Total: {registeredVehicules.length}</Text>

            {registeredVehicules.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>No hay vehículos registrados aún</Text>
                </View>
            ) : (
                <ScrollView style={styles.tableContainer} horizontal>
                    <View>
                        {/* Encabezados de la tabla */}
                        <View style={styles.tableHeader}>
                            <Text style={[styles.tableHeaderText, styles.columnPlaca]}>PLACA</Text>
                            <Text style={[styles.tableHeaderText, styles.columnDueño]}>DUEÑO</Text>
                            <Text style={[styles.tableHeaderText, styles.columnMarca]}>MARCA</Text>
                            <Text style={[styles.tableHeaderText, styles.columnModelo]}>MODELO</Text>
                        </View>

                        {/* Filas de la tabla */}
                        <ScrollView style={styles.tableBody}>
                            {registeredVehicules.map((vehicule, index) => (
                                <View key={index} style={styles.tableRow}>
                                    <Text style={[styles.tableCell, styles.columnPlaca]}>{vehicule.placa}</Text>
                                    <Text style={[styles.tableCell, styles.columnDueño]}>{vehicule.nombreDueño}</Text>
                                    <Text style={[styles.tableCell, styles.columnMarca]}>{vehicule.marca}</Text>
                                    <Text style={[styles.tableCell, styles.columnModelo]}>{vehicule.modelo}</Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </ScrollView>
            )}

            <View style={styles.buttonContainer}>
                <FormRegisterButton
                    label="Registrar otro"
                    onPress={restart}
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
        fontSize: 24,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 4,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#6b7280',
        marginBottom: 20,
        textAlign: 'center',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 16,
        color: '#9ca3af',
        fontStyle: 'italic',
    },
    tableContainer: {
        flex: 1,
        marginBottom: 20,
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#3b82f6',
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    tableHeaderText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    tableBody: {
        backgroundColor: 'white',
    },
    tableRow: {
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
    },
    tableCell: {
        fontSize: 14,
        color: '#374151',
    },
    columnPlaca: {
        width: 100,
    },
    columnDueño: {
        width: 150,
    },
    columnMarca: {
        width: 120,
    },
    columnModelo: {
        width: 120,
    },
    buttonContainer: {
        alignItems: 'center',
        paddingVertical: 16,
    }
})
