import React from "react";

function QuizSet() {
  const [selected, setSelected] = React.useState("");

  const questions = [
    {
      text: "Je zit op de werkplek en staat op om documenten met persoonsgegevens uit een kast te pakken. Dan zie je dat de kast openstaat. Je staat onder druk om nog snel een rapportage op te stellen. Wat doe je?",
      options: [
        {
          id: "A",
          text: "Je pakt de documenten en doet de kast op slot. Je spreekt je collega's niet aan want je vindt dat het ieders eigen verantwoordelijkheid is om de regelens na te leven.",
        },
        {
          id: "B",
          text: "Je pakt de documenten en laat de kast openstaan. Een collega is vast de sleutels verloren en heeft anders geen toegang meer.",
        },
        {
          id: "C",
          text: "Je pakt de documenten, doet de kast op slot en spreekt je collega's aan.",
        },
      ],
    },
  ];

  return <div>QuizSet</div>;
}

export default QuizSet;
