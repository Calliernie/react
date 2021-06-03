import "./App.css";
import Hello from "./components/Hello";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import Form from "./components/Form";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import Namelist from "./components/Namelist";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import RefsDemo from "./components/RefsDemo";

function App() {
  return (
    <div className="App">
      {/* <Form></Form> */}
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Greet />
      <Welcome /> */}
      {/* <FunctionClick></FunctionClick>
      <ClassClick></ClassClick> */}
      {/* <EventBind></EventBind> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <Namelist></Namelist> */}
      {/* <Stylesheet primary={true}></Stylesheet> */}
      {/* <Hello /> */}
      {/* <Inline></Inline> */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <Table></Table> */}
      {/* <PureComp /> */}
      <RefsDemo />
    </div>
  );
}

export default App;
