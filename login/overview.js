function openNav() {
    document.getElementById("mySidepanel").style.width = "200px";
    document.getElementById("mySidepanel").style.height = "100%";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

//sidepanel functionality

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