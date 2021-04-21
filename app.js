var roza = +prompt("Enter Roza Number to check timing")

var sehrTime = ["4:52am","4:51am","4:50am","4:49am","4:48am","4:47am","4:46am","4:45am","4:45am","4:44am",
				"4:43am","4:42am","4:41am","4:40am","4:39am","4:38am","4:37am","4:36am","4:35am","4:34am",
				"4:32am","4:32am","4:33am","4:35am","4:34am","4:31am","4:32am","4:32am","4:23am","4:22am"]

var iftarTime = ["7:52am","7:51am","7:50am","7:49am","7:48am","7:47am","7:46am","7:45am","7:45am","7:44am",
				"7:43am","7:42am","7:41am","7:40am","7:39am","7:38am","7:37am","7:36am","7:35am","7:34am",
				"7:32am","7:32am","7:33am","7:35am","7:34am","7:31am","7:32am","7:32am","7:23am","7:22am"]

for(var i =1; i<=30; i++){
	if(roza === i){
		document.write("<h2>" +"On " + i + " Roza" + "<br/>"+ "Sehr Time is " + sehrTime[i-1] + "<br/>" + "Iftar Time is " + iftarTime[i-1]+"</h2>")
	}
}