import { ACTIONS } from "./TodoView";

export default function Task({ task: todo, dispatch }) {
  const { id, task, complete } = todo;

  const toggleTodo = () => {
    return dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: task.id } });
  };
  return (
    <div>
      <h4 style={{ color: complete ? "#bbb" : "#333" }}>{task}</h4>
      <p>{complete ? "task complete" : "task uncomplete"}</p>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: id } })
        }
      >
        Complete
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: id } })
        }
      >
        Delete
      </button>
    </div>
  );
}
