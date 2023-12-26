import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header'
import ExamPass from './Components/ExamPass'
import Footer from './Components/Footer'



function App() {
 
  //   const [studentId, setStudentId] = useState('')
  //   const [ExamPass, setExamPass] = useState('')
  //   const [error, setError] = useState('')

    
  // const handleinput = (e) =>{
  //   setStudentId(e.target.value)
  // }

  //   const generateExamPass = () => {

  //     if (studentId.length == ' '  ){
  //         setError('please Enter your Matric Number')
  //         setStudentId( ' ')

  //     }  
  //      else if (studentId.length < 8  ){
  //       setError('please Enter a valid Matric Number') 
  //         setStudentId(studentId)
  //     }  
      
  //     else{
  //       const randomExamPass = Math.floor( Math.random()* 1000000)
  //       setExamPass(randomExamPass )
  //       setStudentId(studentId)
  //       setError('')
  //     }
    
  //   }
 
  return (
    <>
    <div className="App">
    <Header />
    <ExamPass />
    <Footer/>
    </div>
    </>
  )
   
}

export default App
