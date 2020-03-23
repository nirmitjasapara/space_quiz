function handleQuestions() {
  $('body').on('click','#next-question', (event) => {
    STORE.currentQuestion === STORE.questions.length?displayResults() : renderAQuestion();
  });
}
function renderAQuestion() {
  let question = STORE.questions[STORE.currentQuestion];
  updateQuestionCounterAndScore();
  $("main").html(
    STORE.HTML.questionStringPre
    + question.question
    + STORE.HTML.questionStringPost);
  updateOptions();
  $("#next-question").hide();
}
  function updateQuestionCounterAndScore() {
    const html = $(`<ul>
        <li id="js-answered">Questions Number: ${STORE.currentQuestion + 1}/${STORE.questions.length}</li>
        <li id="js-score">Score: ${STORE.score}/${STORE.questions.length}</li>
      </ul>`);
    $(".question-and-score").html(html);
  }
  
  /* Displays the options for the current question */
  function updateOptions()
  {
    let question = STORE.questions[STORE.currentQuestion];
    for(let i=0; i<question.options.length; i++)
    {
      $('.js-options').append(`
          <input type = "radio" name="options" id="option${i+1}" value= "${question.options[i]}" tabindex ="${i+1}"> 
          <label for="option${i+1}"> ${question.options[i]}</label> <br/>
          <span id="js-r${i+1}"></span>
      `);
    }
    
  }
function displayResults() {
  let resultHtml = $(
    `<div class="results">
      <form id="js-restart-quiz">
        <fieldset>
          <div class="row">
            <div class="col-12">
              <legend>Your Score is: ${STORE.score}/${STORE.questions.length}</legend>
            </div>
          </div>
        
          <div class="row">
            <div class="col-12">
              <button type="button" id="restart"> Restart Quiz </button>
            </div>
          </div>
        </fieldset>
    </form>
    </div>`);
    STORE.currentQuestion = 0;
    STORE.score = 0;
  $("main").html(resultHtml);
}
/*checks whether the chosen option is right or wrong and displays respective message*/ 
function handleSelectOption() {
  $('body').on("submit",'#js-questions', function(event) {
    event.preventDefault();
    let currentQues = STORE.questions[STORE.currentQuestion];
    let selectedOption = $("input[name=options]:checked").val();
    if (!selectedOption) {
      alert("Choose an option");
      return;
    } 
    let id_num = currentQues.options.findIndex(i => i === selectedOption);
    let id = "#js-r" + ++id_num;
    $('span').removeClass("right-answer wrong-answer");
    if(selectedOption === currentQues.answer) {
      STORE.score++; 
      $(`${id}`).append(`You got it right<br/>`);
      $(`${id}`).addClass("right-answer");
    }
    else {
      $(`${id}`).append(`You got it wrong <br/> The answer is "${currentQues.answer}"<br/>`);
      $(`${id}`).addClass("wrong-answer");
    }

    STORE.currentQuestion++;
    $("#js-score").text(`Score: ${STORE.score}/${STORE.questions.length}`);
    $('#answer').hide();
    $("input[type=radio]").attr('disabled', true);
    $('#next-question').show();
  });
}

function handleRestart() {
  $('body').on('click','#restart', (event) => {
    renderAQuestion();
  });
}

function handleQuizApp() {
  handleQuestions();
  handleSelectOption();
  handleRestart();
}

$(handleQuizApp);