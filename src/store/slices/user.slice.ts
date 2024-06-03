import { createSlice } from "@reduxjs/toolkit";
import { StudentModel } from "../../modules/students/domain/StudentSchema";

export const StudentSlice = createSlice({
    initialState: {
        student: {} as StudentModel
    },
    name: 'students',
    reducers: {
        addStudent: (state, action) => {
            state.student = action.payload;
        },
    }
})


export const { addStudent } = StudentSlice.actions;

export default StudentSlice.reducer;