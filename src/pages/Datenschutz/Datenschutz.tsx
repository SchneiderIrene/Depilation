import {
  DatenschutzContainer,
  TextBox,
  TextBoxTable,
  TextPstyled,
  TextSection,
  TextSubTitle,
  TextTitle,
} from './styles';

function Datenschutz() {
  return (
    <DatenschutzContainer>
      <TextSection>
        <TextTitle>Datenschutzerklärung (Privacy Policy)</TextTitle>
        <TextSubTitle>Stand: 24. Februar 2026</TextSubTitle>
        <TextSubTitle>I. Verantwortliche Stelle</TextSubTitle>
        <TextBox>
          <TextPstyled>
            Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
          </TextPstyled>
          <TextPstyled>Alina Soloshchenko </TextPstyled>
          <TextPstyled>Märchenweg 14, 21077 Hamburg</TextPstyled>
          <TextPstyled>Tel.: +49 160 3212 983</TextPstyled>
          <TextPstyled>E-Mail: kontakt.bisnes@gmail.com</TextPstyled>
          <TextPstyled>Website: https://depilation.vercel.app/</TextPstyled>
        </TextBox>
        <TextSubTitle>II. Datenschutzbeauftragter</TextSubTitle>
        <TextBox>
          <TextPstyled>
            Ein gesonderter Datenschutzbeauftragter ist nicht bestellt, da die Voraussetzungen des §
            38 BDSG nicht vorliegen.
          </TextPstyled>
        </TextBox>
        <TextSubTitle>III. Allgemeine Hinweise</TextSubTitle>
        <TextBox>
          <TextPstyled>
            Wir verarbeiten personenbezogene Daten nur im Rahmen der gesetzlichen Bestimmungen
            (DSGVO, BDSG, TTDSG/TDDDG). Eine Nutzung der Website stellt keine Einwilligung dar. Eine
            Verarbeitung erfolgt nur, wenn eine Rechtsgrundlage besteht.
          </TextPstyled>
        </TextBox>
        <TextSubTitle>IV. Erhobene Daten und Zwecke</TextSubTitle>
        <TextBox>
          <TextSubTitle>1. Server-Logfiles (bei jedem Aufruf)</TextSubTitle>
          <TextPstyled>
            IP-Adresse (anonymisiert), Browser, OS, Referrer, Datum/Uhrzeit, aufgerufene Seiten.
          </TextPstyled>
          <TextPstyled>Zweck: Sicherheit, Fehleranalyse, Optimierung.</TextPstyled>
          <TextPstyled>
            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
          </TextPstyled>
          <TextPstyled>Speicherdauer: max. 30 Tage.</TextPstyled>
          <TextSubTitle>2. Terminbuchung / Kontakt / Dienstleistungen </TextSubTitle>
          <TextPstyled>
            Name, E-Mail, Telefon, Geburtsdatum, gewünschter Termin/Dienstleistung, evtl.
            Gesundheitsdaten (z. B. Allergien – nur mit ausdrücklicher Einwilligung).
          </TextPstyled>
          <TextPstyled>Zweck: Vertragsanbahnung/-erfüllung, Kundenbetreuung.</TextPstyled>
          <TextPstyled>
            Rechtsgrundlage:
            <li>Art. 6 Abs. 1 lit. b DSGVO</li>
            <li>- Art. 9 Abs. 2 lit. a DSGVO (Gesundheitsdaten)</li>
          </TextPstyled>
          <TextPstyled>
           Details zur Verarbeitung durch Bitrix24 (siehe Abschnitt VI).
          </TextPstyled>
          <TextSubTitle>3. Standortdaten (Geolocation) </TextSubTitle>
          <TextPstyled>Erhebung nur nach Browser-Freigabe.</TextPstyled>
          <TextPstyled>Zweck: Routenberechnung zum Salon.</TextPstyled>
          <TextPstyled>Art. 6 Abs. 1 lit. b oder lit. a DSGVO</TextPstyled>
          <TextPstyled>
            Speicherdauer: nur für die aktuelle Sitzung, keine dauerhafte Speicherung.
          </TextPstyled>
          <TextSubTitle>4. Online-Shop / Bestellungen </TextSubTitle>
          <TextPstyled>
            Erhobene Daten: Name, Adresse, E-Mail, Zahlungsdaten (über externe Anbieter),
            Bestellhistorie.
          </TextPstyled>
          <TextPstyled>Zweck: Vertragserfüllung, Lieferung, Abrechnung</TextPstyled>
          <TextPstyled>RRechtsgrundlage: Art. 6 Abs. 1 lit. b und lit. c DSGVO</TextPstyled>
          <TextPstyled>gemäß HGB/AO 10 Jahre</TextPstyled>

          <TextSubTitle>5. Kurse / Schulungen </TextSubTitle>
          <TextPstyled>
            Erhobene Daten: Name, E-Mail, Telefon, Zahlungsstatus, Teilnahmeinformationen.
          </TextPstyled>
          <TextPstyled>Zweck: Durchführung und Abrechnung.</TextPstyled>
          <TextPstyled>Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.</TextPstyled>
          <TextSubTitle>6. Umfragen / Feedback </TextSubTitle>
          <TextPstyled>
            Erhobene Daten: Name/E-Mail (optional), Bewertungen, Kommentare.
          </TextPstyled>
          <TextPstyled>Zweck: Qualitätsverbesserung</TextPstyled>
          <TextPstyled>Rechtsgrundlage: Art. 6 Abs. 1 lit. a oder f DSGVO.</TextPstyled>

          <TextSubTitle>7. Newsletter / E-Mail-Marketing (über Bitrix24 Marketing)</TextSubTitle>
          <TextPstyled>
            Erhobene Daten: E-Mail-Adresse, Name (optional), Öffnungs- und Klickdaten.
          </TextPstyled>
          <TextPstyled>
            Zweck: Information über Angebote, Tipps, Termine (Double-Opt-In).
          </TextPstyled>
          <TextPstyled>Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).</TextPstyled>
          <TextPstyled>Widerruf: Jederzeit per Abmelde-Link oder E-Mail.</TextPstyled>
          <TextPstyled>
           Dienstleister: Bitrix24 CRM — für Terminbuchung, CRM, Erinnerungen, Zahlungen und E-Mail-Marketing.
          </TextPstyled>
          <TextPstyled>
       AV-Vertrag (Data Processing Addendum / DPA) abgeschlossen für Bitrix24 — Details: DSGVO-konform.
          </TextPstyled>

          <TextSubTitle>8. Google Analytics 4 (GA4) </TextSubTitle>
          <TextPstyled>
            Erhobene Daten: pseudonymisierte Nutzungsdaten, anonymisierte IP, Gerätedaten,
            Verweildauer, Seitenaufrufe.
          </TextPstyled>
          <TextPstyled>Zweck: Analyse und Optimierung</TextPstyled>
          <TextPstyled>Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).</TextPstyled>
          <TextPstyled>Consent Mode v2 aktiviert</TextPstyled>

          <TextPstyled>Speicherdauer: bis zu 14 Monate.</TextPstyled>
          <TextPstyled>
            Empfänger: Google Ireland Ltd. USA-Übermittlung: EU-US DPF + SCC
          </TextPstyled>
        </TextBox>
        <TextSubTitle>V. Cookies und Consent-Management</TextSubTitle>
        <TextBox>
          <li><TextPstyled> Notwendige Cookies: für Funktionalität (z. B. Warenkorb, Termin-Session) – Art. 6 Abs. 1
            lit. f / TTDSG § 25 Abs. 2.</TextPstyled>
           
          </li>
          <li><TextPstyled>Analytische Cookies (Google Analytics): nur mit Einwilligung.</TextPstyled></li>
          <li><TextPstyled>Marketing/Remarketing: nur mit Einwilligung.</TextPstyled></li>
          <TextPstyled>Der Banner erscheint beim ersten Besuch und bietet:</TextPstyled>
          <li><TextPstyled>„Alle akzeptieren“</TextPstyled></li>
          <li><TextPstyled>„Alle ablehnen“ (gleichwertig, keine Täuschung)</TextPstyled></li>
          <li><TextPstyled>Granulare Auswahl (Einstellungen)</TextPstyled></li>
          <li><TextPstyled>Link zur Datenschutzerklärung</TextPstyled></li>
          <TextPstyled>
            Sie können Einwilligung jederzeit widerrufen / ändern (über Banner-Link
            „Cookie-Einstellungen“). Speicherdauer des Consent: 6–12 Monate oder bis Widerruf.
          </TextPstyled>
        </TextBox>
        <TextSubTitle>VI. Weitergabe von Daten / Auftragsverarbeiter</TextSubTitle>
        <TextBox>
          <TextPstyled>Daten werden weitergegeben nur bei:</TextPstyled>
          <li><TextPstyled>Einwilligung</TextPstyled></li>
          <li><TextPstyled>Vertragserfüllung</TextPstyled></li>
          <li><TextPstyled>Gesetzlicher Pflicht</TextPstyled></li>
          <li><TextPstyled>Auftragsverarbeitung (mit DPA)</TextPstyled></li>
          <TextPstyled>Externe Dienstleister (AV-Verträge / DPA abgeschlossen):</TextPstyled>
          <li><TextPstyled>Bitrix24 CRM — für Terminbuchung, CRM, Erinnerungen, Zahlungen und E-Mail-Marketing. Übermittlung in EU: DSGVO-konform.</TextPstyled>
            
          </li>
          <li><TextPstyled>Google Unternehmensprofil / Google Bewertungen</TextPstyled></li>
          <li><TextPstyled>Zahlungsanbieter: Bitrix24 Payments, Stripe, PayPal, Klarna</TextPstyled></li>
          <li><TextPstyled>Hosting: siehe Abschnitt VII</TextPstyled></li>
          <TextPstyled>Google Unternehmensprofil:</TextPstyled>
          <TextPstyled>
            Google ist eigenständiger Verantwortlicher. Wir erhalten nur aggregierte Statistiken und
            antworten auf Bewertungen ohne personenbezogene Daten offenzulegen.
          </TextPstyled>
          <TextPstyled>
            Wir unterhalten ein Google Unternehmensprofil (ehemals Google My Business), um unser
            Unternehmen in der Google-Suche und auf Google Maps darzustellen. Bei Interaktionen mit
            dem Profil (z. B. Lesen, Schreiben oder Ansehen von Bewertungen) verarbeitet Google
            personenbezogene Daten der Nutzer (z. B. Name/Nickname, Bewertungstext, IP-Adresse,
            Gerätedaten, Standortdaten).
          </TextPstyled>
          <TextPstyled>
            Primäre Verantwortung liegt bei Google Ireland Limited (für EWR) bzw. Google LLC (USA).
            Details zur Verarbeitung: https://policies.google.com/privacy?hl=de.
          </TextPstyled>
          <TextPstyled>
            Wir erhalten von Google aggregierte Statistiken (Insights) und können auf Bewertungen
            antworten. Bei der Beantwortung achten wir streng darauf, keine personenbezogenen Daten
            Dritter (z. B. vollständige Namen von Kunden) ohne Einwilligung preiszugeben.
          </TextPstyled>
          <TextPstyled>
            Falls wir Kunden aktiv zur Abgabe einer Bewertung einladen (z. B. automatisiert über
            Bitrix24 Appointments nach Termin), erfolgt dies nur auf Basis einer Einwilligung (Art. 6
            Abs. 1 lit. a DSGVO) oder berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO). Wir
            weisen in der Einladung auf die Datenschutzhinweise von Google hin.
          </TextPstyled>
          <TextPstyled>
            Rechtsgrundlage für unsere etwaige Verarbeitung (z. B. Antworten, Insights-Nutzung):
            Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Reputation-Management und
            Kundenservice).
          </TextPstyled>
          <TextPstyled>
            Interessenabwägung: Unser Interesse an der Pflege des Online-Profils und der
            Beantwortung von Feedback überwiegt die grundsätzlich geringen Eingriffe in die Rechte
            der Betroffenen, da Google primär verantwortlich ist, die Verarbeitung pseudonymisiert
            erfolgt und wir personenbezogene Daten Dritter nicht veröffentlichen.
          </TextPstyled>

          <li><TextPstyled>Google Ireland Ltd. (Analytics, USA-Übermittlung via EU-US DPF)</TextPstyled></li>
          <li><TextPstyled>Zahlungsanbieter, z. B. Bitrix24 Payments / Stripe Inc., PayPal, Crarna usw</TextPstyled></li>
          <li><TextPstyled>Hosting: Vercel Inc.</TextPstyled></li>
        </TextBox>
        <TextSubTitle>VII. Hosting</TextSubTitle>
        <TextBox>
          <TextPstyled>Unsere Website wird gehostet bei:</TextPstyled>
          <TextPstyled>Vercel Inc</TextPstyled>
          <TextPstyled>USA / EU-Standorte</TextPstyled>
          <TextPstyled>DPA abgeschlossen</TextPstyled>
          <TextPstyled>Übermittlung in die USA: EU-US DPF + SCC</TextPstyled>
          <TextPstyled>Zweck: Bereitstellung der Website</TextPstyled>
          <TextPstyled>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO</TextPstyled>
        </TextBox>
        <TextSubTitle>VIII. Drittland-Übermittlungen</TextSubTitle>
        <TextBox>
          <TextPstyled>
            Bei Übermittlungen in Drittländer (insbesondere USA) nutzen wir:
          </TextPstyled>
          <li><TextPstyled>EU-US Data Privacy Framework</TextPstyled></li>
          <li><TextPstyled>Standardvertragsklauseln (2021)</TextPstyled></li>
          <li><TextPstyled>zusätzliche technische Maßnahmen (Verschlüsselung, Pseudonymisierung)</TextPstyled></li>
          <TextPstyled>
            Restrisiko: Zugriff durch US-Behörden kann nicht vollständig ausgeschlossen werden.
          </TextPstyled>
        </TextBox>
        <TextSubTitle>IX. Speicherdauer (Tabelle)</TextSubTitle>
        <TextBoxTable>
          <table border={0} cellSpacing={0} cellPadding={5}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}> <TextPstyled>Kategorie</TextPstyled> </th>
                <th style={{ textAlign: 'left' }}><TextPstyled>Speicherdauer</TextPstyled></th>
                <th style={{ textAlign: 'left' }}> <TextPstyled>Grund</TextPstyled></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><TextPstyled>Logfiles</TextPstyled></td>
                <td><TextPstyled>7–30 Tage</TextPstyled></td>
                <td><TextPstyled>Sicherheit</TextPstyled></td>
              </tr>

              <tr>
                <td><TextPstyled>Termin/Kontakt (Bitrix24)</TextPstyled></td>
                <td><TextPstyled>Bis Bearbeitung + 6 Monate</TextPstyled></td>
                <td><TextPstyled>Nachweis / Vertrag</TextPstyled></td>
              </tr>

              <tr>
                <td><TextPstyled>Behandlungsdaten</TextPstyled></td>
                <td><TextPstyled>10 Jahre</TextPstyled></td>
                <td><TextPstyled>Steuer/Haftung</TextPstyled></td>
              </tr>

              <tr>
                <td><TextPstyled>Shop-Bestellungen</TextPstyled></td>
                <td><TextPstyled>10 Jahre</TextPstyled></td>
                <td><TextPstyled>HGB/AO</TextPstyled></td>
              </tr>

              <tr>
                <td><TextPstyled>Newsletter / Marketing (Bitrix24)</TextPstyled></td>
                <td><TextPstyled>Bis Widerruf / Abmeldung</TextPstyled></td>
                <td><TextPstyled>Einwilligung</TextPstyled></td>
              </tr>

              <tr>
                <td><TextPstyled>Google Analytics</TextPstyled></td>
                <td><TextPstyled>Bis 14 Monate</TextPstyled></td>
                <td><TextPstyled>Konfiguration</TextPstyled></td>
              </tr>

              <tr>
                <td><TextPstyled>Geolocation (Session)</TextPstyled></td>
                <td><TextPstyled>Nur Sitzung</TextPstyled></td>
                <td><TextPstyled>Navigation</TextPstyled></td>
              </tr>

              <tr>
                <td><TextPstyled>Google Bewertungen (Insights/Antworten)</TextPstyled></td>
                <td><TextPstyled>Bis zur Löschung des Profils oder Widerruf</TextPstyled></td>
                <td><TextPstyled>Reputation-Management</TextPstyled></td>
              </tr>
            </tbody>
          </table>
        </TextBoxTable>
        <TextSubTitle>X. Automatisierte Entscheidungen</TextSubTitle>
        <TextBox>
          <TextPstyled>
            Eine automatisierte Entscheidungsfindung einschließlich Profiling findet nicht statt.
          </TextPstyled>
        </TextBox>

        <TextSubTitle>XI. Pflicht zur Bereitstellung der Daten</TextSubTitle>
        <TextBox>
          <li><TextPstyled> Für Terminbuchungen, Dienstleistungen und Bestellungen sind bestimmte Daten
            erforderlich.</TextPstyled>
           
          </li>
          <li><TextPstyled>Ohne diese Daten kann kein Vertrag geschlossen oder durchgeführt werden.</TextPstyled></li>
          <li><TextPstyled>Gesundheitsdaten sind freiwillig, aber für bestimmte Behandlungen notwendig</TextPstyled>.</li>
        </TextBox>

        <TextSubTitle>XII. Rechte der betroffenen Personen</TextSubTitle>
        <TextBox>
          <TextPstyled>Sie haben folgende Rechte:</TextPstyled>
          <li><TextPstyled>Auskunft (Art. 15 DSGVO)</TextPstyled></li>
          <li><TextPstyled>Berichtigung (Art. 16 DSGVO)</TextPstyled></li>
          <li><TextPstyled>Löschung (Art. 17 DSGVO)</TextPstyled></li>
          <li><TextPstyled>Einschränkung der Verarbeitung (Art. 18 DSGVO)</TextPstyled></li>
          <li><TextPstyled>Datenübertragbarkeit (Art. 20 DSGVO)</TextPstyled></li>
          <li><TextPstyled>Widerspruch gegen Verarbeitung (Art. 21 DSGVO)</TextPstyled></li>
          <li><TextPstyled>Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO)</TextPstyled></li>
          <li><TextPstyled>Beschwerderecht bei der Aufsichtsbehörde (Art. 77 DSGVO</TextPstyled>)</li>
          <TextPstyled>Zuständige Behörde:</TextPstyled>
          <TextPstyled>
            Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit (HmbBfDI)
          </TextPstyled>
        </TextBox>
        <TextSubTitle>XIII. Sicherheit (TOM)</TextSubTitle>
        <TextBox>
          <TextPstyled>
            Wir setzen technische und organisatorische Maßnahmen ein: HTTPS, Zugriffskontrollen,
            Verschlüsselung, Backups, MFA, sichere Server.
          </TextPstyled>
        </TextBox>
        <TextSubTitle>XIV. Änderungen der Datenschutzerklärung</TextSubTitle>
        <TextBox>
          <TextPstyled>
            Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die jeweils
            aktuelle Version ist online verfügbar.
          </TextPstyled>
        </TextBox>
        <TextSubTitle>XV. Kontakt für Datenschutzfragen</TextSubTitle>
        <TextBox>
          <TextPstyled>
            Bei Fragen zur Verarbeitung Ihrer personenbezogenen Daten kontaktieren Sie uns bitte
            unter:
          </TextPstyled>
          <TextPstyled>E-Mail: kontakt.bisnes@gmail.com</TextPstyled>
          <TextPstyled>Telefon: +49 160 3212 983</TextPstyled>
        </TextBox>
      </TextSection>
    </DatenschutzContainer>
  );
}
export default Datenschutz;
