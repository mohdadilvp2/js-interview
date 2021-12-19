const generatePassword = (length, hasNumber, hasSymbols, hasLowerCaseLetter, hasUpperCaseLetter) => {
    const numbers = [1,2,3,4,5,6,7,8,9,0];
    const symbols = ["$", "#", "&", "*"];
    const loweCaseLetters = Array.from({ length: 26 }, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i));
    const upperCaseLetters = loweCaseLetters.map(char => { return char.toUpperCase()});
    const availableChars = [
        ...(hasNumber? numbers: []),
        ...(hasSymbols? symbols: []),
        ...(hasLowerCaseLetter? loweCaseLetters: []),
        ...(hasUpperCaseLetter? upperCaseLetters: [])
    ];
    if(availableChars.length == 0)return "";
    let password = "";
    for(i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random()*availableChars.length);
        password += availableChars[randomIndex];
    }
    return password;
}
