import React, {Component} from "react";
import {Link} from "react-router-dom"

const Arrows = ({ onClickUp, onClickDown}) => {
    return(
        <>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBDHykvPkAuhV65r-z7MXAlcO7Dak-CPbLc5ok_PQPXPvnx9snXLsXi4NOsrtUGuUSZo&usqp=CAU" onClick={() => {
                    onClickDown && onClickDown();
                }} className="arrow down"/>

                // <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBDHykvPkAuhV65r-z7MXAlcO7Dak-CPbLc5ok_PQPXPvnx9snXLsXi4NOsrtUGuUSZo&usqp=CAU" onClick={() => {
                    onClickUp && onClickUp();
                }} className="arrow up"/>
        </>
    )
        
}




class StudentList extends Component {
    constructor () {
        super();
        this.state = {
        students: [],
        serachForm:{
            id: "",
            name: "",
            email: "",

        },
    };
    this.handleAddStudent = this.handleAddStudent.bind(this);
    this.handleSearchForm = this.handleSearchForm.bind(this);
    this.handleResetForm = this.handleResetForm.bind(this);
    this.inputChange = this.inputChange.bind(this);  
}

getStudentData () {
    let students = JSON.parse(localStorage.getItem("students"));
    if (!students) {
    students = [];
    }
    this.setState({ students });
}
componentDidMount() {
    this.getStudentData();
}

deletStudent(index ) {
    console.log ( "delete student ", index);
    let students = JSON.parse(localStorage.getItem("students"));
    if(!students) {
    students = [];
    }
    students.splice(index,1);

    localStorage.setItem ("students", JSON.stringify(students));

    this.getStudentData();
}
    handleAddStudent(e){
        e.preventDefalt();
        console
    }
render () {
return (
<>
<h1>Student Listing....</h1>

<table border={2} cellPadding={0} cellSpacing={0}>
<thead>
<tr>
<th>ID</th>
</tr>
</thead>
</table>
</>
)
}
}

export default StudentList;