console.log("working");

//Question 1
// Create a button , on click of which you should be able to hide a paragraph text, create another button onclick of which this paragraph should be visible
 $("button").click(function(){
 $("p").hide(); 
    $("p").toggle();  
    $(".box").hide();
 })
$(".btn1").click(function(){
    $(".box").toggle();
    
    })
    
    $(".btn2").click(function(){
        $(".box").hide();
    })
    
    
    
    // Question 2
    // Create an ajax call, by using this api "https://jsonplaceholder.typicode.com/todos/12" and print the title as the heading of the page
    $('.btn3').click(function(){
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/todos/12",
            
            type: "GET",
            success:function(data){
                console.log(data);
                document.getElementsByTagName("p")[0].innerText=data.title;
            }
        })
    })
    
    