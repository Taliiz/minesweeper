function reveal(square) {
    if (!square.isMarked) {
        square.isRevealed = true;
        square.cssClass = "revealed";
        square.style = {
            ...square.style,
            opacity: null,
        };
        return square;
    }
}

export default reveal;
