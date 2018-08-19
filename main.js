// function loadjson(file,callback){
// 	var xhr=new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json");
// 	xhr.open("GET",file,true);
// 	xhr.onreadystatechange=function(){
// 		if(xhr.readyState===4 && xhr.status=="200"){
// 		callback(xhr.responseText);
// 	}
// };
// xhr.send(null);
// }
// loadjson("data.json",function(text){
// 	var data=JSON.parse(text);
// 	console.log(data);
// 	basics(data.details);
// 	career(data.career);
// 	qualify(data.education);
// 	skillset(data.skills);
// 	achive(data.achivements);
// })

function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}
var newfile=loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basics(data.details);
	career(data.career);
	qualify(data.education);
	skillset(data.skills);
	achive(data.achivements);

})
var left=document.querySelector(".left");
function basics(det){
	var image =document.createElement("img");
	image.src=det.image;
	left.appendChild(image);
	var name=document.createElement("h2");
	name.textContent=det.name;
	left.appendChild(name);
	var num=document.createElement("h2");
	num.textContent=det.phonenum;
	left.appendChild(num);
	var mail=document.createElement("a");
	mail.href="sujinalibiddi@gmil.com";
	mail.textContent=det.email;
	left.appendChild(mail);
	var add=document.createElement("h2");
	add.textContent="address";
	left.appendChild(add);
	var hr=document.createElement("hr");
	left.appendChild(hr);
	var adress=document.createElement("h2");
	adress.textContent=det.adress;
	left.appendChild(adress);
	
}
var right=document.querySelector(".right");
function career(car){
	var add=document.createElement("h3");
	add.textContent="careerobjective";
	right.appendChild(add);
	var hr=document.createElement("hr");
	right.appendChild(hr);
	var info=document.createElement("info");
	info.textContent=car.info;
	right.appendChild(info);

}
var right=document.querySelector(".right");
function qualify(edu){
	var ed=document.createElement("h2");
	ed.textContent="education qualification";
	right.appendChild(ed);
	var hr=document.createElement(hr);
	right.appendChild(hr);
	var table1=document.createElement("table");
	table1.border="2"
	right.appendChild(table1);
	tabledata=" ";
	for(i=0;i<edu.length;i++)
	{
		tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institue+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";
			}
		table1.innerHTML=tabledata;

}
function skillset(skill){
	var sk=document.createElement("h3");
	sk.textContent="technical skills";
	right.appendChild(sk);

	var hr=document.createElement("hr");
	right.appendChild(hr);

	for(i=0;i<skill.length;i++){
		var s=document.createElement("h3");
		s.textContent=skill[i].title;
		right.appendChild(s);
       var si=document.createElement("si");
       var ji=document.createElement("ji");
       ji.textContent=skill[i].info;
       si.appendChild(ji);
       right.appendChild(si);
		
	}
}

function achive(ac){
	var a=document.createElement("h3");
	a.textContent="achivements";
	right.appendChild(a);
	var hr=document.createElement("hr");
	right.appendChild(hr);


	for(i=0;i<ac.length;i++){
		var c=document.createElement("h3");
		c.textContent=ac[i].title;
		right.appendChild(c);
}
}
function openpage(){
	window.open("resume.html","_self",true)
}