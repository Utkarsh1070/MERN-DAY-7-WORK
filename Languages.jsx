import React from 'react'

const Languages = () => {
    let lang= ["java","javascript","PYTHON ","C"];
  return (
    <div>
        <h1>BEST PROGRAMMING LANGUAGE</h1>
        <ul>
            {lang.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Languages