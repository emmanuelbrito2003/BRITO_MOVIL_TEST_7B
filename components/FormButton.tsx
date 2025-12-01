import { Text, TouchableOpacity, StyleSheet } from "react-native"

type FormButtonProps = {
    label: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
}

//Componente de botón reutilizable para navegación
export const FormButton = ({ label, onPress, variant = 'primary', disabled = false }: FormButtonProps) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                variant === 'primary' ? styles.primaryButton : styles.secondaryButton,
                disabled && styles.disabledButton
            ]}
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.7}
        >
            <Text style={[
                styles.buttonText,
                variant === 'primary' ? styles.primaryText : styles.secondaryText,
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
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 120,
    },
    primaryButton: {
        backgroundColor: '#3b82f6',
    },
    secondaryButton: {
        backgroundColor: '#6b7280',
    },
    disabledButton: {
        backgroundColor: '#d1d5db',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
    },
    primaryText: {
        color: 'white',
    },
    secondaryText: {
        color: 'white',
    },
    disabledText: {
        color: '#9ca3af',
    }
})
