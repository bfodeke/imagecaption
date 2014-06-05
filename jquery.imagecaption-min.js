/*
 * jQuery ImageCaption
 * http://bayofodeke/project/jquery-image-caption
 * Creates an image with a caption.  All it needs is for images to have title fields
 * TODO: alternatively use 'alt' tag info if title isn't available
 */
$.fn.imageCaption=function(){$(this).each(function(){$(this).each(function(){if(""!=$(this).attr("title")){var a=$(this).attr("style"),b=$(this).attr("title");$(this).wrap("<figure>").removeAttr("style").parent().attr("style",a).addClass("imageCaption").append("<figcaption>"+b+"</figcaption>").css("height","auto").addClass(function(){var a=$(this).css("float");return a?"caption-"+a:""})}})})};