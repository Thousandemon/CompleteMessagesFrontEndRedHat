import React, { useEffect, useState} from 'react'

const GetAllMessages = () => {
    const [messageData, setMessageData] = useState("");

    useEffect(() => {
        fetch("https://complete-messages-git-thousandemon-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/messages")
            .then((resp) => resp.json())
            .then((json) => {
                setMessageData(() => json);
            })
    },[])

    function loadData()  {
        return messageData.map((m) =>
        <div key={m.id} id={'id' + m.id}>
            <h5 key = {m.id}>Message ID: {m.id}</h5>
            <p key = {m.content}>Message: {m.content}</p>
            <h4 key = {m.sender.name}>Sent By: {m.sender.name}</h4>
        </div>
        )
    }
    if(messageData) {
        return (
            <>
                <div> Proof of Concept: </div>
                {loadData()}
            </>

        )
    } else {
        return (
            <div>Loading ....</div>
        )
    }
}

export default GetAllMessages