import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <TodoInput></TodoInput>
                    <TodoList></TodoList>
                </div>
            </div>
        </div>
    );
}

export default App;
