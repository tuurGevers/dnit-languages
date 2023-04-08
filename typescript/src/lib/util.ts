import fs from "fs";

export class Util {

    constructor() {
    }

    fetchFileContents() {
        const filename = "langs.json";
        const filepath = `./${filename}`;

        const fileContents = fs.readFileSync(filepath, "utf-8");
        const data = JSON.parse(fileContents);
        console.log(data);
        return (data);

    }

    selectpageContent(page: string, userLanguage:string, data:any) {
        if (data.hasOwnProperty(page)) {
            const pageData = data[page];
            const result = {};

            Object.keys(pageData).forEach((key) => {
                if (pageData[key].hasOwnProperty(userLanguage)) {
                    // @ts-ignore
                    result[key] = pageData[key][userLanguage];
                }
            });

            return result;
        } else {
            return {};
        }
    }

}
