//Javascript function to retrieve data from json file (WebDev Tutorials)
fetch("http://localhost/jobForm.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jobs) {
    let jobsection = document.getElementById("jobApplications");
    //Iterate over jobs in jobForm.json to get each application
    for (let job of jobs.jobs) {
      jobsection.innerHTML =
        jobsection.innerHTML +
        `
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
  });
