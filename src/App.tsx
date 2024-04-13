import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import TodoContextProvider from "./store/todo-context";

function App() {
  return (
    <TodoContextProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </TodoContextProvider>
  );
}

export default App;
