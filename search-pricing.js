const fs = require('fs');
const path = require('path');

function searchForPricingClasses(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            searchForPricingClasses(fullPath);
        } else if (fullPath.endsWith('.js') || fullPath.endsWith('.d.ts')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const matches = content.match(/cl-pricing[a-zA-Z0-9]+/g);
            if (matches) {
                console.log('Found in', fullPath);
                console.log([...new Set(matches)]);
            }
            
            // Also check for "elements" structure for PricingTable
            const elementsMatch = content.match(/pricing[a-zA-Z0-9]*:[a-zA-Z0-9_'" {,\n}]*pricing/gi);
            if (elementsMatch) {
               // console.log('Elements in', fullPath, elementsMatch.join(', '));
            }
        }
    }
}

searchForPricingClasses('node_modules/@clerk');
