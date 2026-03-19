
import React, { useState } from 'react'
import { useImmer } from 'use-immer';

const TaskComponent = () => {
  const [taskList, setTaskList] = useImmer(initialTasks);

  return (
    <div>
      <h1>Prague itinerary</h1>
      <TaskAdd
        handleAddClick={handleAddClick}
      />
      <TaskList
        tasklist={taskList}
        handleCheckbox={handleCheckbox}
        handleDeleteClick={handleDeleteClick}
        handleSaveClick={handleSaveClick}
      />
    </div>
  )

  function handleAddClick(taskName) {
    // let currentID = taskList[taskList.length - 1]?.id;
    // let nextID = currentID ? currentID + 1 : 0;
    let nextID = Math.max(...taskList.map(({ id }) => id), -1) + 1;

    let taskNew = {
      id: nextID,
      text: taskName,
      done: false,
    };

    setTaskList(draft => {
      draft.push(taskNew)
    });
  }

  function handleSaveClick(taskID, taskNewName) {
    setTaskList(draft => {
      const task = draft.find(t => t.id === taskID);
      task.text = taskNewName;
    });
  }

  function handleDeleteClick(taskID) {
    setTaskList(draft => {
      const taskIndex = draft.findIndex(t => t.id === taskID);
      draft.splice(taskIndex, 1);
    });
  }

  function handleCheckbox(taskID, nextDone) {
    setTaskList(draft => {
      const task = draft.find(t => t.id === taskID);
      task.done = nextDone;
    });
  }
}

const TaskAdd = ({ handleAddClick }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <input type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Add task'
      />
      <button onClick={() => handleAddClick(text)}>Add</button>
    </div>
  )
}

const TaskList = ({ tasklist, handleCheckbox, handleSaveClick, handleDeleteClick }) => {
  return (
    <div>
      {tasklist.map((task) =>
        <TaskLayout 
          key={task.id}
          task={task}
          handleCheckbox={handleCheckbox}
          handleSaveClick={handleSaveClick}
          handleDeleteClick={handleDeleteClick}
        />
      )}
    </div>
  )
}

const TaskLayout = ({ task, handleCheckbox, handleSaveClick, handleDeleteClick }) => {
  const [state, setState] = useState("edit");
  const [text, setText] = useState("");

  return (
    <div>
      <input type="checkbox"
        checked={task.done}
        onChange={(e) => handleCheckbox(task.id, e.target.checked)}
      />
      {state === "edit"
        ? (
          <>
            <span>{task.text}</span>
            <button onClick={() => setState("save")}>Edit</button>
          </>
        )
        : (
          <>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <button
              onClick={() => {
                handleSaveClick(task.id, text);
                setState('edit');
              }}
            >
              Save
            </button>
          </>
        )
      }

      <button onClick={() => handleDeleteClick(task.id)}>Delete</button>
    </div>
  )
}


const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false }
];

export default TaskComponent
