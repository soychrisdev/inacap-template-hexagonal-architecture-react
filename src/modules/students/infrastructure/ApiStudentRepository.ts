import axios from "axios";
import { StudentRepository } from "../domain/StudentRepository";
import { StudentModel } from "../domain/StudentSchema";

export function createApiStudentRepository(): StudentRepository {
	return {
		save,
		findAll,
        remove,
        update,
        findById,
	};
}

async function save(student: StudentModel) {
   await axios.post("http://localhost:3000/students", student);
}

async function findAll() {
    const response = await axios.get("http://localhost:3000/students");
    return response.data;
}

async function remove(id: StudentModel["id"]) {
    await axios.delete(`http://localhost:3000/students/${id}`);
}

async function update(id: StudentModel["id"], student: StudentModel) {
    await axios.put(`http://localhost:3000/students/${id}`, student);
}

async function findById(id: StudentModel["id"])  {
    const response = await axios.get(`http://localhost:3000/students/${id}`);
    return response.data;
}

