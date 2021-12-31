## Aplikacja zadanie 1

### Opis
Niniejsza aplikacja zaostała napisana w React.js
i korzysta z nierelacyjnej bazy Redis do przechowywania danych. Jako serwer wykorzystywany jest Nginx a rządania get/post obsługuje serwer Express. Jest to lekko zmodyfikowane rozwiązanie z Laboratorium nr 9.

### Schemat
![](public/schema.png?raw=true)

### Zmiany w stosunku do lab 9
W mojej aplikacji wynik obliczania wyrazu ciągu Fibonacciego ukazuje się dynamicznie przy zmianie wartości w polu input. Nie korzystam również z bazy danych Postgres. Dodatkowo, aby zopobiec błędowi 502 przy uruchomieniu witryny, w pliku Dockerfile dla klienta dodałem eksponowanie portu 3000. 