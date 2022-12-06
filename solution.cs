Here is a JavaScript solution for the problem:

```javascript
function groupAnagrams(strs) {
    let map = new Map();
    for(let str of strs) {
        let characters = Array.from(str).sort().join('');
        if(!map.has(characters)) map.set(characters, []);
        map.get(characters).push(str);
    }
    return Array.from(map.values());
}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
```

This console application will group an array of strings into anagrams. It uses a map to store the sorted characters of each string as keys and the strings themselves as values. The sorted characters of each string are used as keys because anagrams will have the same characters when sorted. The strings are then grouped by these keys. The result is an array of arrays, where each sub-array contains strings that are anagrams of each other.