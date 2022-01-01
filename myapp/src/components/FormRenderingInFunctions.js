import React,{useState} from 'react'

export default function FormRenderingInFunctions() {
    let initialData={
            uname:"",
            pword:""
    }
    let [values,updatevalues] = useState(initialData);
     const changeUserName=(event)=>{
        updatevalues({
            ...values,uname:event.target.value
        })
    }
    const changePassword=(event)=>{
        updatevalues({
            ...values,pword:event.target.value
        })
    }
    const submitUserData=(event)=>{
        event.preventDefault()
        console.log(`${values.uname} ${values.pword}`)
    }
    return (
        <div>
            <form onSubmit={submitUserData} method='get'>
                    <input type="text" value={values.uname}
                    onChange={changeUserName}
                    />
                    <br></br>
                    <br></br>
                    <input type="text" value={values.pword}
                    onChange={changePassword}
                    />
                    <br></br>
                    <br></br>
                    <button>Login</button>
            </form>
        </div>
    )
}
