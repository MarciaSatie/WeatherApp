dotify.preferences = {
    city: "berlin",
    arrayCity:["amsterdam","berlin","copenhagen","cork","new_york","paris","san_francisco","tromso","waterford"]
  };
  
  dotify.preferences.setCity = function(newCity) {
    this.city = newCity;
    localStorage.setItem("selectedCity", newCity);
  };
  