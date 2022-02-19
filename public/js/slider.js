
  $(function(){
    $('.flex-projetos').slick({
        
        slidesToShow:3,
        slidesToScroll:3,
        arrows:false,
        responsive:[{
            
            breakpoint:660,
            settings:{
                centerMode:true,
                slidesToShow:1,
                arrows:false,
            }
        },
        {
            breakpoint:481,
            settings:{
                centerMode:true,
                slidesToShow:1,
                arrows:false,
            
            }
        }
    ]
    })

    
});