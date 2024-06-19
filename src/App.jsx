import "./App.css";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { PostProvider } from "./context/PostContext";

function App() {
  return (
    <>
      <PostProvider>
        <div className='App'>
          <Dashboard></Dashboard>
        </div>
      </PostProvider>
    </>
  );
}

export default App;
