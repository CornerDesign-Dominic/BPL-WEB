# Transportanfrage

Die API-Route `POST /api/transport-request` validiert alle Pflichtangaben erneut auf dem Server und enthält ein unsichtbares Honeypot-Feld (`website`) als einfache Spam-Vorbereitung.

Der Versand an `express@brennpunkt-logistik.de` ist absichtlich noch nicht aktiviert. Vor dem produktiven Versand wird eine Mail-Infrastruktur mit geheim gehaltenen Umgebungsvariablen benötigt, zum Beispiel für SMTP oder einen vom Unternehmen ausgewählten Transaktions-Mailanbieter.

Die vorgesehenen Variablennamen stehen in `.env.example`: `TRANSPORT_REQUEST_RECIPIENT`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER` und `SMTP_PASSWORD`. Der Route Handler erkennt eine vorhandene Konfiguration, sendet aber erst nach einer bewusst ausgewählten und implementierten Mail-Integration.

Zusätzlich muss vor der Produktivsetzung ein Rate-Limiting auf der Route eingerichtet werden. Zugangsdaten, API-Schlüssel oder SMTP-Konfigurationen gehören ausschließlich in Umgebungsvariablen und nie in den Quellcode.
