import { Text, TouchableOpacity, StyleSheet } from "react-native"

type FormRegisterButtonProps = {
    label: string;
    onPress: () => void;
    disabled?: boolean;
}

//Componente de botón especial para registrar
export const FormRegisterButton = ({ label, onPress, disabled = false }: FormRegisterButtonProps) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                disabled && styles.disabledButton
            ]}
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.7}
        >
            <Text style={[
                styles.buttonText,
                disabled && styles.disabledText
            ]}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 24,
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#10b981',
        minWidth: 140,
    },
    disabledButton: {
        backgroundColor: '#d1d5db',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
    },
    disabledText: {
        color: '#9ca3af',
    }
})
