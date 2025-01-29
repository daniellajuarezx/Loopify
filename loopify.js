let APIKEY = "KtAumCu0WF71O7Uxh0jshJsRONSxPgnL";

document.addEventListener("DOMContentLoaded", genSearch);

      function genSearch() {

        document.getElementById("js-btnSearch").addEventListener("click", ev => {
          ev.preventDefault();

          let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
          let gifSearch = document.getElementById("search").value;
          url = url.concat(gifSearch);

          fetch(url)
            .then(response => response.json())
            .then(content => {

              let gifDisplay = document.createElement("displayBox");
              let gif = document.createElement("img");
              let gifName = document.createElement("gifName");

              if (content.data.length > 0) {
                    gif.src = content.data[0].images.downsized.url;  
                    gif.alt = content.data[0].title;
                    gifName.textContent = content.data[0].title;
                    
                    gifDisplay.appendChild(gif);
                    gifDisplay.appendChild(gifName);
                       
              let gifResult = document.querySelector(".gifDisplay");
              gifResult.insertAdjacentElement("afterbegin", gifDisplay);
            } else {
                console.error("No GIFs found");
            }
              document.querySelector("#search").value = "";
            })
            });
        }