// Function to add software projects to the software page 
let projlist = ["proj1","proj2","proj3", "proj4"]
let card = undefined;
projlist.forEach(proj => {
    card.title = proj.title;
    card.body = proj.body 
    return card;
});

// Function to validate email address on contact page
let checkEmail = (em) => {
    let check = false;
    if (em.includes("@") && em.length > 7) {
        check = true
    }
    return check
  };

//   Function to reorder songs on music page 
let songs = ['Trust Issues','All Falls', 'Poseidon',];

const unShiftSong = songs.unshift();

const newPlayList = songs.push(unShiftSong);

// Function to search the content on website 

let userInput = undefined;

const content = ["hompage", 'musicpage', 'All Falls', 'Goshen', 'Marvin'];

const results = content.filter((term) => term === userInput)


  

