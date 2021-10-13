import React, { useState } from "react";

import Select from "react-select-plus";
import FormControl from "../../common/form/Control";
import FormGroup from "../../common/form/Group";
import Button from "../../common/Button";
import { Task } from "../../types";
import { ControlLabel } from "../../common/form";
import { FormWrapper } from "../../styles/main";

type Props = {
  handleSubmit: (doc: Task) => void;
};

export default function TaskForm({ handleSubmit }: Props) {
  const [task, setTask] = useState<Task>({} as Task);

  const handleClick = () => {
    handleSubmit(task);
  };

  const handleSelect = (option) => {
    setTask((currentValues) => ({
      ...currentValues,
      priority: option.value,
    }));
  };

  function renderControl({ label, name, placeholder, value = "", isRequired }) {
    const handleChange = (e) => {
      setTask({
        ...task,
        [name]: e.target.value,
      });
    };

    return (
      <FormGroup>
        <ControlLabel required={isRequired}>{label}</ControlLabel>
        <FormControl
          name={name}
          placeholder={placeholder}
          value={value}
          required={true}
          onChange={handleChange}
        />
      </FormGroup>
    );
  }

  return (
    <FormWrapper>
      <h4>Шинэ даалгавар нэмэх</h4>
      <div className="content">
        {renderControl({
          name: "subject",
          label: "Нэр",
          value: task.subject,
          isRequired: true,
          placeholder: "Нэрээ оруулна уу",
        })}
        {renderControl({
          name: "description",
          label: "Тайлбар",
          value: task.description,
          isRequired: false,
          placeholder: "Тайлбар оруулна уу",
        })}
        {/* <Select
        name="priority"
        value={task.priority || ''}
        options={PRIORITY_OPTIONS}
        onChange={handleSelect}
      /> */}
        <div className="right">
          <Button
            btnStyle="success"
            onClick={handleClick}
            uppercase={false}
            icon="check-circle"
          >
            Хадгалах
          </Button>
        </div>
      </div>
    </FormWrapper>
  );
}
