new Vue({
    el: '#app',
    data: {
        websites: [
            {
                btntext: "Github",
                btnlink: "https://www.github.com/albertogiunta"
            },
            {
                btntext: "Linkedin",
                btnlink: "https://www.linkedin.com/in/albertogiunta"
            },
            {
                btntext: "Twitter",
                btnlink: "https://www.twitter.com/albigiu"
            },
            {
                btntext: "Instagram",
                btnlink: "https://www.instagram.com/illbegiu"
            },
            {
                btntext: "Mail",
                btnlink: "mailto:alb.giunta@gmail.com"
            }
        ],
        projects: [
            {
                iconpath: "img/logo-jit.png",
                title: "🇮🇹 JustInTrain Orario Treni Trenitalia",
                description: "The Android app specifically designed for Trenitalia train commuters.",
                story: "Being a train commuter myself, I've built this app to make our life easier, and it seems like other commuters also like it quite a lot.",
                funfact: "There's nothing fun being a train commuter in Italy, believe me.",
                links: [
                    {
                        btntext: "Google Play Store",
                        btnlink: "https://play.google.com/store/apps/details?id=com.jaus.albertogiunta.justintrain_oraritreni"
                    },
                    {
                        btntext: "Github",
                        btnlink: "https://github.com/albertogiunta/justintrain-client-android"
                    },
                    {
                        btntext: "Telegram Channel",
                        btnlink: "https://t.me/justintrain"
                    }
                ],
                tags: [
                    "android app",
                    "2017 - now"
                ]
            },
            {
                iconpath: "img/logo-panda.png",
                title: "Panda Gif New Tab",
                description: "Whenever you feel sad, now you know what to do: just open a new tab!",
                story: "What's a better S. Valentine gift than hand-crafting something your SO would use and love every day?",
                funfact: "I hand-picked more than 150 panda gifs. It was way more fun than it sounds.",
                platform: "Chrome Extension",
                devperiod: "2017",
                links: [
                    {
                        btntext: "Chrome Web Store",
                        btnlink: "https://chrome.google.com/webstore/detail/panda-gif-new-tab/ofplemiepgiehjgedpmhcdifelnpocmm?hl=en"
                    },
                    {
                        btntext: "Github",
                        btnlink: "https://github.com/albertogiunta/panda-gif-new-tab"
                    }

                ],
                tags: [
                    "chrome extension",
                    "2017"
                ]
            },
            {
                iconpath: "img/logo-seen.png",
                title: "Seen!\nTv Series Episode Tracker",
                description: "The smartest and definitive way to keep track of your favourite tv shows' episodes!",
                story: "Once upon a time people used to download TV series, and used to loose track of their progress. Then Netflix arrived.",
                funfact: "I now use Netflix too.",
                platform: "Chrome Extension",
                devperiod: "2015",
                links: [
                    {
                        btntext: "Chrome Web Store",
                        btnlink: "https://chrome.google.com/webstore/detail/seen-tv-series-episode-tr/lkickecpgpegomhfjadelgeadepjijeh?hl=en"
                    },
                    {
                        btntext: "Github",
                        btnlink: "https://github.com/albertogiunta/Seen-Chrome-Extension"
                    },
                ],
                tags: [
                    "chrome extension",
                    "2015"
                ]
            }
        ]
    }
})