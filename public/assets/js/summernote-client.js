	const smnote = $("#summernote"); 	// gets summernote textarea
	const formPart = $("#part")[0];	// gets input tag for part name
	smnote.summernote();	// initializes editor
	const edtbls = $(".editable"); // gets editable elements
	for(let elm of edtbls){ 
		elm.onclick = function(){ goSummernote(this); } 	// calls to goSummernote(this)
	}

const goSummernote = function(target){
//	let smnote = $("#summernote"); 	// gets summernote textarea
//	let formPart = $("#part");	// gets input tag for part name

	let part = target.getAttribute("name");	// gets tag's name attribute
	let content = target.innerHTML;	// gets tag's inner html

	formPart.value = part; 	// sets form part to target's part name
	smnote.summernote('code', content); // sets content to summernote's editor
}
