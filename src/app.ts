import rules from "./data/rules";
import Trie from "./trie";

class Application {
    trie: Trie;
    constructor() {
        this.trie = new Trie();
        console.log(this.trie);
    }

    initialize() {
        for (const key in rules.vowels) {
            this.trie.insert(key);
        }
        for (const key in rules.helpers) {
            this.trie.insert(key);
        }
        for (const key in rules.consonants) {
            this.trie.insert(key);
        }
        for (const key in rules.conjunctions) {
            this.trie.insert(key);
        }
        for (const key in rules.kar) {
            this.trie.insert(key);
        }
        for (const key in rules.numbers) {
            this.trie.insert(key);
        }
        for (const key in rules.specialSymbols) {
            this.trie.insert(key);
        }
    }

    translate(sentence: string) {
        const sanitizedSentence = sentence.replace(/\s+/g, " ").replace(/\r\n/, "");
        return sanitizedSentence
            .split(" ")
            .map(word => this.trie.translate(word))
            .join(" ");
    }
}

export default Application;
