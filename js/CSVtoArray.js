// CSVtoArray(csvfile');

export const CSVtoArray = (csvfile) => {
    const lines = csv.split("\n");
    const titles = lines[0].split(" ");
    const data = new Array(lines.length - 1);

    for (let i = 1; i < lines.length; i++) {
        data[i - 1] = {};
        lines[i] = lines[i].split(" ");
        for (var j = 0; j < titles.length; j++) {
            data[i - 1][titles[j]] = lines[i][j];
        }
    }
    return data;
}

