




//Start Article Reception
var reception = function() {
    body = document.getElementById('my_body');
    article10 = document.createElement('article');
    1
    body.appendChild(article10);
    article10.setAttribute('class', 'article10');

    var jason10 = [{
        //Images for Reception
        img_1: 'images/hotel_view/reception_hotel_jagdamba_palace_in_bilaspur.png',
       
        //Content For Reception
        head: 'Reception',
        para: 'We will delighted to welcome you at reception. Hotel Maa Jagdamba Palace is situated at the prime location of bilaspur, Mangla Road, Beside Holy Cross School, Bilaspur. '
    }]
    document.querySelector('.article10').innerHTML += `
      <div class="container">
	      <div class="row">
		      <div class="col-md-6">
			      <div class="my_blog">
				      <h2>${jason10[0].head}</h2>
					  <hr>
					  <p>${jason10[0].para}</p>
					  
					 <ul class="nav">
					    <li><a><i class="fa fa-check"></i> Wifi Internet</a></li>
						<li><a><i class="fa fa-check"></i> Luxurious & Convenient Rooms</a></li>
						<li><a><i class="fa fa-check"></i> Luxurious & Convenient Rooms</a></li>
						<li><a><i class="fa fa-check"></i> Banquet Hall</a></li>
						<li><a><i class="fa fa-check"></i> PickUp & Drop From Uslapur Railway Station</a></li>
					</ul>
					  <br></br>
                     <a href="#tel:07752357487" class="my_btn_1">Call Now</a>					   
					  
				  </div>
			  </div>
			  <div class="col-md-6">
			      <div class="my_blog">
				      <img src="${jason10[0].img_1}" class="img-responsive">
				  </div>
			  </div>
		  </div>
	  </div>
   `;


}
reception();





