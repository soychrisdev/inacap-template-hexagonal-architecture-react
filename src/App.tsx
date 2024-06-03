import { Provider } from "react-redux";
import { createApiStudentRepository } from "./modules/students/infrastructure/ApiStudentRepository";
import StudentCard from "./sections/students/StudentCard";
import { StudentContextProvider } from "./sections/students/StudentContext";
import { store } from "./store/store";

function App() {
  const repository = createApiStudentRepository();

  return (
    <>
      <Provider store={store}>
        <StudentContextProvider repository={repository} >
          <StudentCard />
        </StudentContextProvider>
      </Provider>

    </>
  )
}

export default App
