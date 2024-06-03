import { useEffect } from "react"
import { useStudentContext } from "./StudentContext"

export default function StudentCard() {
    const {getById, students} = useStudentContext()

    useEffect(() => { 
        getById("1")
    }, [])
    
   
  return (
    <div>StudentCard: 

    {JSON.stringify(students)}
    </div>
  )
}
