<template>
    <div>
        <div id="preloader">
             <div id="status">
                </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(1150).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(1150).css({ 'overflow': 'visible' });
        
    }
}
</script>