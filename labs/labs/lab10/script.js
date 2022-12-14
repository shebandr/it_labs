function set_select_options(students_data, changer="", value=""){
    let fullname_options = "",
        faculty_options = "",
        course_options = "",
        group_name_options = "";
    if(value==""){
        fullname_options = '<option value="">-</option>',
        faculty_options = '<option value="">-</option>',
        course_options = '<option value="">-</option>',
        group_name_options = '<option value="">-</option>';
    }

    Object.keys(students_data).forEach((num) =>{
        if(changer != "fullname"){
            fullname_options += `<option value=${num}>${students_data[num].fullname}</option>`;
        }
        if(num==value || value==""){
            if(!faculty_options.match(`<option>${students_data[num].faculty}</option>`) && changer !="faculty"){
                faculty_options += `<option>${students_data[num].faculty}</option>`;
            }
            if(!course_options.match(`<option>${students_data[num].course}</option>`) && changer !="course"){
                course_options += `<option>${students_data[num].course}</option>`;
            }
            if(!group_name_options.match(`<option>${students_data[num].group_name}</option>`) && changer !="group_name"){
                group_name_options += `<option>${students_data[num].group_name}</option>`;
            }
        }
    });

    if(changer != "fullname"){
        fullname_select.innerHTML = fullname_options;
    }
    if(changer != "faculty"){
        faculty_select.innerHTML = faculty_options;
    }
    if(changer != "course"){
        course_select.innerHTML = course_options;
    }
    if(changer != "group_name"){
        group_name_select.innerHTML = group_name_options;
    }
}

let xmlContent = '';
let students_table = document.getElementById('student-marks');

let fullname_select = document.getElementById('fullname'),
    faculty_select = document.getElementById('faculty'),
    course_select = document.getElementById('course'),
    group_name_select = document.getElementById('group-name');

let metrology_radio_btns = document.getElementsByName('metrology-radiobtn'),
    oop_radio_btns = document.getElementsByName('oop-radiobtn'),
    architecture_radio_btns = document.getElementsByName('architecture-radiobtn'),
    theory_mas_service_radio_btns = document.getElementsByName('theory-mas-service-radiobtn'),
    economics_radio_btns = document.getElementsByName('economics-radiobtn'),
    db_radio_btns = document.getElementsByName('db-radiobtn'),
    pe_radio_btns = document.getElementsByName('pe-radiobtn');

let average_mark_span = document.getElementById('average-mark'),
    calc_btn = document.getElementById('calc-btn'),
    cancel_btn = document.getElementById('cancel-btn');

calc_btn.addEventListener('click', () => {
    let average_mark = 0;
    for (let i = 0; i < metrology_radio_btns.length; i++){
        average_mark += metrology_radio_btns[i].checked ? Number(metrology_radio_btns[i].value) : 0; 
        average_mark += oop_radio_btns[i].checked ? Number(oop_radio_btns[i].value) : 0; 
        average_mark += architecture_radio_btns[i].checked ? Number(architecture_radio_btns[i].value) : 0; 
        average_mark += theory_mas_service_radio_btns[i].checked ? Number(theory_mas_service_radio_btns[i].value) : 0; 
        average_mark += economics_radio_btns[i].checked ? Number(economics_radio_btns[i].value) : 0; 
        average_mark += db_radio_btns[i].checked ? Number(db_radio_btns[i].value) : 0; 
        average_mark += pe_radio_btns[i].checked ? Number(pe_radio_btns[i].value) : 0; 
    }
    average_mark = (average_mark / 7).toFixed(2);
    average_mark_span.innerHTML = average_mark;
})

cancel_btn.addEventListener('click', () => {
    average_mark_span.innerHTML = "";
})


fetch('./data.xml').then((response=>{
    response.text().then((xml)=>{
        xmlContent = xml;

        let parser = new DOMParser();
        let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
        let students = xmlDOM.querySelectorAll('student');

        let students_data = Object();

        let student_fullname = '';

        students.forEach((student, num) => {
            student_fullname = '';

            student_fullname += student.querySelector('surname').innerHTML;
            student_fullname += ' ' + student.querySelector('name').innerHTML;
            student_fullname += ' ' + student.querySelector('paternal').innerHTML;
            
            students_data[num] = Object();
            students_data[num]['fullname'] = student_fullname;
            students_data[num]['group_name'] = student.querySelector('group_name').innerHTML;
            students_data[num]['course'] = student.querySelector('course').innerHTML;
            students_data[num]['faculty'] = student.querySelector('faculty').innerHTML;

            students_data[num]['marks'] = Object();
            students_data[num]['marks']['metrology'] = student.querySelector('metrology').innerHTML;
            students_data[num]['marks']['oop'] = student.querySelector('oop').innerHTML;
            students_data[num]['marks']['architecture'] = student.querySelector('architecture').innerHTML;
            students_data[num]['marks']['theory-mas-service'] = student.querySelector('theory-mas-service').innerHTML;
            students_data[num]['marks']['economics'] = student.querySelector('economics').innerHTML;
            students_data[num]['marks']['db'] = student.querySelector('db').innerHTML;
            students_data[num]['marks']['pe'] = student.querySelector('pe').innerHTML;
        });
    
        set_select_options(students_data);

        fullname_select.addEventListener("change", () =>{
            set_select_options(students_data, "fullname", fullname_select.value);
            if(fullname_select.value == "") return;

            faculty_select.value = students_data[fullname_select.value].faculty;
            course_select.value = students_data[fullname_select.value].course;
            group_name_select.value = students_data[fullname_select.value].group_name;

            let student_marks = students_data[fullname_select.value].marks;
            metrology_radio_btns[student_marks.metrology].checked = true;
            oop_radio_btns[student_marks.oop].checked = true;
            architecture_radio_btns[student_marks.architecture].checked = true;
            theory_mas_service_radio_btns[student_marks['theory-mas-service']].checked = true;
            economics_radio_btns[student_marks.economics].checked = true;
            db_radio_btns[student_marks.db].checked = true;
            pe_radio_btns[student_marks.pe].checked = true;
        })

        group_name_select.addEventListener("change", () =>{
            if(group_name_select.value == "") return;

            Object.keys(students_data).forEach((num) =>{
                if(students_data[num].group_name == group_name_select.value){
                    faculty_select.value = students_data[num].faculty;
                    course_select.value = students_data[num].course;

                    return;
                }
            });
        })
    })
}))