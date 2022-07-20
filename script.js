//master timeline, repeat infinite (-1), 0s delay between iteration
var master = new TimelineMax({repeat: -1, repeatDelay: 2});

//if waiting --> invisible, labels from Affinity Designer

//Sun and Cloud
master.set(".Cloud", {visibility: "hidden"})
master.set(".Sun", {visibility: "hidden"})

//mountains
master.set(".Mountain-Left", {visibility: "hidden"})
master.set(".Mountain-Right", {visibility: "hidden"})

//ground
master.set(".Ground", {visibility: "hidden"})

//sky
master.set(".Sky", {fill: "#FFFFFF"})

//trees
master.set(".Tree-Left-Bottom", {visibility: "hidden"})
master.set(".Tree-Right-Bottom", {visibility: "hidden"})
master.set(".Tree-Left-Middle", {visibility: "hidden"})
master.set(".Tree-Right-Middle", {visibility: "hidden"})
master.set(".Tree-Left-Top", {visibility: "hidden"})
master.set(".Tree-Right-Top", {visibility: "hidden"})
master.set(".Tree-Left-Bark", {visibility: "hidden"})
master.set(".Tree-right-Bark", {visibility: "hidden"})

//Computer Lines
master.set(".Line-1", {visibility: "hidden"})
master.set(".Line-2", {visibility: "hidden"})
master.set(".Line-3", {visibility: "hidden"})
master.set(".Line-4", {visibility: "hidden"})

//add scenes
master.add(scene1(), "scene1")
master.add(scene2(), "scene2")
master.add(scene3(), "scene3")
master.add(scene4(), "scene4")

//scene1 -> Ground
function scene1 () {
  var subtimeline = new TimelineMax();
  
  subtimeline.set(".Line-1", {visibility: "visible"})
  
  subtimeline.fromTo(".Line-1", 1, {scaleX: 0, transformOrigin: "left"}, {scaleX: 1, transformOrigin: "left"})
  
  subtimeline.set(".Ground", {visibility: "visible"}, "+=0.25")
  
  subtimeline.fromTo(".Ground", 1, {scaleY: 0, transformOrigin: "bottom"}, {scaleY: 1, transformOrigin: "bottom"}, "+=0.25")
  
  subtimeline.set(".Sky", {fill: "#4BDDFD"}, "+=0.25")
  
  return subtimeline;
}

//scene2 -> Tree Left
function scene2 () {
  var subtimeline = new TimelineMax();
  
   subtimeline.set(".Line-2", {visibility: "visible"}, "+=0.25")
  
  subtimeline.fromTo(".Line-2", 1, {scaleX: 0, transformOrigin: "left"}, {scaleX: 1, transformOrigin: "left"}, "+=0.25")
  
  subtimeline.set(".Tree-Left-Bark", {visibility: "visible"})
  
  subtimeline.fromTo(".Tree-Left-Bark", 0.70, {scaleY: 0, transformOrigin: "bottom"}, {scaleY: 1, transformOrigin: "bottom"})
  
  
  subtimeline.set(".Tree-Right-Bottom", {visibility: "visible"})
  
   subtimeline.fromTo(".Tree-Right-Bottom", 0.5, {scale: 0, transformOrigin: "center"}, {scale: 1, transformOrigin: "center"})
  
   subtimeline.set(".Tree-Left-Middle", {visibility: "visible"}, "-=0.25")
  
   subtimeline.fromTo(".Tree-Left-Middle", 0.5, {scale: 0, transformOrigin: "center"}, {scale: 1, transformOrigin: "center"}, "-=0.25")
  
  subtimeline.set(".Tree-Left-Top", {visibility: "visible"}, "-=0.25")
  
   subtimeline.fromTo(".Tree-Left-Top", 0.5, {scale: 0, transformOrigin: "center"}, {scale: 1, transformOrigin: "center"},"-=0.25")
  
   
   subtimeline.set(".Tree-right-Bark", {visibility: "visible"}, "-0.5")
  
  subtimeline.fromTo(".Tree-right-Bark", 0.70, {scaleY: 0, transformOrigin: "bottom"}, {scaleY: 1, transformOrigin: "bottom"}, "-=0.5")
  
   subtimeline.set(".Tree-Left-Bottom", {visibility: "visible"})
  
   subtimeline.fromTo(".Tree-Left-Bottom", 0.5, {scale: 0, transformOrigin: "center"}, {scale: 1, transformOrigin: "center"})
  
   subtimeline.set(".Tree-Right-Middle", {visibility: "visible"}, "-=0.25")
  
   subtimeline.fromTo(".Tree-Right-Middle", 0.5, {scale: 0, transformOrigin: "center"}, {scale: 1, transformOrigin: "center"}, "-=0.25")
  
  subtimeline.set(".Tree-Right-Top", {visibility: "visible"}, "-=0.25")
  
   subtimeline.fromTo(".Tree-Right-Top", 0.5, {scale: 0, transformOrigin: "center"}, {scale: 1, transformOrigin: "center"},"-=0.25")
  
  return subtimeline;
}

//scene3 -> Ground
function scene3 () {
  var subtimeline = new TimelineMax();
  
  subtimeline.set(".Line-3", {visibility: "visible"})
  
  subtimeline.fromTo(".Line-3", 1, {scaleX: 0, transformOrigin: "left"}, {scaleX: 1, transformOrigin: "left"})
  
  subtimeline.set(".Mountain-Left", {visibility: "visible"}, "+=0.25")
  
  subtimeline.fromTo(".Mountain-Left", 0.5, {scale: 0, transformOrigin: "bottom"}, {scale: 1.5, transformOrigin: "bottom"}, "+=0.25")
  
  subtimeline.to(".Mountain-Left", 0.5, {scale: 1, transformOrigin: "bottom"})
  
  subtimeline.set(".Mountain-Right", {visibility: "visible"}, "-=0.5")
  
  subtimeline.fromTo(".Mountain-Right", 0.5, {scale: 0, transformOrigin: "bottom"}, {scale: 1.5, transformOrigin: "bottom"}, "-=0.5")
  
  subtimeline.to(".Mountain-Right", 0.5, {scale: 1, transformOrigin: "bottom"})
  
  return subtimeline;
}

//Sun and Cloud
function scene4 () {
  var subtimeline = new TimelineMax();
  
  subtimeline.set(".Line-4", {visibility: "visible"})
  
  subtimeline.fromTo(".Line-4", 1, {scaleX: 0, transformOrigin: "left"}, {scaleX: 1, transformOrigin: "left"})
  
  subtimeline.set(".Sun", {visibility: "visible"}, "+=0.25")
  
  subtimeline.fromTo(".Sun", 1.5, {y: 300, transformOrigin: "bottom", opacity: 0}, {y: 0, transformOrigin: "bottom", opacity: 1})
  
   subtimeline.set(".Cloud", {visibility: "visible"}, "-=0.25")
  
  subtimeline.fromTo(".Cloud", 1.5, {x: 200, transformOrigin: "bottom", opacity: 0.5}, {x: 0, transformOrigin: "bottom", opacity: 1}, "-=0.25")
  
  return subtimeline;
}