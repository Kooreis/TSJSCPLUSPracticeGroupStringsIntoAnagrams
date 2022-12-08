for(let str of strs) {
        let characters = Array.from(str).sort().join('');
        if(!map.has(characters)) map.set(characters, []);
        map.get(characters).push(str);
    }