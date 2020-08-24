if(document.querySelector(".acad h1").textContent.split(" ")[0] == "Academic")
{
fetch("http://localhost:3000/fetchyear").then((response) => {
    response.json().then((data) => {
        const table = document.querySelector("table")
        table.innerHTML = ""
        table.innerHTML = `<tr>
        <th><em>S.No</em></th>
        <th><em>Academic Year</em></th>
        <th><em>Action</em></th>
        </tr>`
        for(let i=0;i<4;i++)
        {
            const tr = document.createElement("tr")
            tr.innerHTML = `<td><em>${i+1}</em></td>
                <td><em>${data.year+i}</em></td>
                <td><a href = "/sub?year=${data.year+i}"><button>Show</button></a></td>`
            table.appendChild(tr)
        }
    })
})
}

else if(document.querySelector(".acad h1").textContent.split(" ")[0] == "Proctee")
{
    const name = document.querySelector("title").textContent.split("-")[1]
    fetch("http://localhost:3000/fetchyearproc?name=" + name).then((response) => {
    response.json().then((data) => {
        const table = document.querySelector("table")
        table.innerHTML = ""
        table.innerHTML = `<tr>
        <th><em>S.No</em></th>
        <th><em>Academic Year</em></th>
        <th><em>Action</em></th>
        </tr>`
        for(let i=0;i<4;i++)
        {
            const tr = document.createElement("tr")
            tr.innerHTML = `<td><em>${i+1}</em></td>
                <td><em>${data.year+i}</em></td>
                <td><a href = "/subproc?year=${data.year+i}&name=${name}"><button>Show</button></a></td>`
            table.appendChild(tr)
        }
    })
})
}
