$(document).ready(function () {

    // mot en tahitien par catégorie
    var categories = [
        ["HO՚E", "AROMANAVA", "FA'AORAORA", "HAORAORA", "API", "ORA", "OUMA", "ONO", "NOHU", "MAHIMAHI",
        "URU", "TARENA", "ORAORA", "ARAVAITAIO", "MAIORE", "ANUANEI", "AOA", "APOAHU", "AREA", "ATARA", "AURI", "AUTE",
        "FA'AEHO", "FA'ATA'A", "FA'ATUFA'A", "FA'AUTA", "INA'UANEI", "'INO", "MAEMAE", "MAIRE", "MAORI", "MARUHI", "MEHARA", "NANA", "NO", "'OHINUHINU", "'OPIRIPIRI",
        "'ORAVA", "PAE'A", "PA'IFE'E", "PAPARU", "PATU", "PETI", "PI'AVARE", "PONAO", "PUERO", "PU'OI", "RA'IRA", "RARO", "RIARIA ", "RUHERUHE", "TA", "TAFARA", "TAHARA'INO",
        "TAHUPE", "AHURAHURA", "TA'ITAHI", "TAMAUTA'A", "TAPANEHI", "TAPAPE", "TARERE", "TARIARIA", "TATA'IHO'E", "TATA'ITAHI", "TATARA", "TĀVIRI", "TEIENEI", "TE'ITE'I", "TEIENEI",
        "TITAU", "TOARAU", "TOPAMOTO", "TOPATARERE", "TOROTEA", "TUROTO", "TŪTAU", "TUTUAUTARA", "VAIFAU", "VAVI", "VERO", "AFATA", "TĀ'I", "TAI'ATA", "TAIATEA", "TAIERE", "TAIERO",
         "TAIHO", "TAIHORAHORA", "TAIMARA", "TA'INIFA", "TĀ'IRITI'A", "TA'IRORO'O", "TAIROTO", "TA'IRURURA'A", "TAMA'A", "TAMA'ARA'A", "TAMARU"
        ]

    ];
    console.log(categories);
    var randomCategoryArray = categories[Math.floor((Math.random() * categories.length))];
    var randomWord = (randomCategoryArray[Math.floor((Math.random() * randomCategoryArray.length))]).toUpperCase();
    console.log(randomWord);
    var randomWordArray = randomWord.split("");



    // Print category name
    if ($.inArray("HO՚E", randomCategoryArray) > -1) {
        $(".category").text("Reo Tahiti");

    }
    // Print definition


    // Draw squares for secret word & hide letters
    for (var i = 0; i < randomWord.length; i++) {
        $('#container').append('<div class="letter ' + i + '"></div>');
        $('#container').find(":nth-child(" + (i + 1) + ")").text(randomWordArray[i]);
        $(".letter").css("color", "#5cd62f");
    }

    // Button click function
    var wrongGuesses = 0;
    $("button").on("click", function () {
        $(this).addClass("used");
        $(this).prop("disabled", "true");
        var matchFound = false;

        // Check if clicked letter is in secret word
        var userGuess = $(this).text();
        for (var i = 0; i < randomWord.length; i++) {
            if (userGuess === randomWord.charAt(i)) {
                $('#container').find(":nth-child(" + (i + 1) + ")").css("color", "#EFEFEF").addClass("winner");
                matchFound = true;
            }
        }

        //Check for winner
        var goodGuesses = [];
        $(".letter").each(function (index) {
            if ($(this).hasClass("winner")) {
                goodGuesses.push(index);
                if (goodGuesses.length === randomWordArray.length) {
                    $("#container").hide();
                    $("button").prop("disabled", "true");
                    $(".category").text("O'ia ua ma'i te reo!"+ " " + randomWord);
                    $(".category").append("<br><button enabled class='play-again'>fa'ahou o'ia?</button>");
                }
            }
        });

        // If no match, increase count and add appropriate image
        if (matchFound === false) {
            wrongGuesses += 1;
            $("#hangman").attr("src", "img/" + wrongGuesses + ".png");
        }

        // If wrong guesses gets to 7 exit the game
        if (wrongGuesses === 7) {
            $("#container").hide();
            $("button").prop("disabled", "true");
            $(".category").text("Aita! eha ta oe fifi'?"+ " " + randomWord);
            $(".category").append("<br><button enabled class='play-again'>Tamata fa'ahou ?</button>");
        }

        // Play again button/Boutton pour recommencer
        $(".play-again").on("click", function () {
            location.reload();
        });

    }); // End button click/fin de la function du boutton.

}); // End document.ready

// dans le futur rajouter la définition des mots même si la personne gagne,ou Perd la partie.