import { StudentRepository } from "../../domain/StudentRepository";
import { StudentModel } from "../../domain/StudentSchema";
import { ensureIsValidId } from "../../domain/StudentValidationId";

export  function removeStudentById(studentRepository: StudentRepository) {
    return async (id: StudentModel["id"]) => {
        
        if (typeof id === 'undefined') {
            throw new Error("Id is undefined");
        }
        
        ensureIsValidId(id);
        
        await studentRepository.remove(id);
    
    };
}

