function writeJSON() {
fs.writeFile ("data.json", JSON.stringify(newPoll), function(err) {
    if (err) throw err;
    console.log('complete');
    }
)};