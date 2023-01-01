import React from "react";

function QuizSet() {
  const [selected, setSelected] = React.useState("");

  const questions = [
    {
      text: "Je zit aan een balie en vindt daar een afdelingsbezettingsoverzicht (abo). Je staat onder druk om nog snel een rapportage op te stellen. Wat doe je?",
      options: [
        {
          id: "A",
          text: "Je pakt het abo en gooit het weg in de daarvoor papierbak voor vertrouwelijke informatie. Je spreekt je collega’s niet aan want je vindt dat het ieders eigen verantwoordelijkheid is om de regels na te leven.",
        },
        {
          id: "B",
          text: "Je laat het abo liggen. Een collega heeft dit vast nodig.",
        },
        {
          id: "C",
          text: "Je pakt het abo op en spreekt je collega’s aan.",
        },
      ],
      text: "Een collega is nogal chaotisch en vergeet snel inloggegevens. Als je langs de werkplek van de collega loopt zie je een post-it briefje op het bureau geplakt met daarop de inloggegevens genoteerd. Vorige week heb je ook al een vervelende woordenwisseling gehad  met deze collega. Wat doe je?",
      options: [
        {
          id: "A",
          text: "Je spreekt je collega aan..",
        },
        {
          id: "B",
          text: "Je laat het er maar bij voor deze keer,  je ziet dat je collega het druk heeft en herinnert je nog de discussie van vorige week.",
        },
        {
          id: "C",
          text: "Er komen toch nooit onbevoegden op deze werkplek, laat maar zitten.",
        },
      ],
      text: "Je werkzaamheden lopen uit en er zit al 15 minuten een patiënt op je te wachten. Je handelt snel en print de verpleegkundige overdracht uit. Bij de printer blijkt dat je per ongeluk de overdracht 2 keer hebt uitgeprint.",
      options: [
        {
          id: "A",
          text: "Je gooit de extra kopie in een papierversnipperaar of daarvoor bestemde afgesloten bak aan het andere eind van de gang",
        },
        {
          id: "B",
          text: "Je neemt beide documenten mee en neemt je voor deze later in de papierversnipperaar te gooien. ",
        },
        {
          id: "C",
          text: "Je gooit de extra kopie in de gewone prullenbak naast de printer",
        },
      ],
      text: "Je bent patiëntendossiers aan het bijwerken. Een collega vraagt je even te helpen bij een patiënt (om recht op te gaan zitten/gemakkelijk in bed te laten liggen) in de kamer tegenover, Je bent al een paar keer eerder weggeroepen.",
      options: [
        {
          id: "A",
          text: "Omdat je snel weer terug bent laat je de PC openstaan (inloggen na vergrendelen kost een minuut of twee)",
        },
        {
          id: "B",
          text: "Je gaat snel helpen en vraagt de collega even op te letten.",
        },
        {
          id: "C",
          text: "Je vergrendelt je PC.",
        },
      ],
      text: "Met de paslezer open je de deur naar een afgesloten bouwdeel. Er loopt iemand in een witte jas mee zonder pasje achter je aan naar binnen die je niet herkent. Wat doe je?",
      options: [
        {
          id: "A",
          text: "Je spreekt de persoon niet aan: het zal wel goed zijn.",
        },
        {
          id: "B",
          text: "Je belt de beveiliging, zodat iemand anders checkt of deze persoon hier mag komen.",
        },
        {
          id: "C",
          text: "Je spreekt de persoon aan, “mag ik uw pasje even zien?",
        },
      ],
      text: "Je hebt net dhr. Janssen gesproken over het verloop van zijn behandeling. Hij gaf aan zich eenzaam te voelen, omdat hij sinds zijn opname nog geen bezoek heeft gehad. Even later loopt er een mevrouw binnen op de afdeling die vraagt in welke kamer dhr. Janssen ligt. Ze zegt de buurvrouw van dhr. Janssen te zijn.",
      options: [
        {
          id: "A",
          text: "Je moet snel door naar een vergadering en verwijst mevrouw naar de receptie.",
        },
        {
          id: "B",
          text: "Je bent blij dat de buurvrouw er is voor dhr. Janssen. Je verwijst haar door naar de kamer.",
        },
        {
          id: "C",
          text: "Je checkt bij de dhr. Janssen of hij wil dat deze mevrouw op bezoek komt.",
        },
      ],
      text: "Je hebt net dhr. Janssen gesproken over het verloop van zijn behandeling. Hij gaf aan zich eenzaam te voelen, omdat hij sinds zijn opname nog geen bezoek heeft gehad. Even later loopt er een mevrouw binnen op de afdeling die vraagt in welke kamer dhr. Janssen ligt. Ze zegt de buurvrouw van dhr. Janssen te zijn.",
      options: [
        {
          id: "A",
          text: "Je moet snel door naar een vergadering en verwijst mevrouw naar de receptie.",
        },
        {
          id: "B",
          text: "Je bent blij dat de buurvrouw er is voor dhr. Janssen. Je verwijst haar door naar de kamer.",
        },
        {
          id: "C",
          text: "Je checkt bij de dhr. Janssen of hij wil dat deze mevrouw op bezoek komt.",
        },
      ],
      text: "Er is een tekort aan personeel op de afdeling. Er is gelukkig een nieuwe collega ingeroosterd die patiënten aan het helpen is. Ze heeft alleen nog geen account gekregen. Ze vraagt je hulp om toch te kunnen rapporteren",
      options: [
        {
          id: "A",
          text: "Je zet je scherm open zodat je collega kan rapporteren op eigen naam.",
        },
        {
          id: "B",
          text: "Je verwijst je collega door naar de leidinggevende.",
        },
        {
          id: "C",
          text: "Je voert zelf de gegevens van de collega's in.",
        },
      ],
      text: "Een jou bekende specialist (uit een ander ziekenhuis) waarnaar een patiënt verwezen is, vermoedt dat het dossier van een patiënt niet compleet is en wil graag informatie over patiënt die een tijdje op jouw afdeling verbleef.",
      options: [
        {
          id: "A",
          text: "Om de beste zorg te kunnen verlenen voor de patiënt deel je de informatie.",
        },
        {
          id: "B",
          text: "Deze informatie deel je alleen als de patiënt aantoonbaar akkoord is dat de informatie wordt verstrekt.",
        },
        {
          id: "C",
          text: "Je wil de externe specialist graag helpen en deelt de informatie.",
        },
      ],
      text: "Enige tijd geleden was er een patiënt waarvan je je nu afvraagt of de diagnose en daarbij behorende behandeling wel de goede was. Inmiddels ligt deze patiënt op een andere afdeling.",
      options: [
        {
          id: "A",
          text: "Je vraagt aan een collega of zij meer informatie heeft over de betreffende patiënt.",
        },
        {
          id: "B",
          text: "Je zoekt geen informatie op over de patiënt, ook al ben je wel benieuwd.",
        },
        {
          id: "C",
          text: "Als je terug bent op je werkplek kijk je even in het dossier hoe het met haar gesteld is.",
        },
      ],
    },
  ];

  return <div>QuizSet</div>;
}

export default QuizSet;
