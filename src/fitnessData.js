const fitnessData = [
  {
    id: 1,
    name: "Plank",
    category: {
      Legs: false,
      Booty: true,
      AbsAndBack: true,
      ArmAndShoulder: true,
    },
    repeats: ["20 sec", "40 sec", "1 min"],
    img: "https://thumbs.gfycat.com/OpulentZanyBumblebee-size_restricted.gif",
  },
  {
    id: 2,
    name: "Crunches",
    category: {
      Legs: false,
      Booty: false,
      AbsAndBack: true,
      ArmAndShoulder: false,
    },
    repeats: [20, 35, 50],
    img:
      "https://www.verywellfit.com/thmb/t2itdr6ohruDQHsv-KPtKxpaKaI=/1333x1000/smart/filters:no_upscale()/Verywell-1-2696610-AbdominalCrunch01-1853copy-599463c4d088c00013e2cad9.gif",
  },
  {
    id: 3,
    name: "Russian Twist",
    category: {
      Legs: false,
      Booty: false,
      AbsAndBack: true,
      ArmAndShoulder: false,
    },
    repeats: ["15 each side", "25 each side ", "40 each side"],
    img: "https://media3.giphy.com/media/cpKD9u3S25xYL8tcbr/source.gif",
  },
  {
    id: 4,
    name: "Mountain Climbers",
    category: {
      Legs: false,
      Booty: false,
      AbsAndBack: true,
      ArmAndShoulder: true,
    },
    repeats: ["15 each side", "25 each side ", "40 each side"],
    img:
      "https://media1.popsugar-assets.com/files/thumbor/Iu8waoj6rmL6c7B8gZUdS1ZIa3I/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/06/08/791/n/1922729/c4943793a2ba2dd5_SlowerClimbers.gif",
  },
  {
    id: 5,
    name: "Reverse Crunches",
    category: {
      Legs: false,
      Booty: false,
      AbsAndBack: true,
      ArmAndShoulder: false,
    },
    repeats: [10, 20, 30],
    img:
      "https://i.pinimg.com/originals/e1/be/53/e1be539f35470d3a159066e9a37f04c7.gif",
  },
  {
    id: 6,
    name: "Bicycle Crunches",
    category: {
      Legs: false,
      Booty: false,
      AbsAndBack: true,
      ArmAndShoulder: false,
    },
    repeats: [15, 25, 40],
    img:
      "https://i.pinimg.com/originals/d8/76/16/d87616d4b21e886f009b24fe66db69d6.gif",
  },
  {
    id: 7,
    name: "Side Plank",
    category: {
      Legs: false,
      Booty: true,
      AbsAndBack: true,
      ArmAndShoulder: true,
    },
    repeats: ["25 sec", "40 sec ", "60 sec"],
    img:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/2017/11/02/5-sideplank-1515520081.gif?resize=480:*",
  },
  {
    id: 8,
    name: "Heel touch",
    category: {
      Legs: false,
      Booty: false,
      AbsAndBack: true,
      ArmAndShoulder: false,
    },
    repeats: ["15 each side", "25 each side ", "40 each side"],
    img:
      "https://i.pinimg.com/originals/61/7f/9f/617f9fd3a4f10919aba2729aa8664a0c.gif",
  },
  {
    id: 9,
    name: "Burpees",
    category: {
      Legs: true,
      Booty: true,
      AbsAndBack: true,
      ArmAndShoulder: true,
    },
    repeats: [5, 10, 15],
    img:
      "https://post.healthline.com/wp-content/uploads/2019/09/400x400_8_Calisthenics_Exercises_for_Beginners_Burpees.gif",
  },
  {
    id: 10,
    name: "Inch Worms",
    category: {
      Legs: false,
      Booty: false,
      AbsAndBack: true,
      ArmAndShoulder: true,
    },
    repeats: [10, 15, 20],
    img:
      "https://www.verywellfit.com/thmb/U_NFy_nBWQBIU3bCeIQazAIWFfE=/3000x2000/filters:fill(FFDB5D,1)/73--InchwormGIF-9a268be275804d59b0c34b9d357d6015.gif",
  },
  {
    id: 11,
    name: "Superman",
    category: {
      Legs: false,
      Booty: true,
      AbsAndBack: true,
      ArmAndShoulder: false,
    },
    repeats: [15, 25, 35],
    img:
      "https://i.pinimg.com/originals/44/a7/29/44a729cccc29326caca8498d4159c3e0.gif",
  },
  {
    id: 12,
    name: "Squats",
    category: {
      Legs: true,
      Booty: true,
      AbsAndBack: false,
      ArmAndShoulder: false,
    },
    repeats: [20, 30, 40],
    img:
      "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/GIFs/400x400_5_Exercises_for_Anterior_Pelvic_Tilt_Squats.gif",
  },
  {
    id: 13,
    name: "Push Ups (on knees possible)",
    category: {
      Legs: false,
      Booty: false,
      AbsAndBack: true,
      ArmAndShoulder: true,
    },
    repeats: [10, 15, 20],
    img: "https://thumbs.gfycat.com/GlossySkinnyDuckbillcat-small.gif",
  },
  {
    id: 14,
    name: "Leg Raises",
    category: {
      Legs: false,
      Booty: false,
      AbsAndBack: true,
      ArmAndShoulder: false,
    },
    repeats: [10, 20, 30],
    img:
      "https://cdn.prod.openfit.com/uploads/2019/09/27124857/double-leg-lift.gif",
  },
  {
    id: 15,
    name: "Lunges",
    category: {
      Legs: true,
      Booty: false,
      AbsAndBack: false,
      ArmAndShoulder: false,
    },
    repeats: ["15 each side", "25 each side ", "40 each side"],
    img:
      "https://media1.popsugar-assets.com/files/thumbor/onf4xZsZcdTfyw1wD47NF6EtPIY/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/02/02/882/n/1922729/0d729a0461cc2548_SplitLunge.gif",
  },
  {
    id: 16,
    name: "Side Lunges",
    category: {
      Legs: true,
      Booty: true,
      AbsAndBack: false,
      ArmAndShoulder: false,
    },
    repeats: ["15 each side", "25 each side ", "40 each side"],
    img:
      "https://media1.popsugar-assets.com/files/thumbor/96s6HoLEf68HMkyKT8X675yRWow/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/01/18/802/n/1922729/75aa55118c232361_EXAMPLE.curtsy-lunge.gif",
  },
  {
    id: 17,
    name: "Attitude",
    category: {
      Legs: true,
      Booty: true,
      AbsAndBack: false,
      ArmAndShoulder: false,
    },
    repeats: ["15 each side", "25 each side ", "40 each side"],
    img:
      "https://cdn.prod.openfit.com/uploads/2017/10/20123316/Open_Fit_attitude_all-770.gif",
  },
  {
    id: 18,
    name: "Glute Bridges",
    category: {
      Legs: true,
      Booty: true,
      AbsAndBack: false,
      ArmAndShoulder: false,
    },
    repeats: [15, 30, 45],
    img:
      "https://static.onecms.io/wp-content/uploads/sites/35/2018/06/03212922/glute-bridge.gif",
  },
  {
    id: 19,
    name: "Bridge Leg Raise",
    category: {
      Legs: true,
      Booty: true,
      AbsAndBack: true,
      ArmAndShoulder: false,
    },
    repeats: ["15 each side", "25 each side ", "40 each side"],
    img:
      "https://media3.popsugar-assets.com/files/thumbor/XEjDZ0M2JJ8-1oiUPBM-0ycnaIQ/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/07/28/857/n/1922729/72c654c374292398_BridgeWithKneeUps.gif",
  },
  {
    id: 20,
    name: "Donkey Kicks",
    category: {
      Legs: true,
      Booty: true,
      AbsAndBack: true,
      ArmAndShoulder: false,
    },
    repeats: ["15 each side", "30 each side ", "45 each side"],
    img:
      "https://media.self.com/photos/5a31a31d9bddcf5b219b2c8b/master/w_1600%2Cc_limit/donkeykick.gif",
  },
  {
    id: 21,
    name: "Step up",
    category: {
      Legs: true,
      Booty: true,
      AbsAndBack: false,
      ArmAndShoulder: false,
    },
    repeats: ["15 each side", "30 each side ", "45 each side"],
    img:
      "https://blog.myfitnesspal.com/wp-content/uploads/2019/07/Slow-negative-step-ups.gif",
  },
  {
    id: 22,
    name: "Wall Sit",
    category: {
      Legs: true,
      Booty: true,
      AbsAndBack: false,
      ArmAndShoulder: false,
    },
    repeats: ["20 sec", "40 sec ", "1 min"],
    img: "https://media0.giphy.com/media/5hqs5R78mB5thn3eSc/giphy.gif",
  },
  {
    id: 23,
    name: "Diamond Leg Lifts",
    category: {
      Legs: true,
      Booty: true,
      AbsAndBack: false,
      ArmAndShoulder: false,
    },
    repeats: [10, 20, 30],
    img:
      "https://imagesvc.meredithcorp.io/v3/mm/gif?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F14%2F2020%2F10%2F19%2F101920-peloton-frog-lift.gif",
  },
  {
    id: 24,
    name: "Hydrant Leg Lifts",
    category: {
      Legs: true,
      Booty: true,
      AbsAndBack: true,
      ArmAndShoulder: false,
    },
    repeats: ["10 each side", "20 each side ", "30 each side"],
    img:
      "https://i.pinimg.com/originals/6f/75/ac/6f75ac6566973105fb56218626a8e727.gif",
  },
  {
    id: 25,
    name: "Arm Circle",
    category: {
      Legs: false,
      Booty: false,
      AbsAndBack: false,
      ArmAndShoulder: true,
    },
    repeats: [
      "20 forward / 20 backward",
      "30 forward / 30 backward",
      "40 forward / 40 backward",
    ],
    img: "https://thumbs.gfycat.com/AchingDismalChihuahua-size_restricted.gif",
  },
  {
    id: 26,
    name: "Trizeps Dip",
    category: {
      Legs: false,
      Booty: false,
      AbsAndBack: false,
      ArmAndShoulder: true,
    },
    repeats: [10, 20, 30],
    img:
      "https://imagesvc.meredithcorp.io/v3/mm/gif?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F12%2F2019%2F12%2F1-tricep-dips.gif",
  },
  {
    id: 27,
    name: "Lateral Arm Raise (with weights)",
    category: {
      Legs: false,
      Booty: false,
      AbsAndBack: false,
      ArmAndShoulder: true,
    },
    repeats: [15, 30, 45],
    img:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/fitgif-friday-dumbbell-lateral-raise-slider-thumbnail-override-colgate-1492715521.gif?crop=1xw:0.786xh;center,top&resize=1200:*",
  },
  {
    id: 28,
    name: "Plank Jack",
    category: {
      Legs: false,
      Booty: false,
      AbsAndBack: true,
      ArmAndShoulder: true,
    },
    repeats: [15, 30, 45],
    img: "https://media3.giphy.com/media/C8IN9arKgRAMGQOaPl/giphy.gif",
  },
];

export default fitnessData;

//? level
// level: {
//   beginner: true;
//   intermediate: false;
//   pro: false;
// }

//! my workout : min 5 exercises

//? Data
// name
// Category boolean {Legs, Booty, Abs & Back, Arm & Shoulder}
// Repeats{beginner: 10 , intermediate: 20 , pro 30 }
// rounds 3
// Image

//? events
// onclick excercise = add to Workoutlist
// workoutist = remove-button
