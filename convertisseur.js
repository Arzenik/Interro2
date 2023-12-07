<script>
    function convertYardsToMeters() {
            var yards = document.getElementById("yards").value;
    var meters = yards * 0.9144;
    document.getElementById("meters").value = meters.toFixed(2);
        }
</script>