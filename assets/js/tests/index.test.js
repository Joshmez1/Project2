/**
 * @jest-environment jsdom
 */

const { cards } = require("../index");


beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("Game object should contain the correct keys", () => {
    test(" Cards should exist", () => {
        expect(document.getElementsByClassName(".card")).toBeTruthy();
    });

});