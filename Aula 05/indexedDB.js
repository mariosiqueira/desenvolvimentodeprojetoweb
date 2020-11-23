//codigo, disciplinas

$(document).ready(function() {
window.indexedDB = window.indexedDB || window.mozIndexedDB || 
	window.webkitIndexedDB || window.msIndexedDB;

var req, db;

if(!window.indexedDB) {
	alert();
} else {
	req = window.indexedDB.open('testLC', 1);
	req.onerror = function(e) {
		console.log(e.target.result)
	}
}

req.onupgradeneeded = function(e) {
	db = e.target.result;
	var objectStore = db.createObjectStore("disciplinas", {keyPath : "codigo"});
};

req.onsuccess = function(e) {
	console.log('Banco testLC aberto...');
	db = e.target.result;
};

$("#add").click(function() {
	var codigo = $("#codigo").val();
	var disciplina = $("#disciplina").val();
	var tx = db.transaction(["disciplinas"], "readwrite");

	var objetoStore = tx.objectStore("disciplinas");
	objetoStore.add({codigo : codigo, disciplina : disciplina});

	tx.oncomplete = function(e) {
		console.log('Sucesso..');
		db.close();
	};

	tx.onerror = function(e) {
		console.log(e.target.result);
	}
});

$("#remover").click(function() {
	var codigo = $("#codigo").val();
	db.transaction(["disciplinas"], "readwrite").objectStore("disciplinas").delete(codigo);
});

$("#recuperar").click(function(event) {
	event.preventDefault();
	let disciplinaRecuperada;
	var tx = db.transaction(["disciplinas"], "readonly");
	var objectStore = tx.objectStore("disciplinas");
	var codigo = $("#codigo").val();
	var req = objectStore.get(codigo);
	req.onerror = function(event) {
		// Tratar erro!
	  };
	  req.onsuccess = function(event) {
		//Fazer algo com request.result!
		disciplinaRecuperada = req.result.disciplina;
		$('#disciplinasRecuperadas').append("<h2>" + `${disciplinaRecuperada}` + "</h2>");
	  };
	 
});

$("#atualizar").click(function() {
	
	
	var tx = db.transaction(["disciplinas"], "readwrite");
	var objectStore = tx.objectStore("disciplinas");
	var codigo = $("#codigo").val();
	var req = objectStore.get(codigo);
	req.onerror = function(event) {
		// Tratar erro!
	  };
	  req.onsuccess = function(event) {
		//Fazer algo com request.result!
		
		disciplinaRecuperada = req.result;
		disciplinaRecuperada.disciplina = $("#disciplina").val();

		var reqUpdate = objectStore.put(disciplinaRecuperada);
		reqUpdate.onerror = function(event){
		//Tratar erro!
		};

		reqUpdate.onsuccess = function(event) {
		//Sucesso na atualização
		}
	  };
	 
});

});