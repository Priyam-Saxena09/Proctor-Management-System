fetch("http://localhost:3000/prolist").then((response) => {
    response.json().then((data) => {
        const table = document.querySelector("table")
        table.innerHTML = ""
        table.innerHTML = `<tr>
        <th><em>S.No</em></th>
        <th><em>Name</em></th>
        <th><em>Email</em></th>
        <th><em>USN</em></th>
        <th><em>Record</em></th>
        </tr>`
        for(let i=0;i<data.procstu.length;i++)
        {
            const tr = document.createElement("tr")
            tr.innerHTML = `<td><em>${i+1}</em></td>
                <td><em>${data.procstu[i].name}</em></td>
                <td><em>${data.procstu[i].email}</em></td>
                <td><em>${data.procstu[i].usn}</em></td>
                <td><a href = "/proctrec?name=${data.procstu[i].name}"><button>Show</button></a></td>`
            table.appendChild(tr)
        }
    })
})

