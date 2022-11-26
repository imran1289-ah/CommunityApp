const response = await fetch("http://127.0.0.1:5500/SOEN343_CommunityApp/jobForm.json%22");

let resp = await response.json();

console.log(resp);


for (let i = 0; i < resp.jobs.length; i++) {
    let element = document.createElement("p");
    let fnamenode = document.createTextNode(resp.jobs[i].fname);
    let lnamenode = document.createTextNode(resp.jobs[i].lname);
    let emailnode = document.createTextNode(resp.jobs[i].email);
    let agenode = document.createTextNode(resp.jobs[i].age);
    let jobtitlenode = document.createTextNode(resp.jobs[i].jobTitle);
    let resumenode = document.createTextNode(resp.jobs[i].resume);


    element.appendChild(fnamenode);
    element.appendChild(lnamenode);
    element.appendChild(emailnode);
    element.appendChild(agenode);
    element.appendChild(jobtitlenode);
    element.appendChild(resumenode);

    document.getElementById("myDiv").appendChild(fnamenode);
    document.getElementById("myDiv").appendChild(lnamenode);
    document.getElementById("myDiv").appendChild(emailnode);
    document.getElementById("myDiv").appendChild(agenode);
    document.getElementById("myDiv").appendChild(jobtitlenode);
    document.getElementById("myDiv").appendChild(resumenode);

} 