import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"

import { typography } from "../../../styles/typography"
import { styles } from "./styles"
import { colors } from "../../../styles/colors"

import Unchecked from '../../../assets/unchecked.svg'
import UncheckedHover from '../../../assets/unchecked-hover.svg'
import Checked from '../../../assets/checked.svg'
import Trash from '../../../assets/trash.svg'
import TrashRed from '../../../assets/trash-red.svg'

type TaskProps = {
    id: string,
    isChecked: boolean,
    name: string,
    onToggleCheck: (id: string) => void,
    onDelete: (id: string) => void,
}

export default function Task({ id, isChecked, name, onToggleCheck, onDelete }: TaskProps) {
    const [checkButtonIsPressed, setCheckButtonIsPressed] = useState(false)
    const [trashButtonIsPressed, setTrashButtonIsPressed] = useState(false)

    return (
        <View style={[styles.container, isChecked && styles.taskCheckedContainerVariant]}>
            <TouchableOpacity
                onPressIn={() => setCheckButtonIsPressed(true)}
                onPressOut={() => setCheckButtonIsPressed(false)}
                activeOpacity={1}
                onPress={() => onToggleCheck(id)}
                style={styles.checkButton}
            >
                {isChecked ? <Checked color={checkButtonIsPressed ? colors.purple : colors.purpleDark}/> : checkButtonIsPressed ? <UncheckedHover/> : <Unchecked />}
            </TouchableOpacity>

            <Text style={[styles.name, typography.medium, isChecked && styles.taskCheckedNameVariant]}>
                {name}
            </Text>

            <TouchableOpacity
                onPressIn={() => setTrashButtonIsPressed(true)}
                onPressOut={() => setTrashButtonIsPressed(false)}
                activeOpacity={1}
                onPress={() => onDelete(id)}
                style={[styles.trashButton, trashButtonIsPressed && styles.trashButtonPressed]}
            >
                {
                    trashButtonIsPressed ? 
                        <TrashRed /> :
                        <Trash/>
                }
            </TouchableOpacity>
        </View>
    )
};
