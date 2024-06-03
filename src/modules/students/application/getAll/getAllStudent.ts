import { StudentRepository } from "../../domain/StudentRepository";
import { StudentModel } from "../../domain/StudentSchema";

export async function getAllStudents(studentRepository: StudentRepository) {
    return async (): Promise<StudentModel[]> => {
        return await studentRepository.findAll();
    };
}