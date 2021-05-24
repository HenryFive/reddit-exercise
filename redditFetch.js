var redditFeed = document.getElementsByClassName('reddit__feed');

fetch("https://www.reddit.com/r/nasa.json")
    .then(response => response.json())
    .then(data => {
        dataKey = data.data;
        console.log(dataKey.title);
        dataKey.children.forEach(element => {
            let makeSection = document.createElement('section');
            let makeH5 = document.createElement('h5');
            makeH5.textContent = element.data.title;
            makeSection.appendChild(makeH5);

            if(element.data.thumbnail != "self" && element.data.thumbnail != "default" && element.data.media == null){
                let makeImg = document.createElement('img');
                makeImg.src = element.data.thumbnail;
                makeSection.appendChild(makeImg);
            }
        
            if(data.media != null){
                let makeIframe = document.createElement('iframe');
                makeIframe.src = element.data.media.reddit_video.fallback_url;
                makeSection.appendChild(makeIframe);
            }
            redditFeed[0].appendChild(makeSection);
        })
    });

/*
fetch("https://www.reddit.com/r/nasa.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        for(let i=0; i < data.length; i++){
            
            let makeSection = document.createElement('section');
            let makeH5 = document.createElement('h5');
            makeH5.textContent = data[i].title;
            makeSection.appendChild(makeH5);

            if(data[i].thumbnail != "self" && data[i].thumbnail != "default" && data[i].media == null){
                let makeImg = document.createElement('img');
                makeImg.src = data[i].thumbnail;
                makeSection.appendChild(makeImg);
            }
        
            if(data[i].media != null){
                let makeIframe = document.createElement('iframe');
                makeIframe.src = data[i].media.reddit_video.fallback_url;
                makeSection.appendChild(makeIframe);
            }
            redditFeed[0].appendChild(makeSection);
        };
        });
*/