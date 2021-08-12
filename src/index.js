module.exports = function towelSort(matrix) {
    let result = [];

    if (!matrix) {
        return result;
    } else {
        matrix.forEach((row, i) => {
            if (i % 2 === 1) {
                result = result.concat(row.reverse());
            } else {
                result = result.concat(row);
            }
        });
        return result;
    }
}