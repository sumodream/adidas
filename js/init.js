$(document).ready(function() {
	setTimeout(function() {
		$('.chain').css("display", "none");
		setTimeout(function() {
			$('.pt-page-delay100').css("display", "block");
			setTimeout(function() {
				$('.pt-page-delay200').css("display", "block");
				setTimeout(function() {
					$('.pt-page-delay300').css("display", "block");
					setTimeout(function() {
						$('.pt-page-delay400').css("display", "block");
						setTimeout(function() {
							$('.pt-page-delay500').css("display", "block");
							setTimeout(function() {
								$('.pt-page-delay600').css("display", "block");
								setTimeout(function() {
									$('.pt-page-delay700').css("display", "block");
									setTimeout(function() {
										$('.pt-page-delay800').css("display", "block");
										setTimeout(function() {
											$('.pt-page-delay900').css("display", "block");
										}, 300);
									}, 300);
								}, 300);
							}, 300);
						}, 300);
					}, 300);
				}, 300);
			}, 300);
		}, 3000);
	});
	$('.btn').click(function() {
		$('.scene1').remove();
		$('.scene2').css('display', 'block');
		$('.2shoe2').css('display', 'none');
		$('.2shoe21').css('display', 'none');
	});
	$('.shoe2').click(function() {
		$('.shoehide').css('display', "none");
		$('.2shoe2').css('display', 'block');
	});
	$('.dot1').click(function() {
		$('.layerp23').css('display', 'none');
		$('.2shoe21').css('display', 'block');
	});
	$('.close,.zz').click(function() {
		$('.2shoe2').css('display', 'block');
		$('.2shoe21').css('display', 'none');
	});
	$('.back').click(function() {
		$('.2shoe2').css('display', 'none');
		$('.shoehide').css('display', "block");
	});
});