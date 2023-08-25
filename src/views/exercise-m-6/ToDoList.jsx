import { Box, Button, Center, Input, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ListTodo from "../../components/ListTodo";

export default function ToDoList() {
  let [todoName, setTodoName] = useState("");
  let [setListTodo, setListTodoState] = useState([]);
  let [done, setDone] = useState([]);
  let [total, setTotal] = useState(0);
  function addTodoList() {
    if (todoName === "") return;
    if (setListTodo.includes(todoName)) return;
    setListTodoState((arr) => [...arr, todoName]);
    setTodoName("");
  }
  function removeTodoList(e) {
    console.log(e.target.value);
    setListTodoState((arr) => arr.filter((todo) => todo !== e.target.value));
  }

  function handleTodoName(e) {
    setTodoName(e.target.value);
  }

  function checkTodo(isNotChecked, name) {
    if (!isNotChecked) {
      setDone((arr) => [...arr, name]);
      setTotal(total + 1);
    } else {
      setDone((arr) => arr.filter((todo) => todo !== name));
      setTotal(total - 1);
    }
  }

  useEffect(() => {
    const doneCopy = [...done];
    const filterDone = doneCopy.filter((todo) => setListTodo.includes(todo));
    setTotal(done.length);
    setDone(filterDone);
  }, [setListTodo, done]);

  return (
    <Box position={"relative"} h={"100vh"}>
      <Box
        margin={"auto"}
        margin-top={"200px"}
        width={"400px"}
        border={"1px"}
        padding={"20px"}
        borderColor={"gray.200"}
      >
        <Stack
          spacing={5}
          direction={"column"}
          border={"1px"}
          borderColor={"gray.200"}
          padding={"10px"}
          // width={"400px"}
        >
          <Center>
            <Text fontSize={"xl"}>Chores ToDo List</Text>
          </Center>
          {setListTodo.map((todo) => (
            <ListTodo
              key={todo}
              name={todo}
              check={checkTodo}
              delete={removeTodoList}
            />
          ))}
        </Stack>
        <Stack
          direction={"column"}
          borderTop={"1px"}
          borderColor={"gray.200"}
          marginTop={"20px"}
        >
          <Center>
            <span>Done : {total}</span>
          </Center>
          <Stack direction={"column"} spacing={5}>
            <span>Add Todo</span>
            <Input
              value={todoName}
              placeholder='To do name'
              fontSize={"sm"}
              onChange={handleTodoName}
              onKeyUp={(e) => {
                if (e.key === "Enter") addTodoList();
              }}
            />
            <Button colorScheme='blue' size={"sm"} onClick={addTodoList}>
              Add Todo
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
