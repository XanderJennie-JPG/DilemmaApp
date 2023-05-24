//A = Efficient
//B = Loyaal (Patientenbelang/Collegialiteit)
//C = Informatiebeveiliging
const questions = [
  {
    //1
    text: "Je zit aan een balie en vindt daar een afdelingsbezettingsoverzicht (abo). Je staat onder druk om nog snel een rapportage op te stellen. Wat doe je?",
    answers: [
      {
        text: "Je pakt het abo en gooit het weg in de papierbak. Je spreekt je collega’s niet aan.",
        value: "A",
      },
      {
        text: "Je laat het abo liggen. Een collega heeft dit vast nodig.",
        value: "B",
      },
      { text: "Je pakt het abo op en spreekt je collega’s aan.",
       value: "C" },
    ],
  },
  {
    //2
    text: "Een collega is nogal chaotisch en vergeet snel inloggegevens. Als je langs de werkplek van de collega loopt zie je een post-it briefje op het bureau geplakt met daarop de inloggegevens genoteerd. Vorige week heb je ook al een vervelende woordenwisseling gehad met deze collega. Wat doe je?",
    answers: [
      { text: "Je verwijdert de post-it en je spreekt je collega aan.",
       value: "C" },
      {
        text: "Je verwijdert de post-it, gezien de drukte spreek je je collega nu niet aan en denkt het op een later moment te doen. Dat moment komt niet.",
        value: "B",
      },
      {
        text: "Er komen toch nooit onbevoegden op deze werkplek, laat maar zitten.",
        value: "A",
      },
    ],
  },
  {
    //3
    text: "Je werkzaamheden lopen uit en er zit al 15 minuten een patiënt op je te wachten. Je handelt snel en print de verpleegkundige overdracht uit. Bij de printer blijkt dat je per ongeluk de overdracht 2 keer hebt uitgeprint.",
    answers: [
      {
        text: "Je gooit de extra kopie in een papierversnipperaar of daarvoor bestemde afgesloten bak aan het andere eind van de gang.",
        value: "C",
      },
      {
        text: "Je neemt beide documenten mee en neemt je voor deze later in de papierversnipperaar te gooien. Je vindt ze later in de kleedkamer in je zak en gooit ze daar weg.",
        value: "B",
      },
      {
        text: "Je gooit de extra kopie in de gewone prullenbak naast de printer.",
        value: "A",
      },
    ],
  },
  {
    //4
    text: "Je bent patiëntendossiers aan het bijwerken. Een collega vraagt je heel even kort te helpen bij een patiënt in de kamer tegenover, Je bent al een paar keer eerder weggeroepen. Inloggen na vergrendelen kost een minuut of twee.",
    answers: [
      {
        text: "Als je opstaat vergrendel je altijd je PC, behalve als je weet dat je snel terug bent.",
        value: "A",
      },
      {
        text: "Je gaat snel helpen en vraagt een andere collega even op te letten.",
        value: "B",
      },
      {
        text: "Je vergrendelt je PC.",
        value: "C",
      },
    ],
  },
  {
    //5
    text: "Je bent patiëntendossiers aan het bijwerken, een collega van een andere afdeling, vraagt je wat en kijkt over je schouder mee en ziet daar patiëntengegevens op het scherm.",
    answers: [
      {
        text: "Je spreekt je collega aan en vergrendelt de PC.",
        value: "C",
      },
      {
        text: "Je draait het scherm zodat de collega niet kan meekijken.",
        value: "A",
      },
      {
        text: "Je doet niets want het kan toch geen kwaad.",
        value: "B",
      },
    ],
  },
  {
    //6
    text: "Met de paslezer open je de deur naar een afgesloten bouwdeel. Er loopt iemand in een witte jas, zonder pasje, achter je aan naar binnen, die je niet herkent. Wat doe je?",
    answers: [
      {
        text: "Je spreekt de persoon niet aan: het zal wel goed zijn.",
        value: "B",
      },
      {
        text: "Je belt de beveiliging, zodat iemand anders checkt of deze persoon hier mag komen.",
        value: "A",
      },
      {
        text: "Je spreekt de persoon aan, “mag ik uw pasje even zien?”",
        value: "C",
      },
    ],
  },
  {
    //7
    text: "Je hebt net dhr. Janssen gesproken over het verloop van zijn behandeling. Hij gaf aan zich eenzaam te voelen, omdat hij sinds zijn opname nog geen bezoek heeft gehad. Even later loopt er een mevrouw binnen op de afdeling die vraagt in welke kamer dhr. Janssen ligt. Ze zegt de buurvrouw van dhr. Janssen te zijn. Je moet snel door naar een vergadering.",
    answers: [
      {
        text: "Je verwijst mevrouw naar de receptie.",
        value: "A",
      },
      {
        text: "Je bent blij dat de buurvrouw er is voor dhr. Janssen. Je verwijst haar door naar de kamer.",
        value: "B",
      },
      {
        text: "Je checkt bij de dhr. Janssen of hij wil dat deze mevrouw op bezoek komt.",
        value: "C",
      },
    ],
  },
  {
    //8
    text: "Er is een tekort aan personeel op de afdeling. Er is gelukkig een nieuwe collega ingeroosterd die patiënten aan het helpen is. Ze heeft alleen nog geen account gekregen. Ze vraagt je hulp om toch te kunnen rapporteren.",
    answers: [
      {
        text: "Je zet je scherm open en zegt tegen je collega dat ze kan rapporteren, mits ze haar eigen naam daarbij zet.",
        value: "A",
      },
      {
        text: "Je verwijst je collega door naar de leidinggevende.",
        value: "C",
      },
      {
        text: "Je voert zelf de gegevens van de collega’s in.",
        value: "B",
      },
    ],
  },
  {
    //9
    text: "Een jou bekende specialist (uit een ander ziekenhuis) waarnaar een patiënt verwezen is, belt op omdat zij denkt dat het dossier van een patiënt niet compleet is en eist informatie over de patiënt die een tijdje op jouw afdeling verbleef vanwege een complicatie.",
    answers: [
      {
        text: "Om de beste zorg te kunnen verlenen voor de patiënt deel je de informatie.",
        value: "B",
      },
      {
        text: "Deze informatie deel je alleen als de patiënt aantoonbaar akkoord is dat de informatie wordt verstrekt.",
        value: "C",
      },
      {
        text: "Je wil de externe specialist graag helpen en deelt de informatie.",
        value: "A",
      },
    ],
  },
  {
    //10
    text: "Enige tijd geleden was er een patiënt waarvan je je nu afvraagt of de diagnose en daarbij behorende behandeling wel de goede was. Inmiddels ligt deze patiënt op een andere afdeling.",
    answers: [
      {
        text: "Je vraagt aan een collega of zij meer informatie heeft over de betreffende patiënt.",
        value: "B",
      },
      {
        text: "Je zoekt geen informatie op over de patiënt, ook al ben je wel benieuwd.",
        value: "C",
      },
      {
        text: "Als je terug bent op je werkplek kijk je even in het dossier hoe het met haar gesteld is.",
        value: "A",
      },
    ],
  },
];

export default questions;
