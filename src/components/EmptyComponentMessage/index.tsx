import { Text, View } from "react-native";

import { styles } from "./styles";
import { typography } from "../../../styles/typography";

import Clipboard from '../../../assets/clipboard.svg'

export default function EmptyComponentMessage() {
    return (
        <View style={styles.container}>
            <Clipboard />

            <Text style={[styles.title, typography.medium, typography.bold]}>
                Você ainda não tem tarefas cadastradas
            </Text>

            <Text style={[styles.message, typography.medium]}>
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    )
};
