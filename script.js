<script src="https://cdn.plyr.io/3.8.4/plyr.polyfilled.js"></script>
<script>
  // Initialize Plyr players
  document.addEventListener('DOMContentLoaded', () => {
    // setup
    const players = Plyr.setup('.js-player', {
      controls: ['play', 'progress', 'current-time', 'mute', 'volume'],
      invertTime: false
    });

    // Optional: ensure only one audio plays at a time
    document.querySelectorAll('audio').forEach((audio) => {
      audio.addEventListener('play', () => {
        document.querySelectorAll('audio').forEach((a) => {
          if (a !== audio) a.pause();
        });
      });
    });
  });
</script>

function togglePlaylist(id) {
  const el = document.getElementById(id);
  if (el.style.display === "block") {
    el.style.display = "none";
  } else {
    el.style.display = "block";
  }
}
