// code your solution here
 function saturdayFun(activity = "roller-skate") {
     return `This Saturday, I want to ${activity}!`
 }

 let mondayWork = function(act = "go to the office") {
     return `This Monday, I will ${act}.` 
 }

 let wrapAdjective = function(style = "*") {
     return function(adj="a hard worker") {
         return `You are ${style}${adj}${style}!`
     }
 }