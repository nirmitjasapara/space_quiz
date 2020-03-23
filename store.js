const STORE = {
  HTML: {
    questionStringPre: `
    <div>
      <form id="js-questions" class="question-form">
        
        <fieldset>
          <div class="row question">
            <div class="col-12">
              <legend> `,
    questionStringPost: 
              `</legend>
            </div>
          </div>

          <div class="row options">
            <div class="col-12">
              <div class="js-options"> </div>
            </div>
          </div>


          <div class="row">
            <div class="col-12">
              <button type = "submit" id="answer" tabindex="5">Submit</button>
              <button type = "button" id="next-question" tabindex="6"> Next >></button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>`,
    displayStringPre: 
    `<div class="results">
      <form id="js-restart-quiz">
        <fieldset>
          <div class="row">
            <div class="col-12">
              <legend>Your Score is: `,
    displayStringPost: 
              `</legend>
            </div>
          </div>
          
          <div class="row">
            <div class="col-12">
              <button type="button" id="next-question"> Restart Quiz </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>`,
  },
  questions: [
    {
      question: "How much mass is in our universe?",
      options: [
        "about 10^15 kg", 
        "about 10^42 kg", 
        "about 10^53 kg", 
        "about 10^73 kg"
      ],
      answer: 3
    },
    {
      question: "How big is in our universe?",
      options: [
        "about 10^70 m^3",
        "about 10^80 m^3",
        "about 10^113 m^3",
        "about 10^150 m^3"
      ],
      answer: 2
    },
    {
      question: "How big is a Planck length?",
      options: [
        "about 10^-12 m",
        "about 10^-21 m",
        "about 10^-35 m",
        "about 10^-55 m"
      ],
      answer: 3
    },
    {
      question: "How big is a Planck mass?",
      options: [
        "about 10^-8 kg",
        "about 10^-21 kg",
        "about 10^-32 kg",
        "about 10^-53 kg"
      ],
      answer: 1
    },
    {
      question: "How big is a Planck time?",
      options: [
        "about 10^-9 s",
        "about 10^-11 s",
        "about 10^-13 s",
        "about 10^-44 s"
      ],
      answer: 4
    },
  ],
  currentQuestion: 0,
  score: 0
};