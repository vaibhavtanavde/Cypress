Playwright tests have been developed for website https://automationintesting.online/#/admin. 
Various functionality like login, creating a room, updating a room, viewing rom list, deleting a room and logout have been tested.
Locales folder includes en.json and de.json files. These files have elements from the page and can be used when website language is changed.
A bug report for one of the bug found has also been attached with name: Bug_report.pdf

Install Nodejs from https://nodejs.org/en/download/prebuilt-installer

Create a folder on computer with name Playwright

Install playwright using command: npx playwright install

Run command: set APP_LANGUAGE=de   //This command should only be ran when website is converted into German

Run the test using command: npx playwright test

To check the report run command: npx playwright show-report
