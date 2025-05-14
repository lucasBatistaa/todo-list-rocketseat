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
    return (
        <View style={[styles.container, isChecked && styles.taskCheckedContainerVariant]}>
            <TouchableOpacity style={styles.checkButton} onPress={() => onToggleCheck(id)}>
                {isChecked ? <Checked /> : <Unchecked />}
            </TouchableOpacity>

            <Text style={[styles.name, isChecked && styles.taskCheckedNameVariant]}>{name}</Text>

            <TouchableOpacity style={styles.trashButton} onPress={() => onDelete(id)}>
                <Trash />
            </TouchableOpacity>
        </View>
    )
};
