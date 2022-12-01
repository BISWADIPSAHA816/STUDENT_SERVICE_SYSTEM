function openNav() {
    document.getElementById("mySidepanel").style.width = "200px";
    document.getElementById("mySidepanel").style.height = "100%";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

//sidepanel functionality

const issueTable = document.getElementById("issue_table");
const overviewBtn = document.getElementById("overview_btn");
const issuesBtn = document.getElementById("issues_btn");
const composeBtn = document.getElementById("compose_btn");

const overview = document.getElementById("overview");
const issues = document.getElementById("issues");
const compose = document.getElementById("compose");

overviewBtn.addEventListener("click", () => {
    if (overview.classList.contains("none")) {
        overview.classList.remove("none");
        overview.classList.add("flex");
    }

    if (issues.classList.contains("flex")) {
        issues.classList.remove("flex");
        issues.classList.add("none");
    }

    if (compose.classList.contains("flex")) {
        compose.classList.remove("flex");
        compose.classList.add("none");
    }
});

issuesBtn.addEventListener("click", () => {
    if (issues.classList.contains("none")) {
        issues.classList.remove("none");
        issues.classList.add("flex");
        getIssues();
    }

    if (overview.classList.contains("flex")) {
        overview.classList.remove("flex");
        overview.classList.add("none");
    }

    if (compose.classList.contains("flex")) {
        compose.classList.remove("flex");
        compose.classList.add("none");
    }
});

composeBtn.addEventListener("click", () => {
    if (compose.classList.contains("none")) {
        compose.classList.remove("none");
        compose.classList.add("flex");
    }

    if (issues.classList.contains("flex")) {
        issues.classList.remove("flex");
        issues.classList.add("none");
    }

    if (overview.classList.contains("flex")) {
        overview.classList.remove("flex");
        overview.classList.add("none");
    }
});

//issues functionality

const getIssues = () => {
    let output = `
    
    <tr class="first_row">
    <th>Ref No</th>
    <th>Subject</th>
    <th>Date Complained </th>
    <th>Date Resolved</th>
    <th>Status</th>
    </tr>
    `;

    var requestOptions = {
        method: "GET",
        redirect: "follow",
    };

    fetch(
            "http://ec2-65-0-120-79.ap-south-1.compute.amazonaws.com:8080/dashboard/issues?dept=Accounts",
            requestOptions
        )
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            result.map(item => {

                output += `
                <tr>
                <td> ${item._id}</td>
                <td> ${item.title}</td>
                <td> ${getDateInYYYY_MM_DD_Format(item.created_at)}</td>
                <td> 2022-10-25</td>
                <td> ${item.status}</td>
                </tr>
                `;
                issueTable.innerHTML = output;
            })
        })
        .catch((error) => console.log("error", error));
};


function getDateInYYYY_MM_DD_Format(dateTime) {
    const date = new Date(dateTime);
    return (date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate());
}