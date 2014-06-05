/*
 * jQuery ImageCaption
 * http://bayofodeke/project/jquery-image-caption
 *
 * Creates an image with a caption.  All it needs is for images to have title fields
 * TODO: alternatively use 'alt' tag info if title isn't available
 */


 $.fn.imageCaption = function(){
		$(this).each(function(){
			$(this).each(function(){
				if($(this).attr('title') != ''){
					var image_style = $(this).attr('style');
					var image_caption = $(this).attr('title');
					$(this).wrap("<figure>")
						.removeAttr('style')
						.parent()
						.attr('style', image_style)
						.addClass('imageCaption')
						.append('<figcaption>' + image_caption + '</figcaption>')
						.css('height', 'auto')
						.addClass(function(){
					        var floated = $(this).css('float');
					        return floated ? 'caption-' + floated : '';
						});
				}
			});
		});
	};