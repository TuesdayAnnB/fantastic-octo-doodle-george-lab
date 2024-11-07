
    $.getJSON("https://barrycumbie.github.io/barrycumbie/class-data.json", function(result){
      $.each(result, function(i, field){
       $("div").append(field + " ");
        console.log(field + " ");
      });
    });
