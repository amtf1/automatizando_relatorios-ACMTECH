const puppeteer = require("puppeteer");

async function gerarPDF() {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
   
    await page.goto("http://127.0.0.1:5500/template.html", { waitUntil: "networkidle0" });

    await page.pdf({
        path: "relatorio.pdf",
        format: "A4",
        printBackground: true
    });

    await browser.close();

    console.log("PDF gerado!");
}

gerarPDF();