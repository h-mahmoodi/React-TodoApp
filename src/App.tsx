import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import TodoContextProvider from "./store/todo-context";

function App() {
  return (
    <BrowserRouter>
      <TodoContextProvider>
        <AppRouter />
      </TodoContextProvider>
    </BrowserRouter>
  );
}

export default App;
