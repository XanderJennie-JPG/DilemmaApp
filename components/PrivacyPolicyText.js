import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GlobalStyle from "../components/GlobalStyle";

export default function PrivacyPolicyText() {
  return (
    <View>
      <Text style={[styles.text, { fontWeight: "bold" }]}>
        Wat is het dilemma spel?
      </Text>
      <Text
        style={[
          GlobalStyle.CustomFont,
          styles.TextBetween,
          { textAlign: "center" },
        ]}
      >
        In dit spel confronteren we je met dilemma's die je op je werk tegen zou
        kunnen komen.
      </Text>
      <Text
        style={[
          GlobalStyle.CustomFont,
          styles.TextBetween,
          { textAlign: "center" },
        ]}
      >
        Dit doen we door je te vragen wat je zou doen in 10 verschillende
        situaties. We hebben geprobeerd steeds drie realistische alternatieven
        te schetsen.
      </Text>
      <Text
        style={[
          GlobalStyle.CustomFont,
          styles.TextBetween,
          { textAlign: "center" },
        ]}
      >
        Geen van de alternatieven is fout. De bedoeling is om vooral dat aan te
        kruisen, wat je in de praktijk het meest realistisch lijkt, niet “wat je
        denkt dat je zou moeten doen”.
      </Text>
      <Text style={[styles.text, { fontWeight: "bold" }]}>
        Doel en grondslag van het verwerken van gegevens{"\n"}
      </Text>
      <Text style={[styles.text]}>
        We verzamelen, gebruiken en bewaren uw gegevens om de vraag van het
        onderzoek “hoe gaan medewerkers om met dilemma’s op het gebied van
        informatiebeveiliging en privacy?” te kunnen beantwoorden.
      </Text>
      <Text style={[styles.text, { color: "red" }]}>
        Alleen u als gebruiker heeft toegang tot de door u gegeven antwoorden
        (niet de onderzoekers?). De uitkomsten weergegeven in geaggregeerde
        rapportages zijn niet herleidbaar tot individuele gebruikers (dit is dan
        weer wel toegankelijk voor onderzoekers?)
      </Text>
      <Text style={[styles.text]}>
        Wij gebruiken alleen gegevens die daadwerkelijk nodig zijn voor het goed
        laten verlopen van het dilemmaspel. Hieronder staat per verwerking welke
        persoonsgegevens wij waarvoor gebruiken en op welke grondslag dit is
        gebaseerd. {"\n"}
      </Text>
      <Text style={[styles.text]}>
        {`\u2043`} Accountregistratie{"\n"}
        {`\u2022`} Grondslag is toestemming {"\n"}
        {`\u2022`} Welke gegevens? (nickname, afdeling) {"\n"}
        {"\n"}
        {`\u2043`} Spelmodules/service van de app [indien van toepassing] {"\n"}
        {`\u2022`} Grondslag is toestemming {"\n"}
        {`\u2022`} Welke gegevens? Alleen wat je invult bij de dilemma’s, geen
        additionele persoonsgegevens. {"\n"}
        {`\u2022`} Voor wie is dit toegankelijk? Alleen voor onderzoekers.{" "}
        {"\n"}
        {"\n"}
        {`\u2043`} Communicatie{"\n"}
        {`\u2022`} Indien er een vraag/klacht is over verwerking
        persoonsgegevens of over de app verwerken we persoonsgegevens, via de
        contactgegevens hieronder/hier: [contactgegevens]. {"\n"}
        {`\u2022`} Als je contact opneemt worden aanvullende gegevens verwerkt
        om dit proces te faciliteren. Gegevens zijn: naam, contactinformatie
        (e-mailadres), informatie die je in je vraag of klacht neerzet,
        informatie die verder in je e-mail staat (bijvoorbeeld je functie,
        organisatie). Zodra de vraag/klacht is opgelost verwijderen wij jouw
        persoonlijke gegevens die verwerkt zijn in het proces van afhandeling
        van deze vraag/klacht. {"\n"}
        {`\u2022`} Grondslag is gerechtvaardigd belang. Het is in het belang van
        de organisatie dat vragen en klachten juist afgehandeld worden zodat het
        dilemma spel op de juiste manier werkt voor de gebruikers.{"\n"}
      </Text>
      <Text style={[styles.text, { fontWeight: "bold" }]}>
        Derde partijen en verwerkers
      </Text>
      <Text style={[styles.text]}>
        Er worden geen derde partijen of verwerkers ingezet voor deze
        verwerking. Je data wordt niet geleend, verkocht, gedeeld of op een
        andere manier toegankelijk gemaakt voor derde partijen. Toegang is
        strikt gelimiteerd tot developers (voor verder ontwikkelen app) en
        onderzoekers (voor onderzoeksdoeleinden zoals [invullen]).{"\n"}
        [X] is de verwerkingsverantwoordelijke t.a.v. het Dilemma spel en verder
        zijn er alleen gebruikers (personen die een account aanmaken en de app
        gebruiken).{"\n"}
      </Text>
      <Text style={[styles.text, { fontWeight: "bold" }]}>Beveiliging</Text>
      <Text style={[styles.text]}>
        [X] heeft organisatorische en technische maatregelen genomen om je
        persoonlijke gegevens te beschermen. [Om uw privacy te beschermen slaan
        we uw gegevens op op een afgeschermde server van de Haagse Hogeschool,
        waartoe alleen de onderzoekers toegang hebben. Geen van deze gegevens
        worden gedeeld met derden. In rapporten en publicaties over het
        onderzoek wordt niet op persoonsniveau gerapporteerd zodat niemand kan
        terughalen dat het over u ging.] Voor meer informatie kan je contact
        opnemen middels de contactgegevens hieronder. {"\n"}
      </Text>
      <Text style={[styles.text, { fontWeight: "bold" }]}>
        Dataretentie{"\n"}
      </Text>
      <Text style={[styles.text]}>
        De opgeslagen gegevens worden niet langer bewaard dan nodig voor het
        doel van het onderzoek. [X] slaat je nickname en individuele
        statistieken (gegenereerd vanuit je dilemmakeuzes) op zo lang je de app
        hebt geïnstalleerd op je apparaat. Als je de app de-installeert worden
        deze gegevens [verwijderd]/[geaggregeerd opgeslagen]/[de dilemma keuzes
        worden opgeslagen, gelinkt aan je nickname en geaggregeerd in algemene
        statistieken over dilemmakeuzes].{"\n"}
      </Text>
      <Text style={[styles.text, { fontWeight: "bold" }]}>
        Rechten van betrokkenen{"\n"}
      </Text>
      <Text style={[styles.text]}>
        Op grond van de AVG heeft elke betrokkene rechten om een effectieve
        controle over zijn/haar persoonsgegevens uit te oefenen. In de context
        van het dilemma spel faciliteren we de volgende rechten:{"\n"}
        {`\u2043`} Recht van verwijdering van persoonsgegevens. Om dit recht uit
        te oefenen moeten wij je identiteit (nickname) verifiëren. [Dit doe je
        door ons een e-mail te sturen naar het hieronder genoemde adres met a)
        het verzoek tot verwijdering, en b) een screenshot van je nickname in de
        app ([te zien bij instellingen]). Vervolgens verwijder je de dilemma app
        van je telefoon.]{"\n"}
        {`\u2043`} Recht om toestemming in te trekken. Om dit recht uit te
        oefenen verwijder je de app van je telefoon. Hierdoor stopt de
        verwerking van je persoonsgegevens vanaf dat moment (waarop je je
        toestemming intrekt). [opnemen of eventuele gegevens bewaard blijven, al
        dan niet herleidbaar tot nickname en dat deze niet herleidbaar zijn naar
        persoon].{"\n"}
      </Text>
      <Text style={[styles.text, { fontWeight: "bold" }]}>Klachten{"\n"}</Text>
      <Text style={[styles.text]}>
        Als je een klacht hebt dat kan je ons bereiken via de contactgegevens
        hieronder. Je hebt ook het recht om een klacht in te dienen bij de
        toezichthoudende autoriteit voor gegevensbescherming, de Autoriteit
        Persoonsgegevens. Zie voor de button (rechtsboven) op hun website:
        www.autoriteitpersoonsgegevens.nl. {"\n"}
      </Text>
      <Text style={[styles.text, { fontWeight: "bold" }]}>
        Contactgegevens{"\n"}
      </Text>
      <Text style={styles.text}>
        De verantwoordelijken over het dilemmaspel zijn bereikbaar via:
        [contactgegevens]{"\n"}
        Specifieke vragen over gegevensbescherming kunnen gestuurd worden aan de
        Functionaris Gegevensbescherming van de verantwoordelijke [X]:
        [contactgegevens].
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  TextBetween: {
    marginBottom: 20,
  },
  text: {
    opacity: 1,
    color: "rgba(19, 67, 146, 1)",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 27,
  },
});
