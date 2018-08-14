module.exports = (start, end, ln) => {
    if (ln <= 0) return undefined;
    return Math.ceil(Math.abs(end-start) / ln);

}
