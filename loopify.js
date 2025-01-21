let APIKEY = "KtAumCu0WF71O7Uxh0jshJsRONSxPgnL";

document.addEventListener("DOMContentLoaded", init);

      function init() {

        document.getElementById("js-btnSearch").addEventListener("click", ev => {
          ev.preventDefault();


          let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
          let str = document.getElementById("search").value.trim();
          url = url.concat(str);
          console.log(url);

          fetch(url)
            .then(response => response.json())
            .then(content => {

              let fig = document.createElement("figure");
              let img = document.createElement("img");
              let fc = document.createElement("figcaption");

              if (content.data.length > 0) {
                    img.src = content.data[0].images.downsized.url;  // GIF URL
                    img.alt = content.data[0].title;  // GIF title
                    fc.textContent = content.data[0].title;  // Caption text
                    
                    
                    fig.appendChild(img);
                    fig.appendChild(fc);
                   
                    
              let gifContainer = document.getElementById("js-gifContainer");
              gifContainer.insertAdjacentElement("afterbegin", fig);
            } else {
                console.error("No GIFs found");
            }
              document.querySelector("#search").value = "";
            })
            });
        }