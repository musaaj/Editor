/**
*MIT License
*Copyright (c) 2017 Musa Ibrahim Ajayi 
**/
function Editor(node)
{
	this.selection  = null;
	this.range = null;
	self = this;
	self.imageResizable = false;
	this.node = node;
	
	
	this.setSelection = function()
	{
	  this.selection  = document.getSelection();
	  this.range = document.createRange();
	  
	  try
	{
	  this.range.setStart(this.selection.anchorNode,this.selection.anchorOffset);
	  this.range.setEnd(this.selection.focusNode,this.selection.focusOffset);
	}
	catch(e)
	{
	}
	}
	
	this.getText = function()
	{
	  return this.node.innerHTML;
	}
	
	this.init = function()
	{
	  this.node.contentEditable  = true;
	  this.node.innerHTML = "<p>Edit Me</p>";
	}
	
	this.hasFormat = function(tag)
	{
	  try
	  {
	    if ( this.range.startContainer.parentNode.nodeName == tag.toUpperCase() && this.range.endContainer.parentNode.nodeName == tag.toUpperCase())
	  {
	    return 1;
	  }
	  
	  if ( this.range.startContainer.parentNode.parentNode.nodeName == tag.toUpperCase() & this.range.endContainer.parentNode.parentNode.nodeName == tag.toUpperCase())
	  {
	     return 2;
	  }
	  
	  if ( this.range.startContainer.parentNode.parentNode.parentNode.nodeName == tag.toUpperCase() & this.range.endContainer.parentNode.parentNode.parentNode.nodeName == tag.toUpperCase())
	  {
	     return 3;
	  }
	  
	  return 0;
	  }
	  catch(e)
	  {
	  }
	}
	/**
	*@func bold()
	*toggle bold on a selected text
	*@return void
	**/
	this.bold = function()
	{
	  this.setSelection();
	  if ( this.hasFormat("b") == 0)
	  {
	    el = document.createElement("b");
	    el.innerHTML = this.selection.toString();
	    
	    if (this.selection.focusOffset != this.selection.anchorOffset)
	    {
	      this.selection.deleteFromDocument();
	    }
	    
	    this.range.collapse(true);
	    this.range.insertNode(el);
	    
	    this.selection.removeAllRanges();
	    this.selection.addRange(this.range);
	  }
	  
	  if ( this.hasFormat("b") == 1)
	  {
	    this.range.startContainer.parentNode.parentNode.replaceChild(this.range.startContainer,this.range.startContainer.parentNode);
	  }
	  
	  if ( this.hasFormat("b") == 2)
	  {
	     this.range.startContainer.parentNode.parentNode.parentNode.replaceChild(this.range.startContainer.parentNode,this.range.startContainer.parentNode.parentNode);
	  }
	  
	  if ( this.hasFormat("b") == 3)
	  {
	     this.range.startContainer.parentNode.parentNode.parentNode.parentNode.replaceChild(this.range.startContainer.parentNode.parentNode,this.range.startContainer.parentNode.parentNode.parentNode);
	  }
	  
	}
	
	/**
	*@func italic()
	*toggle italic on a selected text
	*@return void
	**/
	this.italic = function()
	{
	  this.setSelection();
	  if ( this.hasFormat("i") == 0)
	  {
	    el = document.createElement("i");
	    el.innerHTML = this.selection.toString();
	    
	    if (this.selection.focusOffset != this.selection.anchorOffset)
	    {
	      this.selection.deleteFromDocument();
	    }
	    
	    this.range.collapse(true);
	    this.range.insertNode(el);
	    
	    this.selection.removeAllRanges();
	    this.selection.addRange(this.range);
	  }
	  
	  if ( this.hasFormat("i") == 1)
	  {
	    this.range.startContainer.parentNode.parentNode.replaceChild(this.range.startContainer,this.range.startContainer.parentNode);
	  }
	  
	  if ( this.hasFormat("i") == 2)
	  {
	     this.range.startContainer.parentNode.parentNode.parentNode.replaceChild(this.range.startContainer.parentNode,this.range.startContainer.parentNode.parentNode);
	  }
	  
	  if ( this.hasFormat("i") == 3)
	  {
	     this.range.startContainer.parentNode.parentNode.parentNode.parentNode.replaceChild(this.range.startContainer.parentNode.parentNode,this.range.startContainer.parentNode.parentNode.parentNode);
	  }
	}
	
	/**
	*@func underline()
	*toggle underline on a selected text
	*@return void
	**/
	this.underline = function()
	{
	  this.setSelection();
	  if ( this.hasFormat("u") == 0)
	  {
	    el = document.createElement("u");
	    el.innerHTML = this.selection.toString();
	    
	    if (this.selection.focusOffset != this.selection.anchorOffset)
	    {
	      this.selection.deleteFromDocument();
	    }
	    
	    this.range.collapse(true);
	    this.range.insertNode(el);
	    
	    this.selection.removeAllRanges();
	    this.selection.addRange(this.range);
	  }
	  
	  if ( this.hasFormat("u") == 1)
	  {
	    this.range.startContainer.parentNode.parentNode.replaceChild(this.range.startContainer,this.range.startContainer.parentNode);
	  }
	  
	  if ( this.hasFormat("u") == 2)
	  {
	     this.range.startContainer.parentNode.parentNode.parentNode.replaceChild(this.range.startContainer.parentNode,this.range.startContainer.parentNode.parentNode);
	  }
	  
	  if ( this.hasFormat("u") == 3)
	  {
	     this.range.startContainer.parentNode.parentNode.parentNode.parentNode.replaceChild(this.range.startContainer.parentNode.parentNode,this.range.startContainer.parentNode.parentNode.parentNode);
	  }
	}
	
	/**
	*@func insertImage(url)
	*insert image node in the cursor position
	*@param url absolute or relative url of an image
	*@return void
	**/
	this.insertImage = function(url)
	{
	  this.setSelection();
	  if ( this.selection.anchorOffset == this.selection.focusOffset )
	  {
	    try
	    {
	      img = document.createElement("img");
	      img.src = url;
	      img.height=200;
	      img.align = "left";
	      img.contentEditable = true;
	      img.addEventListener("mousedown",function (ev)
       {
          if(self.imageResizable)
          {
            this.style.border = "";
            self.imageResizable = false;
          }
          else
          {
            this.style.border = "5px dotted #999999"
            self.imageResizable = true;
          }
       });
       
	     img.addEventListener("touchmove",function(ev)
	     {
	       if (self.imageResizable)
	       {
	         if (this.height < event.touches[0].pageY)
          {
             this.style.height = this.height+2;
          }
          else
          {
            this.style.height = this.height-2;
          }
          if (this.width < event.touches[0].pageX)
          {
             this.style.width = this.width+2;
          }
          else
          {
            this.style.width = this.width-2;
          }
	       }
	     });
	      self.range.insertNode(img);
	    }
	    catch(e)
	    {
	    }
	  }
	}
	
	/**
	*@func insertList(type)
	*insert ordered or unordered list
	*@param type can be ul for unordered list
	*or ol for ordered list
	*@return void
	**/
	this.insertList = function(type)
	{
	    this.setSelection();
	    try
	    {
	     ol = document.createElement(type);
	     li = document.createElement("li");
	     ol.appendChild(li);
	      
	    this.range.collapse(false);
	    this.range.insertNode(ol);
	    }
	    catch(e)
	    {
	    }
	 
	}
	
	/**
	*@func formatBlock(element)
	*replace a block-level element with the new a new element
	*or add a block-level element arround a selection
	*@param element a string, can be eithe of 'div','p','h1' etc.
	*return void
	**/
	this.formatBlock = function (element)
 {
     this.setSelection();
     
     try
     {
       display = window.getComputedStyle(this.range.startContainer.parentNode).display;
       
       if ( display == "block")
       {
         el = document.createElement(element);
         el.innerHTML = this.range.startContainer.parentNode.innerHTML;
         this.range.startContainer.parentNode.parentNode.replaceChild(el,this.range.startContainer.parentNode);
       }
     }
     catch(e)
     {
     }
 }

  this.alignText = function(align)
  {
    this.setSelection();
    try
    {
      display = window.getComputedStyle(this.range.startContainer.parentNode).display;
      if(display == "block")
      {
        this.range.startContainer.parentNode.style.textAlign = align;
        this.range.endContainer.parentNode.style.textAlign = align;
        this.selection.removeAllRanges();
	      this.selection.addRange(this.range);
	    }
    }
    catch(e)
    {
    }
  }
  
  this.insertTable = function(rows,cols,style)
  {
    this.setSelection();
    table = document.createElement("table");
    table.align = "left";
    table.border= "1";
    
    for(i = 0; i < rows; i++)
    {
      row = document.createElement("tr");
      row.height = 200;
      for(j = 0; j < cols; j++)
      {
        col = document.createElement("td");
        col.width = 70;
        col.height=30;
        row.appendChild(col);
      }
      table.appendChild(row);
    }
    this.range.collapse(true);
    this.range.insertNode(table);
  }
}