exports.log = function (content = "I'm working!") {
    console.log('WedGE: ' + content)
};

exports.setup = function (htmlclass = ".gameCanvas") {
    console.log('WedGE: Starting Setup')
    const canvas = document.querySelector('canvas')
    console.log('WedGE: Found a canvas - ' + canvas)
    c = canvas.getContext
};