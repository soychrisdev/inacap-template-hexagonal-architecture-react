import axios from "axios";
import { StudentRepository } from "../domain/StudentRepository";
import { StudentModel } from "../domain/StudentSchema";



export function createApiStudentRepository(): StudentRepository {

   
    
    //   const getStudents = useQuery('students', async () => {
    //     const { data } = await axios.get('/api/students');
    //     return data;
    //   });
    
    //   const createStudent = useMutation(async (student: StudentModel) => {
    //     const { data } = await axios.post('/api/students', student);
    //     return data;
    //   });
    
    //   const deleteStudent = useMutation(async (id: string) => {
    //     const { data } = await axios.delete(`/api/students/${id}`);
    //     return data;
    //   });
    
	return {
		save,
		findAll,
        remove,
        update,
        findById,
	};
}

async function save(student: StudentModel) {
   await axios.post("/api/students", student);
}

async function findAll() {
    const response = await axios.get("/api/students");
    return response.data;
}

async function remove(id: StudentModel["id"]) {
    await axios.delete(`/api/students/${id}`);
}

async function update(id: StudentModel["id"], student: StudentModel) {
    await axios.put(`/api/students/${id}`, student);
}

async function findById(id: StudentModel["id"])  {
    const response = await axios.get(`/api/${id}`);
    return response.data;
}

