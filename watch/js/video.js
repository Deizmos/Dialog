
//модальное окно
//Воспроизведение видео с ютуба на весь экран
function videoId(button) {
    var $videoUrl = button.attr("data-video");
    if ($videoUrl !== undefined) {
        var $videoUrl = $videoUrl.toString();
        var srcVideo;

        if ($videoUrl.indexOf("youtube") !== -1) {
            var et = $videoUrl.lastIndexOf("&");
            if (et !== -1) {
                $videoUrl = $videoUrl.substring(0, et);
            }
            var embed = $videoUrl.indexOf("embed");
            if (embed !== -1) {
                $videoUrl =
                    "https://www.youtube.com/watch?v=" +
                    $videoUrl.substring(embed + 6, embed + 17);
            }

            srcVideo =
                "https://www.youtube.com/embed/" +
                $videoUrl.substring($videoUrl.length - 11, $videoUrl.length) +
                "?autoplay=1&mute=0&loop=0&playlist=" +
                $videoUrl.substring($videoUrl.length - 11, $videoUrl.length) +
                "";
        }
        return (
            '<iframe src="' +
            srcVideo +
            '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        );
    } else {
        alert("No video assigned.");
        return false;
    }
}

document
    .querySelectorAll(".lets-play")
    .forEach((d) => d.addEventListener("click", playVideos));

function playVideos(e) {
    e.preventDefault();
    var $theVideo = videoId($(this));

    var appendVideo = document.createElement("div");

    if ($theVideo) {
        appendVideo.innerHTML +=
            '<div class="active video-modal-wrapp" id="video-wrap"><span onclick="lvideoClose();" class="video-overlay"></span><div class="video-container">' +
            $theVideo +
            '</div><button onclick="lvideoClose();" class="close-video">x</button></div>';

        document.body.appendChild(appendVideo);
    }
}

const lvideoClose = () => {
    const boxes = document.querySelectorAll(".video-modal-wrapp, .video-overlay");

    boxes.forEach((box) => {
        box.remove();
    });
};
