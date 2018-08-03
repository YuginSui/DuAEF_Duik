	// asu_NudgeKeyFrames.jsx	// Copyright (c) 2007 sundstedt.se (Anders Sundstedt). All rights reserved.	// check it: http://www.aescripts.blogspot.com/	// 	// Name: asu_NudgeKeyFrames	// Version: 1.1	// 	// Description:	// This script moves all keyframes to the nearest matching keyframe for the framerate of that comp	// Note: It handles AnchorPoint, Position, Scale, Rotation and Opacity keyframes.  	// Note: Existing keyframes are removed prior to creating the adjusted (nudged) keyframe	// 	// Usage: Just run this script on any open project (make sure you save project first just in case).	// Script has been tested using Adobe After Effects CS3 and works for me but may still need improvements.		// Originally requested by David Aughenbaugh	// 	// Legal stuff:	// This script is provided "as is," without warranty of any kind, expressed	// or implied. In no event shall the author be held liable for any damages 	// arising in any way from the use of this script.		// ***Modified April 2008 by Mary Snyder (mary@pxlgirl.com)***		// ***In this version of the script, you must have layers selected within a comp.***	// ***Otherwise, the script will generate an error.***		var proj = app.project;	var undoStr = "Nudge Keyframes";	if (proj){		var myComp = app.project.activeItem;		if (myComp != null && (myComp instanceof CompItem)){						var myLayers = myComp.selectedLayers;			if (myLayers.length != 0){			app.beginUndoGroup(undoStr);									for (i=0; i <= myLayers.length-1; i++){				t=i+1;				writeLn("Modifying Layer " + t + " of " + myLayers.length); 								var fps = myComp.frameRate;													for (var j = 1; j <= myLayers[i].position.numKeys; j++)							{								// myNearestKeyIndex = layers[i].position.nearestKeyIndex(0);								var mykeyTime = myLayers[i].position.keyTime(j); // j is a keyframe nr																// I want to set the time value of keyfram (j)								nearestTime = Math.round(mykeyTime*fps)/fps; // round to nearest keyframe value;								// Copy the position value (x,y,z) of keyframe(j)								var posValueCopy = myLayers[i].position.keyValue(j);																// Delete the keyframe 								myLayers[i].position.removeKey(j);																			// Add a replacement key for removed key at correct position									myLayers[i].position.addKey(nearestTime);								// Set the position value of keyframe k to the stored position value of deleted keyframe								myLayers[i].position.setValueAtKey(j, posValueCopy);															}													// for all keyframes of that layer							for (var j = 1; j <= myLayers[i].scale.numKeys; j++)							{								// myNearestKeyIndex = layers[i].position.nearestKeyIndex(0);								var mykeyTime = myLayers[i].scale.keyTime(j); // j is a keyframe nr																// I want to set the time value of keyfram (j)								nearestTime = Math.round(mykeyTime*fps)/fps; // round to nearest keyframe value;								// Copy the position value (x,y,z) of keyframe(j)								var scaleValueCopy = myLayers[i].scale.keyValue(j);																// Delete the keyframe 								myLayers[i].scale.removeKey(j);																			// Add a replacement key for removed key at correct position									myLayers[i].scale.addKey(nearestTime);								// Set the position value of keyframe k to the stored position value of deleted keyframe								myLayers[i].scale.setValueAtKey(j, scaleValueCopy);															}													// for all keyframes of that layer							for (var j = 1; j <= myLayers[i].rotation.numKeys; j++)							{								// myNearestKeyIndex = layers[i].position.nearestKeyIndex(0);								var mykeyTime = myLayers[i].rotation.keyTime(j); // j is a keyframe nr																// I want to set the time value of keyfram (j)								nearestTime = Math.round(mykeyTime*fps)/fps; // round to nearest keyframe value;								// Copy the rotation value of keyframe(j)								var rotValueCopy = myLayers[i].rotation.keyValue(j);																// Delete the keyframe 								myLayers[i].rotation.removeKey(j);																			// Add a replacement key for removed key at correct position									myLayers[i].rotation.addKey(nearestTime);								// Set the position value of keyframe k to the stored position value of deleted keyframe								myLayers[i].rotation.setValueAtKey(j, rotValueCopy);															}													// for all keyframes of that layer							for (var j = 1; j <= myLayers[i].opacity.numKeys; j++)							{								// myNearestKeyIndex = layers[i].position.nearestKeyIndex(0);								var mykeyTime = myLayers[i].opacity.keyTime(j); // j is a keyframe nr																// I want to set the time value of keyfram (j)								nearestTime = Math.round(mykeyTime*fps)/fps; // round to nearest keyframe value;								// Copy the opacity value (x,y,z) of keyframe(j)								var opacityValueCopy = myLayers[i].opacity.keyValue(j);																// Delete the keyframe 								myLayers[i].opacity.removeKey(j);																			// Add a replacement key for removed key at correct position									myLayers[i].opacity.addKey(nearestTime);								// Set the position value of keyframe k to the stored position value of deleted keyframe								myLayers[i].opacity.setValueAtKey(j, opacityValueCopy);															}													// for all keyframes of that layer							for (var j = 1; j <= myLayers[i].anchorPoint.numKeys; j++)							{								// myNearestKeyIndex = layers[i].position.nearestKeyIndex(0);								var mykeyTime = myLayers[i].anchorPoint.keyTime(j); // j is a keyframe nr																// I want to set the time value of keyfram (j)								nearestTime = Math.round(mykeyTime*fps)/fps; // round to nearest keyframe value;								// Copy the anchorpoint value (x,y,z) of keyframe(j)								var anchorValueCopy = myLayers[i].anchorPoint.keyValue(j);																// Delete the keyframe 								myLayers[i].anchorPoint.removeKey(j);																			// Add a replacement key for removed key at correct position									myLayers[i].anchorPoint.addKey(nearestTime);								// Set the position value of keyframe k to the stored position value of deleted keyframe								myLayers[i].anchorPoint.setValueAtKey(j, anchorValueCopy);															}				}										app.endUndoGroup();						} else {			alert("Please select a layer in the comp to use this script");					}} else {			alert("Please select an active comp to use this script");	}} else	{		alert("Please open a project first to use this script.");	}