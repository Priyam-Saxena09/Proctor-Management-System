const title = document.querySelector("title").textContent
if(title.split(" ")[0] == "Proctor")
{
   document.querySelector("#father").classList.add("hide")
   document.querySelector("#mother").classList.add("hide")
   document.querySelector("#personal").addEventListener("click",() => {
      document.querySelector(".form").innerHTML = ""
      document.querySelector(".form").innerHTML = `<form action="/personalproc" method="post">
      <label for ="name"><i>Name:</i></label>
    <input type="text" id="name" name="name" placeholder="Enter Your Name">
    <label for ="id"><i>Id:</i></label>
    <input type="text" id="id" name="id" placeholder="Enter Your Id">
    <label for ="dob"><i>Date of Birth:</i></label>
    <input type="date" id="dob" name="dob" placeholder="Enter Your Date of Birth">
    <label for ="email"><i>Email:</i></label>
    <input type="email" id="email" name="email" placeholder="Enter Your Email">
    <label for ="phone"><i>Phone Number:</i></label>
    <input type="number" id="phone" name="phone" placeholder="Enter Your Phone Number">
      <button>Save</button>
      </form>`
      fetch("/prof").then((response) => {
         response.json().then((data) => {
            document.querySelector("#name").value = data.name
            document.querySelector("#id").value = data.id
            document.querySelector("#dob").value = data.dob.split("T")[0]
            document.querySelector("#email").value = data.email
            document.querySelector("#phone").value = data.phone
         })
      })
      
   })
}
else
{
document.querySelector("#personal").addEventListener("click",() => {
   document.querySelector(".form").innerHTML = ""
   document.querySelector(".form").innerHTML = `<form action="/personal" method="post">
   <label for ="name"><i>Name:</i></label>
   <input type="text" id="name" name="name" placeholder="Enter Your Name">
   <label for ="usn"><i>USN:</i></label>
   <input type="text" id="usn" name="usn" placeholder="Enter Your USN">
   <label for ="dob"><i>Date of Birth:</i></label>
   <input type="date" id="dob" name="dob" placeholder="Enter Your Date of Birth">
   <label for ="pname"><i>Proctor:</i></label>
   <input type="text" id="pname" name="pname" placeholder="Enter Your Proctor's Name">
   <label for ="email"><i>Email:</i></label>
   <input type="email" id="email" name="email" placeholder="Enter Your Email">
   <label for ="phone"><i>Phone Number:</i></label>
   <input type="number" id="phone" name="phone" placeholder="Enter Your Phone Number">
   <button>Save</button>
   </form>`
   fetch("/prof").then((response) => {
      response.json().then((data) => {
         document.querySelector("#name").value = data.name
         document.querySelector("#usn").value = data.usn
         document.querySelector("#dob").value = data.dob.split("T")[0]
         document.querySelector("#pname").value = data.pname
         document.querySelector("#email").value = data.email
         document.querySelector("#phone").value = data.phone
      })
   })
   
})

document.querySelector("#father").addEventListener("click",() => {
    document.querySelector(".form").innerHTML = ""
    document.querySelector(".form").innerHTML = `<form action="/father" method="post">
    <label for ="fname"><i>Father's Name:</i></label>
    <input type="text" id="fname" name="fname" placeholder="Enter Your Father's Name">
    <label for ="occu"><i>Occupation:</i></label>
    <input type="text" id="foccu" name="foccu" placeholder="Enter Your Father's Occupation">
    <label for ="fphone"><i>Phone Number:</i></label>
    <input type="number" id="fphone" name="fphone" placeholder="Enter Your Father's Phone Number">
    <label for ="femail"><i>Email:</i></label>
    <input type="email" id="femail" name="femail" placeholder="Enter Your Father's Email">
    <button>Save</button>`
    fetch("/prof").then((response) => {
      response.json().then((data) => {
         document.querySelector("#fname").value = data.fname
         document.querySelector("#foccu").value = data.foccu
         document.querySelector("#fphone").value = data.fphone
         document.querySelector("#femail").value = data.femail
      })
   })
 })

 document.querySelector("#mother").addEventListener("click",() => {
    document.querySelector(".form").innerHTML = ""
    document.querySelector(".form").innerHTML = `<form action="/mother" method="post">
    <label for ="mname"><i>Mother's Name:</i></label>
    <input type="text" id="mname" name="mname" placeholder="Enter Your Mother's Name">
    <label for ="occu"><i>Occupation:</i></label>
    <input type="text" id="moccu" name="moccu" placeholder="Enter Your Mother's Occupation">
    <label for ="mphone"><i>Phone Number:</i></label>
    <input type="number" id="mphone" name="mphone" placeholder="Enter Your Mother's Phone Number">
    <label for ="memail"><i>Email:</i></label>
    <input type="email" id="memail" name="memail" placeholder="Enter Your Mother's Email">
    <button>Save</button>`
    fetch("/prof").then((response) => {
      response.json().then((data) => {
         document.querySelector("#mname").value = data.mname
         document.querySelector("#moccu").value = data.moccu
         document.querySelector("#mphone").value = data.mphone
         document.querySelector("#memail").value = data.memail
      })
   })
 })
}
