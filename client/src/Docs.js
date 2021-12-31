import React, { Component } from "react";
 
class Docs extends Component {
  render() {
    return (
      <div>
        <h2>Dokumentacja</h2>
        <h3>Opis</h3>
        Niniejsza aplikacja zaostała napisana w React.js
        i korzysta z nierelacyjnej bazy Redis do przechowywania danych. 
        Jako serwer wykorzystywany jest Nginx a 
        rządania get/post obsługuje serwer Express. 
        Jest to lekko zmodyfikowane rozwiązanie z Laboratorium nr 9.
        <h3>Schemat</h3>
        <img src="/schema.png" alt="schema"/>
        <h3>Różnice względem lab 9</h3>
        W mojej aplikacji wynik obliczania wyrazu ciągu Fibonacciego 
        ukazuje się dynamicznie przy zmianie wartości w polu input. 
        Nie korzystam również z bazy danych Postgres. 
        Dodatkowo, aby zopobiec błędowi 502 przy uruchomieniu witryny, 
        w pliku Dockerfile dla klienta dodałem eksponowanie portu 3000. 
      </div>
    );
  }
}
 
export default Docs;