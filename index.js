
          id = 0
          function AddRow() {
              var table = document.getElementById('show');
              var taskInput = document.getElementById("taskInput");

  
              var taskValue = taskInput.value;


              // Check if the values are empty
              // 1. if values are empty? do nothing
              // 2. if values are not empty? continue
              if (taskValue.length == 0 ) {
                  return
              }
              // row count : works! 
              var Table = document.getElementById("show");
              var rowCount = Table.rows.length;
              console.log("you have "+rowCount+" todos!");  
              
              var counter = document.getElementById("count")
              console.log("Counter element is:  " + counter)
              counter.innerHTML = rowCount
              //.dispay rowCount:     ERROR!

              document.getElementById("count").innerHTML="you have "+rowCount+" todos!";
             //;
              var button= "<button onclick='deleteElementById(" + id + ")'>complete</button>"
              var newRow = "<tr  id='" + id + "'> <td>" + taskValue + "</td> <td>" +  button + "   </td>    </tr> " 
  
              table.innerHTML += newRow
  
              taskInput.value = ""

              id = id + 1
  
  
  
  
  
          } 
         
          
      
          function deleteElementById(id) {
          
              document.getElementById(id).remove();
              console.log(id)
        
  }
 

  
  