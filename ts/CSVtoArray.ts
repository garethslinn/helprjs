// CSVtoArray(csvfile');
export const CSVtoArray = (csvfile: string) => {
    const lines: any = csvfile.split("\n");
    const titles: string = lines[0].split(" ");
    const data: any = new Array(lines.length - 1);

    for (let i = 1; i < lines.length; i++) {
        data[i - 1] = {};
        lines[i] = lines[i].split(" ");
        for (let j = 0; j < titles.length; j++) {
            data[i - 1][titles[j]] = lines[i][j];
        }
    }
    return data;
}


