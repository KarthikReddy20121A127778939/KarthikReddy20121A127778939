import React from 'react'

export default function StateinFunctionalComponent() {
    let [name, updateName] = React.useState(1)
    return (
        <div>
            <h1 onMouseOver={()=>{updateName(1)}}
            onMouseLeave={()=>{updateName(0)}}>
                            {name}
            </h1>
        </div>
    )
}
