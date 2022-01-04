import { useState, useReducer } from "react";
import Task from "./Task";

export const ACTIONS = {
  ADD_TODO: "add_todo",
  TOGGLE_TODO: "toggle_todo",
  DELETE_TODO: "delete_todo"
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.task)];
    case ACTIONS.TOGGLE_TODO:
      // search through the map of our todos and update the one
      // whose id matches the payload.id in question.
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        // value is not equal, therefore we do not want to modify it
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);

    default:
      return todos;
  }
};

function newTodo(task) {
  return { id: Date.now(), task: task, complete: false };
}

const TodoView = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [task, updateTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { task: task } });
    updateTask("");
  };

  return (
    <div>
      <form action="submi" onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          value={task}
          onChange={(e) => updateTask(e.target.value)}
        />
      </form>
      <h3>Task List</h3>
      <hr />
      {todos.map((task) => (
        // here we can pass the dispatch method directly
        <Task key={task.id} task={task} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default TodoView;
