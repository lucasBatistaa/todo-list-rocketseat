import { Text, View } from "react-native";

import { styles } from "./styles";

type TasksInfoProps = {
    title: string,
    quantity: number,
}

export default function TasksInfo({ title, quantity }: TasksInfoProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>

            <Text style={styles.quantity}>{quantity}</Text>
        </View>
    )
};
