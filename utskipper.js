console.log("Extension UTSKIPPER loaded");
console.log(window.location.href);



$(window).on('hashchange', function() {
    // Redirect this:
    // https://www.usertesting.com/pp/90900806-0b77-4807-862d-a264af912b0a#!/pp/instructions
    // to this:
    // https://www.usertesting.com/pp/90900806-0b77-4807-862d-a264af912b0a#!/pp/tips

    if( window.location.href.lastIndexOf("/pp/instructions") != -1 )
    {
        console.log("Instructions page detected.");
        var urlArray = window.location.href.split("/");
        urlArray.pop();
        urlArray.push("tips");
        var targetURL = urlArray.join("/");
        console.log("Will redirect to: " + targetURL)
        window.location.href = targetURL;
        console.log("Redirected");
    }
});


$(document).ready(function(){
    if( window.location.href.endsWith("#!/pp") )
    {
        if( $(".section-intro__text").length)
        {
            $(".section-intro__text").last().append("<br /><br /><b>Use your Leaderboard email.</b><br />")
        }
    }
    else if( window.location.href.endsWith("#!/pp/thanks") )
    {
        $(".headline").append("<br />You will be redirected to the Leaderboard menu in a few seconds.");
        $(".link--uninstall").hide();
        window.setTimeout( function(){
            window.location.href = "https://buildleaderboard.azurewebsites.net/";
        }, 5000 );
    }
        


});
