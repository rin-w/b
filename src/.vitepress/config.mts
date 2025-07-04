import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'

process.env.VITE_EXTRA_EXTENSIONS = 'rpp'

export default defineConfig({

  base: '/b/',

  title: "Miditerraenyan C",

  description: "A Black MIDI wiki",

  head: [
    ['link', { rel: 'icon', href: '/b/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#ddd' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: 'Miditerraenyan C' }],
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
      //{ text: 'sound', link: '/soundfont/how-to/intro' },
      //{ text: 'index', link: '/indices/pitch' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rin-w/b'},
      { icon: 'discord', link: 'https://discord.gg/m5GsaaXNHy' },
      { icon: 'twitter', link: 'https://pagesix.com/wp-content/uploads/sites/3/2022/07/elon-musk-63.jpg' },
      {
        icon: { svg: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><title>LINE</title><path d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0ZM5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157Zm.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156h-.562Zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832a.17.17 0 0 0-.013-.015v-.001a.139.139 0 0 0-.01-.01l-.003-.003a.092.092 0 0 0-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 0 0-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 0 0-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 0 0 .039.038l.001.001.01.006.004.002a.066.066 0 0 0 .008.004l.007.003.005.002a.168.168 0 0 0 .01.003h.003a.155.155 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156h-.561Zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.155.155 0 0 0-.108.044h-.001l-.001.002-.002.003a.155.155 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z"></path></svg>` },
        link: '...',
      },
    ],
    
    sidebar: {
      '/blacking/': { items: sidebarBlacking() },
      '/soundfont/': { items: sidebarSoundfont() },
      '/software/': { base: '/software/', items: sidebarSoftware() },
      '/indices/': { base: '/indices/', items: sidebarIndices() },
    },

    outline: {
      level: [2, 3],
      label: 'Sections'
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/rin-w/b/edit/main/src/:path',
      text: 'Suggest an edit'
    },

  },

  lastUpdated: true,

  markdown: {
    image: {
      lazyLoading: true
    },
    config: (md) => {

      md.use(footnote);
      
      md.renderer.rules.footnote_anchor = function(tokens, idx, options, env, slf) {
        var id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);

        if (tokens[idx].meta.subId > 0) {
          id += ':' + tokens[idx].meta.subId;
        }

        return ' <a href="#fnref' + id + '" class="footnote-backref">★</a>';
      }

    },
  }

})


function sidebarBlacking(): any[] {
  return [
    {
      text: 'How To Black MIDI',
      link: 'black',
      base: '/blacking/how-to/',
      collapsed: false,
      items: [
        { text: 'Playing', link: 'play-black-midis' },
        { text: 'Creating', link: 'make-black-midis' },
        { text: 'Capturing', link: 'make-black-midi-videos' },
      ]
    },
    {
      text: 'Blacking Insight',
      base: '/blacking/insight/',
      collapsed: false,
      items: [
        { text: 'Insight One', link: '' },
        { text: 'Insight Two', link: '' },
        { text: 'Audio Processing', link: '' },
      ]
    },
    { text: 'Terminologies', link: '' },
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
        { text: "Keppy\'s Synthesizer", link: 'keppy-synth' },
        { 
          text: 'Renderers', 
          base: '/software/synthesizer/renderer/',
          collapsed: false,
          items: [
            { text: "Keppy's MIDI Converter" , link: 'keppy-midi-converter' },
          ]
        },
      ]
    },
    {
      text: 'MIDI Visualizers',
      base: '/software/midi-visualizer/',
      items: [
        { text: 'Piano From Above', link: 'piano-from-above' },
        { 
          text: 'Renderers', 
          base: '/software/midi-visualizer/renderer/',
          collapsed: false,
          items: [
            { text: 'Zenith', /*link: 'zenith'*/ },
          ]
        },
      ]
    },
    {
      text: 'MIDI Editors',
      base: '/software/midi-editor/',
      collapsed: false,
      items: [
        { 
          text: 'Domino', 
          link: 'intro',
          base: '/software/midi-editor/domino/',
          collapsed: true,
          items: [
            { text: 'Setup', link: 'setup' },
            { text: 'Basics', link: 'basics' },
            { text: 'User Experience', link: 'user-experience' },
            { text: 'Note Arrangement', link: 'note-arrangement' },
            { text: 'Miscellaneous', link: 'misc' },
          ]
        },
        { text: 'FL Studio', /*link: 'fl-studio'*/ },
        { text: 'REAPER', link: 'reaper' },
      ]
    },
    {
      text: 'MIDI Generators',
      base: '/software/midi-generators/',
      items: [
        { text: 'ImageToMIDI', /*link: 'image-to-midi'*/ },
        { text: 'Color Events', /*link: 'color-events'*/ },
      ]
    },
    {
      text: 'Soundfont Tools',
      base: '/software/soundfont/',
      items: [
        { text: 'Audacity (ft. ffmpeg)', /*link: 'audacity'*/ },
        { text: 'Polyphone', /*link: 'polyphone'*/ },
        { text: 'Extreme Sample Converter', /*link: 'extreme-sample-converter'*/ },
        { text: 'sfq', /*link: 'sfq'*/ },
        { text: 'Bulk Rename Utility', /*link: 'bru'*/ },
      ]
    },
    {
      text: 'Miscellaneous',
      base: '/software/misc/',
      items: [
        { text: '4GB Patch', link: '4gb-patch' },
        { text: 'MIDI Visualizer Framedump', /*link: 'synthesia-framedump'*/ },
        { text: 'Note Mirror', link: 'midi-mirror' },
        { text: 'Note Velocity Threshold', link: 'note-threshold' },
      ]
    },
    {
      text: 'Sofware Insight',
      base: '/software/insight/',
      items: [
        { 
          text: 'Live MIDI Recording (ft. Audacity)',
          link: 'record-midi-live-with-audacity'
        },
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
        { text: 'Introduction', /*link: 'intro'*/ },
        { text: 'Generating Samples', /*link: 'generate-samples'*/ },
        { text: 'Post-processing', /*link: 'post-process'*/ },
        { text: 'Packaging', /*link: 'pack'*/ },
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
    { text: 'Terminologies', /*link: '/indices/soundfont-terminologies'*/ },
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
          // link: 'black-midi-terminologies',
        },
        {
          text: 'Soundfont Terms',
          // link: 'soundfont-terminologies',
        },
        {
          text: 'List of MIDI Editors',
          // link: 'list-of-midi-editors',
        },
        {
          text: 'List of MIDI Visualizers',
          // link: 'list-of-midi-visualizers',
        },
        {
          text: 'List of MIDI Generators',
          // link: 'list-of-midi-generators',
        },
        {
          text: 'List of the GOAT Blackers',
          // link: 'list-of-the-goat-blackers',
        },
      ]
    },
  ]
}