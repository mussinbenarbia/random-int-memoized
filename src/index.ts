export const randomIntMemoized = (
    lowerBound: number,
    upperBound: number
): Function => {
    const rangeOfNums: Array<number> = [];
    let availableNums: Array<number> = [];
    for (let i = lowerBound; i <= upperBound; i++) {
        rangeOfNums.push(i);
        availableNums.push(i);
    }
    return (): number => {
        if (!availableNums.length) availableNums = rangeOfNums;
        const randomIndex = Math.floor(Math.random() * availableNums.length);
        return availableNums.splice(randomIndex, 1)[0];
    };
};
