$(document).ready(function() {

correct = 0;
current = 0;

/*--- Questions ---*/
    var questions = [{
            q: "Stone Brewery is one of the largest craft breweries in the United States. While the widely known “first” location is in Escondido, California, can you guess where the true first location of Stone was?",
            s: ["San Marcos, CA", "Del Mar, CA", "Encinitas, CA"],
            a: 0,
            
            
        }, {
            q: "San Diego is known as the “Craft Beer Capital of the World” - can you guess how many craft breweries are located in the county?",
            s: ["20", "101", "56"],
            a: 1,
            
            
        }, {
            q: "San Diegans  are “hop heads” because we love this style of beer:",
            s: ["Wheat", "Lager", "IPA"],
            a: 2,
            
            
        }, {
            q: "“West Coast IPA” and “San Diego Saison” are brewed by which company?",
            s: ["Sierra Nevada", "Green Flash", "Stone"],
            a: 1,
            
            
        }, {
            q: "Although Stone may be widely known, which of the following San Diego breweries was named World Champion Small Brewery in 2010?",
            s: ["Ballast Point", "Societe", "Belching Beaver"],
            a: 0,
            
            
        }]

/*--- On Submit ---*/
$("#questionArea").on("click", "#submit", function (event) {
        checkAnswer();
        current++;
            console.log(current);
        $("#questionArea").hide();
        $("#resultDiv").show();
        event.preventDefault();
    });

/*--- Continue Link ---*/


$("#resultDiv").on("click", "#cont", function (event) {
        if (current < 5) {

            nextQuestion();
            $('#resultDiv').hide();
            $('.resultNegative').hide();
            $('.resultPositive').hide();
            $('#questionArea').show();
        }else{
            $('#questionArea').hide();
            $('#resultDiv').hide();
            $('.resultNegative').hide();
            $('.resultPositive').hide();
            $('#final').show();
            $("#final").html("You correctly answered " +correct+ " out of 5!");
        };
        event.preventDefault();
    });


/*--- Next Question Function ---*/ 

function nextQuestion() {
	var newQuestion = '<span class="question">'+questions[current].q+'</span><br><br><div id="answerArea"><input type="radio" name="option" class="option" value="0">&nbsp;<span class="answer">'+questions[current].s[0]+'</span><br><input type="radio" name="option" class="option" value="1">&nbsp;<span class="answer">'+questions[current].s[1]+'</span><br><input type="radio" name="option" class="option" value="2">&nbsp;<span class="answer">'+questions[current].s[2]+'</span><br><br></div><div id="questionArea"><input type="button" id="submit" value="Submit Answer"></span></div>';


$("#questionArea").html(newQuestion);
};

/*--- Answer Check Function ---*/

function checkAnswer() {
	
	var answer = $("input[type='radio']:checked").val();
	

		if (answer == questions[current].a) {
			correct++;
			
			$("#questionArea").hide();
			$("#resultDiv").show();
			$(".resultPositive").show();
			
			console.log("correct");
		}

		else {
			
			$("#questionArea").hide();
			$("#resultDiv").show();
			$(".resultNegative").show();
			console.log("incorrect");
		};

}

/*--- RETRY ---*/
/*--- Retry Link ---*/

$("final").on("click", "#retry", function(event) {
	retry();
	event.preventDefault();
});

/*--- Retry Function---*/

function retry() {

       correct = 0;
        current = 0;
        $("#questionArea").show();
        $('#final').hide();
    }



})