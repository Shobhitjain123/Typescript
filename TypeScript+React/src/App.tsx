import "./App.css";
import Button from "./components/Button";
import Button2 from "./components/Button2";
import Form from "./components/Form";
import { CounterProvider } from "./provider/Counter";
function App() {
  return (
    <>
      <h1>Hello TypeScript</h1>
      <CounterProvider>
        <Button2/>
      </CounterProvider>
        <Button text="Click Me" />
      {/* <Form /> */}
    </>
  );
}

export default App;
