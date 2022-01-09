#!/usr/bin/env node

const pkgJson = require("./package.json");
const welcome = require("cli-welcome");

welcome({
	title: pkgJson.name,
	tagLine: `Hello, Nice to meet you!`,
	description: pkgJson.description,
	version: pkgJson.version,
	bgColor: `FADC00`,
	color: `#000000`,
	bold: true,
	clear: true,
});

console.log(`
Hi, I'm Rich 👦, 
I'm a web developer based in the UK. 
    - self-taught, self-motivated, and self-driven.
    - I'm passionate about the web, and about building beautiful, responsive websites.
    - I love the JavaScript ecosystem, and totally Hooked on building with React.
    - I also love creating with the MERN stack, and I'm always looking to learn more.
    - I'm a huge fan of the Node.js ecosystem.
`);
