import { StyleSheet } from "react-native";

import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 8,
    }, 

    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.blue
    },

    quantity: {
        fontSize: 12,
        fontWeight: 'bold',

        paddingHorizontal: 8, 
        paddingVertical: 2,
        borderRadius: 999,

        color: colors.gray[200],
        backgroundColor: colors.gray[400]
    }
}) 