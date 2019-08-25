<template>
    <div>
         <section class="sektion section scrollspy" id="photos">
    <div class="row">
      <div class="col s12 l4">
          <img data-aos="fade-right" src="/public/img/cr4.png" alt="" class="responsive-img materialboxed">
      </div>
      <div data-aos="fade-left" class="col s12 l6 offset-l1">
        <h2  class="indigo-text text-darken-4">Installments</h2>
        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
      </div>
    </div>
    <div class="row">
      <div class="col s12 l4 offset-l1 push-l7">  
          <img data-aos="fade-left"  src="/public/img/fine1.jpg" alt="" class="responsive-img materialboxed">
      </div>
      <div  data-aos="fade-right" class="col s12 l6 offset-l1 pull-l5 right-align">
        <h2  class="indigo-text text-darken-4">Fines</h2>
        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
      </div>
    </div>
    <div class="row">
      <div class="col s12 l4">
          <img data-aos="fade-right" src="/public/img/meeting.jpg" alt="" class="responsive-img materialboxed" >
      </div>
      <div data-aos="fade-left" class="col s12 l6 offset-l1">
        <h2 class="indigo-text text-darken-4">Meetings</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
      </div>
    </div>
  </section>      
        
    </div>
    
</template>
<script>
// import AOS from 'aos'
export default {
  mounted() {
  
  AOS.init({
    duration: 1300
  });
}
}
</script>