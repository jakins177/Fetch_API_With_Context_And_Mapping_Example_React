import React from 'react'
import { UserConsumer } from './userContext'

export default function Employee() {
    return (
        <div>
            
            
             <UserConsumer>
            {
                (randomEmployee) => {
                    return <div>
                        
                        <h2>Hello {randomEmployee.employee_name} </h2>
                        <h2>Your salary {randomEmployee.employee_salary}</h2>
                        <h2>Your age { randomEmployee.employee_age}</h2>
                    
                    </div>
                }
            }
         
            </UserConsumer>


              
            
        </div>
    )
}
