import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'

export default defineConfig({

  base: '/b/',

  title: "Miditerranaenyan C",

  description: "A Black MIDI wiki",

  head: [
    ['link', { rel: 'icon', href: '/b/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#ddd' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: 'Miditerranenan C' }],
    ['meta', { name: 'og:title', content: 'deez notes. gotem' }],
    ['meta', { name: 'og:description', content: 'A collection of articles, guides, and indices containing information and opinion about the music genre involving MIDI files with huge amount of musical notes played simultaneously.' }],
    ['meta', { name: 'og:image', content: 'https://rin-w.github.io/b/favicon.ico' }],
  ],

  themeConfig: {

    logo: '/favicon.ico',

    nav: [
      //{ text: 'blog', link: '/blog' },
      { text: 'soft', link: '/software/pitch' },
      { text: 'black', link: '/blacking/how-to/black' },
      { text: 'sound', link: '/soundfont/how-to/intro' },
      { text: 'index', link: '/indices/pitch' },
    ],

    sidebar: {
      '/blacking/': { items: sidebarBlacking() },
      '/soundfont/': { items: sidebarSoundfont() },
      '/software/': { base: '/software/', items: sidebarSoftware() },
      '/indices/': { base: '/indices/', items: sidebarIndices() },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rin-w/b'},
      { icon: 'discord', link: 'https://discord.gg/m5GsaaXNHy' },
      { icon: 'twitter', link: 'https://pagesix.com/wp-content/uploads/sites/3/2022/07/elon-musk-63.jpg' },
      {
        icon: { svg: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><title>LINE</title><path d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0ZM5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157Zm.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156h-.562Zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832a.17.17 0 0 0-.013-.015v-.001a.139.139 0 0 0-.01-.01l-.003-.003a.092.092 0 0 0-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 0 0-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 0 0-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 0 0 .039.038l.001.001.01.006.004.002a.066.066 0 0 0 .008.004l.007.003.005.002a.168.168 0 0 0 .01.003h.003a.155.155 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156h-.561Zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.155.155 0 0 0-.108.044h-.001l-.001.002-.002.003a.155.155 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z"></path></svg>` },
        link: '...',
      },
      {
        icon: { svg: `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>Switch site</title><path d="M258.148 20.822c-1.112.008-2.226.026-3.343.055-39.32 1.041-81.507 15.972-123.785 50.404l-6.028 4.91-5.732-5.25c-12.644-11.578-20.276-27.633-25.653-43.716-8.974 36.98-14.631 81.385-9.232 114.523 18.065.908 45.409-2.177 73.7-7.818 17.858-3.561 36.048-8.126 53.064-13.072-13.419-2.911-25.896-6.882-38.143-12.082l-16.088-6.832 14.906-9.127c46.367-28.393 80.964-40.686 120.235-35.553 33.105 4.327 69.357 20.867 119.066 47.271-25.373-36.314-62.243-64.737-104.728-76.994-15.402-4.443-31.553-6.828-48.239-6.719zM346 116c-46.667 0-46.666 0-46.666 46.666V349.4c0 9.596.007 17.19.414 23.242a664.804 664.804 0 0 1 50.656-12.223c24.649-4.915 48.367-8.224 67.916-8.41 6.517-.062 12.571.224 18.041.912l6.31.793 1.358 6.213c2.464 11.265 3.673 23.447 3.914 36.059 38.032-.19 38.057-3.06 38.057-46.65V162.665C486 116 486 116 439.334 116a226.98 226.98 0 0 1 3.978 7.64l12.624 25.536-25.004-13.648c-13.085-7.143-25.164-13.632-36.452-19.528zm-281.943.016c-38.032.19-38.057 3.06-38.057 46.65V349.4C26 396 26 396 72.666 396a226.98 226.98 0 0 1-3.978-7.64l-12.624-25.536 25.004 13.649c13.085 7.142 25.164 13.632 36.452 19.527H166c46.667 0 46.666 0 46.666-46.666V162.666c0-9.626-.006-17.24-.416-23.304a664.811 664.811 0 0 1-50.654 12.22c-32.865 6.554-64.077 10.25-85.957 7.498l-6.31-.793-1.358-6.213c-2.464-11.265-3.673-23.446-3.914-36.058zm354.619 254.078c-17.543.25-40.826 3.206-64.75 7.977-17.859 3.56-36.05 8.125-53.065 13.072 13.419 2.91 25.896 6.881 38.143 12.082l16.088 6.832-14.906 9.127c-46.367 28.392-80.964 40.685-120.235 35.553-33.105-4.327-69.357-20.868-119.066-47.272 25.373 36.315 62.243 64.738 104.728 76.994 52.573 15.166 113.872 6.343 175.367-43.74l6.028-4.91 5.732 5.25c12.644 11.579 20.276 27.633 25.653 43.717 8.974-36.981 14.631-81.386 9.232-114.524-2.788-.14-5.748-.204-8.95-.158z"></path></svg>` },
        link: 'https://blackmidi.neocities.org/',
      },
    ],
    
    search: {
      provider: 'local'
    }

  },

  markdown: {
    config: (md) => {

      md.use(footnote);
      
      md.renderer.rules.footnote_anchor = function(tokens, idx, options, env, slf) {
        var id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);

        if (tokens[idx].meta.subId > 0) {
          id += ':' + tokens[idx].meta.subId;
        }

        return ' <a href="#fnref' + id + '" class="footnote-backref">★</a>';
      }

    }
  }

})


function sidebarBlacking(): any[] {
  return [
    {
      text: 'How To Black MIDI',
      base: '/blacking/how-to/',
      collapsed: false,
      items: [
        { text: 'Introduction', link: 'black' },
        { text: 'Playing', link: 'play-black-midis' },
        { text: 'Creating', link: 'make-black-midis' },
        { text: 'Capturing', link: 'make-black-midi-videos' },
        { text: 'Miscellaneous', link: 'miscellaneous' },
      ]
    },
    {
      text: 'Blacking Insight',
      base: '/blacking/insight/',
      collapsed: false,
      items: [
        { text: 'some', link: '' },
        { text: 'body', link: '' },
        { text: 'once', link: '' },
        { text: 'told', link: '' },
      ]
    },
    { text: 'Terminologies', link: '/indices/black-midi-terminologies' },
    { text: 'Software Usage', link: '/software/pitch' },
  ]
}

function sidebarSoftware(): any[] {
  return [
    {
      text: 'Software Tutorials',
      link: 'pitch',
    },
    {
      text: 'Synthesizers',
      base: '/software/synthesizer/',
      items: [
        { text: 'OmniMIDI', link: 'keppy-synth' },
      ]
    },
    {
      text: 'MIDI Players',
      base: '/software/midi-player/',
      items: [
        { text: 'Piano From Above', link: 'piano-from-above' },
      ]
    },
    {
      text: 'MIDI Editors',
      base: '/software/midi-editor/',
      collapsed: false,
      items: [
        { text: 'REAPER', link: 'reaper' },
        { text: 'FL Studio', link: 'fl-studio' },
        { text: 'Domino', link: 'domino' },
      ]
    },
    {
      text: 'MIDI Generators',
      base: '/software/midi-editor/',
      items: [
        { text: 'ImageToMIDI', link: 'image-to-midi' },
      ]
    },
    {
      text: 'Soundfont Tools',
      base: '/software/soundfont/',
      items: [
        { text: 'Audacity (ft. ffmpeg)', link: 'audacity' },
        { text: 'Polyphony', link: 'polyphony' },
        { text: 'Extreme Sample Converter', link: 'extreme-sample-converter' },
        { text: 'sfq', link: 'sfq' },
        { text: 'Bulk Rename Utility', link: 'bru' },
      ]
    },
  ]
}

function sidebarSoundfont(): any[] {
  return [
    {
      text: 'How To Soundfont',
      base: '/soundfont/how-to/',
      collapsed: false,
      items: [
        { text: 'Introduction', link: 'intro' },
      ]
    },
    {
      text: 'Soundfont Insight',
      base: '/soundfont/insight/',
      collapsed: false,
      items: [
        { text: 'some', link: '' },
        { text: 'body', link: '' },
        { text: 'once', link: '' },
        { text: 'told', link: '' },
      ]
    },
    { text: 'Terminologies', link: '/indices/soundfont-terminologies' },
    { text: 'Software Usage', link: '/software/pitch' },
  ]
}

function sidebarIndices(): any[] {
  return [
    {
      text: 'Indices',
      link: 'pitch',
      collapsed: false,
      items: [
        {
          text: 'Black MIDI Terms',
          link: 'black-midi-terminologies',
        },
        {
          text: 'List of MIDI Editors',
          link: 'list-of-midi-editors',
        },
        {
          text: 'List of MIDI Players',
          link: 'list-of-midi-players',
        },
        {
          text: 'List of MIDI Generators',
          link: 'list-of-midi-generators',
        },
      ]
    },
  ]
}