---
sidebar_position: 99
title: Your Article Title
slug: /your-series/your-article-slug
tags: [tag1, tag2]
---

# Your Article Title

![Cover image](./images/cover.png)

Write your content here. Use normal markdown — headings, lists, code blocks, tables, all work.

## Add images

1. Put image files in the `images/` folder next to this `.md` file
2. Reference them like this:

![Alt text](./images/your-image.png)

## Add a new article to the blog page

Open `src/components/BlogShowcase.js` and add one entry to the `articles` array:

```js
{
  title: 'Your Article Title',
  description: 'One line summary.',
  to: '/your-series/your-article-slug',
  category: 'DevSecOps', // or 'Secure Code Review'
  readTime: '5 min',
  date: 'Aug 2026',
},
```

That's it. No other setup needed.
