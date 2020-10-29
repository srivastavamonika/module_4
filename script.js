(function (window) {
    var names = ["Adam", "Jonny", "Henna", "Jsssica", "Parul", "James", "Lavi", "Piya", "Maina", "Nia"];
    
for (var i = 0; i < names.length; i++) {
var firstLetter = names[i].charAt(0).toLowerCase(); 
if (firstLetter=='j') {
    byeSpeaker.speak(names[i]);
   } else {
    helloSpeaker.speak(names[i]);
   }
}
})(window);