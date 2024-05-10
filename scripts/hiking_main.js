document.addEventListener("DOMContentLoaded", () => {
    function showNonImageDetails(hike){
        details.innerHTML = `
            <h1>Trail Name: ${hike.name}</h1>
            <h3>Description: <br> ${hike.description}</h3>
            <p>Length: ${hike.length}</p>
            <p>Rating: ${hike.difficulty}</p>
        `;
    }
    function showImage(imageName, title){
        details.innerHTML += `
            <h2>${title}</h2>
            <img src="./images/${imageName}">
        `;
    }

    function showHikeDetails(hike){
        showNonImageDetails(hike);
        showImage(hike.scenicImage, "Scenic View");
        showImage(hike.trailMapImage, "Trail Map");
    }

    function onHikechange(){ 
        for (h of hikes){
            if(h.id == hikesElement.value){
                showHikeDetails(h);
            }
        }
    }

    for (h of hikes){
        hikesElement.innerHTML += `<option value="${h.id}">${h.name}</option>`
    }

    hikesElement.addEventListener("change", onHikechange)
});