import { CloseIcon } from "@chakra-ui/icons";
import { Button, Checkbox, Stack } from "@chakra-ui/react";
import { useState } from "react";

export default function ListTodo(props) {
  let [isChecked, setIsChecked] = useState(false);
  function checkTodo() {
    setIsChecked(!isChecked);
    props.check(isChecked, props.name);
  }
  return (
    <Stack
      direction={"row"}
      display={"flex"}
      flexDir={"row"}
      justifyContent={"space-between"}
    >
      <Checkbox size={"lg"} onChange={checkTodo} defaultChecked={isChecked}>
        {props.name}
      </Checkbox>
      <Button
        value={props.name}
        size={"xs"}
        leftIcon={<CloseIcon />}
        onClick={props.delete}
      >
        Delete
      </Button>
    </Stack>
  );
}
