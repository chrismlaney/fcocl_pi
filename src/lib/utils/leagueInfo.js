/*   STEP 1   */
export const leagueID = "990013551307698176"; // your league ID
export const leagueName = "PASCO Interference"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to <b>PASCO Interference</b> - where the thrill of victory and the camaraderie of coworkers collide on the virtual gridiron! We're not just your typical Fantasy Football league; we're a group of colleagues who know that winning is more than just a goal; it's an obsession. What sets us apart is that every touchdown, every fumble, and every nail-biting Sunday showdown is experienced together, building the bonds that make our workplace special.</p>
  <p>Our league isn't just about individual glory; it's about team pride. As you strive to claim the coveted <i>Just A Champion</i> Trophy or the ultimate <i>Champion of Champions</i> belt, remember, you're not just competing against your fellow coworkers in <b>Play-Action PASCO</b>. You're also vying for supremacy against our rivals from <b>PASCO Interference</b>. To secure that belt, you not only need to win the championship game but also outscore the champion of the other league. It's the ultimate fantasy challenge, and we wouldn't have it any other way.</p>
  <p>So, get ready for a season of fun, competition, and professional-grade trash talk. This is <b>PASCO Interference</b>, where we work hard and play harder. Let the games begin!</p>
  <p><i>To see <B>Play-Action PASCO's</B> site, <a href="https://playactionpasco.vercel.app/">go here</a>.</i></p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "managerID": "474266095306403840",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Will May",
    },
    {
      "managerID": "721815388958068736",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Filip Gibarac",
    },
    {
      "managerID": "871250245194002432",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Jennifer Tafoya",
    },
    {
      "managerID": "990037020124692480",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Kyle Baird",
    },
    {
      "managerID": "992480538508238848",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Denise Suarez",
    },
    {
      "managerID": "992490716486017024",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Tracy Sharrow",
    },
    {
      "managerID": "992495477729898496",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Adrian Vigil",
    },
    {
      "managerID": "992495718579359744",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Uli Arnold",
    },
    {
      "managerID": "994298466748755968",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Sarah Southorn",
    },
    {
      "managerID": "994299235573059584",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Stephanie Vigil",
    },
    {
      "managerID": "1000480227040010240",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Claudia Bradley",
    },
    {
      "managerID": "994648641811824640",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Kara Delgado",
    },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
