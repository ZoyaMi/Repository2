document.getElementById("sel").value = '';
var Names1 = ['Jack White', 'Bob Dillan', 'Mark Lee', 'Vera Chang'];
var Names2 = ['John Snow', 'Han solo', 'Darth Vader', 'Iron man'];
var Names3 = ['Sonya Black', 'Carl Wilson', 'Ashly Cooper', 'Justin Bender'];
var currentNames = [];

function generateMembersList(Names) {
    document.getElementById("selName").innerHTML = "";
    Names.forEach(function(e) {
        document.getElementById("selName").innerHTML += "<option>" + e + "</option>";
    })
    document.getElementById("selName").value = '';
}

function wrongTeamMate(member, team) {
    for (var i = 0; i < team.length; i++) {
        if (team[i] == member) {
            return false
        }
    }
    return true
}

function getTeamMembers() {
    var tmp = document.getElementById("sel").value;
    if (tmp == "Main Releases") {
        generateMembersList(Names1);
        currentNames = Names1;
    } else if (tmp == "Mobile") {
        generateMembersList(Names2);
        currentNames = Names2;
    } else if (tmp == "Web") {
        generateMembersList(Names3);
        currentNames = Names3;
    }
    currentNames.sort();
}

function generateReport() {
    if (!document.getElementById("sel").value) {
        document.getElementById("svTable").innerHTML = "<div class='error'>Please select a team<div>";
    } else {
        var tmpName = document.getElementById("sel").value;
        if (tmpName != "Main Releases" && tmpName != "Mobile" && tmpName != "Web") {
            document.getElementById("svTable").innerHTML = "<div class='error'>No data found<div>"
        } else {
            document.getElementById("svTable").innerHTML = tmpName
        }
    }
    if (document.getElementById("selName").value) {
        var tmp = document.getElementById("selName").value;
        if (wrongTeamMate(tmp, currentNames)) {
            document.getElementById("svTable").innerHTML = "<div class='error'>Specified team member doesn't exist in the selected team<div>"
        } else {
            if (tmp.length % 2 == 0) {
                var status = "Not avaliable";
            } else {
                var status = "Avaliable";
            }
            document.getElementById("svTable").innerHTML += "<tr><td>" + tmp + "</td><td class='status'>" + status + "</td><tr>";
        }
    } else if (!document.getElementById("selName").value) {
        currentNames.forEach(function(e) {;
            if (e.length % 2 == 0) {
                var status = "Not avaliable";
            } else {
                var status = "Avaliable";
            }
            document.getElementById("svTable").innerHTML += "<tr><td>" + e + "</td><td class='status'>" + status + "</td><tr>";
        })
    }
}