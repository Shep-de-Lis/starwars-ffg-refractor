console.log("STYLE FILE LOADED");
Hooks.once("ready", () => {
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
      results: {
        ability: CONFIG.FFG.ABILITY_RESULTS,
  }
    };
  }
});