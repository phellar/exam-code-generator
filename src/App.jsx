import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header'



function App() {
 
    const [studentId, setStudentId] = useState('')
    const [ExamPass, setExamPass] = useState('')
    const [error, setError] = useState('')

    
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
      }
    
    }
 
  return (
    <div className="App">
        
        <div className="card">
            <div className="card-header">
            <h4>Generate E-pass</h4>
            </div>
              
                <div className="form-group">
                <input type='number'  
                placeholder='Enter Your Matric Number'
                onChange={handleinput}
                value={studentId}
                />
                </div>
                <p className='error-message'>{error}</p>
                <button onClick={generateExamPass} className='btn'>Get E-code</button>
              <p>Dear Candidate, your exam pass code is <span>{ExamPass}</span></p>
              
          
          </div>

          
    </div>
  )
}

export default App
