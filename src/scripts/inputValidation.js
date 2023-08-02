export function inputValidation(e) {
    const allowedSymbolsList = 'йцукенгшщзхъёфывапролджэячсмитьбю-ЁЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM ';
    if (allowedSymbolsList.includes(e.nativeEvent.data) || e.nativeEvent.inputType === "deleteContentBackward") {
        return true;
    }
    return false;
}