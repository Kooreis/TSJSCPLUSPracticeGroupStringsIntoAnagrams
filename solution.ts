class AnagramGrouper {
    private static sortWord(word: string): string {
        return word.split('').sort().join('');
    }
}