// CSVtoArray(csvfile');
export const CSVtoArray = (csvfile: string) => {
    const lines = csvfile.split("\n");
    const titles = lines[0].split(" ");
    const data = new Array(lines.length - 1);

    for (let i = 1; i < lines.length; i++) {
        data[i - 1] = {};
        //@ts-ignore
        lines[i] = lines[i].split(" ");
        for (let j = 0; j < titles.length; j++) {
            data[i - 1][titles[j]] = lines[i][j];
        }
    }
    return data;
}

