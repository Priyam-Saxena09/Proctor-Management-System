document.querySelector("#option").addEventListener("click",() => {
var select = document.querySelector("#option").value
console.log(select)
if(select=="student")
{
    document.querySelector(".form").innerHTML = ""
    document.querySelector(".form").innerHTML = `<form action="/student" method="post"><h1>Sign Up</h1>
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
    <label for ="year"><i>Year of Admission:</i></label>
    <input type="number" id="year" name="year" placeholder="Enter Your Year of Admission">
    <label for ="fname"><i>Father's Name:</i></label>
    <input type="text" id="fname" name="fname" placeholder="Enter Your Father's Name">
    <label for ="foccu"><i>Occupation:</i></label>
    <input type="text" id="foccu" name="foccu" placeholder="Enter Your Father's Occupation">
    <label for ="fphone"><i>Phone Number:</i></label>
    <input type="number" id="fphone" name="fphone" placeholder="Enter Your Father's Phone Number">
    <label for ="femail"><i>Email:</i></label>
    <input type="email" id="femail" name="femail" placeholder="Enter Your Father's Email">
    <label for ="mname"><i>Mother's Name:</i></label>
    <input type="text" id="mname" name="mname" placeholder="Enter Your Mother's Name">
    <label for ="moccu"><i>Occupation:</i></label>
    <input type="text" id="moccu" name="moccu" placeholder="Enter Your Mother's Occupation">
    <label for ="mphone"><i>Phone Number:</i></label>
    <input type="number" id="mphone" name="mphone" placeholder="Enter Your Mother's Phone Number">
    <label for ="memail"><i>Email:</i></label>
    <input type="email" id="memail" name="memail" placeholder="Enter Your Mother's Email">
    <button>Submit</button>`
}
else if(select=="proctor")
{
    document.querySelector(".form").innerHTML = ""
    document.querySelector(".form").innerHTML = `<form action="/proctor" method="post"><h1>Sign Up</h1>
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
    <button>Submit</button>`
}
})