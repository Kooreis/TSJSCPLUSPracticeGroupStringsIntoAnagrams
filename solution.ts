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