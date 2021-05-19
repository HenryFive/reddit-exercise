function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

var redditFeed = document.getElementsByClassName('reddit__feed');

readTextFile("NASAreddit.json", function(text){
    let NASARedditData = JSON.parse(text);
    console.log(NASARedditData);

    NASARedditData.data.children.forEach(element => {
        //console.log(element.data.thumbnail);
        var makeSection = document.createElement('section');
        var makeH5 = document.createElement('h5');
        makeH5.textContent = element.data.title;
        makeSection.appendChild(makeH5);

        if(element.data.thumbnail != "self" && element.data.thumbnail != "default" && element.data.media == null){
            var makeImg = document.createElement('img');
            makeImg.src = element.data.thumbnail;
            makeSection.appendChild(makeImg);
        }
       
        if(element.data.media != null){
            var makeIframe = document.createElement('iframe');
            makeIframe.src = element.data.media.reddit_video.fallback_url;
            makeSection.appendChild(makeIframe);
        }
        redditFeed[0].appendChild(makeSection);
    });
    /*
    for (var key in NASARedditData) {
        if (NASARedditData.hasOwnProperty(key)) {
            console.log(key + " -> " + NASARedditData[key]);
        }
    }
    */
    //console.log(NASARedditData.data.children[1].title);
});
