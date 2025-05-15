import { Text, View } from "react-native";

import { styles } from "./styles";
import { typography } from "../../../styles/typography";

type TasksInfoProps = {
    title: string,
    quantity: number,
    color: string
}

export default function TasksInfo({ title, quantity, color }: TasksInfoProps) {
    return (
        <View style={styles.container}>
            <Text style={[typography.medium, typography.bold, {'color': color}]}>{title}</Text>

            <View style={styles.quantityContainer}>
                <Text style={[styles.quantity, typography.small, typography.bold]}>{quantity}</Text>
            </View>
        </View>
    )
};
