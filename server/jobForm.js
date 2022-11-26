fetch("http://127.0.0.1:5500/SOEN343_CommunityApp/jobForm.json").then((response) => response.json())
    .then((json) => console.log(json));

console