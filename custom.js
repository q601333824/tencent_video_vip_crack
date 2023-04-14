//腾讯视频
if (window.location.href.indexOf("//v.qq.com/x/") != -1) {
	var paly_url = window.location.href
	setTimeout("tencent_close_adv()", 3000)
}

const player_url = "https://jx.jsonplayer.com/player";

function tencent_close_adv() {
	if (paly_url == window.location.href) {
		document.querySelectorAll(".player.container-player")[0].innerHTML = '<iframe src="'+ player_url +'/?url=' + paly_url + '" height="100%" width="100%" scrolling="no" allowfullscreen="" frameborder="0"></iframe>'
	} else if (window.location.href.indexOf(paly_url.replace(".html", "")) != -1 && paly_url != window.location.href) {
		paly_url = window.location.href
		document.querySelectorAll(".player.container-player")[0].innerHTML = '<iframe src="'+ player_url +'/?url=' + paly_url + '" height="100%" width="100%" scrolling="no" allowfullscreen="" frameborder="0"></iframe>'
	}
	setInterval("tencent_paly_start()", 1000)
}

function tencent_paly_start() {
	if (paly_url != window.location.href) {
		window.location.reload()
	}
	var tip_pay = document.querySelectorAll(".panel-overlay.panel-tip-pay")[0]
	if (tip_pay) {
		tip_pay.remove()
	}

}
//爱奇艺视频
if (window.location.href.indexOf("iqiyi.com/v_") != -1) {
	var paly_url = window.location.href
	setTimeout("iqiyi_close_adv()", 3000)
}

function iqiyi_close_adv() {
	document.getElementById("flashbox").innerHTML = '<iframe src="https://jx.xmflv.com/?url=' + paly_url + '" height="100%" width="100%" scrolling="no" allowfullscreen="" frameborder="0"></iframe>'
	setInterval("iqiyi_paly_start()", 1000)
}

function iqiyi_paly_start() {
	if (paly_url != window.location.href) {
		window.location.reload()
	}
}
//优酷视频
if (window.location.href.indexOf("youku.com/v_show/") != -1) {
	var paly_url = window.location.href
	setTimeout("youku_close_adv()", 3000)
}

function youku_close_adv() {
	document.getElementById("player").innerHTML = '<iframe src="https://jx.xmflv.com/?url=' + paly_url + '" height="100%" width="100%" scrolling="no" allowfullscreen="" frameborder="0"></iframe>'
	setInterval("youku_paly_start()", 1000)
}

function youku_paly_start() {
	if (paly_url != window.location.href) {
		window.location.reload()
	}
}