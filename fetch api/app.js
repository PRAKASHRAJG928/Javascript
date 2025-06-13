async function users() {
    try {
        let gitusers = await fetch("https://api.github.com/users");
        gitusers = await gitusers.json();
        console.log(gitusers);
        gitusers.forEach(users => {
            let parent=document.getElementById("parent")

            parent.innerHTML+=`<div class="container">
           <img id="img" src="${users.avatar_url}" alt="photo">
           <div id="down">
            <p id="sname">${users.login}</p>
            <p id="sname1">Chief executive Officer</p>
           </div>
        </div>`
            
        });
    } catch (error) {
        console.error(error.message);
    }
}
users();