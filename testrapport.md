# Testrapport 

Dessa tester var genomförda manuellt.
Dem genomfördes i Visual Studio Code och använde sig av node.

**Förberedelse:**

```js
import { arrayHelper} from "./index.js";

const helper = new arrayHelper();
```

---

| Funktion | Input | Förväntat resultat | Faktiska resultat | Test status |
|---|---|---|---|---|
| helper.createArray() | 5 | [1, 2, 3, 4, 5] | [1, 2, 3, 4, 5] | :white_check_mark: |
| helper.sortAlphabet() | ['Javascript', 'Good morning', 'Hi'] | ['Good morning', 'Hi', 'Javascript'] | ['Good morning', 'Hi', 'Javascript'] | :white_check_mark: |
| helper.sortValue() | [5,0,1,17,200,2] | [0, 1, 2, 5, 17, 200] | [0, 1, 2, 5, 17, 200] | :white_check_mark: |
| helper.sortCharLength() | ['Javascript', 'Good morning', 'Hi'] | ['Hi', 'Javascript', 'Good morning'] | ['Hi', 'Javascript', 'Good morning'] | :white_check_mark: |
| helper.shuffle() | [1, 2, 3, 4, 5, 6] | En slumpmässig ordning | [6, 3, 2, 5, 1, 4] | :white_check_mark: |
| helper.reverse() | [1, 2, 3, 4, 5, 6] | [6, 5, 4, 3, 2, 1] | [6, 5, 4, 3, 2, 1] | :white_check_mark: |
| helper.getUnique() | [1, 1, 2, 3, 3, 1, 4, 2] | [1, 2, 3, 4] | [1, 2, 3, 4] | :white_check_mark: |
| helper.removeFalsy() | ['a', undefined, undefined,'b','c','d','','e',null,'f',0,0,'g'] | ['a', 'b', 'c', 'd', 'e', 'f', 'g'] | ['a', 'b', 'c', 'd', 'e', 'f', 'g'] | :white_check_mark: |
| helper.removeNullUndefined() | ['a', undefined, undefined,'b','c','d','','e',null,'f',0,0,'g'] | ['a', 'b', 'c', 'd', '', 'e', 'f', 0, 0, 'g'] | ['a', 'b', 'c', 'd', '', 'e', 'f', 0, 0, 'g'] | :white_check_mark: |
| helper.sum() | [1, 2, 3, 4, 5, 6] | 21 | 21 | :white_check_mark: |
| helper.min() | [5,0,1,17,200,2] | 0 | 0 | :white_check_mark: |
| helper.max() | [5,0,1,17,200,2] | 200 | 200 | :white_check_mark: |
| helper.average() | [5,0,1,17,200,2] | 37.5 | 37.5 | :white_check_mark: |
| helper.median() | [5,0,1,17,200,2] | 3.5 | 3.5 | :white_check_mark: |
| helper.upperCaseAll() | ['Hi', 'Javascript', 'word'] | ['HI', 'JAVASCRIPT', 'WORD'] | ['HI', 'JAVASCRIPT', 'WORD'] | :white_check_mark: |
| helper.lowerCaseAll() | ['Hi', 'Javascript', 'WORD'] | ['hi', 'javascript', 'word'] | ['hi', 'javascript', 'word'] | :white_check_mark: |
| helper.search() | ['Hi', 'Javascript', 'word'], 'Javascript' | 2 | 2 | :white_check_mark: |
| helper.checkFrequency() | ['a','c','b','A','a','c','c','1','c','A','c','c'] | { a: 2, c: 6, b: 1, A: 2 } | { a: 2, c: 6, b: 1, A: 2 } | :white_check_mark: |
| helper.getRandom() | [1, 2, 3, 4, 5, 6] | Ett slumpmässigt element | 4 | :white_check_mark: |
| helper.getRandomMany() | [1, 2, 3, 4, 5, 6, 7, 8], 3 | 3 slumpmässiga element | [2, 8, 1] | :white_check_mark: |
| helper.nth() | [1, 2, 3, 4, 5, 6, 7, 8], 3 | [3, 6] | [3, 6] | :white_check_mark: |
| helper.merge() | ['hi','cool','a','b','1'], ['a','c','b','A','1'] | ['hi', 'cool', 'a',  'b', '1', 'c', 'A'] | ['hi', 'cool', 'a',  'b', '1', 'c', 'A'] | :white_check_mark: |
| helper.difference() | ['hi','cool','a','b','1'], ['a','c','b','A','1'] | ['hi', 'cool'] | ['hi', 'cool'] | :white_check_mark: |
| helper.similarity() | ['hi','cool','a','b','1'], ['a','c','b','A','1'] | ['a', 'b', '1'] | ['a', 'b', '1'] | :white_check_mark: |
| helper.divide() | [1, 2, 3, 4, 5, 6, 7, 8, 9], 3 | [ [1, 2, 3], [4, 5, 6], [7, 8, 9]] | [ [1, 2, 3], [4, 5, 6], [7, 8, 9]] | :white_check_mark: |
