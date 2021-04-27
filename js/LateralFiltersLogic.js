const arrayOfFilters = [
    { filterLabel: "Program", selected: "All" },
    { filterLabel: "Curriculum", selected: "All" },
    { filterLabel: "Subtype", selected: "All" },
    { filterLabel: "Credit type", selected: "All" },
    { filterLabel: "Class level", selected: "All" },
    { filterLabel: "College", selected: "All" },
    { filterLabel: "Department", selected: "All" },
    { filterLabel: "Population", selected: "All" },
    { filterLabel: "Non traditional", selected: "All" }
]

function refreshFilters() {
    $(".cardInfo").removeClass("d-none");

    //Program
    if ($("#ddlProgramFilter").length) {
        value = $("#ddlProgramFilter option:selected").text();
        if (value != "All") {
            arrayOfFilters[0].selected = value;
            classFilter = "[data-program='" + value + "']";
            elements = $(".cardInfo").not(classFilter);
            $(elements).addClass("d-none");
        }
    }
    else if ($("#btnProgramChip").length) {
        value = $("#btnProgramChip").attr('name');
        classFilter = "[data-program='" + value + "']";
        elements = $(".cardInfo").not(classFilter);
        $(elements).addClass("d-none");
    }

    //Curriculum
    if ($("#ddlCurriculumFilter").length) {
        value = $("#ddlCurriculumFilter option:selected").text();
        if (value != "All") {
            arrayOfFilters[1].selected = value;
            classFilter = "[data-curriculum='" + value + "']";
            elements = $(".cardInfo").not(classFilter);
            $(elements).addClass("d-none");
        }
    }
    else if ($("#btnCurriculumChip").length) {
        value = $("#btnCurriculumChip").attr('name');
        classFilter = "[data-curriculum='" + value + "']";
        elements = $(".cardInfo").not(classFilter);
        $(elements).addClass("d-none");
    }

    //Subtype
    if ($("#ddlSubtypeFilter").length) {
        value = $("#ddlSubtypeFilter option:selected").text();
        if (value != "All") {
            arrayOfFilters[2].selected = value;
            classFilter = "[data-subtype='" + value + "']";
            elements = $(".cardInfo").not(classFilter);
            $(elements).addClass("d-none");
        }
    }
    else if ($("#btnSubtypeChip").length) {
        value = $("#btnSubtypeChip").attr('name');
        classFilter = "[data-subtype='" + value + "']";
        elements = $(".cardInfo").not(classFilter);
        $(elements).addClass("d-none");
    }
    //Credit type
    if ($("#ddlCreditTypeFilter").length) {
        value = $("#ddlCreditTypeFilter option:selected").text();
        if (value != "All") {
            arrayOfFilters[3].selected = value;
            classFilter = "[data-credit='" + value + "']";
            elements = $(".cardInfo").not(classFilter);
            $(elements).addClass("d-none");
        }
    }
    else if ($("#btnCreditTypeChip").length) {
        value = $("#btnCreditTypeChip").attr('name');
        classFilter = "[data-credit='" + value + "']";
        elements = $(".cardInfo").not(classFilter);
        $(elements).addClass("d-none");
    }
    //Class level
    if ($("#ddlClassLevelFilter").length) {
        value = $("#ddlClassLevelFilter option:selected").text();
        if (value != "All") {
            arrayOfFilters[4].selected = value;
            classFilter = "[data-level='" + value + "']";
            elements = $(".cardInfo").not(classFilter);
            $(elements).addClass("d-none");
        }
    }
    else if ($("#btnClassLevelChip").length) {
        value = $("#btnClassLevelChip").attr('name');
        classFilter = "[data-level='" + value + "']";
        elements = $(".cardInfo").not(classFilter);
        $(elements).addClass("d-none");
    }
    //College
    if ($("#ddlCollegeFilter").length) {
        value = $("#ddlCollegeFilter option:selected").text();
        if (value != "All") {
            arrayOfFilters[5].selected = value;
            classFilter = "[data-college='" + value + "']";
            elements = $(".cardInfo").not(classFilter);
            $(elements).addClass("d-none");
        }
    }
    else if ($("#btnCollegeChip").length) {
        value = $("#btnCollegeChip").attr('name');
        classFilter = "[data-college='" + value + "']";
        elements = $(".cardInfo").not(classFilter);
        $(elements).addClass("d-none");
    }
    //Department
    if ($("#ddlDepartmentFilter").length) {
        value = $("#ddlDepartmentFilter option:selected").text();
        if (value != "All") {
            arrayOfFilters[6].selected = value;
            classFilter = "[data-department='" + value + "']";
            elements = $(".cardInfo").not(classFilter);
            $(elements).addClass("d-none");
        }
    }
    else if ($("#btnDepartmentChip").length) {
        value = $("#btnDepartmentChip").attr('name');
        classFilter = "[data-department='" + value + "']";
        elements = $(".cardInfo").not(classFilter);
        $(elements).addClass("d-none");
    }
    //Population
    if ($("#ddlPopulationFilter").length) {
        value = $("#ddlPopulationFilter option:selected").text();
        if (value != "All") {
            arrayOfFilters[7].selected = value;
            classFilter = "[data-population='" + value + "']";
            elements = $(".cardInfo").not(classFilter);
            $(elements).addClass("d-none");
        }
    }
    else if ($("#btnPopulationChip").length) {
        value = $("#btnPopulationChip").attr('name');
        classFilter = "[data-population='" + value + "']";
        elements = $(".cardInfo").not(classFilter);
        $(elements).addClass("d-none");
    }
    //Non trad
    if ($("#ddlNonTraditionalFilter").length) {
        value = $("#ddlNonTraditionalFilter option:selected").text();
        if (value != "All") {
            arrayOfFilters[8].selected = value;
            classFilter = "[data-traditional='" + value + "']";
            elements = $(".cardInfo").not(classFilter);
            $(elements).addClass("d-none");
        }
    }
    else if ($("#btnNonTraditionalChip").length) {
        value = $("#btnNonTraditionalChip").attr('name');
        classFilter = "[data-traditional='" + value + "']";
        elements = $(".cardInfo").not(classFilter);
        $(elements).addClass("d-none");
    }

    changeToChips(arrayOfFilters);
    renderNumberOfResults();
}
