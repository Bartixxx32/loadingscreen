var config =
{    
    /*
        Do we want to show the image?
        Note that imageSize still affects the size of the image and where the progressbars are located.
    */
    enableImage: true,
 
    /*
        Relative path the the logo we want to display.
    */
    image: "img/logo.png",

    /*
        Cursor image
    */
    cursorImage: "img/cursor.png",
 
    /*
        How big should the logo be?
        The values are: [width, height].
        Recommended to use square images less than 1024px.
    */
    imageSize: [512, 512],
 
    /*
        Define the progressbar type
            0 = Single progressbar
            1 = Multiple progressbars
            2 = Collapsed progressbars
     */
    progressBarType: 1,
 
    /*
        Here you can disable some of progressbars.
        Only applys if `singleProgressbar` is false.
    */
    progressBars:
    {
        "INIT_CORE": {
            enabled: false, //NOTE: Disabled because INIT_CORE seems to not get called properly. (race condition).
        },
 
        "INIT_BEFORE_MAP_LOADED": {
            enabled: false,
        },
 
        "MAP": {
            enabled: false,
        },
 
        "INIT_AFTER_MAP_LOADED": {
            enabled: true,
        },
 
        "INIT_SESSION": {
            enabled: true,
        }
    },
 
    /*
        Loading messages will be randomly picked from the array.
        The message is located on the left side above the progressbar.
        The text will slowly fade in and out, each time with another message.
        You can use UTF-8 emoticons inside loading messages!
    */
    loadingMessages:
    [
        "Witamy na NeedRP",
        "Zachowaj kulture",
        "Developerzy to Bartixxx | Inco | Looky",
        "Skryptami zajmuje sie Bartixxx!",
        "Jesli masz jakis pomysł, napisz to na specjalnym kanale na Discordzie!",
        "Regulamin na Discordzie!",
        "Nie kradnij radiolek, może to byc karane nawet banem!",
        "Zabrania sie - RDM | VDM",
        "Nie masz co robic z pieniedzmi? Chetnie przyjmiemy donejta!",
        "Nasz Discord - https://discord.gg/evEwZdD",
        "Pierwsze ładowanie na serwer może zatrzymać się na 100% przez dłuższą chwilę.",
     
    ],
 
    /*
        Rotate the loading message every 5000 milliseconds (default value).
    */
    loadingMessageSpeed: 5 * 1000,
 
    /*
        Array of music id's to play in the loadscreen.
        Enter your youtube video id's here. In order to obtain the video ID
        Take whats after the watch?v= on a youtube link.
        https://www.youtube.com/watch?v=<videoid>
        Do not include the playlist id or anything, it should be a 11 digit code.
       
        Do not use videos that:
            - Do not allow embedding.
            - Copyrighted music (youtube actively blocks this).
    */
    music:
    [
        "S36ho0PoyX8", "MPhAmsVtgAs", "v9bRktNdMIw", "8NgzzdVqQyQ",
    ],
 
 
    /*
        Set to false if you do not want any music.
    */
    enableMusic: true,
 
    /*
        Default volume for the player. Please keep this under 50%, to not blowout someones eardrums x)
     */
    musicVolume: 20,
 
    /*
        Should the background change images?
        True: it will not change backgrounds.
        False: it will change backgrounds.
    */
    staticBackground: false,
   
    /*
        Array of images you'd like to display as the background.
        Provide a path to a local image, using images via url is not recommended.
    */
    background:
    [
        "img/bg1.jpg",   
        "img/bg2.jpg",
        "img/bg3.jpg",
        "img/bg1.jpg",
        "img/bg2.jpg",
        "img/bg3.jpg",
        "img/bg4.jpg",
        "img/bg5.jpg",
        "img/bg6.jpg",
        "img/bg7.jpg",
        "img/bg8.jpg",
        "img/bg9.jpg",
        "img/bg10.jpg",
        "img/bg11.jpg",
        "img/bg12.jpg",
        "img/bg13.jpg",
        "img/bg14.jpg",
        "img/bg15.jpg",
        "img/bg16.jpg",
        "img/bg17.jpg",
        "img/bg18.jpg",
        "img/bg19.jpg",
        "img/bg20.jpg",
        "img/bg21.jpg",
        "img/bg22.jpg",
        "img/bg23.jpg",
        "img/bg24.jpg",
    ],
 
    /*
        Time in milliseconds on how fast the background
        should swap images.
     */
    backgroundSpeed: 7 * 1000,

    /*
        Which style of animation should the background transition be?
        zoom = background zooms in and out.
        slide = transtion backgrounds from sliding right and back again.
        fade = fade the background out and back in.
    */
    backgroundStyle: "zoom",

    /*
        Should the log be visible? Handy for debugging!
    */
    enableLog: false,
}
