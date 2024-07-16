fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(json => {
        let students = json;
        let ddl_Employee = document.getElementById('ddl_Employee');
        students.forEach(student => {
            let op = document.createElement('Option');
            op.innerHTML = student.name;
            op.appendChild('ddl_Employee');
        });
    })