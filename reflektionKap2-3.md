# Kapitel Reflektioner

Jag känner att jag har lärt mig en hel del av kapitel två och. Det har hjälpt mig att få mer kunskap inom att ge bättre namn till variabler, funktioner och klasser. Och hur man gör mer lättläst och förståeliga kod.

## Kapitel 2 Reflektion

### Några regler som har hjälpt mig mest är:

**Use Intention-Revealing Names:**

Detta har jag brutit mot många gånger och känner att jag ska förbättra mig med det. T.ex när jag har en for loop så använder jag alltid "i" eller "j" om det är en loop i en loop även om det skulle vara bättre att använda något annat som t.ex "arrayIndex"
```js
// Nuvarande
for(let i = 0; i < array.length; i++) {
  console.log(array[i])
}

// Förbättrad
for(let arrayIndex = 0; arrayIndex < array.length; i++) {
  console.log(array[arrayIndex])
}
```

**Use Pronounceable Names:**

En sak som jag gör en del är att försöka korta ner namnen så att det inte blir så långa kodrader men detta leder ofta till att det blir konstiga namn på t.ex variabler. Jag har nu lärt mig att det är bättre att ha ett längre namn som man kan uttala och fatta vad den betyder.

```js
// Nuvarande
Const usrPrchDt

// Förbättrad
Const userPurchaseDate
```

**Pick One Word per Concept:**

Inte lika ofta som de andra grejerna men det kan förekomma att jag inte håller koll på vad jag har döpt allt annat till och då kan det finnas funktioner som borde ha liknande namn men inte har det. T.ex två funktioner som båda permanent tar bort ett element men använder två olika ord för det.

```js
function deletePlayer(){
  // Kod...
}

function removeScore(){
  // Kod...
}
```

## Kapitel 3 Reflektion

### Några regler som har hjälpt mig mest är:

**Small! + Do One Thing:**

Jag sätter ihop de här två för att de kompletterar varandra. För när man bryter ut funktioner för att de ska göra bara en sak brukar det bli små och när man gör en funktion mindre så blir det oftast att man gör flera mindre funktioner för att minska storleken.
Jag personligen gillar verkligen de här reglerna för att de kompletterar väl med att jag gillar att refaktorera kod och jag kommer definitivt använda mig av de här reglerna i framtiden.


**One Level of Abstraction per Function:**

Detta kan jag bryta mot ibland med att ha flera if satser i varandra och/eller flera loopar i varandra. Men jag känner att det är mycket bättre att försöka inte ha flera if satser eller loopar i varandra och jag kommer försöka hålla mig till det.


**Have No Side Effects:**

I kod som jag skriver kan det förekomma "Side Effects" då jag i mitt tankesätt tänker att det är självklart att det ska ske flera saker i en funktion som kanske bara genom t.ex namnet förklarar att en av sakerna händer men inte den andra. Ska i framtiden ha bättre namn för funktionen som förklarar allt som händer i den så att det inte finns någon "Side Effects" för att det är då en inräknad funktion. Eller så borde jag bara ta bort det som räknas som en "Side Effect", för att om det räknas som en "Side Effects" så borde det inte vara med i funktionen från första början och borde tas bort.
