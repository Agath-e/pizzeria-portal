# Dashboard

- '/'
    - statystyki dzisiejszych zamówień (zdalne i lokalne)
    - listę rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- '/login'
    - pola na login i hasła
    - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

- '/tables'
    - wybór daty i godziny
    - tabela z listą rezerwacji oraz wydarzeń
        - każda kolumna = 1 stolik
        - każdy wiersz = 30 minut
        - ma przypominać widok tygodnia Google, gdzie w kolumnach zamiast dni są różne stoliki
        - po kliknieciu rezerwacji lub eventu, przechodzimy na stronę szczegółów
- '/tables/booking/:id'
    - musi ona zwierać wszsytkie informację dotyczące irezerwacji
    - umożliwa edycję i zapisanie zmian
- '/tables/booking/new'
    - analogocznie do powyższej, bez początkowych informacji
- '/tables/events/:id'
    - analogocznie do powyższej,dla eventów
- '/tables/events/new'
    - analogocznie do powyższej, bez początkowych informacji

# Widok kelnera

- '/waiter'
    - tabela
        - w wierszach stoliki
        - w kolumnach różne rodzaje inforamcji (status, czas od ostatniej aktywności)
        - w ostatniej kolumnie dostępne akcje dla danego stolika
- '/waiter/order/new'
    - numer stolika (edytowalny)
    - menu produktów
    - opje wybranego produktu
    - zamówienie (zamówione produkty z opcjami i ceną)
    - kwotę zamówienia
- '/waiter/order/:id'
    - jak powyższa

# Widok kuchni

-'/kitchen'
    - wyświetla listę zamówień w kolejności ich złożenia 
    - lista musi zawierać:
        - numer stolika (lub zamówienia zdalnego) 
        - pełne informacje dot. zamówionych dań
    na liście musi być mozliwość oznaczenia zamówienia jako zrealizowane