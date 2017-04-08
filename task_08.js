//前序
var arrQuery = [];
function DLR(root){	
	arrQuery.push(root);
	for (var i = 0; i < root.children.length; i++) {		
		DLR(root.children[i]);	
	}
}	

//后序

function LRD(root){
	for (var i = 0; i < root.children.length; i++) {
			LRD(root.children[i]);
	}
	arrQuery.push(root);
}

function changeColor(arrQuery){
	for (var i=0; i<arrQuery.length; i++){
		(function(i){
			setTimeout(function(){
				arrQuery[i].style.backgroundColor="#92959a";
			},i*1000);
		})(i);
	}
}


function CLEAR(){
		var allDiv = document.getElementsByTagName('div');
		for (var i = 0; i < allDiv.length; i++) {
			allDiv[i].style.backgroundColor="white";
		}
}

function SEARCH(arrQuery){
	var ele = document.getElementById("ele").value;
	var arrText = [];
	for (var i = 0; i < arrQuery.length; i++) {
		arrText[i] = arrQuery[i].firstChild.nodeValue;
	}
	var num = arrText.indexOf(ele);
	setTimeout(function(){
		arrQuery[num].style.backgroundColor = "#e74f4d";
	},num*1000);
}

function init(){
	var root = document.getElementById('root');
	document.getElementById("DLR").onclick = function(){
		CLEAR();
		DLR(root);
		changeColor(arrQuery);
	}
		document.getElementById("LRD").onclick = function(){
		CLEAR();
		LRD(root);
		changeColor(arrQuery);
	}
		document.getElementById("DLRsearch").onclick = function(){
			CLEAR();
			DLR(root);
			changeColor(arrQuery);
			SEARCH(arrQuery);
	}
		document.getElementById("LRDsearch").onclick = function(){
			CLEAR();
			LRD(root);
			changeColor(arrQuery);
			SEARCH(arrQuery);	
	}
}
init();