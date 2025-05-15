import { Text, TouchableOpacity, View } from "react-native"

import Unchecked from '../../../assets/unchecked.svg'
import Checked from '../../../assets/checked.svg'
import Trash from '../../../assets/trash.svg'
import { styles } from "./styles"
import { useState } from "react"

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
                {isChecked ? <Checked color={checkButtonIsPressed ? '#8284FA' : '#5E60CE'}/> : <Unchecked />}
            </TouchableOpacity>

            <Text style={[styles.name, isChecked && styles.taskCheckedNameVariant]}>
                {name}
            </Text>

            <TouchableOpacity
                onPressIn={() => setTrashButtonIsPressed(true)}
                onPressOut={() => setTrashButtonIsPressed(false)}
                activeOpacity={1}
                onPress={() => onDelete(id)}
                style={[styles.trashButton, trashButtonIsPressed && styles.trashButtonPressed]}
            >
                <Trash color={trashButtonIsPressed ? '#E25858' : '#808080'}/>
            </TouchableOpacity>
        </View>
    )
};
