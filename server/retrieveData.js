// const response = await fetch("http://localhost/jobForm.json");

// let resp = await response.json();

// console.log(resp);

fetch("http://localhost/jobForm.json")
    .then(function(response) {
        return response.json();

    }).then(
        function(jobs) {
            let placeholder = document.querySelector("#data-output");
            let out = "";
            for (let job of jobs.jobs) {
                out += `
         <tr>
            <td>${job.fname} </td>
            <td>${job.lname}</td>
            <td>${job.email}</td>
            <td>${job.age}</td>
            <td>${job.jobTitle}</td>
            <td>${job.resume}</td>
            <td>
          <button type="submit" name="submit" class="btn btn-primary">Approve</button>
          <button type="submit" name="submit" class="btn btn-danger">Deny</button>
          </td>
         </tr>`;
            }

            placeholder.innerHTML = out;
        });

// for (let i = 0; i < resp.jobs.length; i++) {
//     let element = document.createElement("th");
//     let fnamenode = document.createTextNode(resp.jobs[i].fname);
//     let lnamenode = document.createTextNode(resp.jobs[i].lname);
//     let emailnode = document.createTextNode(resp.jobs[i].email);
//     let agenode = document.createTextNode(resp.jobs[i].age);
//     let jobtitlenode = document.createTextNode(resp.jobs[i].jobTitle);
//     let resumenode = document.createTextNode(resp.jobs[i].resume);


//     element.appendChild(fnamenode);
//     element.appendChild(lnamenode);
//     element.appendChild(emailnode);
//     element.appendChild(agenode);
//     element.appendChild(jobtitlenode);
//     element.appendChild(resumenode);

//     document.getElementById("fname").appendChild(fnamenode);
//     document.getElementById("lname").appendChild(lnamenode);
//     document.getElementById("email").appendChild(emailnode);
//     document.getElementById("age").appendChild(agenode);
//     document.getElementById("jobTitle").appendChild(jobtitlenode);
//     document.getElementById("resume").appendChild(resumenode);

// }