import { StudentRepository } from "../../domain/StudentRepository";
import { StudentModel, studentModelSchema } from "../../domain/StudentSchema";

export function updateStudentById(studentRepository: StudentRepository) {
    return async (id:StudentModel["id"] ,student: StudentModel): Promise<void> => {
        ensureIsValidStudent(student)
        await studentRepository.update(id, student)
    }
}

const ensureIsValidStudent = (student: StudentModel) => {
    if (typeof student === 'undefined') {
        throw new Error("Student is undefined");
    }

    const validationResult = studentModelSchema.safeParse(student);

    if (!validationResult.success) {
        throw new Error("Invalid student");
    }
}