// Blog entries for the Blogs page. Add or remove objects here.
// An empty array renders "No blogs for now." on the page.
//
// Fields:
//   id    — unique slug (used as the React key)
//   title — post title
//   date  — optional display date (hide the field or leave "" to omit)
//   body  — array of paragraphs (strings)

const blogs = [
  {
    id: "building-my-portfolio",
    title: "Building My Portfolio",
    date: "Oct 2026",
    body: [
      "I wanted a portfolio that felt like more than a résumé on a webpage, so I built this one as a small showcase of both my work and the way I like to build things. It started as a simple single-page site — a hero, a few sections, and a list of projects — and grew into something I genuinely enjoy maintaining.",
      "Most of the site is hand-written Create React App code: plain JavaScript, one stylesheet, and no heavy frameworks. The fun part was the TemPad widget and Miss Minutes tucked beside the hero — a nod to my love for Marvel, and a good excuse to play with canvas animations, timing functions, and CSS keyframes.",
      "The theme system, the animated sacred timeline in the footer, and the responsive layout were all small problems worth solving properly. Adding this blog was the next step: a quiet place to write about what I'm building and learning, without needing a separate platform.",
    ],
  },
];

export default blogs;
