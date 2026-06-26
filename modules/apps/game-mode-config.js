export class GameModeConfig extends FormApplication {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      id: "game-mode-config",
      title: "Configure Game Mode",
      template: "systems/starwarsffg/templates/game-mode-config.html",
      width: 300
    });
  }

  async getData() {
    return {
      mode: game.settings.get("starwarsffg", "gameMode")
    };
  }

  async _updateObject(event, formData) {
    await game.settings.set("starwarsffg", "gameMode", formData.mode);
    ui.notifications.info("Reload required to apply changes");
  }
}