# Testrapport 

Dessa tester var genomförda manuellt.
Dem genomfördes i Visual Studio Code och använde sig av node.

| Funktion | Input | Förväntat resultat | Faktiska resultat | Test status |
|---|---|---|---|---|
| createArray() | 5 | [1, 2, 3, 4, 5] | [1, 2, 3, 4, 5] | :white_check_mark: |
| sortAlphabet() | ['Javascript', 'Good morning', 'Hi'] | ['Good morning', 'Hi', 'Javascript'] | ['Good morning', 'Hi', 'Javascript'] | :white_check_mark: |
| sortValue() | [5,0,1,17,200,2] | [0, 1, 2, 5, 17, 200] | [0, 1, 2, 5, 17, 200] | :white_check_mark: |
| sortCharLength() | ['Javascript', 'Good morning', 'Hi'] | ['Hi', 'Javascript', 'Good morning'] | ['Hi', 'Javascript', 'Good morning'] | :white_check_mark: |
| shuffle() | [1, 2, 3, 4, 5, 6] | En slumpmässig ordning | [6, 3, 2, 5, 1, 4] | :white_check_mark: |
| reverse() | [1, 2, 3, 4, 5, 6] | [6, 5, 4, 3, 2, 1] | [6, 5, 4, 3, 2, 1] | :white_check_mark: |
| getUnique() | [1, 1, 2, 3, 3, 1, 4, 2] | [1, 2, 3, 4] | [1, 2, 3, 4] | :white_check_mark: |
| removeFalsy() | ['a', undefined, undefined,'b','c','d','','e',null,'f',0,0,'g'] | ['a', 'b', 'c', 'd', 'e', 'f', 'g'] | ['a', 'b', 'c', 'd', 'e', 'f', 'g'] | :white_check_mark: |
| removeNullUndefined() | ['a', undefined, undefined,'b','c','d','','e',null,'f',0,0,'g'] | ['a', 'b', 'c', 'd', '', 'e', 'f', 0, 0, 'g'] | ['a', 'b', 'c', 'd', '', 'e', 'f', 0, 0, 'g'] | :white_check_mark: |
| sum() | [1, 2, 3, 4, 5, 6] | 21 | 21 | :white_check_mark: |
| min() | [5,0,1,17,200,2] | 0 | 0 | :white_check_mark: |
| max() | [5,0,1,17,200,2] | 200 | 200 | :white_check_mark: |
| average() | [5,0,1,17,200,2] | 37.5 | 37.5 | :white_check_mark: |
| median() | [5,0,1,17,200,2] | 3.5 | 3.5 | :white_check_mark: |
| upperCaseAll() | ['Hi', 'Javascript', 'word'] | ['HI', 'JAVASCRIPT', 'WORD'] | ['HI', 'JAVASCRIPT', 'WORD'] | :white_check_mark: |
| lowerCaseAll() | ['Hi', 'Javascript', 'WORD'] | ['hi', 'javascript', 'word'] | ['hi', 'javascript', 'word'] | :white_check_mark: |
| search() | ['Hi', 'Javascript', 'word'], 'Javascript' | 2 | 2 | :white_check_mark: |
| checkFrequency() | ['a','c','b','A','a','c','c','1','c','A','c','c'] | { a: 2, c: 6, b: 1, A: 2 } | { a: 2, c: 6, b: 1, A: 2 } | :white_check_mark: |
| getRandom() | [1, 2, 3, 4, 5, 6] | Ett slumpmässigt element | 4 | :white_check_mark: |
| getRandomMany() | [1, 2, 3, 4, 5, 6, 7, 8]), 3 | 3 slumpmässiga element | [2, 8, 1] | :white_check_mark: |
| nth() | [1, 2, 3, 4, 5, 6, 7, 8]), 3 | [3, 6] | [3, 6] | :white_check_mark: |
| merge() | ['hi','cool','a','b','1'], ['a','c','b','A','1'] | ['hi', 'cool', 'a',  'b', '1', 'c', 'A'] | ['hi', 'cool', 'a',  'b', '1', 'c', 'A'] | :white_check_mark: |
| difference() | ['hi','cool','a','b','1'], ['a','c','b','A','1'] | ['hi', 'cool'] | ['hi', 'cool'] | :white_check_mark: |
| similarity() | ['hi','cool','a','b','1'], ['a','c','b','A','1'] | ['a', 'b', '1'] | ['a', 'b', '1'] | :white_check_mark: |
| divide() | [1, 2, 3, 4, 5, 6, 7, 8, 9]), 3 | [ [1, 2, 3], [4, 5, 6], [7, 8, 9]] | [ [1, 2, 3], [4, 5, 6], [7, 8, 9]] | :white_check_mark: |
