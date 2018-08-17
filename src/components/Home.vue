<template>
  <div class="container">
    <div class="header">
      <img class="profile-pic" src="./../assets/profile.jpg" alt="profile pic">
      <h1 class="title">{{name}}</h1>
      <nav class="pers-links">
          <a class="link" v-for="link in personalLinks" :key="link.id" :href="link.link"  target="_blank">{{link.sitename}}</a>
      </nav>
    </div>

    <div class="content">
      <p class="intro" style="white-space: pre-line;">{{intro}}</p>
      <p class="title-section">Past projects:</p>
      <div class="projects">
        <div class="project" v-for="proj in projects" :key="proj.id">
            <p class="proj-name">{{proj.name}}</p>
            <p class="proj-caption">{{proj.caption}}</p>
            <ul>
              <li v-for="link in proj.links" :key="link.id">
                <a :href="link.link"  target="_blank">{{link.sitename}}</a>
              </li>
            </ul>
        </div>
      </div>
    </div>
    <p class="copyright">© 2018 Alberto Giunta</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      name: 'Alberto Giunta',
      intro: 'Currently taking my MSc @ University of Bologna, Italy.\n\nWhen I get an itch I usually make a product out of it.',
      personalLinks: [
        {
          sitename: 'Linkedin',
          link: 'https://www.linkedin.com/in/albertogiunta'
        },
        {
          sitename: 'Github',
          link: 'https://www.github.com/albertogiunta'
        },
        {
          sitename: 'Twitter',
          link: 'https://www.twitter.com/albigiu'
        },
        {
          sitename: 'E-Mail',
          link: 'mailto:albertogiuntadev@gmail.com'
        }
      ],
      projects: [
        {
          name: '🔥 ReadIT - Never forget to read a link again',
          caption: 'My own solution to endless and scattered lists of unread links.',
          icon: '',
          category: '📱android',
          links: [
            {
              sitename: 'Play Store',
              link: 'https://play.google.com/store/apps/details?id=com.jaus.albertogiunta.readit'
            },
            {
              sitename: 'Github',
              link: 'https://github.com/albertogiunta/ReadIT'
            }
          ]
        },
        {
          name: '🇮🇹 JustInTrain - Italian Trains Timetables',
          caption: 'The app of choice for Italian train commuters.',
          icon: '',
          category: '📱android',
          links: [
            {
              sitename: 'Play Store',
              link: 'https://play.google.com/store/apps/details?id=com.jaus.albertogiunta.justintrain_oraritreni'
            },
            {
              sitename: 'Github',
              link: 'https://github.com/albertogiunta/justintrain-client-android'
            },
            {
              sitename: 'Wired.it',
              link: 'https://www.wired.it/mobile/app/2017/11/24/justintrain-app-android-per-pendolari/'
            }
          ]
        },
        {
          name: '🐼 Panda Gif New Tab',
          caption: 'Whenever you feel sad, just open a new tab.',
          icon: '',
          category: '🖥 chrome',
          links: [
            {
              sitename: 'Chrome Web Store',
              link: 'https://chrome.google.com/webstore/detail/panda-gif-new-tab/ofplemiepgiehjgedpmhcdifelnpocmm?hl=en'
            },
            {
              sitename: 'Github',
              link: 'https://github.com/albertogiunta/panda-gif-new-tab'
            }
          ]
        },
        {
          name: '👀 Seen! Tv Series Episode Tracker',
          caption: 'Before Netflix people needed tools to track their Tv Series. I gave them one.',
          icon: '',
          category: '🖥 chrome',
          links: [
            {
              sitename: 'Chrome Web Store',
              link: 'https://chrome.google.com/webstore/detail/seen-tv-episode-tracker/lkickecpgpegomhfjadelgeadepjijeh?hl=it'
            },
            {
              sitename: 'Github',
              link: 'https://github.com/albertogiunta/Seen-Chrome-Extension'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style src="./Home.sass" lang="sass" />
