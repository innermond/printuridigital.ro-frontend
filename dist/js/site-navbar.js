'use strict';

document.addEventListener("DOMContentLoaded", function (event) {

	document.querySelectorAll('[class~=megamenu]').forEach(function ($el) {
		var pos = $el.getBoundingClientRect();
		window.addEventListener('resize', function (event) {
			pos = $el.getBoundingClientRect();
		});
		document.querySelectorAll('.megamenu > li[class~=has-submenu]').forEach(function ($el) {
			$el.addEventListener('mouseover', function (event) {
				var me = $el.getBoundingClientRect();
				var $submenu = $el.querySelector('.submenu');
				$submenu.style.width = pos.width + 'px';
				$submenu.style.left = -me.x + pos.x + 'px';
			});
		});
	});

	var $siteHeader = document.querySelector('.site-header');
	$siteHeader.querySelectorAll('.ellipsis').forEach(function ($el) {
		$el.setAttribute('title', $el.innerText.trim());
	});
	document.querySelector('.burger').addEventListener('click', function (event) {
		$siteHeader.classList.toggle('site-header--is-stack');
	});

	var mediaQueryList = window.matchMedia("screen and (max-width: 480px)");
	mediaQueryList.addListener(handleMaxWidthChange);
	function handleMaxWidthChange(event) {
		if (!event.matches) {
			$siteHeader.classList.remove('site-header--is-stack');
		}
	}
});
//# sourceMappingURL=site-navbar.js.map