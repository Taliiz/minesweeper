function unreveal(arr) {
    const finalArr = arr.map((row) =>
        row.map((square) => {
            return {
                ...square,
                value: " ",
            };
        })
    );
    return finalArr;
}

export default unreveal;
