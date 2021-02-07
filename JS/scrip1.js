var str = "US $9.76/US $10.00";
str = str.replace(/(\d)\s(\d)/g, "$1$2");
var mass = str.match(/\d+(?=,)/g);
str = mass[1] + '/' + mass[0];
