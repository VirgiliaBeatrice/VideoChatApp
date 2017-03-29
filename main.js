/**
 * Created by Haoyan.Li on 2017/3/29.
 */
'use strict';

var constraint = {
    video: true,
    audio: false
};

var localStream;

var localMedia = document.getElementById('localVideo');

var button = document.getElementById('start');
button.onclick = openMediaSource();

function openMediaSource() {
    var mediaPromise = navigator.mediaDevices.getUserMedia(constraint);
    // MediaDevices.getUserMedia(constraint).then();
    mediaPromise.then(
        function (stream) {
            localStream = stream;
            localMedia.src = window.URL.createObjectURL(localStream);
        }
    );
    mediaPromise.catch(
        function (err) {
            console.error('Error: ' + err + '!');
        }
    );
}