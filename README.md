# Blankets for T.O. Website 
![Blankets for T.O. banner](static/BTO_background.png)
This [website](https://blanketsforto.ca) was built for Blankets for T.O. (BTO), a non-profit organization founded in 2019 at the University of Toronto Scarborough which advocates for the homeless community in Toronto. Website code written by [@What-Is-A-Username](https://github.com/What-Is-A-Username), with incorporation of various external packages. The site was built upon the [gatsby-contentful-starter](https://github.com/contentful-userland/gatsby-contentful-starter) repository, utilizing Gatsby, Contentful and React.

## Quickstart

1. Clone this repository with Git. 
2. Run `npm run setup` to perform setup of the needed environment variables for integration with Contentful.
3. If the Contentful space is **not yet setup**, such as if the space is new, run migrations by running `contentful space migration .\contentful\migrations\initial.js` to create the required content model on Contentful. **Otherwise**, if the space has already been setup with the appropriate content models, skip this step.
4. Run `npm run dev` to view the website in the browser.

## Features
- Browse updates and articles written by BTO executives and members on our [blog page](https://blanketsforto.ca/blog)
- Filter and sort by date to browse certain topics on our [blog page](https://blanketsforto.ca/blog) 
- Browse and add items to your shopping cart in our [store page](https://blanketsforto.ca/store) 
- View the reach of our initiatives by browsing our donations on our [homepage's map](https://blanketsforto.ca/)
- View our Twitter and Instagram feeds on our [homepage](https://blanketsforto.ca/) (may require blockers to be turned off)
- Meet our team on the [Team page](https://blanketsforto.ca/team)
- View SEO and social media link previews when pages are shared on Facebook, Discord, and Twitter
- View links to our [sponsors](https://blanketsforto.ca/sponsors)
- Send BTO a direct email message straight from our [homepage's form](https://blanketsforto.ca/)

## Credits
Attributions to images and other media used in the website can be found [here](https://blanketsforto.ca/credits).

## Contact
Questions and concerns about the site can be directed to [blanketsforto.site@gmail.com](mailto:blanketsforto.site@gmail.com).
