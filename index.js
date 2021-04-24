var person = {
    log : function(option = "I'm working")
    {
      var logMessage = "WedGE: " + option
      console.log(logMessage);
      document.getElementById("wedgeDebug").innerHTML(logMessage)
    }
};

function lol(option)
{
    var logMessage = "WedGE: " + option
    console.log(logMessage);
    document.getElementById("wedgeDebug").innerHTML(logMessage)
}