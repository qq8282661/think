module.exports = class extends think.Model {
  get relation() {
    return {
      cat: think.Model.HAS_MANY,
      // profile: think.Model.BELONGS_TO,
    };
  }
};
