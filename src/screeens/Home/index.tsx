import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import Logo from '../../../assets/logo.svg'
import Plus from '../../../assets/plus.svg'
import { colors } from "../../../styles/colors";
import TasksInfo from "../../components/TaskInfo";
import EmptyComponentMessage from "../../components/EmptyComponentMessage";
import { useState } from "react";
import Task from "../../components/Task";

export default function Home() {
    const [tasks, setTasks] = useState([
        {id: '1', checked: false, name: 'Tomar banho'}
    ])

    const [newTaskName, setNewTaskName] = useState<string>('')

    const [inputFocus, setInputFocus] = useState(false)

    const totalTaskConcluded = tasks.filter(task => task.checked === true)

    const handleAddTask = () => {
        if (newTaskName.trim()) {
            setTasks(prevState => [...prevState, {
                id: '3',
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
                task.id === id ? { ...task, checked: !task.checked} : task
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
                    style={[styles.input, inputFocus && styles.inputFocus]}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={colors.gray[300]}
                    onChangeText={setNewTaskName}
                    value={newTaskName}
                    onFocus={() => setInputFocus(true)}
                    onBlur={() => setInputFocus(false)}
                />

                <TouchableOpacity style={styles.button} onPress={handleAddTask}>
                    <Text>
                        <Plus width={16} height={16} />
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.tasks}>
                <View style={styles.tasksInfo}>
                    <TasksInfo title="Criadas" quantity={tasks.length} />

                    <TasksInfo title="Concluídas" quantity={totalTaskConcluded.length} />
                </View>
            </View>

            <FlatList
                style={styles.tasksList}
                data={tasks}
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
                ItemSeparatorComponent={() => <View style={{ height: 8 }}/> }
            />
        </View>
    )
};
