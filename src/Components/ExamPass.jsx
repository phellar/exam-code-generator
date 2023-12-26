import React from 'react'
import { useState } from 'react'

const ExamPass = () => {

    const [studentId, setStudentId] = useState('')
    const [ExamPass, setExamPass] = useState('')
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')

    
  const handleinput = (e) =>{
    setStudentId(e.target.value)
  }

    const generateExamPass = () => {

      if (studentId.length == ' '  ){
          setError('please Enter your Matric Number')
          setStudentId( ' ')

      }  
       else if (studentId.length < 8  ){
        setError('please Enter a valid Matric Number') 
          setStudentId(studentId)
      }  
      
      else{
        const randomExamPass = Math.floor( Math.random()* 1000000)
        setExamPass(randomExamPass )
        setStudentId(studentId)
        setError('')
        setMessage('Your exam passcode is:')
      }

    
    }

  return (
    <div className="container">
    <div className="card">
        <div className="card-header"><h2>Generate Exam Pass</h2></div>
        <div className="form-group">
        <input type='number' placeholder='Enter your Matric Number'
            onChange={handleinput}
        />
        <p className='error'>{error}</p>
        
        </div>
        <button className='btn' onClick={generateExamPass}>Get E-code</button>
        <p>{message}  <span>{ExamPass}</span></p>

    </div>
    </div>
  )
}

export default ExamPass