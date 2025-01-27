let APIKEY = "KtAumCu0WF71O7Uxh0jshJsRONSxPgnL";

document.addEventListener("DOMContentLoaded", genSearch);

      function genSearch() {

        document.getElementById("js-btnSearch").addEventListener("click", ev => {
          ev.preventDefault(); // prevents page from reloading while being able to continue the search fxn

          let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
          let gifSearch = document.getElementById("search").value; // the execution of the search = getting ready to search for the gif
          url = url.concat(gifSearch);//connects both lets to work together. now we know where we're searching and have the power to execute our search

          fetch(url) //gets the URL from the API
            .then(response => response.json()) //result is turned into a json
            .then(content => { //whatever data was gathered from the json is displayed as content

              let gifDisplay = document.createElement("displayBox"); //here we see the gif being displayed, like a container
              let gif = document.createElement("img");//gif itself
              let gifName = document.createElement("gifName");//gif name, which is useful to the user so they can get a more precise search

              if (content.data.length > 0) { //if whatever we search for is longer than 0 characters, we're expecting a result
                    gif.src = content.data[0].images.downsized.url;  // GIF, also takes u to giphy page when u open a new tab
                    gif.alt = content.data[0].title;  // GIF title
                    gifName.textContent = content.data[0].title;  // Caption text
                    
                    gifDisplay.appendChild(gif); // putting the display to work
                    gifDisplay.appendChild(gifName); // putting the display to work 
                       
              let gifResult = document.querySelector(".gifDisplay");
              gifResult.insertAdjacentElement("afterbegin", gifDisplay);
            } else {
                console.error("No GIFs found");
            }
              document.querySelector("#search").value = "";
            })
            });
        }