// Vanilla
var button = document.querySelector('.ripple-js');
button.addEventListener('click', function(e){
	var ripple = document.createElement('span'),
			rippleOffset = this.getBoundingClientRect();

	var rippleY = e.pageY - rippleOffset.top,
			rippleX = e.pageX - rippleOffset.left;

	ripple.style.top = rippleY + 'px',
	ripple.style.left = rippleX + 'px',
	ripple.style.background = this.getAttribute('data-ripple-color');

	this.appendChild(ripple);

	setTimeout(function(){
		ripple.parentNode.removeChild(ripple);
	}, 1500);
});



// jQuery
$('.ripple-jquery').on('click', function(e) {
	var rippleDiv = $('<span>'),
		rippleOffset = $(this).offset(),
		rippleY = e.pageY - rippleOffset.top,
		rippleX = e.pageX - rippleOffset.left,
		ripple = $('span');

	rippleDiv.css({
		top: rippleY - (ripple.height() / 2),
		left: rippleX - (ripple.width() / 2),
		background: $(this).data("ripple-color")
	}).appendTo($(this));

	window.setTimeout(function() {
		rippleDiv.remove();
	}, 1500);
});
