const puppeteer = require("puppeteer");

async function scrape(url) {
   // membuka aplikasi browser chromium (default)
	const browser = await puppeteer.launch({headless: false});
   // membuka page baru
	const page = await browser.newPage();
   // menelusuri ur sesuai parameter function
	await page.goto(url);

   // meminta puppeteer menemukan selector sesuai parameter
   await page.waitForSelector("span [title='woi']");
      /* parameter di isi dengan atribut dalam container (sesuai sub page target), untuk kasus Whatsapp Web
         di isi dengan atribut span, dengan key title='[nama kontak]'. Bisa diketahui dengan inpect page (tekan "ctrl + shift + i") 
      */
   const target=await page.$("span [title='woi']");
   await target.click();
   const inp=await page.$("#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text");
   // parameter jumlah pesan yang akn dikirimkan
   for(let i=0;i<50;i++){
   // tuliskan pesan yg akan di kirimkan
   	 await inp.type("GW PACAR BARUNYA TIKA, JANGAN GANGGU TIKA LAGI TOLONG");
   	 await page.keyboard.press("Enter");
   }
}
	scrape("https://web.whatsapp.com");