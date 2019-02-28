
var app = {
  score: 0,
  total: 5,
  
  DragX:[260,360,42,150,850],
  DragY:[-10,-124,182,210,-94],
  
  DropX:[793.5,874.5,42,460,154.5],
  DropY:[-110,-215,182,-121,-90],
  
  
  Sequence:[0,1,2,3,4],
  
  ArrQ: [0,1,2,3,4],
  Attempt:false,
  
  init: function () {
    $('body').show();
    $('body').bind('contextmenu', function (e) {
      return false;
    });
	$(".wdt3").show();
      sound = document.getElementById("audio");
    sound1 = document.getElementById("audio1");
	sound3 = document.getElementById("audio2");   

	     $(".wdt4").show();
    $('#score').hide();
$('#score2').hide();
    this.BtnAD('check_ans', 'disabled');
    this.BtnAD('reset', 'enabled');
    this.BtnAD('see_ans', 'enabled');
	this.DragStart();

  },
  DragStart:function(){
   
    //this.shuffle(app.Sequence);
    for (var i = 0; i <= app.Sequence.length-1; i++) {

	 // $("#drags"+i).css({"left":app.DragX[app.Sequence[i]],'top':app.DragY[app.Sequence[i]]}).attr("dro","").attr('drag','false');
      $("#drops"+i).attr('data-ids','-1'); 

    }
     for (var i = 0; i <= app.DropX.length-1; i++) {
        $("#drops"+i).attr('data-ids','-1');
    }
  
    $('.draggable').draggable({revert:true,zIndex:999999,containment:"#main"});
    $('.droppable').droppable({drop:app.DropFun});
},
DropFun:function(event,ui){

//app.PlaySound();
		/*if(app.Attempt == true)
		{
			app.BtnAD('submit', 'disabled');
			app.BtnAD('see_ans', 'disabled');
			app.BtnAD('check_ans', 'enabled');	
		} */
		
    var drags = ui.draggable.attr('id');
    var drops = $(this).attr('id');
    if (ui.draggable.element !== undefined) {
    ui.draggable.element.droppable('enable');
    }
    ui.draggable.position({of: $(this),my: "center center",at:"center center"});
    ui.draggable.draggable('option', 'revert', "invalid");
    
    var data_id = ui.draggable.attr('data-id');
    var data_ids = $(this).attr('data-ids');
    var num = $(this).attr('num');
    var drag_status = ui.draggable.attr('drag');
    var dro = ui.draggable.attr('dro');
	

	
	

    if(drops != "dragBox"){
		//ui.draggable.addClass('trea');
		//ui.draggable.removeClass('drr');
		
        if(data_ids == -1 && (dro == "" || drag_status == 'false')){
            $("#"+drops).attr('data-ids',data_id);
            $("#drags"+data_id).attr('drag','true');
            $("#drags"+data_id).attr('dro', num);
			
        }else if(data_ids == -1 && drag_status == 'true'){
            $("#"+drops).attr('data-ids',data_id);
            $("#drops"+dro).attr('data-ids',"-1");
            $("#drags"+data_id).attr('drag','true');
            $("#drags"+data_id).attr('dro', num);
			
        }else if(data_ids != -1 && drag_status == 'false'){
            $("#"+drops).attr('data-ids',data_id);
            $("#drags"+data_id).attr('drag','true');
            $("#drags"+data_ids).animate({left:app.DragX[app.Sequence[data_ids]],top:app.DragY[app.Sequence[data_ids]]});
            $("#drags"+data_ids).attr('drag','false');
            $("#drags"+data_id).attr('dro', num);
			$("#drags"+data_ids).attr('dro', '');
			//ui.draggable.addClass('trea');
			//$("#drags"+data_ids).addClass('drr');
			//$("#drags"+data_ids).removeClass('trea');
			
			 
        }else if(data_ids != -1 && drag_status == 'true'){
            $("#"+drops).attr('data-ids',data_id);
            $("#drops"+dro).attr('data-ids',data_ids);
            $("#drags"+data_id).attr('drag','true');
            $("#drags"+data_ids).animate({left:app.DropX[dro],top:app.DropY[dro]});
            $("#drags"+data_id).attr('dro', num);
            $("#drags"+data_ids).attr('dro', dro);  
            //adj("drags"+data_id,drops);
        }
    }else{
        $("#drops"+dro).attr('data-ids',"-1");
        $("#drags"+data_id).attr('drag','false');
        $("#drags"+data_id).css({left:app.DragX[app.Sequence[data_id]],top:app.DragY[app.Sequence[data_id]]});
        $("#drags"+data_id).attr('dro', "");
		
		//ui.draggable.addClass('drr');
		//ui.draggable.removeClass('trea');
    }

   /*if($("#drags0").attr('dro')== "0"){
		app.PlaySound();
	}else if($("#drags1").attr('dro') == "1"){
		app.PlaySound();
	}else if($("#drags2").attr('dro') == "2"){
		app.PlaySound();
	}else if($("#drags3").attr('dro') == "3"){
		app.PlaySound();
	}else if($("#drags4").attr('dro') == "4"){
		app.PlaySound();
	}
	else{
	   app.PlaySound1();
	}*/
            sc=0;
            for (var i = 0; i <5; i++) {
               var loc = $('#drops' + i).attr('drag');

                   if(loc == ""){
                    sc++;
                   }
                }
            if(sc ==0) {              
				 app.BtnAD('check_ans', 'enabled');
                }else{
				 app.BtnAD('check_ans', 'enabled');
				}
				
	     if($('#drags2').attr('dro') == "2" || $('#drags2').attr('dro') == "3")
         {
	     $(".wdt3").hide();
         }
		 if($('#drags3').attr('dro') == "3" || $('#drags3').attr('dro') == "2")
         {
	     $(".wdt4").hide();
         }
   } ,

  PlaySound:function() {
          
          sound.play();
      },
 PlaySound1:function() {
          sound1.play();
      },
	  
 CheckFun: function () { 
   $('#dis').show(); 
     app.Attempt = true; 
  // $('#score').show();
  

   	// $.each(app.ArrQ, function (k, v) {
	
//if($('#drags' + k).attr('dro')!='')
	  //{
      // if ($('#drops' + k).attr('data-ids') == v) {

        // app.score++;
		 // $('#right'+k).show();
	    // }else{
		 // $('#wrong'+k).show();
	
	  // }
	    if($('#drags0').attr('dro') == "0")
         {
		 $('#drags0').attr('disabled');
		 app.score++;
		 $('#right0').show();
	     }else{
		  $('#wrong0').show();
		 }
		 if($('#drags1').attr('dro') == "1")
         {
		 app.score++;
		 $('#right1').show();
	     }else{
		  $('#wrong1').show();
		 }
		 
		 if($('#drags2').attr('dro') == "2" || $('#drags2').attr('dro') == "3")
         {
		 $(".wdt3").hide();
		 app.score++;
		 $('#right2').show();
	     }else{
		  $('#wrong2').show();
		 }
		 
		 if($('#drags3').attr('dro') == "3" || $('#drags3').attr('dro') == "2")
         {
		 app.score++;
		 $(".wdt4").hide();
		 $('#right3').show();
	     }else{
		  $('#wrong3').show();
		 }
		 
		 if($('#drags4').attr('dro') == "4")
         {
		 app.score++;
		 $('#right4').show();
	     }else{
		  $('#wrong4').show();
		 }
		 

		 
	//  }
	  
    //});
	if(app.score ==5){
	  
	  $('#score').show();
	  
	  document.getElementById("audio").play();
	 
	}else{
	  $('#score').hide();
	  document.getElementById("audio1").play();
	}
   //$('#score').html('Score: ' + app.score + '/' + app.total);
    app.BtnAD('check_ans', 'disabled');
    app.BtnAD('see_ans', 'enabled');
  },
  
  SeeFun: function () {
	$('.r_w').hide();
       $('#score').hide();
	   $('#score2').hide();
	$('#dis').show();
	$(".wdt3").hide();
    $(".wdt4").hide();
    $('.draggable,#questions1,#questions2,#questions3,#questions4').fadeOut('slow');
    $('.dropp,.dropp1').fadeOut('slow', function () {
	
       // $.each(app.DragX, function (k, v) {
       // $("#drags"+k).css({"left":app.DragX[app.Sequence[k]],'top':app.DragY[app.Sequence[k]]});
     // })
	 
        $.each(app.ArrQ, function (k, v) {
           $("#drags"+k).css({"left":app.DropX[k],'top':app.DropY[k]});
           $('.r_w').hide();
           $('.dropp1,.dropp, .draggable,#questions1,#questions2,#questions3,#questions4').fadeIn('slow');
		   
	  
	  
    });
    
      
    });
	 $('.dropp, .draggable,#questions1,#questions2').fadeIn('slow');
    app.BtnAD('see_ans', 'disabled');
    app.BtnAD('reset', 'enabled');
  },
  ResetFun: function () {
  app.score = 0;
    //$('#score').hide();
	//app.shuffle(app.Sequence); 
    $('.draggable').draggable('enable');
	 // $.each(app.ArrQ, function (k, v) {
           // $("#drags"+k).css({"left":app.DragX[k],'top':app.DragY[k]});
           // $('.r_w').hide();
           // $('.dropp,.dropp1,.draggable').fadeIn('slow');
       

	     // $(".wdt3").show();
         

	     // $(".wdt4").show();
       
    
    // });
	 for(var i=0;i<6;i++){
        $('#drags'+i).css({'left':app.DragX[app.Sequence[i]],'top':app.DragY[app.Sequence[i]]});
    }   
		for(var i=0;i<6;i++){
			$('#drops'+i).attr('data-ids','-1');
			$('#drags'+i).attr('dro','');
			$('#drags'+i).attr('drag','false');
		}
	app.DragStart();
    app.BtnAD('reset', 'enabled');
	app.BtnAD('see_ans', 'enabled');
    app.score = 0;
	 $(".wdt3").show();
         

	     $(".wdt4").show();
	  $('#score').hide();
	  
    $('#dis').hide();
    $('.r_w').hide();

	   app.HideWr();
  },
    shuffle: function (o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  },
  
 HideWr: function() {
    for (var i = 0; i < 13; i++) {
    $('#right' + i).hide();
    $('#wrong' + i).hide();	
  }
}, 

shuffle: function (o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
},
  
  BtnAD: function (btn_name, btn_stage) {
    if (btn_stage == 'enabled') {
      $('#' + btn_name).addClass('btn');
      $('#' + btn_name).removeClass('btn_d');
    } else if (btn_stage == 'disabled') {
      $('#' + btn_name).addClass('btn_d');
      $('#' + btn_name).removeClass('btn');
    }
  }
}
$(window).load(function () {
  app.init();
   // document.getElementById("audio2").load(function(){
   // document.getElementById("audio2").play();
   // });
   
});
