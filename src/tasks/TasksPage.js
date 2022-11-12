import React, { useState } from "react";
import styled from "styled-components";
import TodoButton from "../atoms/Buton";
import { FormsModal } from "../atoms/Form.styled";
import {
  ButtonContainer,
  CreateContainer,
  TaskContainer,
} from "../atoms/Tasks.styled";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function TasksPage() {
  const [createTask, setCreateTask] = useState(false);

  const cancelCreateTask = () => {
    setCreateTask(false);
  };

  return (
    <Container>
      {createTask && (
        <FormsModal>
          <TaskForm closeModal={cancelCreateTask} />
        </FormsModal>
      )}
      <TaskContainer>
        <h1>Mis tareas</h1>
        <CreateContainer>
          <ButtonContainer>
            <TodoButton
              text="Crear tarea"
              onClick={() => setCreateTask(true)}
            />
          </ButtonContainer>
        </CreateContainer>

        <Task
          title="Terminar el front"
          description="Hacerlo elegante y funcional"
          categories={["personal", "trabajo", "salud"]}
        />
      </TaskContainer>
    </Container>
  );
}

export default TasksPage;
