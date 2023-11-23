
// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    // Initialize the Facebook SDK with your App ID
    window.fbAsyncInit = function() {
        FB.init({
            appId: 'your-app-id',
            cookie: true,
            xfbml: true,
            version: 'v14.0'
        });
    };
});

function facebookLogin() {
    FB.login(function(response) {
        if (response.authResponse) {
            // User is logged in and granted permissions
            console.log('Welcome! Fetching your information.... ');

            // You can now make API calls or handle user authentication
        } else {
            // User canceled login or did not grant permissions
            console.log('User canceled login or did not fully authorize.');
        }
    }, { scope: 'email,user_photos' }); // Specify the permissions your app requires
}