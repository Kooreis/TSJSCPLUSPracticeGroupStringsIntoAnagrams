Here is a TypeScript solution for the problem:

```typescript
class AnagramGrouper {
    private static sortWord(word: string): string {
        return word.split('').sort().join('');
    }

    public static groupAnagrams(words: string[]): string[][] {
        const anagramGroups: { [key: string]: string[] } = {};

        for (const word of words) {
            const sortedWord = this.sortWord(word);
            if (anagramGroups[sortedWord]) {
                anagramGroups[sortedWord].push(word);
            } else {
                anagramGroups[sortedWord] = [word];
            }
        }

        return Object.values(anagramGroups);
    }
}

const words = ['cat', 'dog', 'tac', 'god', 'good', 'act'];
console.log(AnagramGrouper.groupAnagrams(words));
```

This TypeScript solution defines a class `AnagramGrouper` with two static methods: `sortWord` and `groupAnagrams`. The `sortWord` method sorts the characters in a word alphabetically. The `groupAnagrams` method groups an array of words into anagrams. It does this by creating an object where the keys are sorted words and the values are arrays of words that are anagrams of the key. The method then returns the values of the object, which are the groups of anagrams. The console.log statement at the end tests the `groupAnagrams` method with an array of words.