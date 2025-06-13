let products=[
    {
        sname:"prakash",
        age : 21,
        dept: "MCA",
        marks:338
    },
    {
        sname:"miller",
        age : 22,
        dept: "EEE",
        marks:333
    },
    {
        sname:"alen",
        age : 23,
        dept: "MCA",
        marks:334
    },
]
let studentslist=document.getElementById("studentslist")
let SLNO=0
for (const student of students) {
    studentslist.innerHTML +=
     `<tr>
        <td>${++SLNO}</td>
        <td>${student.sname}</td>
        <td>${student.age}</td>
        <td>${student.dept}</td>
        <td>${student.marks}</td>
     </tr>`
    
}

