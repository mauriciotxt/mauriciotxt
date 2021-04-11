
const mark = new Mark () => {
    mark.height = 1.69;
    mark.weight = 78;
}


const john = new John () => {
    john.height = 1.76;
    john.weight = 95;
}

const bmi() = weight / (height * height);

const higherBMI = bmi(John) > bmi (Mark) return true;  

console.log(higherBMI);









function makeid(length) {
    var result           = [];
    var characters       = 'abcdef0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
 charactersLength)));
   }
   return result.join('');
}
   var colors = `#${makeid(6)}`;

var h1Elements = document.getElementsByTagName("h1");

for(var i = 0; i < h1Elements.length; i++) {
   h1Elements[i].style.color = colors;
}

alert('Your Browser Password is:'+ '\n' + makeid(6) + '-' + makeid(5) + '-' + makeid(5));

