<script>
  
import {onMount} from "svelte";


onMount(() => {
let container = document.getElementById('panorama-container');
let isDragging = false;
let startX, scrollLeft;
let backgroundPosition = 0;
let initialAlpha = null;
let previousAlpha = null;

// Mouse drag functionality
container.addEventListener('mousedown', (e) => {
 isDragging = true;
 startX = e.pageX - container.offsetLeft;
 scrollLeft = backgroundPosition;
 container.style.cursor = 'grabbing';
 //e.preventPreventDefault();
});

container.addEventListener('mouseleave', () => {
 isDragging = false;
 container.style.cursor = 'grab';
});

container.addEventListener('mouseup', () => {
 isDragging = false;
 container.style.cursor = 'grab';
});

container.addEventListener('mousemove', (e) => {
 if (!isDragging) return;
 e.preventDefault();
 const x = e.pageX - container.offsetLeft;
 const walk = (x - startX) * -2; // Adjust the scroll direction
 backgroundPosition = scrollLeft - walk;
 container.style.backgroundPosition = `${backgroundPosition}px 0`;
});

// Mobile gyroscope functionality
if (window.DeviceOrientationEvent) {
 window.addEventListener('deviceorientation', (event) => {
  let alpha = event.alpha; // rotation around the z-axis in degrees

  if (initialAlpha === null) {
   initialAlpha = alpha;
  }

  if (previousAlpha === null) {
   previousAlpha = alpha;
  }

  if (alpha !== null) {
   let sensitivity = 2; // Adjust sensitivity for gyroscope
   let deltaAlpha = alpha - previousAlpha;

   if (deltaAlpha > 180) {
    deltaAlpha -= 360;
   } else if (deltaAlpha < -180) {
    deltaAlpha += 360;
   }

   backgroundPosition += deltaAlpha * sensitivity; // Invert direction
   container.style.backgroundPosition = `${backgroundPosition}px 0`;
   previousAlpha = alpha; // Update previousAlpha for next calculation
  }
 });
}
});
  
  
  
</script>



<style>

#panorama-container {
 width: 800px;
 height: 480px;
 background: url('content/pano.jpg') repeat-x;
 background-size: auto 100%;
 cursor: grab;
 touch-action: none;
 border-radius: 10px;
 border: 1px solid #000;
}
  
  
</style>

<b>panorama</b>
<div id="panorama-container"/>
