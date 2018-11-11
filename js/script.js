//Dieren blok 1//
var Paarden = ["Tinker", "Haflinger", "Shetlandpony", "Appaloosa", "Arabier", "Belgisch Trekpaard", "Fjord", "Fries", "Falabella", "Koninklijk Warmbloed Paard Nederland", "Lipizzaner", "Przewalskipaard", "Shire", "Welsh Pony", "IJslander", "Ezel"];
var Varkens = ["Wolvarken", "Gottinger Minivarken", "Pietrain", "Vietnamees Hangbuikzwijn", "Nederlands Landras", "Large White", "Duroc", "Bonte Bentheimer", "Kune-Kune", "Meishan"];
var Schapen = ["Swifter", "Rackaschaap", "Texelaar", "Coburger Fuchs", "Hampshire Down", "Mergellander", "Kameroenschaap", "Ouessantschaap", "Suffolk", "Zwartbles", "Merino"];
var Runden = ["Lakenvelder", "Witrik", "Groninger Blaarkop", "Maas-Rijn-IJssel", "Holstein-Friesian", "Yersey", "Dexter", "Zeboe", "Belgische Blauwe", "Limousin", "Aberdeen Angus", "Schotse Hooglander"]
var Geiten = ["Angorageit", "Anglo-Nubische Geit", "Afrikaanse Boergeit", "West-Afrikaanse Dwerggeit", "Belgische Hertegeit", "Nederlandse Landgeit", "Nederlandse Bonte Geit", "Toggenburger", "Nederlandse Witte Geit", "Wallische Zwarthalsgeit"];
var Overige = ["Alpaca", "Lama", "Damhert"];
var PaardenBackup = Paarden.slice()
var VarkensBackup = Varkens.slice()
var SchapenBackup = Schapen.slice()
var RundenBackup = Runden.slice()
var GeitenBackup = Geiten.slice()
var OverigeBackup = Overige.slice()

//Dieren blok 2//
var Konijnen = ["Angora", "Belgische Haas", "Duitse Hangoor", "Eksterkonijn", "Engelse Hangoor", "Franse Hangoor", "Groot Chinchilla", "Groot Lotharinger", "Hollander", "Japanner", "Kleurdwerg", "Nederlandse Hangoordwerg", "Papillon", "Pool", "Rex", "Rijnlander", "Rus", "Satijn", "Tan", "Thrianta", "Vlaamse Reus", "Voskonijn", "Witte Nieuw Zeelander", "Witte Van Hotot"];
var Knaagdieren = ["Cavia Borstelhaar", "Cavia Gladhaar", "Cavia Rex", "Cavia Satijn", "Cavia Sheltie", "Cavia Amerikaanse Gekruind", "Cavia Tessel", "Chinchilla", "Degoe Wildkleur", "Dikstaartgerbil", "Kleurmuis", "Mongoolse Gerbil", "Roborovski Dwerghamster", "Russische Dwerghamster", "Syrische Hamster", "Tamme Rat", "Chinese Dwerghamster", "Boeroendoek", "Sugarglider", "Japanse Eekhoorn", "Veeltepelmuis"];
var Herpeten = ["Griekse Landschildpad", "Roodwangschildpad", "Geelwangschildpad", "Rode Rattenslang", "Koningspython", "Afgodslang", "Groene Leguaan", "Baardagaam", "Luipaardgekko", "Pijlgifkikker", "Vuurbuikpadje", "Mexicaanse Roodknievogelspin"];
var Vissen = ["Goudvis", "Sluierstaart", "Koi", "Goudwinde", "Guppy", "Zwaarddrager", "Platy", "Black Mollie", "Neontetra", "Kardinaaltetra", "Sumatraan", "Maanvis", "Discusvis", "Kempvis", "Pantsermeerval"];
var DierenBlok2 = ["Konijnen", "Knaagdieren", "Herpeten", "Vissen"]
var KonijnenBackup = Konijnen.slice()
var KnaagdierenBackup = Knaagdieren.slice()
var HerpetenBackup = Herpeten.slice()
var VissenBackup = Vissen.slice()

//Overig//
var huidigBlok = 0;
var vragenKlaar = [];
var goedAntwoord = "";
var gebruikersAntwoord = "";
var score = 0;
var randomDier = "";
var totaalPunten = 0;
var Dieren = [];

//Functions//

function checkAntwoord()
{
    hideGoedAntwoord();
    gebruikersAntwoord = $('#antwoordInput').val();
    if (goedAntwoord === "Tinker" && gebruikersAntwoord === "zul"){
        console.log("lol");
        $('body').css('background-image', 'url(./images/random/zul1.jpg)');
        document.getElementById('foto').src = "./images/random/zul1.jpg";
        $('#scoreText').css('color', 'white');
        $('#score').css('color', 'white');
        return
    }

    if (goedAntwoord === "Lama" && gebruikersAntwoord === "fortnite"){
        console.log("FORTNITE");
        $('body').css('background-image', 'url(./images/random/fortnite.gif)');
        document.getElementById('foto').src = "./images/random/fortnite.jpg";
        var audio = new Audio('./images/random/fortnite.mp3');
        audio.play();
        $('#scoreText').css('color', 'white');
        $('#score').css('color', 'white');
        return
    }

    if (gebruikersAntwoord === goedAntwoord ||  gebruikersAntwoord === goedAntwoord.toLowerCase()){
        console.log("goed");
        $('#antwoordInput').val("");
        document.getElementById('checkFoto').src = './images/random/goed.png';
        showCheck();
        setTimeout(function (){ $("#checkFoto").hide();  $("#checkFoto").css('display') == 'none' }, 1000);

        window[randomDier].splice(window[randomDier].indexOf(goedAntwoord), 1);
        pushKlaar();
        checkCompleet();


    } else {
        console.log("fout");
        document.getElementById('checkFoto').src = './images/random/fout.png';
        $('#antwoordInput').val("");
        showCheck();
        showGoedAntwoord()
        document.getElementById( "antwoordKnop" ).setAttribute( "onClick", "javascript: checkAntwoord2();" );
        document.getElementById( "antwoordInput" ).setAttribute( "onkeypress", "handle1(event);" );

    }
};

function checkAntwoord2(){
    hideGoedAntwoord();
    gebruikersAntwoord = $('#antwoordInput').val();
    console.log(gebruikersAntwoord);
    console.log(goedAntwoord);

    if (gebruikersAntwoord === goedAntwoord ||  gebruikersAntwoord === goedAntwoord.toLowerCase()){
        console.log("goed");
        $('#antwoordInput').val("");
        document.getElementById('checkFoto').src = './images/random/goed.png';
        document.getElementById( "antwoordKnop" ).setAttribute( "onClick", "javascript: checkAntwoord();" );
        document.getElementById( "antwoordInput" ).setAttribute( "onkeypress", "handle(event);" );
        showCheck();
        setTimeout(function (){ $("#checkFoto").hide();  $("#checkFoto").css('display') == 'none' }, 1000);
        checkCompleet();

    } else {
        console.log("fout");
        document.getElementById('checkFoto').src = './images/random/fout.png';
        $('#antwoordInput').val("");
        showCheck();
        showGoedAntwoord()
        document.getElementById( "antwoordKnop" ).setAttribute( "onClick", "javascript: checkAntwoord2();" );
        document.getElementById( "antwoordInput" ).setAttribute( "onkeypress", "handle1(event);" );
    }
};

function getFoto()
{
        randomDier = Dieren[Math.floor(Math.random() * Dieren.length)];
        var randomGetal = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        console.log(randomDier);
        if (randomDier == "Paarden" && Paarden.length !== 0) {
            var randomPaard = Paarden[Math.floor(Math.random() * Paarden.length)];
            //while (vragenKlaar.includes(randomPaard)) {
            //    randomPaard = Paarden[Math.floor(Math.random() * Paarden.length)];
            //}
            console.log(randomPaard)
            document.getElementById('foto').src = './images/' + randomDier + '/' + randomPaard + '/' + randomPaard + randomGetal + '.jpg';
            goedAntwoord = randomPaard;
        } else if (randomDier == "Varkens" && Varkens.length !== 0) {
            var randomVarken = Varkens[Math.floor(Math.random() * Varkens.length)];
            //while (vragenKlaar.includes(randomVarken)) {
            //    randomVarken = Varkens[Math.floor(Math.random() * Varkens.length)];
            //}
            console.log(randomVarken)
            document.getElementById('foto').src = './images/' + randomDier + '/' + randomVarken + '/' + randomVarken + randomGetal + '.jpg';
            goedAntwoord = randomVarken;

        } else if (randomDier == "Schapen" && Schapen.length !== 0) {
            var randomSchaap = Schapen[Math.floor(Math.random() * Schapen.length)];
            //while (vragenKlaar.includes(randomSchaap)) {
            //    randomSchaap = Schapen[Math.floor(Math.random() * Schapen.length)];
            //}
            console.log(randomSchaap)
            document.getElementById('foto').src = './images/' + randomDier + '/' + randomSchaap + '/' + randomSchaap + randomGetal + '.jpg';
            goedAntwoord = randomSchaap;

        } else if (randomDier == "Runden" && Runden.length !== 0) {
            var randomRund = Runden[Math.floor(Math.random() * Runden.length)];
            //while (vragenKlaar.includes(randomRund)) {
            //    randomRund = Runden[Math.floor(Math.random() * Runden.length)];
            //}
            console.log(randomRund)
            document.getElementById('foto').src = './images/' + randomDier + '/' + randomRund + '/' + randomRund + randomGetal + '.jpg';
            goedAntwoord = randomRund;

        } else if (randomDier == "Geiten" && Geiten.length !== 0) {
            var randomGeit = Geiten[Math.floor(Math.random() * Geiten.length)];
            //while (vragenKlaar.includes(randomGeit)) {
            //    randomGeit = Geiten[Math.floor(Math.random() * Geiten.length)];
            //}
            console.log(randomGeit)
            document.getElementById('foto').src = './images/' + randomDier + '/' + randomGeit + '/' + randomGeit + randomGetal + '.jpg';
            goedAntwoord = randomGeit;

        } else if (randomDier == "Overige" && Overige.length !== 0) {
            var randomOverige = Overige[Math.floor(Math.random() * Overige.length)];
            //while (vragenKlaar.includes(randomOverige)) {
            //    randomOverige = Overige[Math.floor(Math.random() * Overige.length)];
            //}
            console.log(randomOverige)
            document.getElementById('foto').src = './images/' + randomDier + '/' + randomOverige + '/' + randomOverige + randomGetal + '.jpg';
            goedAntwoord = randomOverige;

        } else if (randomDier == "Konijnen" && Konijnen.length !== 0) {
            var randomKonijnen = Konijnen[Math.floor(Math.random() * Konijnen.length)];
            //while (vragenKlaar.includes(randomKonijnen)) {
            //    randomKonijnen = Konijnen[Math.floor(Math.random() * Konijnen.length)];
            //}
            console.log(randomKonijnen)
            document.getElementById('foto').src = './images/' + randomDier + '/' + randomKonijnen + '/' + randomKonijnen + randomGetal + '.jpg';
            goedAntwoord = randomKonijnen;

        } else if (randomDier == "Knaagdieren" && Knaagdieren.length !== 0) {
            var randomKnaagdieren = Knaagdieren[Math.floor(Math.random() * Knaagdieren.length)];
            //while (vragenKlaar.includes(randomKnaagdieren)) {
            //    randomKnaagdieren = Knaagdieren[Math.floor(Math.random() * Knaagdieren.length)];
            //}
            console.log(randomKnaagdieren)
            document.getElementById('foto').src = './images/' + randomDier + '/' + randomKnaagdieren + '/' + randomKnaagdieren + randomGetal + '.jpg';
            goedAntwoord = randomKnaagdieren;

        } else if (randomDier == "Herpeten" && Herpeten.length !== 0) {
            var randomHerpeten = Herpeten[Math.floor(Math.random() * Herpeten.length)];
            //while (vragenKlaar.includes(randomHerpeten)) {
            //    randomHerpeten = Herpeten[Math.floor(Math.random() * Herpeten.length)];
            //}
            console.log(randomHerpeten)
            document.getElementById('foto').src = './images/' + randomDier + '/' + randomHerpeten + '/' + randomHerpeten + randomGetal + '.jpg';
            goedAntwoord = randomHerpeten;

        } else if (randomDier == "Vissen" && Vissen.length !== 0) {
            var randomVissen = Vissen[Math.floor(Math.random() * Vissen.length)];
            //while (vragenKlaar.includes(randomVissen)) {
            //    randomVissen = Vissen[Math.floor(Math.random() * Vissen.length)];
            //}
            console.log(randomVissen)
            document.getElementById('foto').src = './images/' + randomDier + '/' + randomVissen + '/' + randomVissen + randomGetal + '.jpg';
            goedAntwoord = randomVissen;

        } else {
            checkCompleet();
        }
};

function pushKlaar(){
    if (vragenKlaar.includes(goedAntwoord)) {
        console.log("zit al in lijst");
        checkCompleet();
    } else {
        vragenKlaar.push(goedAntwoord);
        score = vragenKlaar.length;
        $('#score').html(score);
    }
};

// Functions voor CSS.

function selectBlok1()
{
    $("#radioDierenBlok1").css('display') == 'block'
    $("#radioDierenBlok1").show();
    $(".radio").css('display') == 'block'
    $(".radio").show();
    $(".selectBlok").css('display') == 'none'
    $(".selectBlok").hide();
    huidigBlok = 1;
};

function selectBlok2()
{
    $(".radio").css('display') == 'block'
    $(".radio").show();
    $("#radioDierenBlok2").css('display') == 'block'
    $("#radioDierenBlok2").show();
    $(".selectBlok").css('display') == 'none'
    $(".selectBlok").hide();
    huidigBlok = 2;
};

function checkboxToArray() {
    var form = document.getElementById("radioDierenBlok" + huidigBlok),
        inputs = form.getElementsByTagName("input");

    for (var i = 0, max = inputs.length; i < max; i += 1) {
        if (inputs[i].type === "checkbox" && inputs[i].checked) {
            Dieren.push(inputs[i].value);
        }
    }
}

function startQuiz(){
    checkboxToArray();
    $(".radio").css('display') == 'none'
    $(".radio").hide();
    $(".selectBlok").css('display') == 'none'
    $(".selectBlok").hide();
    $("#radioDierenBlok1").css('display') == 'none'
    $("#radioDierenBlok1").hide();
    $("#radioDierenBlok2").css('display') == 'none'
    $("#radioDierenBlok2").hide();
    $(".radio").css('display') == 'none'
    $(".radio").hide();
    $(".main").css('display') == 'block'
    $(".main").show();

    for (var i=0 ; i<Dieren.length;i++){
        totaalPunten += window[Dieren[i]].length;
    }
    $('#totaalPunten').html(totaalPunten);
    getFoto();
}

function showCheck(){
    $("#checkFoto").css('display') == 'block'
    $("#checkFoto").show();
};

function hideCheck(){
    $("#checkFoto").css('display') == 'none'
    $("#checkFoto").hide();
};

function showGoedAntwoord(){
    $('#goedAntwoordText').text(goedAntwoord);
};

function hideGoedAntwoord(){
    $('#goedAntwoordText').text('');
};

function afronden(){
    location.reload()
};

function opnieuw(){
    for (i = 0; i<Dieren.length; i++){
        var x = Dieren[i]+"Backup"
        window[Dieren[i]] = window[x].slice();
        console.log(Dieren[i])
    }
    vragenKlaar = [];
    score = 0;

    $('#score').html(score);
    $(".popup").css('display') == 'none'
    $(".popup").hide();

    getFoto()

}

function handle(e){
    if (e.keyCode === 13){
        checkAntwoord();
    }
};

function handle1(e){
    if (e.keyCode === 13){
        checkAntwoord2();
    }
};

function handle2(e){
    if (e.keyCode === 13){
        checkPassword();
    }
};

function showPopup() {
    $(".popup").css('display') == 'block'
    $(".popup").show();
}

function checkCompleet(){
    if (vragenKlaar.length === totaalPunten){
        showPopup()
    } else {
        getFoto();
    }
}

function checkPassword(){
    var decrypted = CryptoJS.AES.decrypt("U2FsdGVkX18b7/Tug7TUDVrVT2Lk0dgQSExpKntyGiY=", "My Secret Passphrase");
    var password = $('#passwordInput').val();
    if (password === decrypted.toString(CryptoJS.enc.Utf8)) {
        $(".passwordVeld").css('display') == 'none'
        $(".passwordVeld").hide();
        $(".selectBlok").css('display') == 'block'
        $(".selectBlok").show();
    } else {
        console.log("fout wachtwoord")
    }
}

function goBack(){
    $("#radioDierenBlok1").css('display') == 'none'
    $("#radioDierenBlok1").hide();
    $("#radioDierenBlok2").css('display') == 'none'
    $("#radioDierenBlok2").hide();
    $(".radio").css('display') == 'none'
    $(".radio").hide();
    $(".selectBlok").css('display') == 'block'
    $(".selectBlok").show();
}
