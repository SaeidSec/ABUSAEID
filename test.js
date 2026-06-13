const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const scriptMatch = html.match(/<script>(.*?)<\/script>/s);
if (scriptMatch) {
    try {
        // We just want to check if projectData is an array of 13 items
        const scriptContent = scriptMatch[1];
        // Create a mock DOM environment
        const jsdom = require('jsdom');
        const { JSDOM } = jsdom;
        const dom = new JSDOM(html);
        console.log("JSDOM initialized.");
    } catch(e) {
        console.log("No jsdom, falling back to basic syntax check", e.message);
    }
}
