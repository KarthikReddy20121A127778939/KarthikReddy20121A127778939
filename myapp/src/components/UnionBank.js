import React from 'react'
import Andhrabank from './Andhrabank'
import CoorporationBank from './CoorporationBank'

export default function UnionBank() {
    return (
        <div>
            <h1>UnionBank</h1>
            <Andhrabank location="Vijayawada"/>
            <CoorporationBank/>
        </div>
    )
}
