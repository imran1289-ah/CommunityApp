let jobForm = {
    "jobs": [{
            "fname": "admin",
            "lname": "admin",
            "email": "admin@admin.com",
            "age": "22",
            "jobTitle": "xzf",
            "resume": "resume.pdf"

        },
        {
            "fname": "admin",
            "lname": "admin",
            "email": "admin@admin.com",
            "age": "22",
            "jobTitle": "xzf",
            "resume": "resume.pdf"

        }

    ]
}

foreach(job in jobForm)
    document.createElement("p").appendChild(job);






