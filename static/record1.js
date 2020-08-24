if(document.querySelector("title").textContent.split(" ")[0] == "Student")
{
const yer = document.querySelector("#yer").textContent.split(":")[1]
fetch("http://localhost:3000/fetchrec?year=" + yer).then((response) => {
    response.json().then((data) => {
        const table = document.querySelector("table")
        table.innerHTML = ""
        table.innerHTML = `<tr>
        <th><em>S.No</em></th>
        <th><em>Semester</em></th>
        <th><em>Course Title</em></th>
        <th><em>Course Code</em></th>
        <th><em>Credits</em></th>
        <th><em>Attendance</em></th>
        <th><em>CIE</em></th>
        <th><em>SEE</em></th>
        </tr>`
        for(let i=0;i<data.recs.length;i++)
        {
            const tr = document.createElement("tr")
            tr.innerHTML = `<td><em>${i+1}</em></td>
                <td><em>${data.recs[i].sem}</em></td>
                <td><em>${data.recs[i].title}</em></td>
                <td><em>${data.recs[i].code}</em></td>
                <td><em>${data.recs[i].credit}</em></td>
                <td><em>${data.recs[i].att}</em></td>
                <td><em>${data.recs[i].cie}</em></td>
                <td><em>${data.recs[i].see}</em></td>`
            table.appendChild(tr)
        }
    })
})
}

else if(document.querySelector("title").textContent.split(" ")[0] == "Proctee")
{
    const yer = document.querySelector("#yer").textContent.split(":")[1]
    const name = document.querySelector("#nam").textContent.split("-")[1]
    document.querySelector("#back").innerHTML = `<a href="/rec1?name=${name}">Go Back</a>`
    fetch("http://localhost:3000/fetchrecproc?year=" + yer + "&name=" + name).then((response) => {
    response.json().then((data) => {
        const table = document.querySelector("table")
        table.innerHTML = ""
        table.innerHTML = `<tr>
        <th><em>S.No</em></th>
        <th><em>Semester</em></th>
        <th><em>Course Title</em></th>
        <th><em>Course Code</em></th>
        <th><em>Credits</em></th>
        <th><em>Attendance</em></th>
        <th><em>CIE</em></th>
        <th><em>SEE</em></th>
        </tr>`
        for(let i=0;i<data.recs.length;i++)
        {
            const tr = document.createElement("tr")
            tr.innerHTML = `<td><em>${i+1}</em></td>
                <td><em>${data.recs[i].sem}</em></td>
                <td><em>${data.recs[i].title}</em></td>
                <td><em>${data.recs[i].code}</em></td>
                <td><em>${data.recs[i].credit}</em></td>
                <td><em>${data.recs[i].att}</em></td>
                <td><em>${data.recs[i].cie}</em></td>
                <td><em>${data.recs[i].see}</em></td>`
            table.appendChild(tr)
        }
        document.querySelector("p").classList.add("hide")
    })
})
}
