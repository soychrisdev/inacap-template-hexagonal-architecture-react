import { StudentRepository } from "../../domain/StudentRepository";
import { StudentModel, studentModelSchema } from "../../domain/StudentSchema";

export function createStundent(studentRepository: StudentRepository) {
    return async (student: StudentModel): Promise<void> => {
        ensureIsValidStudent(student)
        await studentRepository.save(student)
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