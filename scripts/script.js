//"https://tuesdayannb.github.io/TuesdayAnnB/class-data.json"


$.getJSON("https://tuesdayannb.github.io/TuesdayAnnB/class-data.json", function(data){
  for (var i = 0; i < data.length; i++) {
    objvalues = (Object.values(data[i]));
    $.each(objvalues, function(key, value){
      $("#textbox").append(value + " ");
    } );

      $("#textbox").append("<br>");
      console.log("<br> loop " + i + "<br>");
 }
});
//having trouble with the whole 'looping 3 times over' thing.


