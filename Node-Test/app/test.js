var files = require("fs") // Require file system to allow access to functions that will create files for us.
var https = require("https") // Handle https requests.

files.writeFile(__dirname + "/index.html", "<h1>Created by Node</h1>");   // First arugment controls where the file is created. Second argument contains content of file.

var bananaURL = "https://www.organicfacts.net/wp-content/uploads/2013/05/Banana3-1020x765.jpg";  // Image URL stored in variable.
var bananaFile = files.createWriteStream(__dirname + "/nodeBanana.jpg"); // Controls where file will be saved to.
var request = https.get(bananaURL, function(response){
    response.pipe(bananaFile);
}); // Take bananaURL, save it into a file called bananaFile
