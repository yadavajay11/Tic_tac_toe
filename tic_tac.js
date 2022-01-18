$(document).ready(function(){

  let count =0;
  $(".toe").click(function(){
    if(count<9){
      if(count%2 == 0){
        $(this).css("background", "url('data:image/png;base64,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')");
        $(this).css("background-repeat", "no-repeat");
        $(this).css("background-size", "cover");
        $(this).css("background-position", "center");
        $(this).html("<p class='txt'>X</p>");
        console.log($(this).text());
        count++;
      }
      else {
        $(this).css("background", "url('data:image/png;base64,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')");
        $(this).css("background-repeat", "no-repeat");
        $(this).css("background-size", "cover");
        $(this).css("background-position", "center");
        $(this).html("<p class='txt'>O</p>");
        console.log($(this).text());
        count++;
      }
    }
    if(count>=5){
      if($("div div:nth-child(1)").text()!="" && $("div div:nth-child(1)").text()==$("div div:nth-child(2)").text() && $("div div:nth-child(1)").text()==$("div div:nth-child(3)").text()){
        alert($("div div:nth-child(1)").text()+ " Won");
      }
      else if($("div div:nth-child(4)").text()!="" && $("div div:nth-child(4)").text()==$("div div:nth-child(5)").text() && $("div div:nth-child(4)").text()==$("div div:nth-child(6)").text()){
        alert($("div div:nth-child(4)").text()+ " Won");
      }
      else if($("div div:nth-child(7)").text()!="" && $("div div:nth-child(7)").text()==$("div div:nth-child(8)").text() && $("div div:nth-child(7)").text()==$("div div:nth-child(9)").text()){
        alert($("div div:nth-child(7)").text()+ " Won");
      }
      else if($("div div:nth-child(1)").text()!="" && $("div div:nth-child(1)").text()==$("div div:nth-child(4)").text() && $("div div:nth-child(1)").text()==$("div div:nth-child(7)").text()){
        alert($("div div:nth-child(1)").text()+ " Won");
      }
      else if($("div div:nth-child(2)").text()!="" && $("div div:nth-child(2)").text()==$("div div:nth-child(5)").text() && $("div div:nth-child(2)").text()==$("div div:nth-child(8)").text()){
        alert($("div div:nth-child(2)").text()+ " Won");
      }
      else if($("div div:nth-child(3)").text()!="" && $("div div:nth-child(3)").text()==$("div div:nth-child(6)").text() && $("div div:nth-child(3)").text()==$("div div:nth-child(9)").text()){
        alert($("div div:nth-child(3)").text()+ " Won");
      }
      else if($("div div:nth-child(1)").text()!="" && $("div div:nth-child(1)").text()==$("div div:nth-child(5)").text() && $("div div:nth-child(1)").text()==$("div div:nth-child(9)").text()){
        alert($("div div:nth-child(1)").text()+ " Won");
      }
      else if($("div div:nth-child(3)").text()!="" && $("div div:nth-child(3)").text()==$("div div:nth-child(5)").text() && $("div div:nth-child(3)").text()==$("div div:nth-child(7)").text()){
        alert($("div div:nth-child(3)").text()+ " Won");
      }
      else{
        if(count==9){
          alert("Match Draw");
          $("div div").each(function(){
            $(this).css("background", "");
            $(this).html("");
            count = 0;
          });
        }
      }
    }
  });
  $("button").click(function(){
    $("div div").each(function(){
      $(this).css("background", "");
      $(this).html("");
      count = 0;
    });
  });
});
