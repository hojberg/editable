// simple library for enabling html elements to be
// content editable and easily adding html to them
// use for instance when needing to insert custom 
// variables in a editable div
(function () {
  window.editable = {};
  
  var editor;
  
  // make an element contenteditable
  editable.enable = function (el) {
    el = (typeof el === 'string' ? document.getElementById(el) : el);
    el.contentEditable = "true";
    editor = el;
  };
  
  // insert html at caret / selection
  editable.insertHTML = function (html) {  
    // internet explorer
	  if (document.selection) {
	    editor.focus();
      var range = document.selection.createRange();
      range.pasteHTML(html);
      range.collapse(false);
      range.select();
	  }
	  // everything else
	  else {
      document.execCommand('insertHTML', false, html);
    }
  };
  
}());