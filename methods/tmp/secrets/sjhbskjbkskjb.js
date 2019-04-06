module.exports = {
  boomDoggie: {
    boomDoggieDog: {
      boomDoggieDogDoggie: {
        boomDoggieDogDoggieDog: {
          boomDoggieDogDoggieDogDoggie: {
            boomDoggieDogDoggieDogDoggieDog: {
              boomDoggieDogDoggieDogDoggieDogDoggie: async bone => {
                if (!bone) {
                  return "dream on...";
                } else if (typeof bone === "string") {
                  return "dream on, dingalingadingdong doggie dog";
                } else if (typeof bone === "object") {
                  if (bone.length === 3) {
                    for (let i = 0; i < 3; i++) {
                      if (typeof bone[i] !== "object") {
                        return "ewwwwwwwwwwwwwwww";
                      } else if (bone[i].spur) {
                        if (typeof bone[i].spur === "function") {
                          return bone[i].spur(
                            `require('../extras/sumbody.js')`
                          );
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
