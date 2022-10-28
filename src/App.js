import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const postList = useSelector((state) => state.posts.value);
  console.log(postList)
  return (
    <div className="App">
    </div>
  );
}

export default App;
