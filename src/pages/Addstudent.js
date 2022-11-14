import React, {Component} from "react";

class AddStudent extends Component {
constructor(){
super();
this.state = {
id : "",
name : "",
email : "",
phone : "",
gender : "",
hobbies : []
};
this.changeInput = this.changeInput.bind(this);
this.formSave = this.formSave.bind(this);
}
changeInput(e){
const { name , value} = e.target;
if (name === "hobbies") {
const data = this.state[name];
if( data.includes(value)){
const newData = data.filter((oldValue, index) => {
return oldValue != value;
});
this.setState({ [name] :newData});
}else{
this.setState({ [name] : [...data , value]});
}
}
else{
this.setState({ [name] :value});
}
}

formSave(e) {
e.preventDefault();
console.log("form submit", this.state);
let students = JSON.parse(localStorage.getItem("students"));
if(!students) {
students = [];
}
if (this.props.editIndex !== null) {
students[this.props.editIndex] = this.state;
}else{
students.push(this.state);
}
localStorage.setItem("students" , JSON.stringify(students));
if( this.props.onBack) {
this.props.onBack();
}
}

componentDidMount() {
let students = JSON.parse(localStorage.getItem("students"));
if (!students) {
students = [];
}

console.log("students" , students[this.props.editIndex]);
this.setState(students[this.props.editIndex])

}
render() {
return (
<>
<h1>
{this.props.title} - {this.props.editIndex}
</h1>
<form onSubmit={this.formSave}>
<label>ID</label>
<input
name="id"
value={this.state.id}
onChange={this.changeInput}
/>
<br/>

<label>Name</label>
<input
name="name"
value={this.state.name}
onChange={this.changeInput}
/>
<br/>

<label>Email</label>
<input
name="email"
value={this.state.email}
onChange={this.changeInput}
/>
<br/>

<label>Phone</label>
<input
name="phone"
value={this.state.phone}
onChange={this.changeInput}
/>
<br/>

<label>Gender</label>
<input
type={"radio"}
name="gender"
value={"male"}
checked={this.state.gender === "male"}
onChange={this.changeInput}
/>{" "}
Male

<input
type={"radio"}
name="gender"
value={"female"}
checked={this.state.gender === "female"}
onChange={this.changeInput}
/>{" "}
Female

<br/>
<br/>

<label>Hobbies</label>
<input
type={"checkbox"}
name= "hobbies"
value={"reading"}
checked= {this.state.hobbies.includes("reading")}
/> {" "}
Reading

<input
type={"checkbox"}
name= "hobbies"
value={"travelling"}
checked= {this.state.hobbies.includes("travelling")}
/> {" "}
Travelling

<input
type={"checkbox"}
name= "hobbies"
value={"music"}
checked= {this.state.hobbies.includes("music")}
/> {" "}
Music
<br/>
<br/>

<input type={"submit"}
value= {this.props.editIndex !=null ? "Update" : "Save"} />

</form>
</>
)
}

}

export default AddStudent;