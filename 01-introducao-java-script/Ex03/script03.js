// Verifica se tem habilidade Javascript
function temHabilidade(skills){
  // indexOf verifica a presente do elemento (true == 0)
  if (skills.indexOf('Javascript') == 0){
    return true;
  }else{
    return false;
  }
}

var skills = ["Javascript", "ReactJS", "ReactNative"];
console.log(temHabilidade(skills)); // true ou false
