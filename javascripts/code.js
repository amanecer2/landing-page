$(function(){
	//	decler all var in the html;
	
	var $addCampaignBtn = $("#addCampaignBtn");
	var $reviewBtn = $("#reviewBtn");
	var $submit = $("#addCampaign"); /// submit;
	
	//the tables;
	var $tableCreate = $("#tableCreate");
	var $tableReview = $("#tableReview");
		$tableReview.hide();
			
	$("#dia").hide();		
		
			
     $('.datepicker').datetimepicker({
	format:'Y.m.d H:i',
	});

		
	var $trHeader = $(".trHeader");
	
	var $campaignName = $("#campaignName");
	var $dailyBudget = $("#dailyBudget");
	var $capmaignType = $("#capmaignType"); // selecet
	var $StartDate = $("#StartDate");// date
	var $endDate = $("#endDate"); //date;
	var $capmaignCatagory = $("#capmaignCatagory");// selecet
	var $platformType = $("#platformType");// selecet
	
	var $createNewCamp = $("#createNewCamp");
		$("#REVIEWDETAILS").hide();
	
	$addCampaignBtn.on("click",function(){
		// only one can be checked;
			if(reviewBtn.classList.contains("clicked")){
				$addCampaignBtn.toggleClass("clicked");
				$reviewBtn.toggleClass("clicked");
				$tableReview.hide();
				$tableCreate.show();
				$("#REVIEWDETAILS").hide();
				$("#createNewCamp").show()
				$("#submit").prop({
			disabled: false
			
		});
			}
			
		
	});
	$reviewBtn.on("click",function(){
		// only one can be checked;
		if(addCampaignBtn.classList.contains("clicked")){
			$reviewBtn.toggleClass("clicked");
			$addCampaignBtn.toggleClass("clicked");
			showReview();
			$("#dia").show();
		}
		var name = $campaignName.val();
		var dailyBudget = $dailyBudget.val();
		var type = $("#capmaignType option:selected").text();
		var start = $StartDate.val();
		var end = $endDate.val();
		var catagory = $("#capmaignCatagory option:selected").text();
		var platform = $("#platformType option:selected").text();
		
		$("#submit").prop({
			disabled: true
			
		});
	});
	
	$("#submit").on("click",function(){
		$("#myForm").submit();
		
	});
	
	
	
	function showReview(){
		$tableReview.show();
		$tableCreate.hide();
		
		$("#REVIEWDETAILS").show();
		$("#createNewCamp").hide()
		
		$("#cam").text(  $("#campaignName").val());
		$("#daily").text( $("#campaignName").val()   );
		
		
		$("#type").text($("#capmaignType option:selected").text());//good
		$("#start").text($StartDate.val()); //good
		$("#end").text($endDate.val());//good
		$("#cat").text($("#capmaignCatagory option:selected").text());//good
		$("#platform").text($("#platformType option:selected").text());//good
	}
		
		$("#submit").on("click",function(){
			
			var falgName=false,flagcampaignType=false, flagStrat=false;
			if($("#campaignName").val()!=""){
				falgName=true;
			}else{
				
			}
			if($("#capmaignType").val()!="Dialog to click message"){
				flagcampaignType=true;
			}else{
				
			}
			if($("#StartDate").val()!=""){
				flagStrat=true;
			}else{
				
			}
			if(falgName==true && flagcampaignType==true && flagStrat==true){
				$("#theForm").submit();
			}else{
				alert("not good");
			}
			
		});
});




	
