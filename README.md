# projekt-social-media-app

""Kochplatte" für Beuth-Projekt Social-Media-App auf Basis von Microservices"

## Repo klonen

* `$ git clone ` (im Shell an gewünschter Stelle)

## Installation

Über Docker nach folgender Anleitung:

* `$ cd /path/to/repo`
* PostgreSQL installieren und Datenbank erzeugen (DB muss neu erzeugt werden)
* In `.env.temp`. die korrekten DB-Zugriffsdaten eingeben
* `$ cp .env.temp .env`

* Install [Docker](https://www.docker.com/products/overview) and [Docker Compose](https://docs.docker.com/compose/install/).
* `$ docker-compose build`
* `$ docker-compose up`

Development Server wieder stoppen:

* `$ docker-compose stop`

Stop Docker development server and remove containers, networks, volumes, and images created by up.

* `$ docker-compose down`

## Zugriff auf Website

http://localhost:8000
