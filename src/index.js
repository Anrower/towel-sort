module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    var result = [];
    matrix.forEach((row, i) => {
        if (i % 2 === 1) {
            result = result.concat(row.reverse());
        } else {
            result = result.concat(row);
        }
    });
    return result;
}