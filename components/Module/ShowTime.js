import React from 'react'

export default function ShowTime(time) {
    const configTime = new Date(time.time)
    const getTime = configTime.toLocaleTimeString(); //Time String
    const getDate = configTime.toLocaleDateString(); //Date String
    return (
        <> ⏲ {getTime} - {getDate} </>
    )
}
