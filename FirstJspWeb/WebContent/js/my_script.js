function slideMenu() {
	var e = 240;
	var t = $("#menu").css("display");
	if (t != "none") {
		$("#container").animate({
			left : 0
		}, 100);
		$("#menu").show();
		$("#menu").animate({
			left : "-120"
		}, 100);
		setTimeout(function() {
			$("#menu").hide()
		}, 100);
		$("#slideicon").html('<i class="icon-reorder"></i>')
	} else {
		$("#slideicon").html('<i class="icon-remove"></i>');
		$("#container").animate({
			left : e
		}, 100);
		$("#menu").show();
		$("#menu").animate({
			left : 0
		}, 100)
	}
}
$(document).ready(function() {
});
$(function() {
	$("table").footable();
	$("#change-page-size").change(function(e) {
		e.preventDefault();
		var t = $(this).val();
		$(".footable").data("page-size", t);
		$(".footable").trigger("footable_initialized")
	})
});
$(document).ready(function() {
	$("#search_cn").change(function() {
		document.location.href = $(this).val();
		$("#search_nienkhoa").val() = -1
	})
});
$(document).ready(function() {
	$("#search_nienkhoa").change(function() {
		document.location.href = $(this).val()
	})
});
$(document).ready(function() {
	$("#tim_kiem_tong_hop").change(function() {
		var e = $(this).val();
		if (e == "timkiemdetai") {
			$("#type_detai").show()
		} else {
			$("#type_detai").hide();
			$("#advance").hide()
		}
	})
});
$(document).ready(function() {
	if ($("#tim_kiem_tong_hop").val() == "timkiemdetai") {
		$("#type_detai").show()
	}
});
$(document).ready(function() {
	$("#btn-nangcao").click(function() {
		$("#advance").slideToggle()
	})
});
$(document).ready(function() {
	$("#back").click(function() {
		window.history.go(-1)
	})
})