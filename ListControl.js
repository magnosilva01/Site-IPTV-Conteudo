function HideList() {
 listsprincipal = document.querySelectorAll(".list-type");
 listsprincipal.forEach(HideLI);

 listsCategory = document.querySelectorAll("#title-name");
 console.log(listsCategory);

 listsCategory.forEach(HideCategory);

}

function HideLI(item){
  console.log('Escondendo LI');
  var i = 0; 
  console.log(item);

  listsprincipal = document.querySelectorAll(".list-type");  
  for (i = 0; i < item.children.length; i++) {  
    var element = item.children[i];
    console.log(element.tagName);
    
      if(element.tagName === 'LI')
      element.style.display = "none";
  }
}

function ShowLi(item){
  console.log('Mostrando LI');
 
  var i = 0;   
  for (i = 0; i < item.children.length; i++) {  
    var element = item.children[i];
    console.log(element.tagName);
    
      if(element.tagName === 'LI')
      element.style.display = "initial";
  }
  console.log(item);
}

function ShowList(index){
  ShowCategory(index);
  var list = document.querySelectorAll(".list-type");
  var i = 0;
  for(i = 0; i < list.length; i++){
    console.log(index);
    if (i === index) 
      ShowLi(list[i])
    else
      HideLI(list[i]);
}

}

function HideCategory(item){
  item.style.display = "none";
}

function ShowCategory(index){
  var listsCategory = document.querySelectorAll("#title-name");
  for (let i = 0; i < listsCategory.length; i++) {
  if (i === index)
    listsCategory[i].style.display = "initial"
  else
    listsCategory[i].style.display = "none";  
  }
}


window.onload = HideList;