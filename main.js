var onStart = function(){
    console.log('This is working');

    const canvas = document.getElementById('glCanvas');
    const gl = canvas.getContext('webgl');
  // If we don't have a GL context, give up now
    if (!gl) {
        alert('Unable to initialize WebGL. Your browser or machine may not support it.');
        return;
  }
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
}