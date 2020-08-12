/**RollNo:-200240520031
   name:- Deepak A Yadav
   
   Object using Json */



let person = {
  id: 10,
  firstName: "Deepak",
  lastName: "Yadav",
  rollno:31
};

undefined
person.firstName
"Deepak"
person.id
10

/**Object creation in JSON Using array */


let students =[ 
{
id :520031,firstname:"Arvind",lastname :"Sharma",phoneno :991234567,email_id:"arvindsharma@gamil.com"},
 {
id :520032,firstname:"kavita",lastname :"mishra",phoneno :981234567,email_id:"kavitamishra@gamil.com"},
    {id :520033,firstname:"sarita",lastname :"pandey",phoneno :971234567,email_id:"saritapandey@gamil.com"},
    {id :520034,firstname:"Aman",lastname :"Shukla",phoneno :981234567,email_id:"arvindsharma@gamil.com"}};
VM692:7 Uncaught SyntaxError: Unexpected token '}'
let students =[ 
{
id :520031,firstname:"Arvind",lastname :"Sharma",phoneno :991234567,email_id:"arvindsharma@gamil.com"},
 {
id :520032,firstname:"kavita",lastname :"mishra",phoneno :981234567,email_id:"kavitamishra@gamil.com"},
    {id :520033,firstname:"sarita",lastname :"pandey",phoneno :971234567,email_id:"saritapandey@gamil.com"},
    {id :520034,firstname:"Aman",lastname :"Shukla",phoneno :981234567,email_id:"arvindsharma@gamil.com"}];
undefined
students[4];
undefined
students[4]
undefined
students.indexOf[3];
undefined
students[3].email_id;
"arvindsharma@gamil.com"
students[1].firstname;
"kavita"
students[0].id;
520031
students[0].phoneno;
991234567