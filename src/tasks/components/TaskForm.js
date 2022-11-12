import React from "react";
import TodoButton from "../../atoms/Buton";
import {
  FormsContainer,
  Form,
  TwoButtonsContainer,
} from "../../atoms/Form.styled";
import { Select } from "../../atoms/input";
import { Input, InputContainer } from "../../atoms/input";
import { useForm } from "react-hook-form";

function TaskForm({ closeModal }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const createTask = (data) => {
    console.log(data);
  };
  return (
    <FormsContainer>
      <h2>Crear nueva tarea</h2>
      <Form onSubmit={handleSubmit(createTask)}>
        <InputContainer>
          <i class="fa-solid fa-signature"></i>
          <Input
            placeholder="Nombre de la tarea"
            {...register("title", { required: true })}
          />
        </InputContainer>
        <InputContainer>
          <i class="fa-solid fa-file-pen"></i>
          <Input
            placeholder="Descripción"
            {...register("description", { required: true })}
          />
        </InputContainer>

        <Select multiple {...register("categories", { required: true })}>
          <option value={1}>Trabajo</option>
          <option value={2}>Escuela</option>
          <option value={3}>Hogar</option>
        </Select>
        <TwoButtonsContainer>
          <TodoButton text="Cancelar" onClick={() => closeModal()} />
          <TodoButton type="submit" text="Crear" />
        </TwoButtonsContainer>
      </Form>
    </FormsContainer>
  );
}

export default TaskForm;
