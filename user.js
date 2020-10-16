let cards = [
    //  Add your card in this section
    //  Follow this example format:
    //  ["Your Name", "Image URL(./img/username.png)", "Bio", "Your Github Link"],
    //  Bio should no longer than 50 characters, avoid using quotes(") to guarantee the format remains the same.


    ["Your Name", "./img/username.png", "Your Bio", "https://github.com/IIITians-Network"],
    ["Your Name", "./img/username.png", "Your Bio", "https://github.com/IIITians-Network"],
    ["Your Name", "./img/username.png", "Your Bio", "https://github.com/IIITians-Network"],
    ["Wisnu Febriadi", "./img/wfebriad", "Student", "https://github.com/wfebriad"],
    ["Codernibba", "./img/codernibba.gif", "In relationship with @codernibbi", "https://github.com/codernibba"],
    ["Vimal Kumar", "./img/vimalverma558.jpg", "Web Developer and designer", "https://github.com/vimalverma558"],
    ["Vikas shah", "./img/vik.jpg", "Web Developer", "https://github.com/vikasshah0"],
    ["Dede Saepulloh", "./img/dedesaepulloh.png", "Android & Web Developer", "https://github.com/dedesaepulloh"],
    ["Namish kumar", "./img/username.png", "Students", "https://github.com/namish25"],
    ["Priyanshu Singh", "./img/OVERLORDWRATH.jpg", "Web Developer", "https://github.com/OVERLORDWRATH"],
    ["V-50", "./img/username.png", "Android & Web Developer", "https://github.com/v-50"],
    ["Abhishek Kumar", "./img/badge.png", "Web Developer and designer", "https://github.Abhishekkr93"],
    ["Azri Akmal Kurniawan", "./img/azriakmalk.jpg", "Web Developer and Software Engineering", "https://github,com/azriakmalk"],
    ["Cormac Krum","./img/cormacKrum.jpg","You Know Who I Am.","https://github.com/cormacKrum"],



    
]
















// +--------------------------------------------------------------------------------+
// +                                                                                +
// +                  YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS                 +
// +                                                                                +
// +--------------------------------------------------------------------------------+


let contents = [];
Shuffle(cards).forEach((c) => {
  contents.push([`<li class="card">` + `<img class="user-image" src='${c[1]}' alt='${c[0]}' />` + `<div class="flex-content">` + `<h3 class="bio">${c[2]}</h3>` + `<h3 class='user'><a href="${c[3]}" target="_blank"><i class="fab fa-github"></i> ${c[0]}</a> </h3>` + `</div>` + `</li>`]);
});

document.getElementById("users").innerHTML = contents;

function Shuffle(o) {
  for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}
