const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

function getTodoTopics(todos) {
  // Start coding here
  return todos.map((text) => {
    return text.topic;
  });
}

console.log(getTodoTopics(todos));

/* 
	Output:
	[
		'Doing pre-work',
		'Workout',
		'Playing computer games',
		'Relax',
		'Clean the room'
	]
*/

/* ----------------------------------------------------------------- */

/*
const todos = [
	{ topic: "Doing pre-work", completed: true },
	{ topic: "Workout", completed: false },
	{ topic: "Playing computer games", completed: true },
	{ topic: "Relax", completed: false },
	{ topic: "Clean the room", completed: true },
  ];
  
  function getTodoTopics(todos) {
	// Start coding here
	return todos.topic;
  }
  
  let result = todos.map(getTodoTopics);
  console.log(result);
  
  /* 
	  Output:
	  [
		  'Doing pre-work',
		  'Workout',
		  'Playing computer games',
		  'Relax',
		  'Clean the room'
	  ]
  */
