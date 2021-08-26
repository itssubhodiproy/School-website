window.addEventListener('scroll',function(){
    var scroll =document.querySelector('.scrolltop');
    scroll.classList.toggle("active",window.scrollY>500);
})

function scrolltotop(){
    window.scrollTo({
        top: 0
    })
}

document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    if (window.innerWidth > 992) {
    
        document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
    
            everyitem.addEventListener('mouseover', function(e){
    
                let el_link = this.querySelector('a[data-bs-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }
    
            });
            everyitem.addEventListener('mouseleave', function(e){
                let el_link = this.querySelector('a[data-bs-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }
    
    
            })
        });
    
    }
    // end if innerWidth
    }); 

    document.addEventListener("DOMContentLoaded", function(){
		
		var scrollSpy = new bootstrap.ScrollSpy(document.body, {
		  target: '#nav-link',
		  offset: 200
		})

		// add padding top to show content behind navbar
		navbar_height = document.querySelector('.navbar').offsetHeight;
		document.body.style.paddingTop = navbar_height + 'px';

	});