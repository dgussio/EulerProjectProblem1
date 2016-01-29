var multThree = [];
var multFive = [];

for (var i = 3; i < 1000; i = i += 3) {
	multThree.push(i);
}

for (var j = 5; j < 1000; j = j += 5) {
	multFive.push(j);
}

var altogether = multThree.concat(multFive);

var _ = require("underscore");
altogetherNoDuplicates = _.uniq(altogether);

finalAnswer = 0

for (var k = 0; k < altogetherNoDuplicates.length; k++) {
	finalAnswer += altogetherNoDuplicates[k];
}

console.log(finalAnswer);
