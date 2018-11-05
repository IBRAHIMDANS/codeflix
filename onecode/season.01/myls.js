
  (function myls(){
    const result = require('child_process').execSync('ls -l -a -R -r -p').toString();
    console.log(result);

  })();
