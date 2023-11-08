import { useState, useEffect } from "react";

const GitHubFetcher = (props) => {

    const [login, setLogin] = useState("loading");
    const [id, setid] = useState("loading");
    const [name, setName] = useState("loading");
    const [email, setEmail] = useState("loading");
    const [public_repos, setPublic_repos] = useState("loading");

    useEffect(()=> {
        fetch("https://api.github.com/users/" + props.testName)
            .then((resp)=> {
                console.log(resp);
                return resp.json()
            })
            .then((json) => {
                console.log(json);
                setLogin(()=> json.login);
                setid(()=> json.id);
                setName(()=> json.name);
                setEmail(()=> json.email);
                setPublic_repos(() => json.public_repos);
            })
    },[props.testName])

    useEffect(() => {
        let emailArray = document.querySelectorAll(".textEmail");
        console.log(emailArray);
        for(let i = 0; i<emailArray.length; i++)  {
            if(emailArray[i].textContent === "Email: None")  {
                emailArray[i].style.color="red";
            }
        }
    }, [email])

    // useEffect(() => {
    //     const publicReposArray = document.querySelectorAll(".textPublicRepos");
    //     publicReposArray.forEach(repos => {

    //         if(public_repos <= 10)  {
    //             repos.style.color="Purple";
    //         }else if (public_repos > 35)  {
    //             repos.style.color="Green";
    //         }
    //     })
    //     }, [public_repos])


    const noEmail = "None";
    return (
        <>
            <h2>Login:  {login}</h2>
            <h2>ID:  {id}</h2>
            <h2>Name:  {name}</h2>
            <h2 className = "textEmail">Email: {email ?? noEmail}</h2>
            <h2 className = "textPublicRepos" > Public Repos:  {public_repos}</h2>
            <h2>------------------------------------------------------------</h2>
        </>
    )
}
export default GitHubFetcher