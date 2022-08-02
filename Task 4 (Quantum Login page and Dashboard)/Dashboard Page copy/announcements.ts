
fetch('./announcements.json').then((response)=>response.json()).then(data=>{
    console.log(data);
    var hover_div=document.getElementsByClassName("announcements_content_wrapper")[0];
    for(var i=0;i<data.length;i++){
        var div_new=document.createElement("div");
        div_new.setAttribute("class",`announcements_content_${data[i].status}`);
        hover_div.appendChild(div_new);
        var announcements=`<div class="announcements_content_${data[i].status}_container">
        <div class="PA_wrapper_${data[i].status}">
            <div class="PA"><span class="font_gray"> PA:</span> <span class="PA_name"><b>${data[i].PA}</b></span></div>
            <div class="${data[i].status}_icon_wrapper"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 
                9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 
                2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"/>
                </svg></span><span><div class="${data[i].status}_icon_minus"></div></span>
            </div>
        </div>

        <div class="announcements_text">
            <b>${data[i].announcement}</b>
            <span style="display:${data[i].Course[0]};"class="announcement_course_div"><div class="announcement_content_course_wrapper font_gray">Course: <span class="announcement_content_course">${data[i].Course[1]}</span></div></span>
        </div>
        
        <div class="file_attached_and_announcement_time_wrapper font_gray">
            <div style="display:${data[i].Attached_file[0]}"class="file_attached ">&#128206; <span class="no_of_file_attached">${data[i].Attached_file[1]}</span> file are attached</div>
            <div class="announcement_date_and_time "><span class="announcement_date">${data[i].date_and_time}</span></div>
        </div>
    </div> `;
    div_new.innerHTML=announcements;
    
    }
})



    

