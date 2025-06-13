let details = [
    {
        id : 1,
        name : "Ameer",
        salary : 58000
    },
    {
        id : 2,
        name : "Suman",
        salary : 4000
    },
    {
        id : 3,
        name : "Kartik",
        salary : 33000
    },
    {
        id : 4,
        name : "Dilip",
        salary : 10000
    },
    {
        id : 5,
        name : "sajid",
        salary : 2000
    },
    {
        id : 6,
        name : "riyaz",
        salary : 9000
    },
    {
        id : 7,
        name : "ankit",
        salary : 12000
    },
    {
        id : 8,
        name : "patan",
        salary : 20000
    }
];





let container = document.getElementById("container")

details.map((m)=>{
    container.innerHTML += `
     <tr>
        <td>${m.id}</td>
        <td>${m.name}</td>
        <td>${m.salary}</td>
    </tr>
    
    `
})

function salarya(){
    container.innerHTML = ""
    details.sort((a, b)=> { return a.salary- b.salary}).map(({id, name, salary})=>{
       container.innerHTML += `
       <tr>
       <td>${id}</td>
       <td>${name}</td>
       <td>${salary}</td>
       </tr>
       `

    })
}


function namea(){
   container.innerHTML = ""
   details.sort((a, b)=> { return a.name.localeCompare(b.name)}).map((m)=>{
      container.innerHTML += `
      <tr>
      <td>${m.id}</td>
      <td>${m.name}</td>
      <td>${m.salary}</td>
      </tr>
      `

   })
}


function named(){
     container.innerHTML = ""
     details.sort((a, b)=> { return b.name.localeCompare(a.name)}).map(({id, name, salary})=>{
        container.innerHTML += `
        <tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${salary}</td>
        </tr>
        `

     })
}


function salaryd(){
    container.innerHTML = ""
    details.sort((a, b)=> { return b.salary- a.salary}).map((m)=>{
       container.innerHTML += `
       <tr>
       <td>${m.id}</td>
       <td>${m.name}</td>
       <td>${m.salary}</td>
       </tr>
       `

    })
}