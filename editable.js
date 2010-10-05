// simple library for enabling html elements to be
// content editable and easily adding html to them
// use for instance when needing to insert custom 
// variables in a editable div
(function () {
  window.editable = {};
  
  // make an element contenteditable
  editable.enable = function (el) {
    for (var i = 0; i < document.all.length; i++) document.all(i).unselectable = "on";
    el = (typeof el === 'string' ? document.getElementById(el) : el);
    el.unselectable = "off";
    el.contentEditable = "true";
  };
  
  // insert html at caret / selection
  editable.insertHTML = function (html) {  
    // internet explorer
	  if (document.selection) {
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