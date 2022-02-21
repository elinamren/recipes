import * as contentful from "contentful";

export const client = contentful.createClient({
  space: "469cy1q2kb0p",
  accessToken: "4PN9T-YAwqBSRHvIuCwyWcd4-W67YNEEex_LpFOWYaI"
});

// space: process.env.REACT_APP_SPACE,
// accessToken: process.env.REACT_APP_ACCESS_TOKEN