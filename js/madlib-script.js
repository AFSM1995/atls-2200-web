        // Madlib source: https://www.wordblanks.com/mad-libs/self-help/story_2446/
        console.log("marco");

        function libIt() {
            var madLib = document.getElementById("story");

            var companyName = document.getElementById("companyName").value;
            var adjective1 = document.getElementById("adjective1").value;
            var adjective2 = document.getElementById("adjective2").value;
            var adjective3 = document.getElementById("adjective3").value;
            var articleOfClothing = document.getElementById("articleOfClothing").value;
            var adjective4 = document.getElementById("adjective4").value;
            var adjective5 = document.getElementById("adjective5").value;
            var bodyPart1 = document.getElementById("bodyPart1").value;
            var verb1 = document.getElementById("verb1").value;
            var verb2 = document.getElementById("verb2").value;
            var noun1 = document.getElementById("noun1").value;
            var adjective6 = document.getElementById("adjective6").value;
            var adjective7 = document.getElementById("adjective7").value;
            var bodyPart2 = document.getElementById("bodyPart2").value;
            var noun2 = document.getElementById("noun2").value;
            var noun3 = document.getElementById("noun3").value;
            var pluralNoun1 = document.getElementById("pluralNoun1").value;
            var pluralNoun2 = document.getElementById("pluralNoun2").value;
            var adjective8 = document.getElementById("adjective8").value;
            var noun4 = document.getElementById("noun4").value;
            var verbEndingIng = document.getElementById("verbEndingIng").value;
            var pluralNoun3 = document.getElementById("pluralNoun3").value;
            var verb3 = document.getElementById("verb3").value;

            madLib.innerHTML = "Congratulations! You finally managed to get a job interview at " + companyName + ". Follow these " + adjective1 + " steps and youll be " + adjective2 + " for sure! 1 ) Make sure you dress appropriately. You should probably wear something like a " + adjective3 + " " + articleOfClothing + ". Make sure its not too " + adjective4 + " or " + adjective5 + ". Prospective employers do not like to see too much " + bodyPart1 + ". 2 ) Be sure to " + verb1 + " and " + verb2 + " your " + noun1 + " before the interview. Make sure your breath is " + adjective6 + " 3 ) Smile, be " + adjective7 + " and remember a firm " + bodyPart2 + " shake is always a plus! 4 ) Make sure to mention such topics as " + noun2 + " " + noun3 + " and " + pluralNoun1 + ". Be sure to avoid talking about " + pluralNoun2 + " They might get the wrong impression and think you are too " + adjective8 + ". 5 ) You may want to compliment your potential boss on his her " + noun4 + " and mention how much you enjoyed " + verbEndingIng + " with them. 6 ) Get plenty of " + pluralNoun3 + " the night before the interview and dont " + verb3 + " too much and you will do fine!";
        }

        var submitButton = document.getElementById('subButton');
        submitButton.addEventListener('click', libIt);