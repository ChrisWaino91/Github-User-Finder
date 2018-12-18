// Initialise Github
const github = new Github();

// Initialise UI
const ui = new UI();

// Search inpu
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if(userText !== ''){
        // Make HTTP call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === "Not Found"){
                //Show Alert
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
               ui.showProfile(data.profile);
               ui.showRepos(data.repos);
            }
        })
    } else {
        // Clear Profile
        ui.clearProfile();
    }
})