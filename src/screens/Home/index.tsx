import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";

import Task from "../../components/Task";
import TasksInfo from "../../components/TaskInfo";
import EmptyComponentMessage from "../../components/EmptyComponentMessage";

import { styles } from "./styles";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";

import Logo from '../../../assets/logo.svg'
import Plus from '../../../assets/plus.svg'

type TasksProps = {
    id: string,
    checked: boolean,
    name: string
}[]

export default function Home() {
    const [tasks, setTasks] = useState<TasksProps>([{ id: Date.now().toString(), checked: false, name: 'Tomar banho' }])

    const [newTaskName, setNewTaskName] = useState<string>('')
    const [inputFocus, setInputFocus] = useState<boolean>(false)
    const [addTaskButtonIsPressed, setAddTaskButtonIsPressed] = useState<boolean>(false)

    const totalTaskConcluded = tasks.filter(task => task.checked === true)
    const orderTasks = [...tasks].sort((a, b) => Number(a.checked) - Number(b.checked)) 

    const handleAddTask = () => {
        if (newTaskName.trim()) {

            setTasks(prevState => [...prevState, {
                id: Date.now().toString(),
                checked: false,
                name: newTaskName
            }])

            setNewTaskName('')

            return Alert.alert('Tarefa Criada!')
        }
    }

    const handleToggleCheck = (id: string) => {
        setTasks(prevState =>
            prevState.map(task =>
                task.id === id ? { ...task, checked: !task.checked } : task
            )
        )
    }

    const handleDeleteTask = (id: string) => {
        setTasks(prevState => prevState.filter(task => task.id !== id))
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Logo />
            </View>

            <View style={styles.addTaskForm}>
                <TextInput
                    style={[styles.input, inputFocus && styles.inputFocus, typography.large]}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={colors.gray[300]}
                    onChangeText={setNewTaskName}
                    value={newTaskName}
                    onFocus={() => setInputFocus(true)}
                    onBlur={() => setInputFocus(false)}
                />

                <TouchableOpacity
                    onPressIn={() => setAddTaskButtonIsPressed(true)}
                    onPressOut={() => setAddTaskButtonIsPressed(false)}
                    activeOpacity={1}
                    onPress={handleAddTask}
                    style={[styles.button, addTaskButtonIsPressed && styles.addTaskButtonPressed]}
                >
                    <Text>
                        <Plus width={16} height={16} />
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.tasks}>
                <View style={styles.tasksInfo}>
                    <TasksInfo title="Criadas" quantity={tasks.length} color={colors.blue} />

                    <TasksInfo title="Concluídas" quantity={totalTaskConcluded.length} color={colors.purple} />
                </View>
            </View>

            <FlatList
                style={styles.tasksList}
                data={orderTasks}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Task
                        id={item.id}
                        isChecked={item.checked}
                        name={item.name}
                        onToggleCheck={handleToggleCheck}
                        onDelete={handleDeleteTask}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <EmptyComponentMessage />
                )}
                ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
            />
        </View>
    )
};
