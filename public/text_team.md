# Text Team

You are going to finish writing a function named `wordToPigLatin()` that takes a word and transforms it into the pig latin version of that word.  Right now, the function just adds "ay" to the end of a word.  This is close, but it isn't valid pig latin.

The rules of pig latin are as follows.

If the first letter of the word is a vowel, you simply add "ay" to the end of the word, and you're done

Otherwise, you must take all of the consonant letters up until the first vowel, move them to the end of the word, and then add "ay" to the end of the word.  Some examples are given below.

**When `wordToPigLatin()` is called with a word as its argument (this would look like `wordToPigLatin( "cats" )`), it must return the word translated into pig latin.**

`bootcamp` → `ootcampbay`

`diplo` → `iploday`

`america` → `americaay`

`mnemonic` → `emonicmnay`

## Tips

You can refer to the characters in a string by their integer indices.  Example:

`var name = "Marcus";`  
`name[0]` would give you `"M"`  
`name[1]` would give you `"a"`

You can add strings together.  Example

`"Spring" + " " + "Fling"` would give you `"Spring Fling"`

You can check if a character is equal to another character.

`var char = 'a';`  
`char == 'a'` outputs 'true', because they are the same