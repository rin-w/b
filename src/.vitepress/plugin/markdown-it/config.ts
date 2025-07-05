import MarkdownIt from 'markdown-it'
import footnote from 'markdown-it-footnote'

export default {
  mdiConfig: (md: MarkdownIt) => {
    md.use(footnote);
    md.renderer.rules = {

      ...md.renderer.rules,

      footnote_anchor(tokens, idx, options, env, slf) {
        if (typeof slf.rules.footnote_anchor_name === 'function') {
          let id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);

          if (tokens[idx].meta.subId > 0) {
            id += ':' + tokens[idx].meta.subId;
          }

          return ' <a href="#fnref' + id + '" class="footnote-backref">★</a>';
        }
        throw new Error('I dunno lol')
      }

    }
  }
}