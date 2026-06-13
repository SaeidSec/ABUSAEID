const fs = require('fs');
const { JSDOM } = require('/tmp/jsdom-test/node_modules/jsdom');

const html = fs.readFileSync('/home/saeidsec/Documents/ABUSAEID/index.html', 'utf8');

const dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });
const window = dom.window;

window.onload = () => {
    try {
        const container = window.document.getElementById('project-cards-container');
        if (container) {
            console.log("Project cards generated:", container.children.length);
            console.log("First project:", window.document.querySelector('.project-card h3')?.textContent);
        } else {
            console.log("Project cards container not found!");
        }
    } catch (e) {
        console.error("Error during execution:", e);
    }
};
