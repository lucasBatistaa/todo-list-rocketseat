import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderTopColor: "#333333",

        gap: 16,
        paddingVertical: 48,
        paddingHorizontal: 20,

        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        
    },

    message: {
        textAlign: 'center',
        fontSize: 14,
        color: colors.gray[300],
    }
})