import { Text, View } from "react-native";

import Clipboard from '../../../assets/clipboard.svg'
import { styles } from "./styles";

export default function EmptyComponentMessage() {
    return (
        <View style={styles.container}>
            <Clipboard />

            <Text style={styles.title}>
                Você ainda não tem tarefas cadastradas
            </Text>

            <Text style={styles.message}>
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    )
};
