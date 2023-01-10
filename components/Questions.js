//A = Efficient (Patientenbelang)
//B = Loyaal (Integriteit)
//C = IB Bewust (Informatiebeveiliging)
const questions = [
  {
    //1
    text: "Je zit aan een balie en vindt daar een afdelingsbezettingsoverzicht (abo). Je staat onder druk om nog snel een rapportage op te stellen. Wat doe je?",
    answers: [
      {
        text: "Je pakt het abo en gooit het weg in de daarvoor papierbak voor vertrouwelijke informatie. Je spreekt je collega’s niet aan want je vindt dat het ieders eigen verantwoordelijkheid is om de regels na te leven.",
        value: "A",
      },
      {
        text: "Je laat het abo liggen. Een collega heeft dit vast nodig.",
        value: "B",
      },
      { text: "Je pakt het abo op en spreekt je collega’s aan.", value: "C" },
    ],
  },
  {
    //2
    text: "Een collega is nogal chaotisch en vergeet snel inloggegevens. Als je langs de werkplek van de collega loopt zie je een post-it briefje op het bureau geplakt met daarop de inloggegevens genoteerd. Vorige week heb je ook al een vervelende woordenwisseling gehad  met deze collega. Wat doe je?",
    answers: [
      { text: "Je spreekt je collega aan..", value: "C" },
      {
        text: "Je laat het er maar bij voor deze keer,  je ziet dat je collega het druk heeft en herinnert je nog de discussie van vorige week.",
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
        text: "Je neemt beide documenten mee en  neemt je voor deze later in de papierversnipperaar te gooien.",
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
    text: "Je bent patiëntendossiers aan het bijwerken. Een collega vraagt je even te helpen bij een patiënt (om recht op te gaan zitten/gemakkelijk in bed te laten liggen) in de kamer tegenover,  Je bent al een paar keer eerder weggeroepen.",
    answers: [
      {
        text: "Omdat je snel weer terug bent laat je de PC openstaan (inloggen na vergrendelen kost een minuut of twee).",
        value: "A",
      },
      {
        text: "Je gaat snel helpen en vraagt de collega even op te letten.",
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
        text: "Je spreekt collega aan en vergrendelt de PC..",
        value: "B",
      },
      {
        text: "Je draait het scherm zodat de collega niet kan meekijken.",
        value: "A",
      },
      {
        text: "Je doet niets want het kan toch geen kwaad",
        value: "C",
      },
    ],
  },
  {
    //6
    text: "Je ontdekt een fout in een administratie waar je niets mee te maken hebt. Wat doe je?",
    answers: [
      {
        text: "Je spreekt de persoon niet aan: het zal wel goed zijn..",
        value: "A",
      },
      {
        text: "Je belt de beveiliging, zodat iemand anders checkt of deze persoon hier mag komen.",
        value: "B",
      },
      {
        text: "Je spreekt de persoon aan, “mag ik uw pasje even zien?",
        value: "C",
      },
    ],
  },
  {
    //7
    text: "Je wordt geconfronteerd met persoonlijke informatie van een patiënt waarvan je weet dat het niet relevant is voor de behandeling. Wat doe je?",
    answers: [
      {
        text: "Je moet snel door naar een vergadering en verwijst mevrouw naar de receptie..",
        value: "A",
      },
      {
        text: "Je bent blij dat de buurvrouw er is voor dhr. Janssen. Je verwijst haar door naar de kamer.",
        value: "B",
      },
      {
        text: "Je checkt bij de dhr. Janssen of hij wil dat deze mevrouw op bezoek komt..",
        value: "C",
      },
    ],
  },
  {
    //8
    text: "Er is een tekort aan personeel op de afdeling. Er is gelukkig een nieuwe collega ingeroosterd die patiënten aan het helpen is. Ze heeft alleen nog geen account gekregen. Ze vraagt je hulp om toch te kunnen rapporteren.",
    answers: [
      {
        text: "Je zet je scherm open zodat je collega kan rapporteren op eigen naam..",
        value: "A",
      },
      {
        text: "Je verwijst je collega door naar de leidinggevende..",
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
    text: "Een jou bekende specialist (uit een ander ziekenhuis) waarnaar een patiënt verwezen is, vermoedt dat het dossier van een patiënt niet compleet is en wil graag informatie over patiënt die een tijdje op jouw afdeling verbleef.",
    answers: [
      {
        text: "Om de beste zorg te kunnen verlenen voor de patiënt deel je de informatie.",
        value: "A",
      },
      {
        text: "Deze informatie deel je alleen als de patiënt aantoonbaar akkoord is dat de informatie wordt verstrekt.",
        value: "C",
      },
      {
        text: "Je wil de externe specialist graag helpen en deelt de informatie.",
        value: "B",
      },
    ],
  },
  {
    //10
    text: "Enige tijd geleden was er een patiënt waarvan je je nu afvraagt of de diagnose en daarbij behorende behandeling wel de goede was. Inmiddels ligt deze patiënt op een andere afdeling.",
    answers: [
      {
        text: "Je vraagt aan een collega of zij meer informatie heeft over de betreffende patiënt.",
        value: "C",
      },
      {
        text: "Je zoekt geen informatie op over de patiënt, ook al ben je wel benieuwd.",
        value: "A",
      },
      {
        text: "Als je terug bent op je werkplek kijk je even in het dossier hoe het met haar gesteld is",
        value: "B",
      },
    ],
  },
];

export default questions;
