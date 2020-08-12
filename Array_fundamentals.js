//Roll_no:-200240520031
//Deepak A Yadav

//Array fundamentals
undefined
let arr=['ajay','aman','abhishek'];
undefined



//Add new element in array//


undefined
arr.push("deepak");
4
arr.push("Karina");
5
arr;
(5) ["ajay", "aman", "abhishek", "deepak", "Karina"]


//Remove element from array//

undefined
arr.pop();
"Karina"
arr.pop();
"deepak"
arr;
(3) ["ajay", "aman", "abhishek"]
arr[0]="amit";
"amit"
arr;
(3) ["amit", "aman", "abhishek"]
arr.push[2]="Arvind";
"Arvind"
arr;
(3) ["amit", "aman", "abhishek"]
arr.push("arvind");
4


-//Access the element in array//


undefined
arr[0];
"amit"
arr[2];
"abhishek"
arr.push("karina");
5
arr.push("malika");
6
arr;
(6) ["amit", "aman", "abhishek", "arvind", "karina", "malika"]
arr[4];
"karina"


//Add elemnt before and after using splice//


undefined
arr.splice(2,0,"anurag");
[]
arr;
(7) ["amit", "aman", "anurag", "abhishek", "arvind", "karina", "malika"]
arr.splice(5,0,"narendra");
[]
arr.splice(0,0,"kejriwal");
[]
arr;
(9) ["kejriwal", "amit", "aman", "anurag", "abhishek", "arvind", "narendra", "karina", "malika"]



//remove element using splice//


undefined
arr.splice(0,1,"kejriwal");
["kejriwal"]
arr;
(9) ["kejriwal", "amit", "aman", "anurag", "abhishek", "arvind", "narendra", "karina", "malika"]
arr.splice(3,2);
(2) ["anurag", "abhishek"]
arr;
(7) ["kejriwal", "amit", "aman", "arvind", "narendra", "karina", "malika"]
arr.splice(0,1);
["kejriwal"]
arr;
(6) ["amit", "aman", "arvind", "narendra", "karina", "malika"]