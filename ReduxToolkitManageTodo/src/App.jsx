import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#172842] min-h-screen flex justify-center">
      <div className="bg-[#172842] h-max w-9/10 max-w-[600px] flex flex-col gap-2 p-1.5 border border-white items-center shadow-2xl shadow-black rounded-lg mt-2">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-white text-2xl">Manage Your Todos</h1>
          {/* TodoForm */}
        </div>

        <div>{/* TodoList */}</div>
      </div>
    </div>
  );
}

export default App;
