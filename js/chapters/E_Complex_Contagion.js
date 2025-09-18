// 3 - Complex Contagion

SLIDES.push(

// {
// 	chapter: "Complex",
// 	clear:true,

// 	add:[

// 		// Intro text
// 		{
// 			type:"box",
// 			id:"complex_complex",
// 			text:"complex_complex",
// 			x:0, y:0, w:480, h:540
// 		},

// 		// Sim
// 		{
// 			type:"sim",
// 			x:0, y:0,
// 			fullscreen: true,
// 			network: {
// 				"contagion":0.5,
// 				"peeps":[[849,356,0],[808,199,0],[543,97,1,2],[679,114,0],[781,480,0],[906,480,0]],
// 				"connections":[[0,1,1],[2,3,1],[3,1,1],[4,0,1],[0,5,1]]
// 			},
// 			options:{
// 				infectedFrame: 2,
// 				scale: 1.75,
// 				startUncuttable: true,
// 				_bottle: true
// 			}
// 		},

// 		// UI for the simulation
// 		{
// 			type:"box",
// 			x:520, y:230,
// 			sim_ui:"red"
// 		}

// 	],

// 	onupdate:function(slideshow, state){

// 		// Show next if SIM STEP >= 3
// 		if(!state.ended){
// 			var sim = slideshow.simulations.sims[0];
// 			if(sim.STEP>=2){
// 				state.ended = true;
// 				slideshow.next();
// 			}
// 		}

// 	}

// },

// {
// 	remove:[
// 		{type:"box", id:"complex_complex"}
// 	],
// 	add:[
// 		{
// 			type:"box",
// 			text:"complex_complex_2",
// 			x:0, y:0, w:480, h:540
// 		}
// 	]
// },

// {
// 	chapter: "Complex-Wisdom",
// 	clear:true,

// 	add:[

// 		// Intro text
// 		{
// 			id:"complex_complex_3",
// 			type:"box",
// 			text:"complex_complex_3",
// 			x:480, y:0, w:480, h:540
// 		},

// 		// Sim
// 		{
// 			type:"sim",
// 			x:0, y:0,
// 			fullscreen: true,
// 			network: {
// 				"contagion":0.25,
// 				"peeps":[[54,240,1,3],[227,237,0],[298,98,0],[405,157,0],[408,296,0],[311,380,0]],
// 				"connections":[[1,2,0],[1,3,0],[4,1,0],[1,5,0],[0,1,0]]
// 			},
// 			options:{
// 				infectedFrame: 3,
// 				scale: 1.75,
// 				_wisdom: true
// 			}
// 		},

// 		// UI for the simulation
// 		{
// 			type:"box",
// 			x:30, y:320,
// 			sim_ui:"red"
// 		}

// 	],

// 	onupdate:function(slideshow, state){

// 		// Show end if EVERYONE is infected
// 		if(!state.ended){
// 			var sim = slideshow.simulations.sims[0];
// 			var peepCount = 0;
// 			sim.peeps.forEach(function(peep){
// 				if(peep.infected) peepCount++;
// 			});
// 			if(peepCount==sim.peeps.length){
// 				var boxes = slideshow.boxes;
// 				state.ended = true;
// 				sim.win({
// 					small:true
// 				});
// 				slideshow.next();
// 			}
// 		}

// 	}

// },

// {
// 	remove:[
// 		{type:"box", id:"complex_complex_3"}
// 	],
// 	add:[
// 		{
// 			id:"end",
// 			type:"box",
// 			text:"complex_complex_3_end",
// 			x:480, y:0, w:480, h:540
// 		}
// 	]
// },

// {
// 	chapter: "Complex-Cascade",
// 	clear:true,

// 	add:[

// 		// Intro text
// 		{
// 			type:"box",
// 			id:"complex_cascade",
// 			text:"complex_cascade",
// 			x:60, y:0, w:840, h:100,
// 			align: "center"
// 		},

// 		// Sim
// 		{
// 			type:"sim",
// 			id:"contagion",
// 			x:0, y:-40,
// 			fullscreen: true,
// 			network: {
// 				"contagion":0.25,
// 				"peeps":CASCADE_PUZZLE.peeps,
// 				"connections":CASCADE_PUZZLE.connections
// 			},
// 			options:{
// 				infectedFrame: 3,
// 				scale: 1.25,
// 				startUncuttable: true,
// 				_wisdom: true
// 			}
// 		},

// 		// UI for the simulation
// 		{
// 			type:"box",
// 			id:"ui",
// 			x:380, y:370,
// 			sim_ui:"red"
// 		},
// 		{
// 			type:"box",
// 			id:"complex_cascade_feel_free",
// 			text:"complex_cascade_feel_free",
// 			x:330, y:440, w:300, h:100,
// 			align: "center"
// 		},

// 		// End text
// 		{
// 			id:"end",
// 			type:"box",
// 			text:"complex_cascade_end",
// 			x:330, y:450, w:300, h:100,
// 			hidden:true
// 		},

// 	],

// 	onupdate:function(slideshow, state){

// 		// Show end if EVERYONE is infected
// 		if(!state.ended){
// 			var sim = slideshow.simulations.sims[0];
// 			var peepCount = 0;
// 			sim.peeps.forEach(function(peep){
// 				if(peep.infected) peepCount++;
// 			});
// 			if(peepCount==sim.peeps.length){
// 				var boxes = slideshow.boxes;
// 				boxes.removeChildByID("complex_cascade_feel_free", true);
// 				boxes.showChildByID("end", true);
// 				state.ended = true;
// 				sim.win();
// 			}
// 		}

// 	}

// },

// {
// 	remove:[
// 		{type:"box", id:"complex_cascade"},
// 		{type:"box", id:"complex_cascade_feel_free"},
// 		{type:"box", id:"end"}
// 	],
// 	move:[
// 		{type:"box", id:"ui", y:360-80},
// 		{type:"sim", id:"contagion", y:-140}
// 	],
// 	add:[
// 		{
// 			type:"box",
// 			text:"complex_post_cascade",
// 			x:50, y:390, w:600, h:150,
// 			align: "right"
// 		},
// 		{
// 			type:"box",
// 			text:"complex_post_cascade_end",
// 			x:660, y:450, w:300, h:90
// 		}
// 	]
// },

// {
// 	chapter: "Complex-Prevent",
// 	clear:true,

// 	add:[

// 		// Intro text
// 		{
// 			type:"box",
// 			id:"complex_prevent",
// 			text:"complex_prevent",
// 			x:80, y:0, w:800, h:140,
// 			align: "center"
// 		},

// 		// Lil' contagion
// 		{
// 			id: "contagion",
// 			type:"sim",
// 			x:0, y:80,
// 			fullscreen: true,
// 			network: {
// 				"contagion":0.25,
// 				"peeps":CONTAGION_PUZZLE.peeps,
// 				"connections":CONTAGION_PUZZLE.connections
// 			},
// 			options:{
// 				infectedFrame: 3,
// 				scale: 1.25,
// 				startUncuttable: true,
// 				_wisdom: true
// 			}
// 		},

// 		// UI for the simulation
// 		{
// 			type:"box",
// 			id:"ui",
// 			x:380, y:140,
// 			sim_ui:"red"
// 		},

// 		// Outro text
// 		/*{
// 			id:"end",
// 			type:"box",
// 			text:"complex_prevent_end",
// 			x:660, y:440, w:300, h:100,
// 			hidden:true
// 		}*/

// 	],

// 	onupdate:function(slideshow, state){

// 		// Show end if sim is running AND no one left to infect
// 		// that is, it's stalled... YAY!
// 		var sim = slideshow.simulations.sims[0];

// 		if(!state.ended){
// 			if(Simulations.IS_RUNNING){

// 				// if it's a new step... 
// 				if(sim.STEP > state.lastStep){

// 					// ...but the infected count is the same as last step
// 					var countInfected = 0;
// 					sim.peeps.forEach(function(peep){ if(peep.infected) countInfected++; });
// 					if(state.lastInfected == countInfected){

// 						// oh, and it's NOT coz ALL of 'em are infected
// 						if(countInfected!=sim.peeps.length){

// 							// WIN
// 							state.ended = true;
// 							var boxes = slideshow.boxes;
// 							setTimeout(function(){
// 								//boxes.showChildByID("end", true);
// 								sim.win({
// 									x:350, y:270-90,
// 									width:260, height:260,
// 									small:true
// 								});
// 							},350);
// 							setTimeout(function(){
// 								slideshow.next();
// 							},1100);

// 						}

// 					}else{
// 						state.lastInfected = countInfected;
// 					}

// 				}
// 				state.lastStep = sim.STEP;

// 			}else{
// 				state.lastStep = 0;
// 				state.lastInfected = 1;
// 			}

// 		}

// 	}

// },

// {
// 	remove:[
// 		{type:"box", id:"complex_prevent"}
// 	],
// 	move:[
// 		{type:"box", id:"ui", y:0},
// 		{type:"sim", id:"contagion", y:-70}
// 	],
// 	add:[
// 		{
// 			type:"box",
// 			text:"complex_prevent_2",
// 			x:0, y:390, w:650, h:100,
// 			align: "right"
// 		},
// 		{
// 			type:"box",
// 			text:"complex_prevent_end",
// 			x:660, y:450, w:300, h:90
// 		}
// 	]
// },
{
	chapter: "Complex",
	clear:true,

	add:[

		// Sim
		// DRAWING FOR SOFT CONSTRAINTS...
		{
			type:"sim",
			x:0, y:230,
			fullscreen: true,
			network: {
				"contagion":0.25,
				"peeps":[
					[90,-67,1],[181,-71,0],[36,21,0],[107,98,0],[206,92,0],[244,6,0],
					[416,106,0],[352,181,0],[415,267,0],[528,268,0],[595,186,0],[532,107,0],
					[769,-68,1],[701,6,0],[753,96,0],[855,110,0],[928,35,0],[867,-59,0]
				],
				"connections":[[13,12,0],[12,17,0],[16,15,0],[14,13,0],
				[14,17,0],[17,15,0],[15,12,0],[12,16,0],[17,16,0],[14,12,0],[15,14,0],[14,16,0],
				[11,13,0],[10,14,0],
				[6,7,0],[7,8,0],[8,9,0],[9,10,0],[10,11,0],[6,11,0],[6,9,0],[8,11,0],
				[5,6,0],[4,7,0],
				[0,1,0],[0,2,0],[2,5,0],[2,3,0],[4,3,0],[1,5,0],[5,4,0],			]
			},
			options:{
				infectedFrame: 3,
				scale: 1,
				_wisdom: true,
				NO_BONK: true
			}
		},

		// UI for the simulation
		{
			type:"box",
			id:"ui",
			x:370, y:545,
			sim_ui:"blue"
		},

		// Words
		{
			type:"box",
			text:"bonding_1",
			x:40, y:-45, w:900, h:70,
			align:"center"
		},

		// Words 2
		{
			type:"box",
			text:"bonding_2",
			x:40, y:40-45, w:900, h:100,
			align:"center"
		},

		// Words End
		{
			id:"end",
			type:"box",
			text:"bonding_end",
			x:660, y:390, w:500, h:250,
			hidden:true
		}

	],

	onupdate:function(slideshow, state){

		// If Peeps[6] to Peep[11] stay clean, but Peeps[0] to Peeps[5] get infected
		var sim = slideshow.simulations.sims[0];
		var wantSafeCount = 0;
		var wantInfectCount = 0;
		for(var i=6; i<=11; i++){
			var wantSafe = sim.peeps[i];
			if(wantSafe.infected) wantSafeCount++;
			var wantInfected = sim.peeps[i-6];
			if (wantInfected.infected) wantInfectCount++
		}
		// Win
		if(!state.ended){
			if(wantSafeCount==0 && wantInfectCount == 6){
				var boxes = slideshow.boxes;
				boxes.showChildByID("end", true);
				state.ended = true;
				sim.win({
					x:330+5, y:160-120+5,
					width:280, height:280,
					small:true
				});
			}
		}

	}

},
{
	chapter: "Complex",
	clear:true,

	add:[
		{
			id:"fully_connected",
			type:"sim",
			x:500, y:25,
			fullscreen: true,
			network: {
				"contagion":2,
				"peeps":[[106,106,0],[239,52,1,1],[376,110,0],[27,221,0],[54,365,0],[162,458,0],[308,467,0],[407,371,0],[453,241,0]],
				"connections":[
					[0,1,0],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],
					[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],
					[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],
					[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,0],
					[4,5,0],[4,6,0],[4,7,0],[4,8,0],
					[5,6,0],[5,7,0],[5,8,0],
					[6,7,0],[6,8,0],
					[7,8,0],
				],
			},
			options:{
				infectedFrame: 2,
				scale: 1.5,
				showTimes : true,
			}
		},
		// UI for the simulation
		{
			type:"box",
			id:"ui",
			x:60, y:300,
			sim_ui:"blue"
		},
		{
			type:"box",
			id:"fully_connected_intro",
			text:"fully_connected_intro", x:60, y:10, w:300
		},
		{
			type:"box",
			id:"fully_connected_content",
			text:"fully_connected_content", x:60, y:40, w:350
		},
		{
			type:"box",
			id:"fully_connected_end",
			text:"fully_connected_end", x:60, y:400, w:350,
			hidden:true
		},
		{
			type:"box",
			id:"fully_connected_next",
			text:"fully_connected_next",
			hidden:true
		}
	],
	onupdate:function(slideshow, state){

		// If all peeps are infected..
		var sim = slideshow.simulations.sims[0];
		var peepCount = 0;
		for(var i=1; i<=8; i++){
			var peep = sim.peeps[i];
			if(peep.infected) peepCount++;
		}

		// Win
		if(!state.ended){
			if(peepCount==8){
				var boxes = slideshow.boxes;
				boxes.showChildByID("fully_connected_end", true);
				boxes.showChildByID("fully_connected_next",true);
				state.ended = true;
				sim.win({
					x:100, y:75,
					width:280, height:280,
				});
			}
		}

	}
}
,
{
	chapter: "Complex",
	clear: true,

	add:[
		// Circle Graph
		{
			id:"star",
			type:"sim",
			x:-150, y:25,
			fullscreen: true,
			network: {
				"contagion":2,
				"peeps":[[600,300,0],[583,381,0],[534,449,0],[462,490,0],
				[379,499,0],[300,473,0],[238,418,0],[204,342,0],[204,258,0],
				[238,182,0],[300,127,0],[379,101,1,4],[462,110,0],[534,151,0],
				[583,219,0]],
				"connections":[[0,1,0],[1,2,0],[2,3,0],[3,4,0],[4,5,0],
						[5,6,0],[6,7,0],[7,8,0],[8,9,0],[9,10,0],[10,11,0],
						[11,12,0],[12,13,0],[13,14,0],[14,0,0]],
			},
			options:{
				infectedFrame: 4,
				scale: 1,
				showTimes : true,
			}
		},
		{
			type:"box",
			id:"ui",
			x:600, y:200,
			sim_ui:"blue"
		},
		{
			type:"box",
			id:"circle_graph",
			text:"circle_graph", x:600, y:100, w:350
		},
		{
			type:"box",
			id:"circle_graph_end",
			text:"circle_graph_end", x:600, y:300, w:350,
			hidden:true
		},
		{
			type:"box",
			id:"circle_graph_next",
			text:"circle_graph_next",
			hidden:true
		}

	]
}


// {
// 	chapter: "Complex-Groupthink",
// 	clear: true,

// 	add:[

// 		// NASA Image
// 		{
// 			type:"box",
// 			img:"sprites/nasa.png", x:0, y:0, w:425, h:450
// 		},

// 		// Text
// 		{
// 			type:"box",
// 			text:"complex_groupthink",
// 			x:460, y:0, w:500, h:540
// 		},


// 	]

// }

);


