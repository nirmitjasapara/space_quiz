$(handleQuizApp);

function handleQuizApp() {
  handleQuestions();
  handleSelectOption();
}

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
          <input type = "radio" name="options" id="option${i+1}" value="${i+1}" tabindex ="${i+1}"> 
          <label for="option${i+1}"> ${question.options[i]}</label> <br/>
          <span id="js-r${i+1}"></span>
      `);
    }
    
  }
  function displayResults() {
    let resultHtml = $(
      STORE.HTML.displayStringPre
      + `${STORE.score}/${STORE.questions.length}`
      + STORE.HTML.displayStringPost);
    STORE.currentQuestion = 0;
    STORE.score = 0;
    $("main").html(resultHtml);
  }
function handleSelectOption() {
  $('body').on("submit",'#js-questions', function(event) {
    event.preventDefault();
    let currentQues = STORE.questions[STORE.currentQuestion];
    let selectedOption = Number($("input[name=options]:checked").val());
    if (!selectedOption) {
      alert("Choose an option");
      return;
    } 
    let id = "#js-r" + selectedOption;
    $('span').removeClass("right-answer wrong-answer");
    if(selectedOption === currentQues.answer) {
      STORE.score++; 
      $(`${id}`).append(`You got it right<br/>`);
      $(`${id}`).addClass("right-answer");
    }
    else {
      $(`${id}`).append(`You got it wrong <br/> The answer is 
        ${currentQues.options[currentQues.answer - 1]}<br/>`);
      $(`${id}`).addClass("wrong-answer");
    }

    STORE.currentQuestion++;
    $("#js-score").text(`Score: ${STORE.score}/${STORE.questions.length}`);
    $('#answer').hide();
    $("input[type=radio]").attr('disabled', true);
    $('#next-question').show();
  });
}
