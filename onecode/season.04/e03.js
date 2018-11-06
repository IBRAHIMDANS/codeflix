const url = require('url');
const fs = require('fs');
const path = require('path');
const http = require('http');

const port = process.argv[2]

if (port == undefined ) {
   port = 1010
   console.log(`Server is running at port ${port}`);
}
