const fs = require('fs')


function syncReadFile(filename) {
	const contents = fs.readFileSync(filename, 'utf-8');
  
	
  
	console.log(JSON.parse(contents)[0].id); // 👉️ ['One', 'Two', 'Three', 'Four']
  
	return contents;
  }
  
  syncReadFile('file.json');