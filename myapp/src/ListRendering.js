import React from 'react'

export default function ListRendering() {
    let emplist=[
        {
        name:"X",
	    Salary:"6.5LPA",
	    designation:"Web Developer",
	    Mobile:9876543210
        },
        {
        name:"X",
        Salary:"6.5LPA",
        designation:"Web Developer",
        Mobile:9876543210
        },
        {
        name:"X",
	    Salary:"6.5LPA",
	    designation:"Web Developer",
	    Mobile:9876543210
        }
    ]
    return (
        <div>
            <h1>
                ListRendering
            </h1>
            {/* {
            emplist.map(element => (
                <h1>{element}</h1>
            ))
            } */}
        {
            emplist.map(
                empdata=>
                <>
                    <p>{empdata.name}</p>
                    <p>{empdata.Salary}</p>
                    <p>{empdata.designation}</p>
                </>
            )
        }
        </div>
    )
}
