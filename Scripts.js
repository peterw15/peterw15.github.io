let currentWord; /**  CURRENT WORD TO GUESS  */
let currentGuess; /**  CURRENT GUESS */
let stillPlaying;
const guesses = [];
let lives;


function loadPage() {
    document.getElementById("entryBox").value = "";
    currentGuess = "";
    stillPlaying = true;
    lives = 5;
    document.getElementById("numOfGuess").innerHTML = "Lives: " + lives;
    document.getElementById("entryBox").style.border = "black solid 5px";
    // for (let i = 0; i < 5; i++) { 
    //     guesses[i] = ""; 
    //     document.getElementById("guess" + lives.toString()).innerHTML = "";
    // }

    document.getElementById("guess1").innerHTML = "";
    document.getElementById("guess2").innerHTML = "";
    document.getElementById("guess3").innerHTML = "";
    document.getElementById("guess4").innerHTML = "";
    document.getElementById("guess5").innerHTML = "";


    document.getElementById("headerContainer").innerHTML = "Guess The Five Letter Word!";
    document.getElementById("headerContainer").style.color = "white";
    document.getElementById("Keyboard").style.backgroundColor = ""; 

    loadWord();

}

function loadWord() {
    const words = ["about","above","abuse","actor","acute","admit","adopt","adult","after","again","agent","agree","ahead","alarm","album","alert","alike","alive","allow","alone","along","alter","among","anger","Angle","angry","apart","apple","apply","arena","argue","arise","array","aside","asset","audio","audit","avoid","award","aware","badly","baker","bases","basic","basis","beach","began","begin","begun","being","below","bench","billy","birth","black","blame","blind","block","blood","board","boost","booth","bound","brain","brand","bread","break","breed","brief","bring","broad","broke","brown","build","built","buyer","cable","calif","carry","catch","cause","chain","chair","chart","chase","cheap","check","chest","chief","child","china","chose","civil","claim","class","clean","clear","click","clock","close","coach","coast","could","count","court","cover","craft","crash","cream","crime","cross","crowd","crown","curve","cycle","daily","dance","dated","dealt","death","debut","delay","depth","doing","doubt","dozen","draft","drama","drawn","dream","dress","drill","drink","drive","drove","dying","eager","early","earth","eight","elite","empty","enemy","enjoy","enter","entry","equal","error","event","every","exact","exist","extra","faith","false","fault","fiber","field","fifth","fifty","fight","final","first","fixed","flash","fleet","floor","fluid","focus","force","forth","forty","forum","found","frame","frank","fraud","fresh","front","fruit","fully","funny","giant","given","glass","globe","going","grace","grade","grand","grant","grass","great","green","gross","group","grown","guard","guess","guest","guide","happy","harry","heart","heavy","hence","henry","horse","hotel","house","human","ideal","image","index","inner","input","issue","japan","jimmy","joint","jones","judge","known","label","large","laser","later","laugh","layer","learn","lease","least","leave","legal","level","lewis","light","limit","links","lives","local","logic","loose","lower","lucky","lunch","lying","magic","major","maker","march","maria","match","maybe","mayor","meant","media","metal","might","minor","minus","mixed","model","money","month","moral","motor","mount","mouse","mouth","movie","music","needs","never","newly","night","noise","north","noted","novel","nurse","occur","ocean","offer","often","order","other","ought","paint","panel","paper","party","peace","peter","phase","phone","photo","piece","pilot","pitch","place","plain","plane","plant","plate","point","pound","power","press","price","pride","prime","print","prior","prize","proof","proud","prove","queen","quick","quiet","quite","radio","raise","range","rapid","ratio","reach","ready","refer","right","rival","river","robin","roger","roman","rough","round","route","royal","rural","scale","scene","scope","score","sense","serve","seven","shall","shape","share","sharp","sheet","shelf","shell","shift","shirt","shock","shoot","short","shown","sight","since","sixth","sixty","sized","skill","sleep","slide","small","smart","smile","smith","smoke","solid","solve","sorry","sound","south","space","spare","speak","speed","spend","spent","split","spoke","sport","staff","stage","stake","stand","start","state","steam","steel","stick","still","stock","stone","stood","store","storm","story","strip","stuck","study","stuff","style","sugar","suite","super","sweet","table","taken","taste","taxes","teach","teeth","terry","texas","thank","theft","their","theme","there","these","thick","thing","think","third","those","three","threw","throw ","tight","times","tired","title","today","topic","total","touch","tough","tower","track","trade","train","treat","trend","trial","tried","tries","truck","truly","trust","truth","twice","under","undue","union","unity","until","upper","upset","urban","usage","usual","valid","value","video","virus","visit","vital","voice","waste","watch","water","wheel","where","which","while","white","whole","whose","woman","women","world","worry","worse","worst","worth","would","wound","write","wrong"];
    const num = Math.floor(Math.random() * words.length);
    currentWord = words[num].toUpperCase();
}


function updateLetters(val = null) {
    if (val == null) { currentGuess = document.getElementById("entryBox").value; } // Handles keyboard updates
    else {
        currentGuess = document.getElementById("entryBox").value;
        if (currentGuess.length < 5) { 
            document.getElementById("entryBox").value = currentGuess + val; // Handles onscreen keyboard updates 
        }
    }


}

function clearEntry() {
    document.getElementById("entryBox").value = "";
}

function backEntry() {
    currentGuess = document.getElementById("entryBox").value;
    document.getElementById("entryBox").value = currentGuess.substring(0, currentGuess.length - 1)
}




function submitGuess() {
    currentGuess = document.getElementById("entryBox").value.toUpperCase();
    currentWord = currentWord.toUpperCase();

    if ((currentGuess.length == 5) && stillPlaying) {
        guesses[lives] = currentGuess;
        
        let currGuess = document.getElementById("guess" + lives.toString());
        currGuess.innerHTML = currentGuess.toUpperCase();
        let newStr = "";
        for(let i = 0; i < currGuess.innerHTML.length; i++) {
            if (currGuess.innerHTML.charAt(i) == currentWord.charAt(i)) {
                newStr += '<span style="color: lightGreen">' + currGuess.innerHTML.charAt(i) + '</span>';
            }
            else {
                newStr += currGuess.innerHTML.charAt(i);
            }
        } 
        currGuess.innerHTML = newStr

        if (currentGuess == currentWord) {
            document.getElementById("entryBox").style.border = "solid lightgreen 5px";
            stillPlaying = false;
            result(true);
        }
        else {
            document.getElementById("entryBox").value = "";

            lives--;
            document.getElementById("numOfGuess").innerHTML = "Lives: " + lives;

            checkLives();
            document.getElementById("entryBox").style.border = "solid red 5px";
        }
        checkLives();
    }

    
}


function checkLives() {
    if (lives == 0) {
        stillPlaying = false;
        result(false)
    }
}

function result(res) {
    if (res) {
        let txt = document.getElementById("headerContainer");
        let kbd = document.getElementById("Keyboard");
        txt.style.color = "lightGreen"; 
        txt.innerHTML = "You Won!";
        kbd.style.backgroundColor = "lightGreen";
    }
    else {
        let txt = document.getElementById("headerContainer");
        let kbd = document.getElementById("Keyboard");
        txt.style.color = "red";
        txt.innerHTML = "You Lost! Word Was: " + currentWord;
        kbd.style.backgroundColor = 'rgb(158, 61, 61)';
    }
}