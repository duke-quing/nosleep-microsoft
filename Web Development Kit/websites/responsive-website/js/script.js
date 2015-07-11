
runLoad = (function(){
	$("#search").click(function(){	
		//ajaxing the csv file
		$.get(  
			"iddata.csv",  
			{language: "html", version: 5},  
			function(iddata){  

				var array = new Array();
				array = iddata.split("\n");
				//split it by line
								
				var length = array.length,
				element = null;

				var found = false;
				for (var i = 0; i < length-1; i++) {
					element = array[i];
					tempStudent = element.split(",");
					array[i] = tempStudent;
					//converted array to table  				

					//search and display for csv
					if(tempStudent[0] == $("#id").val() ){
						found = true;
						$("#online").val(tempStudent[1]);
						$("#manual").val(tempStudent[2]);
						$("#name").val(tempStudent[3]);
						$("#year").val(tempStudent[4]);
						$("#course").val(tempStudent[5]);
					}
					if(found == false){
						alert("ID number not found");
					}
					/*else{
						alert("ID number not found");
					}*/
				}
			},
		"html");  
	});
});

/*runLoad = (function(){
  $("#search").click(function(){
		 $.get(  
			"iddata.csv",  
			{language: "html", version: 5},  
			function(response){  
				
				var array = new Array();
				array = response.split("\n");
				//I just split it by line
				
				
				var length = array.length,
				element = null;
				for (var i = 0; i < length-1; i++) {
					element = array[i];
					tempStudent = element.split(",");
					array[i] = tempStudent;
					//i converted array to multiple dimensional array (deep shit bro) (WHICH I DONT THINK YOU REALLY NEED NOW) 
					
					
					if(tempStudent[0] == $("#id").val() ){
						$("#online").val(tempStudent[1]);
						$("#manual").val(tempStudent[2]);
						$("#name").val(tempStudent[3]);
						$("#year").val(tempStudent[4]);
						$("#course").val(tempStudent[5]);
					}
					else{
						alert("ID number not found");
					}
				}
			},  
			"html"  
		);
  });
  
});*/