$(document).ready(function() {
    
	$("#sadrzaj1").mouseover(function(){
	    $(".levi").animate({
			
			left:'0px',
			marginBottom:"0px",
			marginTop:"0px"
			
			},2000);
			 });
			 $("#sadrzaj2").mouseover(function(){
				$(".desni").animate({
				left: "0px",
				marginBottom:"0px",
				marginTop:"0px"
				
				},2000);
				 });
				 $("#sadrzaj3").mouseover(function(){
					$(".levi1").animate({
					
					left:'0px',
					marginBottom:"0px",
					marginTop:"0px"
					
					},2000);
					 });
				
	
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
