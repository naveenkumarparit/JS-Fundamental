function matchAndExtractGroups (pattern, inputString) {
    const match = inputString.match(pattern);
    console.log(match);

    if (match) {
        const groups = match.slice(1);
        return {
            match: match[0],
            groups: groups,
        };
    } else {
        return null;
    }
}

const datePattern = /(\d{2})\/(\d{2})\/(\d{4})/;
const dateString = "06/06/2002";

const result = matchAndExtractGroups(datePattern, dateString);

console.log("Input String :", dateString);

if (result) {
    console.log(
        `
        Match : ${result.match}
        Day : ${result.groups[0]}
        Month : ${result.groups[1]}
        Year : ${result.groups[2]}
        `);
} else {
    console.log("NO match found");
}