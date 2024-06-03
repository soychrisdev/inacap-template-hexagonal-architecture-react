import { PropsWithChildren, createContext, useContext } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createStundent } from "../../modules/students/application/create/createStudent";
import { getByIdStudent } from "../../modules/students/application/getById/getByIdStudent";
import { removeStudentById } from "../../modules/students/application/remove/removeStudentById";
import { updateStudentById } from "../../modules/students/application/update/updateStudent";
import { StudentRepository } from "../../modules/students/domain/StudentRepository";
import { StudentModel } from "../../modules/students/domain/StudentSchema";
import { addStudent } from "../../store/slices/user.slice";
import { RootState } from "../../store/store";

export interface ContextState {
    students: { student: StudentModel };
    createStudent: (student: StudentModel) => Promise<void>;
    removeStudent: (id: StudentModel["id"]) => void;
    updateStudent: (id: StudentModel["id"], student: StudentModel) => void;
    getById: (id: StudentModel["id"]) => Promise<StudentModel>;
}

export const StudentContext = createContext<ContextState>({} as ContextState)

export const StudentContextProvider = ({children, repository}: PropsWithChildren<{repository: StudentRepository}>) => {
    const student = useSelector((state: RootState) => state.student)
    const dispatch = useDispatch()

    const create = async (student: StudentModel) => {
        await createStundent(repository)(student);
    }

    const byId = async (id:StudentModel["id"]): Promise<StudentModel> => {
       const student = await getByIdStudent(repository)(id);
       dispatch(addStudent(student));
       return student;
    }

    const remove = (id: StudentModel["id"]) => {
         removeStudentById(repository)(id);
    }

    const update = (id: StudentModel["id"],student: StudentModel) => {
        updateStudentById(repository)(id, student);
    }


    return (
        <StudentContext.Provider value={{ getById: byId, students: student, createStudent: create, removeStudent: remove, updateStudent: update }}>
            {children}
        </StudentContext.Provider>
    )
}

export const useStudentContext = () => useContext(StudentContext)