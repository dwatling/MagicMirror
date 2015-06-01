// for navigator language
var lang = window.navigator.language;
// you can change the language
// var lang = 'en';

//change weather params here:
//units: metric or imperial
var weatherParams = {
    'q':'McHenry,Illinois',
    'lang':lang,
    'units':'imperial'
};

var feed = 'http://www.nwherald.com/?rss=news/local';

// compliments:
var morning = [
            'Good morning!',
            'Don\'t forget to brush your teeth!',
            'Did you have breakfast?'
        ];
        
var afternoon = [
            'Good afternoon!',
            'Did you water your plants yet?',
            'I trust you are having a good day.'
        ];
       
var evening = [
            'Good evening!',
            'Did you have a nice day?',
            'Don\'t forget to brush your teeth before bed!'
        ];
