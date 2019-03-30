function loadjson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status=="200")
    {
      callback(xhr.responseText);
    }

  }
  xhr.send(null);
}

loadjson("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);
  career(data.career);
  education(data.education);
  skills(data.skills);
})
var left=document.querySelector(".c1");

function profile(p)
{
  var image=document.createElement("img");
  image.src=p.image;
  left.append(image);

   var h2=document.createElement("h1");
  h2.textContent="DETAILS";
  left.append(h2);

  left.append(document.createElement("hr"))

  h2=document.createElement("h2");
  h2.textContent=p.name;
  left.append(h2);

  h2=document.createElement("h3");
  h2.textContent=p.mobile;
  left.append(h2);

  h2=document.createElement("h3");
  h2.textContent=p.email;
  left.append(p.email);

}

var right=document.querySelector(".c2");

function  career(ca)
{
  var h2=document.createElement("h1");
  h2.textContent="CAREER OBJECTIVE:";
  right.append(h2);
  right.append(document.createElement("hr"));

  right.append("* "+ ca.info);
}

function education(ed)
{
  var h2=document.createElement("h1");
  h2.textContent="EDUCATION";
  right.append(h2);
  var table=document.createElement("table");
  table.border="2";
  //right.append(table);
  var tr1="<tr><th>Qualification</th><th>Institute</th><th>Percentage</th><th>yop</th></tr>";
  var tr2="";
  for(i=0;i<ed.length;i++)
  {
    tr2=tr2+"<tr>";
    for(j=0;j<4;j++)
      {
        tr2=tr2+"<td>"+ed[i].free[j]+"</td>";
       // console.log(tr2);
      }
      tr2=tr2+"</tr>";
      // console.log(tr2);

  }
  // console.log(tr1+tr2);
  table.innerHTML=tr1+tr2;
  right.append(table);


}

function skills(sk)
{
  var rrr=document.createElement("h1");
  rrr.textContent="skills";
  right.append(rrr);
  var h2=document.createElement("h3");
 h2.textContent="";
right.append(h2);
 for(var k in sk)
  {
    var li=document.createElement("li");
    li.innerHTML=sk[k].name+":"+sk[k].info;

    h2.append(li);
  }
  right.append(h2);


}
