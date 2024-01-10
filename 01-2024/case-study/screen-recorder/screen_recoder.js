const buttonElement = document.querySelector("button");

buttonElement.addEventListener("click", async () => {
  // Define que es lo que deseamos grabar
  const media = await navigator.mediaDevices.getDisplayMedia({
    video: { frameRate: { ideal: 30 } },
  });

  // Comienza la grabación
  const mediarecorder = new MediaRecorder(media, {
    mimeType: "video/webm; codecs=vp8,opus",
  });
  mediarecorder.start();

  const [video] = media.getVideoTracks();
  video.addEventListener("ended", () => mediarecorder.stop());

  // Guardar en un archivo
  mediarecorder.addEventListener("dataavailable", (event) => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(event.data);
    link.download = "captura.webm";
    link.click();
  });
});
