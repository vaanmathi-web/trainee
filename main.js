	var rIndex,table=document.getElementById("table");

//add row
function addtotable(){
	var table=document.getElementById("table");
	newRow=table.insertRow(table.length);
	cell1=newRow.insertCell(0);
	cell2=newRow.insertCell(1);
	cell3=newRow.insertCell(2);
	cell4=newRow.insertCell(3);
	name=document.getElementById("name").value;
	mobnum=document.getElementById("mobnum").value;
	date=document.getElementById("date").value;
	rate=document.getElementById("rate").value;

cell1.innerHTML=name;
cell2.innerHTML=mobnum;
cell3.innerHTML=date;
cell4.innerHTML=rate;

//selectedRow();
}

//selected row
function selectedRow(){
	for(var i=0;i<table.rows.length;i++){
		table.rows[i].onclick=function(){
			rIndex=this.rowIndex;
			document.getElementById("name").value=this.cells[0].innerHTML;
			document.getElementById("mobnum").value=this.cells[1].innerHTML;
			document.getElementById("date").value=this.cells[2].innerHTML;
			document.getElementById("rate").value=this.cells[3].innerHTML;

		};
	}
}
selectedRow();

function editRow(){
	var name=document.getElementById("name").value;
	var mobnum=document.getElementById("mobnum").value;
	var date=document.getElementById("date").value;
	var rate=document.getElementById("rate").value;
	
	table.rows[rIndex].cells[0].innerHTML=name;	
	table.rows[rIndex].cells[1].innerHTML=mobnum;
	table.rows[rIndex].cells[2].innerHTML=date;
	table.rows[rIndex].cells[3].innerHTML=rate;
}
//delete
function deleteRow(){
	table.deleteRow(rIndex);
}






































/*--let btnTraineesList=document.querySelector("button");
let traineeTable=document.querySelector("#table");

//create class 
class Trainee{
	name;
	year;
	mobilenum;
	rating;
	constructor(name,year,mobilenum,rating){
		this.name=name;
		this.year=year;
		this.mobilenum=mobilenum;
		this.rating=rating;
	}
}
let traineeList=[];
var obj1=new Trainee("Priya",1999,9677546789,5);
var obj2=new Trainee("Sri",1998,8765789902,5);
traineeList.push(obj1,obj2);
console.log(traineeList);

//table creation
let headers=["Name","Year","Mobile Number","Rating"];
btnTraineesList.addEventListener("click",()=>{
let table=document.createElement("table");
let headerRow=document.createElement("tr");

	headers.forEach(headerText=>{
		let header=document.createElement("th");
		let textNode=document.createTextNode("headerText");
		header.appendChild(textNode);
		headerRow.appendChild(header);
	});
	table.appendChild(headerRow);
	traineeTable.appendChild(table);
});---*/