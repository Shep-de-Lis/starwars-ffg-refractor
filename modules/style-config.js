console.log("STYLE FILE LOADED");
Hooks.once("ready", () => {
  const cloneWithNewPath = (results, newFolder) => {
    const cloned = {};
    for (const key in results) {
      cloned[key] = {
        ...results[key],
        image: results[key].image.replace("/starwars/", `/${newFolder}/`)
      };
    }
    return cloned;
  };

  if (CONFIG.FFG) {
    CONFIG.STYLE = {
  icons: {
    proficiency: CONFIG.FFG.PROFICIENCY_ICON,
    ability: CONFIG.FFG.ABILITY_ICON,
    challenge: CONFIG.FFG.CHALLENGE_ICON,
    difficulty: CONFIG.FFG.DIFFICULTY_ICON,
    boost: CONFIG.FFG.BOOST_ICON,
    setback: CONFIG.FFG.SETBACK_ICON,
    removeSetback: CONFIG.FFG.REMOVESETBACK_ICON,
    force: CONFIG.FFG.FORCE_ICON
  },

  // 🔥 HIER gebeurt de switch
  results: {
    ability: cloneWithNewPath(CONFIG.FFG.ABILITY_RESULTS, "genesys"),
    boost: cloneWithNewPath(CONFIG.FFG.BOOST_RESULTS, "genesys"),
    challenge: cloneWithNewPath(CONFIG.FFG.CHALLENGE_RESULTS, "genesys"),
    difficulty: cloneWithNewPath(CONFIG.FFG.DIFFICULTY_RESULTS, "genesys"),
    setback: cloneWithNewPath(CONFIG.FFG.SETBACK_RESULTS, "genesys"),
    proficiency: cloneWithNewPath(CONFIG.FFG.PROFICIENCY_RESULTS, "genesys"),
    force: cloneWithNewPath(CONFIG.FFG.FORCE_RESULTS, "genesys")
  }
    };
    console.log("STYLE LOADED:", CONFIG.STYLE);
  }
});