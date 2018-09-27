var Dieren = ["Paarden", "Varkens", "Schapen", "Runden", "Geiten", "Overige"];
var Paarden = ["Tinker", "Haflinger", "Shetlandpony", "Appaloosa", "Arabier", "Belgisch Trekpaard", "Fjord", "Fries", "Falabella", "Koninklijk Warmbloed Paard Nederland", "Lipizzaner", "Przewalskipaard", "Shire", "Welsh Pony", "IJslander", "Ezel"];
var Varkens = ["Wolvarken", "Gottinger Minivarken", "Pietrain", "Vietnamees Hangbuikzwijn", "Nederlands Landras", "Large White", "Durco", "Bonte Bentheimer", "Kune-Kune", "Meishan"];
var Schapen = ["Swifter", "Rackaschaap", "Texelaar", "Coburger Fuchs", "Hampshire Down", "Mergellander", "Kameroenschaap", "Ouessantschaap", "Suffolk", "Zwartbles", "Merino"];
var Runden = ["Lakenvelder", "Witrik", "Groninger Blaarkop", "Maas-Rijn-IJssel", "Holstein-Friesian", "Yersey", "Dexter", "Zeboe", "Belgische Blauwe", "Limousin", "Aberdeen Angus", "Schotse Hooglander"]
var Geiten = ["Angorageit", "Anglo-Nubische Geit", "Afrikaanse Boergeit", "West-Afrikaanse Dwerggeit", "Belgische Hertegeit", "Nederlandse Landgeit", "Nederlandse Bonte Geit", "Toggenburger", "Nederlandse Witte Geit", "Wallische Zwarthalsgeit"];
var Overige = ["Alpaca", "Lama", "Damhert"]
var vragenKlaar = [];
var goedAntwoord = "";
var gebruikersAntwoord = "";
var score = 0;
var randomDier = "";

function checkAntwoord()
{
    hideGoedAntwoord();
    hideCheck();
    gebruikersAntwoord = $('#antwoordInput').val();
    console.log(gebruikersAntwoord);
    console.log(goedAntwoord);
    if (gebruikersAntwoord == goedAntwoord ||  gebruikersAntwoord == goedAntwoord.toLowerCase()){
        console.log("goed");
        score += 1;
        $('#score').html(score);
        $('#antwoordInput').val("");
        document.getElementById('checkFoto').src = './images/random/goed.png';
        showCheck();

        vragenKlaar.push(goedAntwoord);

        if (randomDier == "Paarden") {
            Paarden.splice(Paarden.indexOf(goedAntwoord), 1)
        }
        else if (randomDier == "Varkens") {
            Varkens.splice(Varkens.indexOf(goedAntwoord), 1)
        }
        else if (randomDier == "Schapen") {
            Schapen.splice(Schapen.indexOf(goedAntwoord), 1)
        }
        else if (randomDier == "Runden") {
            Runden.splice(Runden.indexOf(goedAntwoord), 1)
        }
        else if (randomDier == "Geiten") {
            Geiten.splice(Geiten.indexOf(goedAntwoord), 1)
        }
        else if (randomDier == "Overige") {
            Overige.splice(Overige.indexOf(goedAntwoord), 1)
        }


    } else {
        console.log("fout");
        document.getElementById('checkFoto').src = './images/random/fout.png';
        showCheck();
        showGoedAntwoord();
    }
    if (score == 62){
        console.log("Compleet");
        showPopup();
        return
    }

    getFoto();
};

function showCheck(){
    $("#checkFoto").css('display') == 'block'
    $("#checkFoto").show();
};

function hideCheck(){
    $("#checkFoto").css('display') == 'none'
    $("#checkFoto").hide();
};

function getFoto()
{
    randomDier = Dieren[Math.floor(Math.random() * Dieren.length)];
    //randomDier = "Paarden";
    var randomGetal = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    console.log(randomDier);
    if (randomDier == "Paarden" && Paarden.length !== 0) {
        var randomPaard = Paarden[Math.floor(Math.random() * Paarden.length)];
        while (vragenKlaar.includes(randomPaard)) {
            randomPaard = Paarden[Math.floor(Math.random() * Paarden.length)];
        }
        console.log(randomPaard)
        document.getElementById('foto').src = './images/'+ randomDier + '/' + randomPaard +'/'+ randomPaard + randomGetal +'.jpg';
        goedAntwoord = randomPaard;

    } else if (randomDier == "Varkens" && Varkens.length !== 0) {
        var randomVarken = Varkens[Math.floor(Math.random() * Varkens.length)];
        console.log(randomVarken)
        document.getElementById('foto').src = './images/'+ randomDier + '/' + randomVarken +'/'+ randomVarken + randomGetal +'.jpg';
        goedAntwoord = randomVarken;

    } else if (randomDier == "Schapen" && Schapen.length !== 0){
        var randomSchaap = Schapen[Math.floor(Math.random() * Schapen.length)];
        console.log(randomSchaap)
        document.getElementById('foto').src = './images/'+ randomDier + '/' + randomSchaap +'/'+ randomSchaap + randomGetal +'.jpg';
        goedAntwoord = randomSchaap;

    } else if (randomDier == "Runden" && Runden.length !== 0){
        var randomRund = Runden[Math.floor(Math.random() * Runden.length)];
        console.log(randomRund)
        document.getElementById('foto').src = './images/'+ randomDier + '/' + randomRund +'/'+ randomRund + randomGetal +'.jpg';
        goedAntwoord = randomRund;

    } else if (randomDier == "Geiten" && Geiten.length !== 0){
        var randomGeit = Geiten[Math.floor(Math.random() * Geiten.length)];
        console.log(randomGeit)
        document.getElementById('foto').src = './images/'+ randomDier + '/' + randomGeit +'/'+ randomGeit + randomGetal +'.jpg';
        goedAntwoord = randomGeit;

    } else if (randomDier == "Overige" && Overige.length !== 0){
        var randomOverige = Overige[Math.floor(Math.random() * Overige.length)];
        console.log(randomOverige)
        document.getElementById('foto').src = './images/'+ randomDier + '/' + randomOverige +'/'+ randomOverige + randomGetal +'.jpg';
        goedAntwoord = randomOverige;

    } else {
        console.log("fout");
    }
};

function handle(e){
    if (e.keyCode === 13){
        checkAntwoord();
    }
};

function showPopup() {
    $(".popup").css('display') == 'block'
    $(".popup").show();
}

function afronden(){
    location.reload()
};

getFoto();