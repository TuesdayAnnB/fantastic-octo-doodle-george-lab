
    $.getJSON("https://tuesdayannb.github.io/TuesdayAnnB/class-data.json", function(result){
      $.each(result, function(i, field){
       $("div").append(field + " ");
      });
    });
