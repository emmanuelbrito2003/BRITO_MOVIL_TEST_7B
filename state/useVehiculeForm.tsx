import { useState } from "react"
import { vehicule, emptyVehicule } from "../models/vehicule"

export const totalSteps = 3

export const useVehiculeForm = () => {
    const [vehicule, setVehicule] = useState<vehicule>(emptyVehicule)
    const [step, setStep] = useState(0)
    const [registeredVehicules, setRegisteredVehicules] = useState<vehicule[]>([])

    // Actualizar un campo específico del vehículo
    const updateField = (field: keyof vehicule, value: string | number) => {
        setVehicule((prev: vehicule) => ({
            ...prev,
            [field]: value
        }))
    }

    // Avanzar al siguiente paso
    const nextStep = () => {
        if (step < totalSteps) {
            setStep(prev => prev + 1)
        }
    }

    // Regresar al paso anterior
    const prevStep = () => {
        if (step > 0) {
            setStep(prev => prev - 1)
        }
    }

    // Registrar el vehículo en la lista
    const registerVehicule = () => {
        setRegisteredVehicules(prev => [...prev, vehicule])
        setVehicule(emptyVehicule)
        setStep(3) // Ir a la pantalla de vehículos registrados
    }

    // Reiniciar el proceso para registrar otro vehículo
    const restart = () => {
        setVehicule(emptyVehicule)
        setStep(0)
    }

    return {
        vehicule,
        step,
        registeredVehicules,
        updateField,
        nextStep,
        prevStep,
        registerVehicule,
        restart
    }
}
