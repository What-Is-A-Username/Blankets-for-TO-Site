module.exports = function (migration) {
  const inlineSpotifyEmbed = migration
    .createContentType("inlineSpotifyEmbed")
    .name("Spotify Embed")
    .description(
      "Describes a Spotify podcast episode or song or other audio that can be embedded in rich text pages or added to other entries. "
    )
    .displayField("audioTitle");

  inlineSpotifyEmbed
    .createField("audioTitle")
    .name("Audio Title")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  inlineSpotifyEmbed
    .createField("link")
    .name("Link")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
      {
        regexp: {
          pattern:
            "^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  inlineSpotifyEmbed
    .createField("accessibilityDescription")
    .name("Accessibility Description")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .defaultValue({
      "en-US": "Used as a string for iframe titles for site accessibility.",
    })
    .disabled(false)
    .omitted(false);

  inlineSpotifyEmbed.changeFieldControl(
    "audioTitle",
    "builtin",
    "singleLine",
    {}
  );
  inlineSpotifyEmbed.changeFieldControl("link", "builtin", "singleLine", {});
  inlineSpotifyEmbed.changeFieldControl(
    "accessibilityDescription",
    "builtin",
    "singleLine",
    {}
  );

  const sponsor = migration
    .createContentType("sponsor")
    .name("Sponsor")
    .description(
      "Describes organizations that BTO has been sponsored by which will be shown on /sponsors page."
    )
    .displayField("name");

  sponsor
    .createField("name")
    .name("Name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  sponsor
    .createField("logo")
    .name("Logo")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  sponsor
    .createField("sponsorType")
    .name("SponsorType")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        in: ["Preferred", "Default"],
      },
    ])
    .disabled(false)
    .omitted(false);

  sponsor
    .createField("description")
    .name("Description")
    .type("Text")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  sponsor
    .createField("mainLink")
    .name("MainLink")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        regexp: {
          pattern:
            "^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  sponsor
    .createField("links")
    .name("Links")
    .type("Text")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  sponsor.changeFieldControl("name", "builtin", "singleLine", {});
  sponsor.changeFieldControl("logo", "builtin", "assetLinkEditor", {});

  sponsor.changeFieldControl("sponsorType", "builtin", "dropdown", {
    helpText: "Used to categorize sponsors into tier.",
  });

  sponsor.changeFieldControl("description", "builtin", "markdown", {});
  sponsor.changeFieldControl("mainLink", "builtin", "singleLine", {});

  sponsor.changeFieldControl("links", "builtin", "markdown", {
    helpText:
      "Add additional links to their promoted content or information here.",
  });

  const rewardsPrize = migration
    .createContentType("rewardsPrize")
    .name("Rewards Prize")
    .description(
      "(OBSELETE) Describes an award item that can be received by redeeming member rewards program points."
    )
    .displayField("name");

  rewardsPrize
    .createField("name")
    .name("Name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  rewardsPrize
    .createField("description")
    .name("Description")
    .type("Text")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  rewardsPrize
    .createField("image")
    .name("Image")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  rewardsPrize
    .createField("pointsRequired")
    .name("Points Required")
    .type("Integer")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  rewardsPrize.changeFieldControl("name", "builtin", "singleLine", {});
  rewardsPrize.changeFieldControl("description", "builtin", "multipleLine", {});
  rewardsPrize.changeFieldControl("image", "builtin", "assetLinkEditor", {});
  rewardsPrize.changeFieldControl(
    "pointsRequired",
    "builtin",
    "numberEditor",
    {}
  );
  const questionPage = migration
    .createContentType("questionPage")
    .name("Question Page")
    .description("(OBSELETE). Describes a scavenger hunt question page.")
    .displayField("title");

  questionPage
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  questionPage
    .createField("body")
    .name("Body")
    .type("RichText")
    .localized(false)
    .required(false)
    .validations([
      {
        enabledMarks: ["bold", "italic", "underline", "code"],
        message: "Only bold, italic, underline, and code marks are allowed",
      },
      {
        enabledNodeTypes: [
          "heading-1",
          "heading-2",
          "heading-3",
          "heading-4",
          "heading-5",
          "heading-6",
          "ordered-list",
          "unordered-list",
          "hr",
          "blockquote",
          "embedded-entry-block",
          "embedded-asset-block",
          "table",
          "hyperlink",
          "entry-hyperlink",
          "asset-hyperlink",
          "embedded-entry-inline",
        ],

        message:
          "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, table, link to Url, link to entry, link to asset, and inline entry nodes are allowed",
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  questionPage.changeFieldControl("title", "builtin", "singleLine", {});
  questionPage.changeFieldControl("body", "builtin", "richTextEditor", {});

  const podcastCollaborations = migration
    .createContentType("podcastCollaborations")
    .name("Podcast Collaboration")
    .description(
      "This describes a featured podcast that is not among our official podcast series, such as a guest appearance or a media spotlight episode. These are shown on the /podcast-collaborations page "
    )
    .displayField("episodeName");

  podcastCollaborations
    .createField("episodeName")
    .name("Episode Name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  podcastCollaborations
    .createField("richDescription")
    .name("Rich Description")
    .type("RichText")
    .localized(false)
    .required(false)
    .validations([
      {
        enabledMarks: ["bold", "italic", "underline", "code"],
        message: "Only bold, italic, underline, and code marks are allowed",
      },
      {
        enabledNodeTypes: [
          "ordered-list",
          "unordered-list",
          "blockquote",
          "hyperlink",
          "entry-hyperlink",
          "asset-hyperlink",
          "embedded-asset-block",
          "embedded-entry-inline",
          "embedded-entry-block",
        ],

        message:
          "Only ordered list, unordered list, quote, link to Url, link to entry, link to asset, asset, inline entry, and block entry nodes are allowed",
      },
      {
        nodes: {
          "entry-hyperlink": [
            {
              linkContentType: ["inlineSpotifyEmbed", "youtubeEmbed"],
              message: null,
            },
          ],
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  podcastCollaborations
    .createField("publishDate")
    .name("Publish Date")
    .type("Date")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  podcastCollaborations
    .createField("transcript")
    .name("Transcript")
    .type("Text")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  podcastCollaborations
    .createField("showTranscript")
    .name("Show Transcript")
    .type("Boolean")
    .localized(false)
    .required(true)
    .validations([])
    .defaultValue({
      "en-US": false,
    })
    .disabled(false)
    .omitted(false);

  podcastCollaborations.changeFieldControl(
    "episodeName",
    "builtin",
    "singleLine",
    {}
  );
  podcastCollaborations.changeFieldControl(
    "richDescription",
    "builtin",
    "richTextEditor",
    {}
  );
  podcastCollaborations.changeFieldControl(
    "publishDate",
    "builtin",
    "datePicker",
    {}
  );
  podcastCollaborations.changeFieldControl(
    "transcript",
    "builtin",
    "markdown",
    {}
  );
  podcastCollaborations.changeFieldControl(
    "showTranscript",
    "builtin",
    "boolean",
    {}
  );

  const podcast = migration
    .createContentType("podcast")
    .name("Podcast")
    .description(
      "Describes a podcast episode to be displayed at /podcasts. Currently supports linking of the podcast with a Spotify link."
    )
    .displayField("episodeName");

  podcast
    .createField("episodeName")
    .name("Episode Name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  podcast
    .createField("slug")
    .name("Slug")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        size: {
          max: 50,
        },

        message: "Slug is too long (> 50 characters)",
      },
    ])
    .disabled(false)
    .omitted(false);

  podcast
    .createField("shortDescription")
    .name("Short Description")
    .type("Text")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  podcast
    .createField("richDescription")
    .name("Rich Description")
    .type("RichText")
    .localized(false)
    .required(false)
    .validations([
      {
        enabledMarks: ["bold", "italic", "underline", "code"],
        message: "Only bold, italic, underline, and code marks are allowed",
      },
      {
        enabledNodeTypes: [
          "ordered-list",
          "unordered-list",
          "blockquote",
          "hyperlink",
        ],
        message:
          "Only ordered list, unordered list, quote, and link to Url nodes are allowed",
      },
      {
        nodes: {
          "entry-hyperlink": [
            {
              linkContentType: ["inlineSpotifyEmbed", "youtubeEmbed"],
              message: null,
            },
          ],
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  podcast
    .createField("publishDate")
    .name("Publish Date")
    .type("Date")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  podcast
    .createField("podcastSeries")
    .name("Podcast Series")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        in: ["Collaborations", "Beyond the Blankets"],
      },
    ])
    .disabled(false)
    .omitted(false);

  podcast
    .createField("episodeNumber")
    .name("Episode Number")
    .type("Integer")
    .localized(false)
    .required(true)
    .validations([
      {
        range: {
          min: 1,
        },
      },
    ])
    .defaultValue({
      "en-US": 1,
    })
    .disabled(false)
    .omitted(false);

  podcast
    .createField("transcript")
    .name("Transcript")
    .type("Text")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(true)
    .omitted(true);

  podcast
    .createField("spotifyEpisode")
    .name("Spotify Episode")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ["inlineSpotifyEmbed"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  podcast
    .createField("richTextResources")
    .name("Rich Text Resources")
    .type("RichText")
    .localized(false)
    .required(false)
    .validations([
      {
        enabledMarks: ["bold", "italic", "underline", "code"],
        message: "Only bold, italic, underline, and code marks are allowed",
      },
      {
        enabledNodeTypes: [
          "heading-1",
          "heading-2",
          "heading-3",
          "heading-4",
          "heading-5",
          "heading-6",
          "ordered-list",
          "unordered-list",
          "hr",
          "blockquote",
          "embedded-entry-block",
          "embedded-asset-block",
          "hyperlink",
          "entry-hyperlink",
          "asset-hyperlink",
          "embedded-entry-inline",
        ],

        message:
          "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, link to Url, link to entry, link to asset, and inline entry nodes are allowed",
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  podcast
    .createField("richTextTranscript")
    .name("Rich Text Transcript")
    .type("RichText")
    .localized(false)
    .required(false)
    .validations([
      {
        enabledMarks: ["bold", "italic", "underline", "code"],
        message: "Only bold, italic, underline, and code marks are allowed",
      },
      {
        enabledNodeTypes: [
          "heading-1",
          "heading-2",
          "heading-3",
          "heading-4",
          "heading-5",
          "heading-6",
          "ordered-list",
          "unordered-list",
          "hr",
          "blockquote",
          "embedded-entry-block",
          "embedded-asset-block",
          "hyperlink",
          "entry-hyperlink",
          "asset-hyperlink",
          "embedded-entry-inline",
        ],

        message:
          "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, link to Url, link to entry, link to asset, and inline entry nodes are allowed",
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  podcast
    .createField("showTranscript")
    .name("Show Transcript")
    .type("Boolean")
    .localized(false)
    .required(true)
    .validations([])
    .defaultValue({
      "en-US": false,
    })
    .disabled(false)
    .omitted(false);

  podcast.changeFieldControl("episodeName", "builtin", "singleLine", {});

  podcast.changeFieldControl("slug", "builtin", "slugEditor", {
    trackingFieldId: "episodeName",
  });

  podcast.changeFieldControl("shortDescription", "builtin", "multipleLine", {});
  podcast.changeFieldControl(
    "richDescription",
    "builtin",
    "richTextEditor",
    {}
  );
  podcast.changeFieldControl("publishDate", "builtin", "datePicker", {});
  podcast.changeFieldControl("podcastSeries", "builtin", "dropdown", {});
  podcast.changeFieldControl("episodeNumber", "builtin", "numberEditor", {});
  podcast.changeFieldControl("transcript", "builtin", "markdown", {});
  podcast.changeFieldControl(
    "spotifyEpisode",
    "builtin",
    "entryLinkEditor",
    {}
  );
  podcast.changeFieldControl(
    "richTextResources",
    "builtin",
    "richTextEditor",
    {}
  );
  podcast.changeFieldControl(
    "richTextTranscript",
    "builtin",
    "richTextEditor",
    {}
  );
  podcast.changeFieldControl("showTranscript", "builtin", "boolean", {});

  const position = migration
    .createContentType("position")
    .name("Position")
    .description(
      "(OBSELETE). This describes an opening in the club. This was intended for creating the /positions page to show openings for executives and volunteers, but is no longer the case."
    )
    .displayField("title");

  position
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  position
    .createField("shortDescription")
    .name("Short Description")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(true);
  position
    .createField("positionDescription")
    .name("PositionDescription")
    .type("Text")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  position
    .createField("requirements")
    .name("Requirements")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  position
    .createField("submission")
    .name("Submission")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  position
    .createField("deadline")
    .name("Deadline")
    .type("Date")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  position.changeFieldControl("title", "builtin", "singleLine", {});
  position.changeFieldControl("shortDescription", "builtin", "singleLine", {});
  position.changeFieldControl("positionDescription", "builtin", "markdown", {});
  position.changeFieldControl("requirements", "builtin", "singleLine", {});
  position.changeFieldControl("submission", "builtin", "singleLine", {});
  position.changeFieldControl("deadline", "builtin", "datePicker", {});
  const page = migration
    .createContentType("page")
    .name("Page")
    .description("A standalone page article that is continuously updated")
    .displayField("title");
  page
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  page
    .createField("publishDate")
    .name("Publish Date")
    .type("Date")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  page
    .createField("slug")
    .name("Slug")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  page
    .createField("description")
    .name("Description")
    .type("Text")
    .localized(false)
    .required(true)
    .validations([
      {
        size: {
          max: 150,
        },

        message: "Must be 150 characters or less.",
      },
    ])
    .disabled(false)
    .omitted(false);

  page
    .createField("richTextBody")
    .name("Rich Text Body")
    .type("RichText")
    .localized(false)
    .required(true)
    .validations([
      {
        nodes: {},
      },
      {
        enabledNodeTypes: [
          "heading-1",
          "heading-2",
          "heading-3",
          "heading-4",
          "heading-5",
          "heading-6",
          "ordered-list",
          "unordered-list",
          "hr",
          "blockquote",
          "embedded-entry-block",
          "embedded-asset-block",
          "hyperlink",
          "entry-hyperlink",
          "asset-hyperlink",
          "embedded-entry-inline",
        ],

        message:
          "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, link to Url, link to entry, link to asset, and inline entry nodes are allowed",
      },
      {
        enabledMarks: ["bold", "italic", "underline", "code"],
        message: "Only bold, italic, underline, and code marks are allowed",
      },
    ])
    .disabled(false)
    .omitted(false);

  page
    .createField("authorName")
    .name("Author Name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .defaultValue({
      "en-US": "Blankets for T.O.",
    })
    .disabled(false)
    .omitted(false);

  page
    .createField("imagePreview")
    .name("Image Preview")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([
      {
        assetImageDimensions: {
          width: {
            min: 1200,
            max: null,
          },

          height: {
            min: 630,
            max: null,
          },
        },

        message: "Must be 1200px x 630px to meet open graph requirements.",
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  page
    .createField("enableSearchCrawling")
    .name("Enable Search Crawling")
    .type("Boolean")
    .localized(false)
    .required(true)
    .validations([])
    .defaultValue({
      "en-US": false,
    })
    .disabled(false)
    .omitted(false);

  page
    .createField("autocreatePage")
    .name("Autocreate Page")
    .type("Boolean")
    .localized(false)
    .required(true)
    .validations([])
    .defaultValue({
      "en-US": false,
    })
    .disabled(false)
    .omitted(false);

  page.changeFieldControl("title", "builtin", "singleLine", {});

  page.changeFieldControl("publishDate", "builtin", "datePicker", {
    ampm: "24",
    format: "timeZ",
  });

  page.changeFieldControl("slug", "builtin", "slugEditor", {});
  page.changeFieldControl("description", "builtin", "markdown", {});

  page.changeFieldControl("richTextBody", "builtin", "richTextEditor", {
    helpText: "Images must be 760px in width.",
  });

  page.changeFieldControl("authorName", "builtin", "singleLine", {
    helpText:
      "The name of the article's author, as how it would appear on the article page.",
  });

  page.changeFieldControl("imagePreview", "builtin", "assetLinkEditor", {});

  page.changeFieldControl("enableSearchCrawling", "builtin", "boolean", {
    helpText:
      "Let search engines crawl this page? If a page is not crawlable, then this page will not show in search results such as on Google and Bing. However, you can still visit the page with the URL.",
    trueLabel: "Yes",
    falseLabel: "No",
  });

  page.changeFieldControl("autocreatePage", "builtin", "boolean", {
    helpText:
      "Designate whether the website builder should automatically create the page with the rest of the website. Useful if you want to manually create the page by directly requesting the page data.",
    trueLabel: "Yes, autocreate page (True)",
    falseLabel: "No, do not autocreate page (False)",
  });

  const organizationInformation = migration
    .createContentType("organizationInformation")
    .name("Organization Information")
    .description(
      "A collection of unorganized images and text that is used to display certain pages on the site."
    )
    .displayField("organizationName");

  organizationInformation
    .createField("frontPageImage")
    .name("Front Page Image")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  organizationInformation
    .createField("organizationName")
    .name("OrganizationName")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  organizationInformation
    .createField("aboutPage")
    .name("AboutPage")
    .type("RichText")
    .localized(false)
    .required(false)
    .validations([
      {
        enabledMarks: ["bold", "italic", "underline", "code"],
        message: "Only bold, italic, underline, and code marks are allowed",
      },
      {
        enabledNodeTypes: [
          "heading-1",
          "heading-2",
          "heading-3",
          "heading-4",
          "heading-5",
          "heading-6",
          "ordered-list",
          "unordered-list",
          "hr",
          "blockquote",
          "embedded-entry-block",
          "embedded-asset-block",
          "hyperlink",
          "entry-hyperlink",
          "asset-hyperlink",
          "embedded-entry-inline",
        ],

        message:
          "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, link to Url, link to entry, link to asset, and inline entry nodes are allowed",
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  organizationInformation
    .createField("twitter")
    .name("Twitter")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(true)
    .omitted(false);

  organizationInformation
    .createField("twitterLink")
    .name("Twitter Link")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern:
            "^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$",
          flags: null,
        },
      },
    ])
    .disabled(true)
    .omitted(false);

  organizationInformation
    .createField("facebook")
    .name("Facebook")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(true)
    .omitted(false);

  organizationInformation
    .createField("facebookLink")
    .name("Facebook Link")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern:
            "^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$",
          flags: null,
        },
      },
    ])
    .disabled(true)
    .omitted(false);

  organizationInformation
    .createField("tikTok")
    .name("TikTok")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(true)
    .omitted(true);

  organizationInformation
    .createField("tiktokLink")
    .name("Tiktok Link")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern:
            "^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$",
          flags: null,
        },
      },
    ])
    .disabled(true)
    .omitted(true);

  organizationInformation
    .createField("instagram")
    .name("Instagram")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(true)
    .omitted(true);

  organizationInformation
    .createField("instagramLink")
    .name("Instagram Link")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern:
            "^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$",
          flags: null,
        },
      },
    ])
    .disabled(true)
    .omitted(true);

  organizationInformation
    .createField("phoneNumber")
    .name("Phone Number")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(true)
    .omitted(true);
  organizationInformation
    .createField("emailAddress")
    .name("Email Address")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(true)
    .omitted(true);
  organizationInformation
    .createField("officeAddress")
    .name("Office Address")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(true)
    .omitted(true);
  organizationInformation
    .createField("officeHours")
    .name("Office Hours")
    .type("Text")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(true)
    .omitted(true);
  organizationInformation
    .createField("leftBackgroundImage")
    .name("LeftBackgroundImage")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(true)
    .omitted(true)
    .linkType("Asset");
  organizationInformation
    .createField("rightBackgroundImage")
    .name("RightBackgroundImage")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(true)
    .omitted(true)
    .linkType("Asset");

  organizationInformation
    .createField("membershipInformation")
    .name("Membership Information")
    .type("RichText")
    .localized(false)
    .required(false)
    .validations([
      {
        enabledMarks: ["bold", "italic", "underline", "code"],
        message: "Only bold, italic, underline, and code marks are allowed",
      },
      {
        enabledNodeTypes: [
          "heading-1",
          "heading-2",
          "heading-3",
          "heading-4",
          "heading-5",
          "heading-6",
          "ordered-list",
          "unordered-list",
          "hr",
          "blockquote",
          "embedded-entry-block",
          "embedded-asset-block",
          "hyperlink",
          "entry-hyperlink",
          "asset-hyperlink",
          "embedded-entry-inline",
        ],

        message:
          "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, link to Url, link to entry, link to asset, and inline entry nodes are allowed",
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  organizationInformation
    .createField("homePageVideo")
    .name("Home Page Video")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkMimetypeGroup: ["video"],
      },
    ])
    .disabled(true)
    .omitted(true)
    .linkType("Asset");

  organizationInformation
    .createField("donationItemCounter")
    .name("Donation Item Counter")
    .type("Integer")
    .localized(false)
    .required(true)
    .validations([
      {
        range: {
          min: 0,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  organizationInformation
    .createField("defaultPreviewImage")
    .name("Default Preview Image")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([
      {
        assetImageDimensions: {
          width: {
            min: 1200,
            max: 1200,
          },

          height: {
            min: 630,
            max: 630,
          },
        },

        message: "Must be 1200 x 630 ",
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  organizationInformation
    .createField("rewardsSubmissionLink")
    .name("Rewards Submission Link")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        regexp: {
          pattern:
            "^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$",
          flags: null,
        },
      },
    ])
    .disabled(true)
    .omitted(true);

  organizationInformation
    .createField("rewardsSubmissionMonthName")
    .name("Rewards Submission Month Name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(true)
    .omitted(true);

  organizationInformation
    .createField("memberFormLink")
    .name("Member Form Link")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        regexp: {
          pattern:
            "^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  organizationInformation.changeFieldControl(
    "frontPageImage",
    "builtin",
    "assetLinkEditor",
    {
      helpText: "Image used for the front page",
      showLinkEntityAction: true,
      showCreateEntityAction: true,
    }
  );

  organizationInformation.changeFieldControl(
    "organizationName",
    "builtin",
    "singleLine",
    {
      helpText:
        'Name of the organization. Currently used to differentiate instances of "Organization Information" on Contentful, even though there should only be one. This name has no effect on the website.',
    }
  );

  organizationInformation.changeFieldControl(
    "aboutPage",
    "builtin",
    "richTextEditor",
    {
      helpText: "All the text used to render the about page at /about.",
    }
  );

  organizationInformation.changeFieldControl(
    "twitter",
    "builtin",
    "singleLine",
    {}
  );
  organizationInformation.changeFieldControl(
    "twitterLink",
    "builtin",
    "singleLine",
    {}
  );
  organizationInformation.changeFieldControl(
    "facebook",
    "builtin",
    "singleLine",
    {}
  );
  organizationInformation.changeFieldControl(
    "facebookLink",
    "builtin",
    "singleLine",
    {}
  );
  organizationInformation.changeFieldControl(
    "tikTok",
    "builtin",
    "singleLine",
    {}
  );
  organizationInformation.changeFieldControl(
    "tiktokLink",
    "builtin",
    "singleLine",
    {}
  );
  organizationInformation.changeFieldControl(
    "instagram",
    "builtin",
    "singleLine",
    {}
  );
  organizationInformation.changeFieldControl(
    "instagramLink",
    "builtin",
    "singleLine",
    {}
  );
  organizationInformation.changeFieldControl(
    "phoneNumber",
    "builtin",
    "singleLine",
    {}
  );
  organizationInformation.changeFieldControl(
    "emailAddress",
    "builtin",
    "singleLine",
    {}
  );
  organizationInformation.changeFieldControl(
    "officeAddress",
    "builtin",
    "singleLine",
    {}
  );
  organizationInformation.changeFieldControl(
    "officeHours",
    "builtin",
    "markdown",
    {}
  );
  organizationInformation.changeFieldControl(
    "leftBackgroundImage",
    "builtin",
    "assetLinkEditor",
    {}
  );
  organizationInformation.changeFieldControl(
    "rightBackgroundImage",
    "builtin",
    "assetLinkEditor",
    {}
  );

  organizationInformation.changeFieldControl(
    "membershipInformation",
    "builtin",
    "richTextEditor",
    {
      helpText:
        "All the text used to render the membership page at /positions.",
    }
  );

  organizationInformation.changeFieldControl(
    "homePageVideo",
    "builtin",
    "assetLinkEditor",
    {
      helpText:
        "(OBSELETE). Was intended to store the video to be displayed on the homepage.",
      showLinkEntityAction: true,
      showCreateEntityAction: true,
    }
  );

  organizationInformation.changeFieldControl(
    "donationItemCounter",
    "builtin",
    "numberEditor",
    {
      helpText:
        'This represents the total number of donations ever made by Blankets for T.O. since its inception. This number is not the sum of all donations stored under "Donation Locations", as many donations lacked information to be catalogued on Contentful.',
    }
  );

  organizationInformation.changeFieldControl(
    "defaultPreviewImage",
    "builtin",
    "assetLinkEditor",
    {
      helpText:
        "This is the image to be used by default for social media link previews and search engine optimization.",
      showLinkEntityAction: true,
      showCreateEntityAction: true,
    }
  );

  organizationInformation.changeFieldControl(
    "rewardsSubmissionLink",
    "builtin",
    "singleLine",
    {
      helpText:
        "(OBSELETE). Was used to update a link to a form for members to make submissions for the defunct member rewards program.",
    }
  );

  organizationInformation.changeFieldControl(
    "rewardsSubmissionMonthName",
    "builtin",
    "singleLine",
    {
      helpText:
        "(OBSELETE). Was used to update the current month, as designated by the now defunct member rewards program.",
    }
  );

  organizationInformation.changeFieldControl(
    "memberFormLink",
    "builtin",
    "singleLine",
    {
      helpText: "The link to our current membership signup form.",
    }
  );

  const merchItem = migration
    .createContentType("merchItem")
    .name("Merch Item")
    .description(
      "Describes a store item we are displaying in the merchandise store page at /store."
    )
    .displayField("itemName");

  merchItem
    .createField("itemName")
    .name("Item Name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  merchItem
    .createField("slug")
    .name("Slug")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  merchItem
    .createField("itemDescription")
    .name("Item Description")
    .type("RichText")
    .localized(false)
    .required(true)
    .validations([
      {
        enabledMarks: ["bold", "italic", "underline", "code"],
        message: "Only bold, italic, underline, and code marks are allowed",
      },
      {
        enabledNodeTypes: ["heading-2", "hyperlink"],
        message: "Only heading 2 and link to Url nodes are allowed",
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  merchItem
    .createField("shortDescription")
    .name("Short Description")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        size: {
          max: 130,
        },

        message: "Must not be more than 130 characters",
      },
    ])
    .disabled(false)
    .omitted(false);

  merchItem
    .createField("itemPrice")
    .name("Item Price")
    .type("Number")
    .localized(false)
    .required(true)
    .validations([
      {
        range: {
          min: 0,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  merchItem
    .createField("mainPreview")
    .name("Main Preview")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  merchItem
    .createField("largePreview")
    .name("Large Preview")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  merchItem
    .createField("images")
    .name("Images")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Link",
      validations: [],
      linkType: "Asset",
    });

  merchItem
    .createField("isInStock")
    .name("Is In Stock")
    .type("Boolean")
    .localized(false)
    .required(true)
    .validations([])
    .defaultValue({
      "en-US": true,
    })
    .disabled(false)
    .omitted(false);

  merchItem
    .createField("memberItemPrice")
    .name("Member Item Price")
    .type("Number")
    .localized(false)
    .required(true)
    .validations([
      {
        range: {
          min: 0,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  merchItem.changeFieldControl("itemName", "builtin", "singleLine", {});

  merchItem.changeFieldControl("slug", "builtin", "slugEditor", {
    trackingFieldId: "itemName",
  });

  merchItem.changeFieldControl(
    "itemDescription",
    "builtin",
    "richTextEditor",
    {}
  );

  merchItem.changeFieldControl("shortDescription", "builtin", "singleLine", {
    helpText: "Short description (<130 char) for SEO",
  });

  merchItem.changeFieldControl("itemPrice", "builtin", "numberEditor", {
    helpText: "Price in Canadian Dollars.",
  });

  merchItem.changeFieldControl("mainPreview", "builtin", "assetLinkEditor", {
    helpText:
      "This image will be the preview shown on the Store page. Should be 2:3 aspect ratio.",
    showLinkEntityAction: true,
    showCreateEntityAction: true,
  });

  merchItem.changeFieldControl("largePreview", "builtin", "assetLinkEditor", {
    helpText:
      "Image for SEO and social media preview. Should be 4:3 aspect ratio.",
    showLinkEntityAction: true,
    showCreateEntityAction: true,
  });

  merchItem.changeFieldControl("images", "builtin", "assetGalleryEditor", {});

  merchItem.changeFieldControl("isInStock", "builtin", "boolean", {
    helpText: "Whether this item can be bought",
    trueLabel: "Inventory available and purchase available ",
    falseLabel: "Out of stock, or no longer sold",
  });

  merchItem.changeFieldControl(
    "memberItemPrice",
    "builtin",
    "numberEditor",
    {}
  );
  const homeSlide = migration
    .createContentType("homeSlide")
    .name("HomeSlide")
    .description(
      "(OBSELETE). Describes a slide that is on the homepage slideshow."
    )
    .displayField("title");
  homeSlide
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  homeSlide
    .createField("backgroundImage")
    .name("Background Image")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkMimetypeGroup: ["image"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  homeSlide
    .createField("longTextDescription")
    .name("longTextDescription")
    .type("Text")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(true)
    .omitted(true);

  homeSlide
    .createField("description")
    .name("Description")
    .type("RichText")
    .localized(false)
    .required(false)
    .validations([
      {
        enabledNodeTypes: [
          "heading-1",
          "heading-2",
          "heading-3",
          "heading-4",
          "heading-5",
          "heading-6",
          "ordered-list",
          "unordered-list",
          "hr",
          "blockquote",
          "embedded-entry-block",
          "hyperlink",
          "entry-hyperlink",
          "asset-hyperlink",
          "embedded-entry-inline",
        ],

        message:
          "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, link to Url, link to entry, link to asset, and inline entry nodes are allowed",
      },
      {
        nodes: {},
      },
      {
        enabledMarks: ["bold", "italic", "underline", "code"],
        message: "Only bold, italic, underline, and code marks are allowed",
      },
    ])
    .disabled(false)
    .omitted(false);

  homeSlide
    .createField("buttonText")
    .name("Button Text")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  homeSlide
    .createField("buttonLink")
    .name("buttonLink")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern:
            "^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  homeSlide.changeFieldControl("title", "builtin", "singleLine", {});
  homeSlide.changeFieldControl(
    "backgroundImage",
    "builtin",
    "assetLinkEditor",
    {}
  );
  homeSlide.changeFieldControl(
    "longTextDescription",
    "builtin",
    "markdown",
    {}
  );
  homeSlide.changeFieldControl("description", "builtin", "richTextEditor", {});
  homeSlide.changeFieldControl("buttonText", "builtin", "singleLine", {});
  homeSlide.changeFieldControl("buttonLink", "builtin", "singleLine", {});

  const headerImage = migration
    .createContentType("headerImage")
    .name("Header Image")
    .description(
      "Contains an image which is used as a header image. Set the Page Name field on header images to a unique string, so that you can query for a specific image or page by the page name."
    )
    .displayField("pageName");

  headerImage
    .createField("pageName")
    .name("Page Name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  headerImage
    .createField("image")
    .name("Image")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  headerImage.changeFieldControl("pageName", "builtin", "singleLine", {
    helpText: "The page that this header is used for.",
  });

  headerImage.changeFieldControl("image", "builtin", "assetLinkEditor", {});

  const person = migration
    .createContentType("person")
    .name("Executive")
    .description(
      "Describes a member of the Blankets for T.O. executive team visible at /team. To remove a past executive, unpublish and archive the content entry to keep the data saved."
    )
    .displayField("name");

  person
    .createField("name")
    .name("Name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  person
    .createField("isFounder")
    .name("IsFounder")
    .type("Boolean")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  person
    .createField("photo")
    .name("Photo")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  person
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  person
    .createField("shortBio")
    .name("Short Bio")
    .type("Text")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(true)
    .omitted(true);
  person
    .createField("email")
    .name("Email")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  person
    .createField("facebook")
    .name("Facebook")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(true)
    .omitted(true);

  person
    .createField("facebookLink")
    .name("Facebook Link")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern:
            "^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  person
    .createField("insta")
    .name("Insta")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(true)
    .omitted(true);

  person
    .createField("instagramLink")
    .name("Instagram Link")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern:
            "^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$",
          flags: null,
        },

        message: "Must be a URL",
      },
    ])
    .disabled(false)
    .omitted(false);

  person
    .createField("twitter")
    .name("Twitter")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(true)
    .omitted(true);

  person
    .createField("twitterLink")
    .name("Twitter Link")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern:
            "^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  person
    .createField("github")
    .name("Github")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(true)
    .omitted(true);
  person
    .createField("linkedIn")
    .name("LinkedIn")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(true)
    .omitted(true);

  person
    .createField("linkedInLink")
    .name("LinkedIn Link")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern:
            "^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  person
    .createField("team")
    .name("Team")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        in: ["Marketing Team", "Internal Team", "External Team"],
        message: "Must be one of marketing, internal or external team.",
      },
    ])
    .disabled(false)
    .omitted(false);

  person
    .createField("websiteLink")
    .name("Website Link")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern:
            "^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  person
    .createField("githubLink")
    .name("Github Link")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern:
            "^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  person.changeFieldControl("name", "builtin", "singleLine", {});
  person.changeFieldControl("isFounder", "builtin", "boolean", {});

  person.changeFieldControl("photo", "builtin", "assetLinkEditor", {
    helpText: "Crop to 1:1 aspect ratio, and max width of 500px",
    showLinkEntityAction: true,
    showCreateEntityAction: true,
  });

  person.changeFieldControl("title", "builtin", "singleLine", {});
  person.changeFieldControl("shortBio", "builtin", "markdown", {});
  person.changeFieldControl("email", "builtin", "singleLine", {});
  person.changeFieldControl("facebook", "builtin", "singleLine", {});
  person.changeFieldControl("facebookLink", "builtin", "singleLine", {});
  person.changeFieldControl("insta", "builtin", "singleLine", {});
  person.changeFieldControl("instagramLink", "builtin", "singleLine", {});
  person.changeFieldControl("twitter", "builtin", "singleLine", {});
  person.changeFieldControl("twitterLink", "builtin", "singleLine", {});
  person.changeFieldControl("github", "builtin", "singleLine", {});
  person.changeFieldControl("linkedIn", "builtin", "singleLine", {});
  person.changeFieldControl("linkedInLink", "builtin", "singleLine", {});
  person.changeFieldControl("team", "builtin", "dropdown", {});
  person.changeFieldControl("websiteLink", "builtin", "singleLine", {});
  person.changeFieldControl("githubLink", "builtin", "singleLine", {});

  const events = migration
    .createContentType("events")
    .name("Events")
    .description(
      "Describes a past or upcoming event of Blankets for T.O, for display on the events calendar page at /events."
    )
    .displayField("eventName");

  events
    .createField("eventName")
    .name("Event Name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  events
    .createField("startDate")
    .name("Start Date")
    .type("Date")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  events
    .createField("eventDate")
    .name("Event Date")
    .type("Date")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  events
    .createField("endDate")
    .name("End Date")
    .type("Date")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  events
    .createField("description")
    .name("Description")
    .type("Text")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  events
    .createField("location")
    .name("Location")
    .type("Text")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  events
    .createField("articles")
    .name("Articles")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Link",

      validations: [
        {
          linkContentType: ["blogPost", "page"],
        },
      ],

      linkType: "Entry",
    });

  events
    .createField("smallPreviewImage")
    .name("Small Preview Image")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  events
    .createField("siteVisible")
    .name("Site Visible")
    .type("Boolean")
    .localized(false)
    .required(false)
    .validations([])
    .defaultValue({
      "en-US": false,
    })
    .disabled(false)
    .omitted(false);

  events.changeFieldControl("eventName", "builtin", "singleLine", {});
  events.changeFieldControl("startDate", "builtin", "datePicker", {});
  events.changeFieldControl("eventDate", "builtin", "datePicker", {});
  events.changeFieldControl("endDate", "builtin", "datePicker", {});
  events.changeFieldControl("description", "builtin", "markdown", {});
  events.changeFieldControl("location", "builtin", "markdown", {});
  events.changeFieldControl("articles", "builtin", "entryLinksEditor", {});
  events.changeFieldControl(
    "smallPreviewImage",
    "builtin",
    "assetLinkEditor",
    {}
  );

  events.changeFieldControl("siteVisible", "builtin", "boolean", {
    helpText: "Show this event on the /events page?",
    trueLabel: "Yes, show the event (T).",
    falseLabel: "No, do not show the event (F).",
  });

  const embeddedQuestion = migration
    .createContentType("embeddedQuestion")
    .name("Embedded Question")
    .description(
      "Describes an embedded multiple choice question that can be added to blog posts and rich text pages. Add as an inline entry to rich text fields, such as on a blog post."
    )
    .displayField("question");

  embeddedQuestion
    .createField("options")
    .name("Options")
    .type("Array")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Symbol",
      validations: [],
    });

  embeddedQuestion
    .createField("question")
    .name("Question")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  embeddedQuestion
    .createField("answer")
    .name("Answer")
    .type("Integer")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  embeddedQuestion.changeFieldControl("options", "builtin", "listInput", {});
  embeddedQuestion.changeFieldControl("question", "builtin", "singleLine", {});
  embeddedQuestion.changeFieldControl("answer", "builtin", "numberEditor", {});

  const collapseEmbed = migration
    .createContentType("collapseEmbed")
    .name("Collapse Embed")
    .description(
      "Describes a rich text field that is collapsible in the body of a document such as on the Donation FAQ page. (/donate)"
    )
    .displayField("heading");

  collapseEmbed
    .createField("heading")
    .name("Heading")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  collapseEmbed
    .createField("body")
    .name("Body")
    .type("RichText")
    .localized(false)
    .required(true)
    .validations([
      {
        enabledMarks: ["bold", "italic", "underline", "code"],
        message: "Only bold, italic, underline, and code marks are allowed",
      },
      {
        enabledNodeTypes: [
          "heading-1",
          "heading-2",
          "heading-3",
          "heading-4",
          "heading-5",
          "heading-6",
          "ordered-list",
          "unordered-list",
          "hr",
          "blockquote",
          "embedded-entry-block",
          "embedded-asset-block",
          "table",
          "hyperlink",
          "entry-hyperlink",
          "asset-hyperlink",
          "embedded-entry-inline",
        ],

        message:
          "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, table, link to Url, link to entry, link to asset, and inline entry nodes are allowed",
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  collapseEmbed
    .createField("visibleByDefault")
    .name("Visible by default")
    .type("Boolean")
    .localized(false)
    .required(true)
    .validations([])
    .defaultValue({
      "en-US": false,
    })
    .disabled(false)
    .omitted(false);

  collapseEmbed.changeFieldControl("heading", "builtin", "singleLine", {});
  collapseEmbed.changeFieldControl("body", "builtin", "richTextEditor", {});

  collapseEmbed.changeFieldControl("visibleByDefault", "builtin", "boolean", {
    trueLabel: "Visible when page is first loaded.",
    falseLabel: "Collapsed when page is first loaded.",
  });

  const btoChapter = migration
    .createContentType("btoChapter")
    .name("BTO Chapter")
    .description(
      "Describes a chapter of Blankets for T.O. organized outside of UTSC. Chapters are listed at /chapters"
    )
    .displayField("chapterName");

  btoChapter
    .createField("chapterName")
    .name("Chapter Name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  btoChapter
    .createField("slug")
    .name("Slug")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  btoChapter
    .createField("chapterLogo")
    .name("Chapter Logo")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  btoChapter
    .createField("location")
    .name("Location")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  btoChapter
    .createField("membershipFormLink")
    .name("Membership Form Link")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern:
            "^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  btoChapter
    .createField("emailAddress")
    .name("Email Address")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^\\w[\\w.-]*@([\\w-]+\\.)+[\\w-]+$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  btoChapter
    .createField("shortDescription")
    .name("Short Description")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        size: {
          max: 140,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  btoChapter
    .createField("description")
    .name("Description")
    .type("RichText")
    .localized(false)
    .required(false)
    .validations([
      {
        enabledMarks: ["bold", "italic", "underline"],
        message: "Only bold, italic, and underline marks are allowed",
      },
      {
        enabledNodeTypes: [
          "heading-1",
          "heading-2",
          "heading-3",
          "heading-4",
          "heading-5",
          "heading-6",
          "hyperlink",
        ],

        message:
          "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, and link to Url nodes are allowed",
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  btoChapter
    .createField("facebookUsername")
    .name("Facebook Username")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  btoChapter
    .createField("twitterUsername")
    .name("Twitter Username")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  btoChapter
    .createField("instagramUsername")
    .name("Instagram Username")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  btoChapter
    .createField("tikTokUsername")
    .name("TikTok Username")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  btoChapter
    .createField("youTubeUsername")
    .name("YouTube Username")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  btoChapter
    .createField("clubDirectoryEntry")
    .name("Club Directory Entry")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern:
            "^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  btoChapter
    .createField("websiteLink")
    .name("Website Link")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern:
            "^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  btoChapter.changeFieldControl("chapterName", "builtin", "singleLine", {});

  btoChapter.changeFieldControl("slug", "builtin", "slugEditor", {
    trackingFieldId: "chapterName",
  });

  btoChapter.changeFieldControl(
    "chapterLogo",
    "builtin",
    "assetLinkEditor",
    {}
  );
  btoChapter.changeFieldControl("location", "builtin", "singleLine", {});
  btoChapter.changeFieldControl(
    "membershipFormLink",
    "builtin",
    "singleLine",
    {}
  );
  btoChapter.changeFieldControl("emailAddress", "builtin", "singleLine", {});
  btoChapter.changeFieldControl(
    "shortDescription",
    "builtin",
    "singleLine",
    {}
  );
  btoChapter.changeFieldControl("description", "builtin", "richTextEditor", {});
  btoChapter.changeFieldControl(
    "facebookUsername",
    "builtin",
    "singleLine",
    {}
  );
  btoChapter.changeFieldControl("twitterUsername", "builtin", "singleLine", {});
  btoChapter.changeFieldControl(
    "instagramUsername",
    "builtin",
    "singleLine",
    {}
  );
  btoChapter.changeFieldControl("tikTokUsername", "builtin", "singleLine", {});
  btoChapter.changeFieldControl("youTubeUsername", "builtin", "singleLine", {});
  btoChapter.changeFieldControl(
    "clubDirectoryEntry",
    "builtin",
    "singleLine",
    {}
  );
  btoChapter.changeFieldControl("websiteLink", "builtin", "singleLine", {});

  const donationLocation = migration
    .createContentType("donationLocation")
    .name("Donation Location")
    .description(
      "Describes a location or organization that we have donated to, in order to be displayed on the homepage map."
    )
    .displayField("name");

  donationLocation
    .createField("name")
    .name("Name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  donationLocation
    .createField("description")
    .name("Description")
    .type("Text")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  donationLocation
    .createField("coordinateLatitude")
    .name("CoordinateLatitude")
    .type("Number")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  donationLocation
    .createField("coordinateLongitude")
    .name("CoordinateLongitude")
    .type("Number")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  donationLocation
    .createField("city")
    .name("City")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  donationLocation
    .createField("provinceState")
    .name("Province / State")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        in: [
          "Alberta",
          "British Columbia",
          "Manitoba",
          "Ontario",
          "Quebec",
          "Saskatchewan",
          "New Brunswick",
          "Newfoundland and Labrador",
          "Prince Edward Island",
          "Nova Scotia",
        ],
      },
    ])
    .disabled(false)
    .omitted(false);

  donationLocation
    .createField("street")
    .name("Street")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  donationLocation.changeFieldControl("name", "builtin", "singleLine", {});
  donationLocation.changeFieldControl(
    "description",
    "builtin",
    "multipleLine",
    {}
  );
  donationLocation.changeFieldControl(
    "coordinateLatitude",
    "builtin",
    "numberEditor",
    {}
  );
  donationLocation.changeFieldControl(
    "coordinateLongitude",
    "builtin",
    "numberEditor",
    {}
  );
  donationLocation.changeFieldControl("city", "builtin", "singleLine", {});
  donationLocation.changeFieldControl(
    "provinceState",
    "builtin",
    "singleLine",
    {}
  );

  donationLocation.changeFieldControl("street", "builtin", "singleLine", {
    helpText: "E.g.: 4584 Kingston Rd.",
  });

  const blogPost = migration
    .createContentType("blogPost")
    .name("Blog Post")
    .description("An authored long-form post visible under /blog/.")
    .displayField("title");
  blogPost
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  blogPost
    .createField("publishDate")
    .name("Publish Date")
    .type("Date")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  blogPost
    .createField("slug")
    .name("Slug")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blogPost
    .createField("description")
    .name("Description")
    .type("Text")
    .localized(false)
    .required(true)
    .validations([
      {
        size: {
          max: 140,
        },

        message: "Must be 140 characters or less.",
      },
    ])
    .disabled(false)
    .omitted(false);

  blogPost
    .createField("richTextBody")
    .name("Rich Text Body")
    .type("RichText")
    .localized(false)
    .required(true)
    .validations([
      {
        enabledMarks: ["bold", "italic", "underline", "code"],
        message: "Only bold, italic, underline, and code marks are allowed",
      },
      {
        enabledNodeTypes: [
          "heading-1",
          "heading-2",
          "heading-3",
          "heading-4",
          "heading-5",
          "heading-6",
          "ordered-list",
          "unordered-list",
          "hr",
          "blockquote",
          "embedded-entry-block",
          "embedded-asset-block",
          "hyperlink",
          "entry-hyperlink",
          "asset-hyperlink",
        ],

        message:
          "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, link to Url, link to entry, and link to asset nodes are allowed",
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  blogPost
    .createField("articleType")
    .name("Article Type")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        in: ["Update", "Article", "Post"],
        message:
          "Article = long form content like research articles. Update = announcement or piece about BTO operations. Post = any other content, such as a piece by general members",
      },
    ])
    .disabled(false)
    .omitted(false);

  blogPost
    .createField("tags")
    .name("Tags")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Symbol",

      validations: [
        {
          in: [
            "Announcements",
            "Article",
            "Campaigns",
            "Collaborations",
            "Donations",
            "Events",
            "Fundraisers",
            "In-Person",
            "Media",
            "Online",
            "Politics",
            "Volunteering",
            "COVID",
            "Awareness",
            "Anti-Homelessness Architecture",
            "GTA",
            "External Chapters",
          ],
        },
      ],
    });

  blogPost
    .createField("imagePreview")
    .name("Image Preview")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkMimetypeGroup: ["image"],
      },
      {
        assetImageDimensions: {
          width: {
            min: 400,
            max: null,
          },

          height: {
            min: 400,
            max: null,
          },
        },

        message: "Must be at least 400px width and height.",
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  blogPost
    .createField("authorName")
    .name("Author Name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .defaultValue({
      "en-US": "Blankets for T.O.",
    })
    .disabled(false)
    .omitted(false);

  blogPost
    .createField("previewOnly")
    .name("Preview Only")
    .type("Boolean")
    .localized(false)
    .required(true)
    .validations([])
    .defaultValue({
      "en-US": false,
    })
    .disabled(false)
    .omitted(false);

  blogPost
    .createField("socialMediaLinkPreview")
    .name("Social Media Link Preview")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([
      {
        assetImageDimensions: {
          width: {
            min: 1200,
            max: 1200,
          },

          height: {
            min: 630,
            max: 630,
          },
        },

        message: "Image must be exactly 1200 px x 630 px",
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  blogPost.changeFieldControl("title", "builtin", "singleLine", {});

  blogPost.changeFieldControl("publishDate", "builtin", "datePicker", {
    ampm: "24",
    format: "timeZ",
  });

  blogPost.changeFieldControl("slug", "builtin", "slugEditor", {});
  blogPost.changeFieldControl("description", "builtin", "markdown", {});

  blogPost.changeFieldControl("richTextBody", "builtin", "richTextEditor", {
    helpText: "Images must be 760px in width.",
  });

  blogPost.changeFieldControl("articleType", "builtin", "dropdown", {
    helpText:
      "Page = requires direct link for access and can be continuously maintained. Update = for general updates on events and summaries. Article = longer form article based on current events or research",
  });

  blogPost.changeFieldControl("tags", "builtin", "checkbox", {});

  blogPost.changeFieldControl("imagePreview", "builtin", "assetLinkEditor", {
    helpText: "Should be a square image, at least 400px in width/height.",
    showLinkEntityAction: true,
    showCreateEntityAction: true,
  });

  blogPost.changeFieldControl("authorName", "builtin", "singleLine", {
    helpText:
      "The name of the article's author, as how it would appear on the article page.",
  });

  blogPost.changeFieldControl("previewOnly", "builtin", "boolean", {
    helpText: "NOTE: Not visible = true, visible = false",
    trueLabel: "Not visible in article list or search.",
    falseLabel: "Visible in article list or search.",
  });

  blogPost.changeFieldControl(
    "socialMediaLinkPreview",
    "builtin",
    "assetLinkEditor",
    {
      helpText: "Image must be exactly 1200 px x 630 px",
      showLinkEntityAction: true,
      showCreateEntityAction: true,
    }
  );

  const youtubeEmbed = migration
    .createContentType("youtubeEmbed")
    .name("Youtube Embed")
    .description(
      "Describes a youtube video that can be embedded in rich text documents."
    )
    .displayField("audioTitle");

  youtubeEmbed
    .createField("audioTitle")
    .name("Video Name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  youtubeEmbed
    .createField("watchKey")
    .name("Watch Key")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  youtubeEmbed
    .createField("accessibilityDescription")
    .name("Accessibility Description")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .defaultValue({
      "en-US": "Used as a string for iframe titles for site accessibility.",
    })
    .disabled(false)
    .omitted(false);

  youtubeEmbed.changeFieldControl("audioTitle", "builtin", "singleLine", {});
  youtubeEmbed.changeFieldControl("watchKey", "builtin", "singleLine", {});
  youtubeEmbed.changeFieldControl(
    "accessibilityDescription",
    "builtin",
    "singleLine",
    {}
  );
  const gallery = migration
    .createContentType("gallery")
    .name("Gallery Embed")
    .description(
      "Describes a collection of images to be displayed inline with the page."
    )
    .displayField("galleryTitle");

  gallery
    .createField("galleryTitle")
    .name("Gallery Title")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  gallery
    .createField("images")
    .name("Images")
    .type("Array")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Link",

      validations: [
        {
          linkMimetypeGroup: ["image"],
        },
      ],

      linkType: "Asset",
    });

  gallery
    .createField("blogPage")
    .name("Blog page")
    .type("Array")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Link",

      validations: [
        {
          linkContentType: ["blogPost"],
        },
      ],

      linkType: "Entry",
    });

  gallery
    .createField("displayTitle")
    .name("Display Title")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  gallery
    .createField("displayDescription")
    .name("Display Description")
    .type("Text")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  gallery.changeFieldControl("galleryTitle", "builtin", "singleLine", {
    helpText: "Describes the image collection and may be displayed as a title.",
  });

  gallery.changeFieldControl("images", "builtin", "assetLinksEditor", {});
  gallery.changeFieldControl("blogPage", "builtin", "entryLinksEditor", {});

  gallery.changeFieldControl("displayTitle", "builtin", "singleLine", {
    helpText: "This title will be the one displayed above the images",
  });

  gallery.changeFieldControl("displayDescription", "builtin", "markdown", {
    helpText: "This description will be displayed above the images.",
  });

  const award = migration
    .createContentType("award")
    .name("Award")
    .description(
      "Describes an award or recognition to be displayed on the /awards page."
    )
    .displayField("awardName");

  award
    .createField("awardName")
    .name("Award Name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  award
    .createField("description")
    .name("Description")
    .type("Text")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  award
    .createField("date")
    .name("Date")
    .type("Date")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  award
    .createField("image")
    .name("Image")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkMimetypeGroup: ["image"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  award.changeFieldControl("awardName", "builtin", "singleLine", {});
  award.changeFieldControl("description", "builtin", "multipleLine", {});

  award.changeFieldControl("date", "builtin", "datePicker", {
    ampm: "24",
    format: "dateonly",
    helpText: "The date that this award was received.",
  });

  award.changeFieldControl("image", "builtin", "assetLinkEditor", {});
};
