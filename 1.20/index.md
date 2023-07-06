---
title: 1.20 Modding
layout: home
nav_order: 1
has_children: true
---

## 1.20 Modding

---

## Setup

This section is all about setting up your IDE and workspace in order to get into modding.

**All credit goes to McJty for this setup page**

**Make sure to check him out here:** [McJty](https://mcjty.eu/)

To start your own mod the easiest way is to download the latest Forge MDK from [the Forge download site](https://files.minecraftforge.net/net/minecraftforge/forge/) and extract it to some temporary folder. Then make a new directory for your own mod and copy over the following files from the MDK:

- The `gradle` folder
- The `src` folder
- `gradlew.bat` and `gradlew`
- `settings.gradle`, `build.gradle`, and `gradle.properties`
- `.gitignore`

Then open `build.gradle` in your IDE (IntelliJ for example) as a project(!). Make sure to set the Java to JDK 17!

You probably want to change your modid. This should be a lowercase identifier containing only characters, digits and possibly an underscore. These are the places where you have to change the modid:

- `gradle.properties`
- The main mod file. In the MDK that's called 'ExampleMod' but you can rename it to a better name. Also, probably rename the package

## gradle.properties

Starting with the Forge MDK for 1.20 all things that can be configured for a project are set in the `gradle.properties` file. `build.gradle` has special tasks to make sure that the values set here are properly propagated to `mods.toml` and other places.

## Mappings

Minecraft is distributed in an obfuscated manner. That means that all names of methods, fields, and variables are renamed to meaningless names. ForgeGradle can deobfuscate this for you. However, it needs to know which mappings to use. For modern Minecraft there are basically two popular ways to do this:

- _official_: mappings from Mojang
- _parchment_: mappings from Mojang with additional parameters and documentation
  More information on Parchment can be found [here](https://parchmentmc.org/docs/getting-started)

## JEI and TOP dependencies

For development, it's nice to have JEI and TOP available. To do that you can change the following in your `build.gradle`. First change the `repositories` like this:

**build.gradle**
`
repositories {
// Put repositories for dependencies here
// ForgeGradle automatically adds the Forge maven and Maven Central for you

    maven { // JEI
        url "https://maven.blamejared.com"
    }
    maven { // TOP
        url "https://maven.k-4u.nl"
    }

}
`

[^1]: [It can take up to 10 minutes for changes to your site to publish after you push the changes to GitHub](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll#creating-your-site).

[Just the Docs]: https://just-the-docs.github.io/just-the-docs/
[GitHub Pages]: https://docs.github.com/en/pages
[README]: https://github.com/just-the-docs/just-the-docs-template/blob/main/README.md
[Jekyll]: https://jekyllrb.com
[GitHub Pages / Actions workflow]: https://github.blog/changelog/2022-07-27-github-pages-custom-github-actions-workflows-beta/
[use this template]: https://github.com/just-the-docs/just-the-docs-template/generate
