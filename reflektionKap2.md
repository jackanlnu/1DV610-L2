# Kapitel 2 Reflektion

Jag känner att jag har lärt mig en hel del av kapitel två. Det har hjälpt mig att få mer kunskap inom att ge bättre namn till variabler, funktioner och klasser.

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

