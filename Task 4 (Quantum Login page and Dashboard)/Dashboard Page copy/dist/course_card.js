fetch('./course_card_detail.json').then(function (response) { return response.json(); }).then(function (data) {
    console.log(data);
    // var main=document.getElementsByClassName("main_content")[0];
    // var card1=document.getElementsByClassName("course_card");
    var main = document.getElementsByClassName("main_content")[0];
    for (var i = 1; i < data.length; i++) {
        var div = document.createElement("div");
        div.setAttribute("class", "div" + (i + 1));
        main.appendChild(div);
        var card_template = "<div class=\"course_card\">\n        <span class=\"card" + (i + 1) + "_expired\">EXPIRED</span>\n        <div class=\"course_detail\">\n            <img class=\"course_img\"src=" + data[i].img + " alt=\"" + data[i].course_name + " Course image\" />\n            <div class=\"course_card_detail\">\n                <div class=\"course_name\" id=\"card" + (i + 1) + "_course_name\">" + data[i].course_name + "</div>\n                <div class=\"grade_detail\" id=\"card" + (i + 1) + "_grade_detail\"> <span class=\"card_subject_name\">" + data[i].grade_detail.subject + "</span>\n                    <span class=\"seperate_partition\">|</span>\n                    <span class=\"grade\">Grade <span class=\"no_of_grade\">" + data[i].grade_detail.no_of_grade + "</span></span>\n                    <span class=\"grade_increment\">+" + data[i].grade_detail.grade_increment + "</span></div>\n                <div class=\"course_distribution_detail course_card" + i + "\"><span class=\"no_of_unit\">" + data[i].course_distribution_detail.unit + "</span> Units<span class=\"no_of_lesson\">" + data[i].course_distribution_detail.lesson + "</span> Lessons<span class=\"no_of_topic\">" + data[i].course_distribution_detail.topic + "</span> Topics</div>\n                <select class=\"select_class_detail\" >\n                    <option name=\"class_name_option\" id=\"option_card" + (i + 1) + "\" class=\"option_class_name\" value=\"ClassB\">" + data[i].select_class.option + "</option>\n                </select>\n                <p class=\"no_of_student_and_validity_wrapper\" id=\"validity_card" + (i + 1) + "\"><span class=\"student\"><span class=\"no_of_student\">" + (data[i].student_and_validity ? data[i].student_and_validity.student : "") + "</span> Students</span> <span class=\"course_validity\"></span><span class=\"seperate_partition\">|</span>" + (data[i].student_and_validity ? data[i].student_and_validity.validity : "") + "</span></p> \n            </div>           \n        </div>\n        <div class=\"star_icon_wrapper\">\n            <img class=\"star_img\"src=\"images/icons/favourite.svg\" alt=\"favourite icon\" />\n        </div>\n        <div class=\"card_footer_icon\">\n            <img class=\"card_footer_preview_icon\"src=\"images/icons/preview.svg\" alt=\"preview icon\" />\n            <img class=\"card_footer_manage_course_icon\"src=\"images/icons/manage%20course.svg\" alt=\"manage course icon\" />\n            <img class=\"card_footer_grading_icon\"src=\"images/icons/grade%20submissions.svg\"  alt=\"grade submission icon\"/>\n            <img class=\"card_footer_report_icon\"src=\"images/icons/reports.svg\" alt=\"report icon\"/>\n\n        </div>\n    </div> ";
        div.innerHTML = card_template;
    }
});
// <div class="announcements_content_${data[i].status}" >
// </div>