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
			x:0, y:130,
			fullscreen: true,
			network: {
				"contagion":0.25,
				"peeps":[
					[90,-67,1],[181,-71,0],[36,21,0],[107,98,0],[206,92,0],[244,6,0],
					[416,106,1],[352,181,0],[415,267,0],[528,268,0],[595,186,0],[532,107,0],
					[769,-68,1],[701,6,0],[753,96,0],[855,110,0],[928,35,0],[867,-59,0]
				],
				"connections":[[13,12,0],[12,17,0],[16,15,0],[14,13,0],[13,16,0],[14,17,0],[17,15,0],[15,12,0],[12,16,0],[15,13,0],[17,16,0],[14,12,0],[13,17,0],[0,1,0],[2,5,0],[4,3,0],[15,14,0],[14,16,0]]
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
			x:370, y:445,
			sim_ui:"blue"
		},

		// Words
		{
			type:"box",
			text:"bonding_1",
			x:230, y:0+15, w:500, h:70,
			align:"center"
		},

		// Words 2
		{
			type:"box",
			text:"bonding_2",
			x:300, y:70+15, w:360, h:100,
			align:"center"
		},

		// Words End
		{
			id:"end",
			type:"box",
			text:"bonding_end",
			x:660, y:290, w:300, h:250,
			hidden:true
		}

	],

	onupdate:function(slideshow, state){

		// If Peeps[6] to Peep[11] pass..
		var sim = slideshow.simulations.sims[0];
		var peepCount = 0;
		for(var i=6; i<=11; i++){
			var peep = sim.peeps[i];
			if(peep.infected) peepCount++;
		}

		// Win
		if(!state.ended){
			if(peepCount==6){
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


