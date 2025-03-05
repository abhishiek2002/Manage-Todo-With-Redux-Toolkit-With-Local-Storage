import { useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { initialLocalTodos } from "./features/Todo/todoSlice";

function App() {
  const todos = useSelector((state) => state.todoSlice.todos);
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(initialLocalTodos(JSON.parse(localStorage.getItem("todos"))));
  }, []);

  return (
    <div className="bg-[#172842] min-h-screen flex justify-center">
      <div className="bg-[#172842] h-max w-9/10 max-w-[600px] flex flex-col gap-2 p-1.5 items-start shadow-2xl shadow-black rounded-lg mt-2">
        <div className="flex flex-col justify-center gap-4 w-full p-1.5">
          <h1 className="text-white text-2xl text-center">Manage Your Todos</h1>
          {/* TodoForm */}
          <TodoForm />
        </div>

        <div className="p-1.5 flex flex-col gap-2">
          {/* TodoList */}
          {todos &&
            todos.map((todo) => (
              <div key={todo.id}>
                <TodoList todo={todo} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
