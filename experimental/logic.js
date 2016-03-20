'use strict';

function generateWorkout(){
  var exercises = [
    {"wall walks":['a']},
    {"handstand press-ups":['a']},
    {"wall balls":['a']},
    {"skipping":['a']},
    {"sit-ups":['a','b','c','d','e']},
    {"kettlebell swings":['b','e']},
    {"air squats":['a','b','c','d','e']},
    {"push-ups":['a','b','c','d','e']},
    {"toes-to-bar":['d']},
    {"squats": ['e']},
    {"deadlifts": ['b','e']},
    {"cleans":['b']},
    {"jerks":['b']},
    {"push press":['b']},
    {"pull-ups":['d']},
    {"muscle-ups":['d']},
    {"box jumps":['c']}
  ]

  var numOfExercises = Math.floor(Math.random() * 4 + 1); 
  var chosenExercises = [];
  var panelReduction = [];
  var finalWorkout = {};

  for (var i=0;i<=numOfExercises; i++){
    var randSelection = Math.floor(Math.random()* exercises.length);
    chosenExercises.push(exercises[randSelection]);
    exercises.splice(randSelection,1); 
  }
  chosenExercises.sort(function(a,b){
    //order the exercises by the number of panels they can be performed on
    return a[Object.keys(a)].length - b[Object.keys(b)].length
  })

  // get a list of all the panels that CAN be used by all the exercises
  for (var i=0, routine = chosenExercises.length ;i < routine; i ++){
    chosenExercises[i][Object.keys(chosenExercises[i])].forEach(function(e){
      if(panelReduction.indexOf(e) < 0){
        panelReduction.push(e)
      }
    })
  }

  // group exercises that can be used on the same panel together to reduce total
  // number of panels required.
  panelReduction.forEach(function(panel){
    chosenExercises.forEach(function(exerciseAndPanelObj){
      var exercise = Object.keys(exerciseAndPanelObj)
      if(exerciseAndPanelObj[exercise].indexOf(panel) >= 0){
        exerciseAndPanelObj[exercise] = panel;
        if(finalWorkout[exerciseAndPanelObj[exercise]]){
          finalWorkout[exerciseAndPanelObj[exercise]].push(exercise[0])
        }else {
          finalWorkout[exerciseAndPanelObj[exercise]] = exercise;
        }
      }
    })
  })
  return finalWorkout;
}


console.log(generateWorkout())




