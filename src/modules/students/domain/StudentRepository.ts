import { StudentModel } from "./StudentSchema";

export interface StudentRepository {
    save(student: StudentModel): Promise<void>;
    findById(id: StudentModel["id"]): Promise<StudentModel>;
    findAll(): Promise<StudentModel[]>;
    remove(id: StudentModel["id"]): Promise<void>;
    update(id: StudentModel["id"], student: StudentModel): Promise<void>;
}