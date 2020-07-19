/*Purpose - generate png file outputs of words
rotated 90 degrees for placement in table header
, said table having lots of columns, and thus 
the headers to fit in document need to be
rotated 90 degree text */
const rotatableArray = ['"true"','"false"',"null", "undefined", "infinity", "-infinity","NaN"];
const nonrotatableArray = ["1", "0", "-1",
'"1"','"0"','"-1"','\\"\\"', 
"[]","{}","[[]]","'\\[\\0\\]'","'\\[\\1\\]'",];


const { exec } = require("child_process");
const executor = (command) => {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.log(command);
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        if (stdout) {
            console.log(`stdout: ${stdout}`);
        }
    });
};
rotatableArray.forEach((item, index) => {
    const command = `convert -background white -fill black -font Arial -pointsize 24 label:${item} -rotate 90 rotate${index}.png`
    
    console.log("word " + item + " will generate " + index + ".png");
    executor(command);
});

nonrotatableArray.forEach((item, index) => {
    const command = `convert -background white -fill black -font Arial -pointsize 24 label:${item} norotate${index}.png`
    
    console.log("word " + item + " will generate " + index + ".png");
    executor(command);
})
