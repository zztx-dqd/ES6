var getUserMedia = (navigator.getUserMedia || 
                    navigator.webkitGetUserMedia || 
                    navigator.mozGetUserMedia || 
                    navigator.msGetUserMedia);

getUserMedia.call(navigator,{
    video:true,
    audio:true
},function(localMediaStream){
    var video=document.querySelector("#video");
    video.src=window.URL.createObjectURL(localMediaStream);
    video.onloadedmetadata=function(){
        console.log("Label: " + localMediaStream.label);
        console.log("AudioTracks" , localMediaStream.getAudioTracks());
        console.log("VideoTracks" , localMediaStream.getVideoTracks());
    }
},function(e){
    console.log("Reeeejected",e)
});