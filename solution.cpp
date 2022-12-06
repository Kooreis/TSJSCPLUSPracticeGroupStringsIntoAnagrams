```cpp
#include <iostream>
#include <vector>
#include <map>
#include <algorithm>

std::vector<std::vector<std::string>> groupAnagrams(std::vector<std::string>& strs) {
    std::map<std::string, std::vector<std::string>> anagramMap;
    for (std::string& s : strs) {
        std::string key = s;
        std::sort(key.begin(), key.end());
        anagramMap[key].push_back(s);
    }
    std::vector<std::vector<std::string>> anagramGroups;
    for (auto& pair : anagramMap) {
        anagramGroups.push_back(pair.second);
    }
    return anagramGroups;
}

int main() {
    std::vector<std::string> strs = {"eat", "tea", "tan", "ate", "nat", "bat"};
    std::vector<std::vector<std::string>> anagramGroups = groupAnagrams(strs);
    for (const auto& group : anagramGroups) {
        for (const auto& str : group) {
            std::cout << str << " ";
        }
        std::cout << std::endl;
    }
    return 0;
}
```