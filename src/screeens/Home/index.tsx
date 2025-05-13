import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import Logo from '../../../assets/logo.svg'
import Plus from '../../../assets/plus.svg'
import { colors } from "../../../styles/colors";
import TasksInfo from "../../components/TaskInfo";
import EmptyComponentMessage from "../../components/EmptyComponentMessage";
import { useState } from "react";

export default function Home() {
    const [inputFocus, setInputFocus] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Logo />
            </View>

            <View style={styles.addTaskForm}>
                <TextInput
                    style={[styles.input, inputFocus && styles.inputFocus]}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={colors.gray[300]}
                    onFocus={() => setInputFocus(true)}
                    onBlur={() => setInputFocus(false)}
                />

                <TouchableOpacity style={styles.button}>
                    <Text>
                        <Plus width={16} height={16} />
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.tasks}>
                <View style={styles.tasksInfo}>
                    <TasksInfo title="Criadas" quantity={0} />

                    <TasksInfo title="Concluídas" quantity={0} />
                </View>
            </View>

            <FlatList
                style={styles.tasksList}
                data={[]}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Text>Lista </Text>
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <EmptyComponentMessage />
                )}
            />
        </View>
    )
};
