//                                FASTING TIME CALENDAR

var time = +prompt("TIME OF IFTAR AND SEHR (Enter Number for date)")
var num = ["1st Roza", "2nd Roza", "3rd Roza", "4th Roza", "5th Roza", "6th Roza", "7th Roza", "8th Roza", "9th Roza", "10th Roza", "11th Roza", "12th Roza", "13th Roza", "14th Roza", "15th Roza", "16th Roza", "17th Roza", "18th Roza", "19th Roza", "20th Roza", "21th Roza", "22th Roza", "23th Roza", "24th Roza", "25th Roza", "26th Roza", "27th Roza", "28th Roza", "29th Roza", "30th Roza",]
var sehr = ["4:51am", "4:50am", "4:49am", "4:48am", "4:47am", "4:46am", "4:45am", "4:44am", "4:43am", "4:42am", "4:41am", "4:40am", "4:39am", "4:38am", "4:37am", "4:36am", "4:35am", "4:34am", "4:33am", "4:32am", "4:31am", "4:30am", "4:29am", "4:28am", "4:28am", "4:27am", "4:26am", "4:25am", "4:24am", "4:24am"]
var iftar = ["6:55pm", "6:55pm", "6:56pm", "6:56pm", "6:57pm", "6:57pm", "6:57pm", "6:58pm", "6:58pm", "6:59pm", "6:59pm", "7:00pm", "7:00pm", "7:01pm", "7:01pm", "7:02pm", "7:02pm", "7:03pm", "7:03pm", "7:04pm", "7:04pm", "7:05pm", "7:05pm", "7:06pm", "7:06pm", "7:07pm", "7:07pm", "7:08pm", "7:08pm", "7:09pm"]
document.write("<h1>In " + num[--time] + "<br/></h1>" + " <h3>Sehr time is " + sehr[time] + "" + "<br/>" + " Iftar time is " + iftar[time] + "</h3>")

if (time !== time){
    alert("Please Enter correct date")
}