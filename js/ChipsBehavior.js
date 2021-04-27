function changeToChips(arrayOfFilters) {
    arrayOfFilters.map((option) => {
        if (option.selected !== "All") {
            switch (option.filterLabel) {
                case "Program":
                    return document.getElementById("ddlProgramGroup").innerHTML = `
                    <div class="d-flex justify-content-between">
                        <span id="btnProgramChip" name="${option.selected}" class="badge rounded-pill bg-chip border border-primary py-0 text-chip">${option.selected}
                        <button id="btnProgram" type="button" class="btn btn-sm text-chip fas fa-times" aria-label="Close" onclick="restoreList(event)"></button>
                    </span>
                    </div>`
                    break;
                case "Curriculum":
                    return document.getElementById("ddlCurriculumGroup").innerHTML = `<div class="d-flex justify-content-between">
                        <span id="btnCurriculumChip" name="${option.selected}" class="badge rounded-pill bg-chip border border-primary py-0 text-chip">${option.selected}
                        <button id="btnCurriculum" type="button" class="btn btn-sm text-chip fas fa-times" aria-label="Close" onclick="restoreList(event)"></button>
                    </span>
                    </div>`
                    break;
                case "Subtype":
                    document.getElementById("ddlSubtypeGroup").innerHTML = `<div class="d-flex justify-content-between">
                        <span id="btnSubtypeChip" name="${option.selected}" class="badge rounded-pill bg-chip border border-primary py-0 text-chip">${option.selected}
                        <button id="btnSubtype" type="button" class="btn btn-sm text-chip fas fa-times" aria-label="Close" onclick="restoreList(event)"></button>
                    </span>
                    </div>`
                    break;
                case "Credit type":
                    document.getElementById("ddlCreditTypeGroup").innerHTML = `<div class="d-flex justify-content-between">
                        <span id="btnCreditTypeChip" name="${option.selected}" class="badge rounded-pill bg-chip border border-primary py-0 text-chip">${option.selected}
                        <button id="btnCreditType" type="button" class="btn btn-sm text-chip fas fa-times" aria-label="Close" onclick="restoreList(event)"></button>
                    </span>
                    </div>`
                    break;
                case "Class level":
                    document.getElementById("ddlClassLevelGroup").innerHTML = `<div class="d-flex justify-content-between">
                        <span id="btnClassLevelChip" name="${option.selected}" class="badge rounded-pill bg-chip border border-primary py-0 text-chip">${option.selected}
                        <button id="btnClassLevel" type="button" class="btn btn-sm text-chip fas fa-times" aria-label="Close" onclick="restoreList(event)"></button>
                    </span>
                    </div>`
                    break;
                case "College":
                    document.getElementById("ddlCollegeGroup").innerHTML = `<div class="d-flex justify-content-between">
                        <span id="btnCollegeChip" name="${option.selected}" class="badge rounded-pill bg-chip border border-primary py-0 text-chip">${option.selected}
                        <button id="btnCollege" type="button" class="btn btn-sm text-chip fas fa-times" aria-label="Close" onclick="restoreList(event)"></button>
                    </span>
                    </div>`
                    break;
                case "Department":
                    document.getElementById("ddlDepartmentGroup").innerHTML = `<div class="d-flex justify-content-between">
                        <span id="btnDepartmentChip" name="${option.selected}" class="badge rounded-pill bg-chip border border-primary py-0 text-chip">${option.selected}
                        <button id="btnDepartment" type="button" class="btn btn-sm text-chip fas fa-times" aria-label="Close" onclick="restoreList(event)"></button>
                    </span>
                    </div>`
                    break;
                case "Population":
                    document.getElementById("ddlPopulationGroup").innerHTML = `<div class="d-flex justify-content-between">
                        <span id="btnPopulationChip" name="${option.selected}" class="badge rounded-pill bg-chip border border-primary py-0 text-chip">${option.selected}
                        <button id="btnPopulation" type="button" class="btn btn-sm text-chip fas fa-times" aria-label="Close" onclick="restoreList(event)"></button>
                    </span>
                    </div>`
                    break;
                case "Non traditional":
                    document.getElementById("ddlNonTraditionalGroup").innerHTML = `<div class="d-flex justify-content-between">
                        <span id="btnNonTraditionalChip" name="${option.selected}" class="badge rounded-pill bg-chip border border-primary py-0 text-chip">${option.selected}
                        <button id="btnNonTraditional" type="button" class="btn btn-sm text-chip fas fa-times" aria-label="Close" onclick="restoreList(event)"></button>
                    </span>
                    </div>`
                    break;
            }
        }
    });
}

function restoreList(event) {
    console.log(arrayOfFilters)
    switch (event.target.id) {
        case "btnProgram":
            arrayOfFilters[0].selected = "All";
            document.getElementById("ddlProgramGroup").innerHTML = `<select id="ddlProgramFilter" class="form-select border-0 align-options-end filters" onChange="refreshFilters()">
                <option selected>All</option>
                ${programFilters.map((program) => `<option value=${program}>${program}</option>`)}
            </select>`;
            break;
            case "btnCurriculum":
                arrayOfFilters[1].selected = "All";
                document.getElementById("ddlCurriculumGroup").innerHTML = `<select id="ddlCurriculumFilter" class="form-select border-0 align-options-end filters" onChange="refreshFilters()">
                    <option selected>All</option>
                    ${curriculumFilters.map((curriculum) => `<option value=${curriculum}>${curriculum}</option>`)}
                </select>`;
                break;
        case "btnSubtype":
            arrayOfFilters[2].selected = "All";
            document.getElementById("ddlSubtypeGroup").innerHTML = `<select id="ddlSubtypeFilter" class="form-select border-0 align-options-end filters" onChange="refreshFilters()">
                <option selected>All</option>
                ${subtypeFilters.map((subtype) => `<option value=${subtype}>${subtype}</option>`)}
            </select>`;
            break;
        case "btnCreditType":
            arrayOfFilters[3].selected = "All";
            document.getElementById("ddlCreditTypeGroup").innerHTML = `<select id="ddlCreditTypeFilter" class="form-select border-0 align-options-end filters" onChange="refreshFilters()">
                <option selected>All</option>
                ${creditTypeFilters.map((creditType) => `<option value=${creditType}>${creditType}</option>`)}
            </select>`;
            break;
        case "btnClassLevel":
            arrayOfFilters[4].selected = "All";
            document.getElementById("ddlClassLevelGroup").innerHTML = `<select id="ddlClassLevelFilter" class="form-select border-0 align-options-end filters" onChange="refreshFilters()">
                <option selected>All</option>
                ${classLevelFilters.map((classLevel) => `<option value=${classLevel}>${classLevel}</option>`)}
            </select>`;
            break;
        case "btnCollege":
            arrayOfFilters[5].selected = "All";
            document.getElementById("ddlCollegeGroup").innerHTML = `<select id="ddlCollegeFilter" class="form-select border-0 align-options-end filters" onChange="refreshFilters()">
                <option selected>All</option>
                ${collegeFilters.map((college) => `<option value=${college}>${college}</option>`)}
            </select>`;
            break;
        case "btnDepartment":
            arrayOfFilters[6].selected = "All";
            document.getElementById("ddlDepartmentGroup").innerHTML = `<select id="ddlDepartmentFilter" class="form-select border-0 align-options-end filters" onChange="refreshFilters()">
                <option selected>All</option>
                ${departmentFilters.map((department) => `<option value=${department}>${department}</option>`)}
            </select>`;
            break;
        case "btnPopulation":
            arrayOfFilters[7].selected = "All";
            document.getElementById("ddlPopulationGroup").innerHTML = `<select id="ddlPopulationFilter" class="form-select border-0 align-options-end filters" onChange="refreshFilters()">
                <option selected>All</option>
                ${populationFilters.map((population) => `<option value=${population}>${population}</option>`)}
            </select>`;
            break;
        case "btnNonTraditional":
            arrayOfFilters[8].selected = "All";
            document.getElementById("ddlNonTraditionalGroup").innerHTML = `<select id="ddlNonTraditionalFilter" class="form-select border-0 align-options-end filters" onChange="refreshFilters()">
                <option selected>All</option>
                ${nonTraditionalFilters.map((nonTraditional) => `<option value=${nonTraditional}>${nonTraditional}</option>`)}
            </select>`;
            break;
    }
    refreshFilters();
}