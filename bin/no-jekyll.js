const fs = require('fs');

fs.writeFileSync('./storybook/.nojekyll', '/* Tells github pages not to use Jekyll */');
