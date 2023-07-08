---
title: Episode 1
layout: default
parent: 1.20 Modding
nav_order: 0
---

## 1.20 Episode 1

To start out this episode, we are going to get our file structure set up.

You can start out by deleting the default examlemod folder.

You will want your file structure to look like this before we begin. **Please be sure to create the necessary folders & classes**.

![fileStructure](/assets/images/1.20.ep1-0.PNG)

## Reference Class

Inside of util>Reference we will be defining two variables, `MODID` and `LOGGER`

`MODID` is a unique identifier which will be used to distinguish your custom mod content. I will be using `tutorialmod` to keep it simple
Ex. Minecraft content starts with minecraft:, this tutorials content will begin with tutorialmod:

`LOGGER` is used to log information to the console. We will be using this later to find bugs and errors.

```java
import com.mojang.logging.LogUtils;
import org.slf4j.Logger;

public class Reference
{
    public static final String MODID = "tutorialmod";
    public static final Logger LOGGER = LogUtils.getLogger();
}
```

[^1]: [It can take up to 10 minutes for changes to your site to publish after you push the changes to GitHub](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll#creating-your-site).

[Just the Docs]: https://just-the-docs.github.io/just-the-docs/
[GitHub Pages]: https://docs.github.com/en/pages
[README]: https://github.com/just-the-docs/just-the-docs-template/blob/main/README.md
[Jekyll]: https://jekyllrb.com
[GitHub Pages / Actions workflow]: https://github.blog/changelog/2022-07-27-github-pages-custom-github-actions-workflows-beta/
[use this template]: https://github.com/just-the-docs/just-the-docs-template/generate
