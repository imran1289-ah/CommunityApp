<!--Function to retrive data from Job Aplication form--!>
<?php

    if(isset($_REQUEST['submit'])){

        $data = "";
        $filename = "../jobForm.json";

        $data = file_get_contents($filename);
        $data_arr = json_decode($data,true);

        $data_arr["jobs"][] = array('fname' => $_REQUEST['fname'],'lname' => $_REQUEST['lname'],'email' => $_REQUEST['email'],'age' => $_REQUEST['age'],
        'jobTitle' => $_REQUEST['jobTitle'],'resume' => $_REQUEST['resume']);

        $newdata = json_encode($data_arr);
        file_put_contents($filename,$newdata);

        header("Location:http://localhost/server/test.html ");
    }
?>