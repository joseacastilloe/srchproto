//Select elements to use dynamically 
const renderFilters = document.getElementById("filter-column");
const shareResultsSection = document.getElementById("share-results");
const renderResultsNumber = document.getElementById("results-summary");
const searchAndResultsSection = document.getElementById("search-and-results");
const manageState = document.getElementById("manageState");
const filterSection = document.getElementById("filters");
const hiddenElements = document.getElementsByClassName("d-none");

/**
 * Removes a chip element
 * @param {string} el HTML element to be manipulated 
 * @param {string} value Value of the parameter to be manipulated
 */
 function removeChip(el, value = undefined) {
    let element = el;
    let numberOfChips = validateChips();
    $(element).closest('span').remove();
    $(element).closest('a').remove();
    $(element).remove();

    if(value) {
        let currentUrl = getCurrentURL();
        let newUrl = eliminateParam(currentUrl, value);
        let j =0;
        let diferentFromAll = [];

        arrayOfFilters.forEach((filter) =>{
            if(filter.selected !== "All"){
                j++;
                diferentFromAll.push(filter);
            }
        });

        if(numberOfChips === 1 && j >= 1){
            let injectedURL = injectParams(newUrl,diferentFromAll);
            window.location.href = injectedURL;
        }else if(numberOfChips == 1) {
            window.location.href = "index.html";
        } else {
            window.location.href = newUrl;
        }
    }
    return true;
}

/**
 * Injects new URL according to conditions 
 * @param {*} actualURL Current URL on browser
 * @param {*} params An array of the selected filters
 * @return {*} The new URL
 */
function injectParams(actualURL, params){
    let urlParams = actualURL.split("?")[1];
    let i = 0;
    for (param of params) {
        let paramValue = makeParamValue(param.selected)
        let parameter = makeParam(param.filterLabel)
        let paramNamePosition = urlParams.search(new RegExp(parameter, "i"))
        let sumUpPositions = paramNamePosition+parameter.length+1
        let firstHalfURL = urlParams.slice(0,sumUpPositions)
        firstHalfURL = firstHalfURL + ((i === params.length-1) && firstHalfURL[firstHalfURL.length-1] !== "="? "=" : "")
        let secondHalfURL = urlParams.slice(sumUpPositions+1,urlParams.length-1)
        firstHalfURL += paramValue
        firstHalfURL += '&'+secondHalfURL
        urlParams = firstHalfURL
        i++;
    }
    let resultURL = "search-results.html?"+urlParams
    return resultURL;
}

function makeParam(term){
    return term.replace(new RegExp(" ", "g"),"_");
}

function makeParamValue(term){
    return term.replace(new RegExp(" ", "g"),"+");
}


/**
 * Validates how many parameters there are assigned in a current url
 * @param {*} url The URL path to be used to validate the params
 * @returns The number of assigned params within the url
 */
 function validateChips() {
    let result = currentSearch.childElementCount;
    return result;
}

function eliminateParam(url, value) {
    let processedValue = value.replace(new RegExp(" ", "g"),"+");
    
    if(url.search(processedValue)) {
        let result = url.replace(processedValue,"");
        return result;
    } else {
        return false;
    }
}

function getCurrentURL() {
    return window.location.href;
}

let numberOfResults = allResultsObject.length;
let numberOfResultsWithHidden

//Render number of results label
function renderNumberOfResults() {
    numberOfResultsWithHidden = (allResultsObject.length) - (hiddenElements.length);
    renderResultsNumber.textContent = `${numberOfResultsWithHidden > 1 ? numberOfResultsWithHidden + ' Results' : numberOfResultsWithHidden + ' Result'}`;
    if(numberOfResults> 1 && numberOfResultsWithHidden === 0){
        manageState.setAttribute("class","card shadow")
        manageState.innerHTML = `<div class="card-body">
        <div class="d-flex justify-content-center" id="emptyState">
            <img class="img-fluid" src="img/search-for-course.png" width="400" height="319">
        </div>
        <p class="text-center">No results found</p>
    </div>`
    }else if(numberOfResultsWithHidden > 0){
        manageState.removeAttribute("class");
        manageState.innerHTML = '';
    }
}

//Array for filters
const programFilters = [];
const curriculumFilters = [];
const subtypeFilters = [];
const creditTypeFilters = [];
const classLevelFilters = [];
const collegeFilters = [];
const departmentFilters = [];
const populationFilters = [];
const nonTraditionalFilters = [];

//Populate filter array to control dynamic behaviour 
allResultsObject.map((results) => {
    { !programFilters.includes(results.program) ? programFilters.push(results.program) : programFilters }
    { !curriculumFilters.includes(results.curriculum) ? curriculumFilters.push(results.curriculum) : curriculumFilters }
    { !subtypeFilters.includes(results.subtype) ? subtypeFilters.push(results.subtype) : subtypeFilters }
    { !creditTypeFilters.includes(results["credit type"]) ? creditTypeFilters.push(results["credit type"]) : creditTypeFilters }
    { !classLevelFilters.includes(results["class level"]) ? classLevelFilters.push(results["class level"]) : classLevelFilters }
    { !collegeFilters.includes(results.college) ? collegeFilters.push(results.college) : collegeFilters }
    { !departmentFilters.includes(results.department) ? departmentFilters.push(results.department) : departmentFilters }
    { !populationFilters.includes(results.population) ? populationFilters.push(results.population) : populationFilters }
    { !nonTraditionalFilters.includes(results["non traditional"]) ? nonTraditionalFilters.push(results["non traditional"]) : nonTraditionalFilters }
});

//Create each filter
const lblProgramFilter = `
        <div class="nav-item dropdown d-flex justify-content-between" id="programFilter">
            ${programFilters.length > 1
        ?
        `<div id="lblProgramFilter">
                <p class="mt-1 mx-3">Program</p>
                </div>
                <div id="ddlProgramGroup">
                    <select id="ddlProgramFilter" class="form-select border-0 align-options-end filters" onChange="refreshFilters()">
                        <option selected>All</option>
                        ${programFilters.map((program) => `<option value=${program}>${program}</option>`)}
                    </select>
                </div>`
        :
        `<div></div>`
    }
        </div>`;

const lblSubtypeFilter = `
        <div class="nav-item dropdown d-flex justify-content-between" id="subtypeFilter">
            ${subtypeFilters.length > 1
        ?
        `<div id="lblSubtypeFilter">
                <p class="mt-1 mx-3">Subtype</p>
                </div>
                <div id="ddlSubtypeGroup">
                    <select id="ddlSubtypeFilter" class="form-select border-0 align-options-end filters" onChange="refreshFilters()">
                        <option selected>All</option>
                        ${subtypeFilters.map((subtype) => `<option value=${subtype}>${subtype}</option>`)}
                    </select>
                </div>`
        :
        `<div></div>`
    }
        </div>`;

const lblClassLevelFilter = `
        <div class="nav-item dropdown d-flex justify-content-between" id="classLevelFilter">
            ${classLevelFilters.length > 1
        ?
        `<div>
                    <p class="mt-1 mx-3">Class level</p>
                </div>
                <div id="ddlClassLevelGroup">
                    <select id="ddlClassLevelFilter" class="form-select border-0 align-options-end filters" onChange="refreshFilters()">
                        <option selected>All</option>
                        ${classLevelFilters.map((classLevel) => `<option value=${classLevel}>${classLevel}</option>`)}
                    </select>
                </div>`
        :
        `<div></div>`
    }
        </div>`;

const lblCollegeFilter = `
        <div class="nav-item dropdown d-flex justify-content-between" id="collegeFilter">
            ${collegeFilters.length > 1
        ?
        `<div>
                    <p class="mt-1 mx-3">College</p>
                </div>
                <div id="ddlCollegeGroup">
                    <select id="ddlCollegeFilter" class="form-select border-0 align-options-end filters" onChange="refreshFilters()">
                        <option selected>All</option>
                        ${collegeFilters.map((college) => `<option value=${college}>${college}</option>`)}
                    </select>
                </div>`
        :
        `<div></div>`
    }
        </div>`;

const lblCreditTypeFilter = `
        <div class="nav-item dropdown d-flex justify-content-between" id="creditTypeFilter">
            ${creditTypeFilters.length > 1
        ?
        `<div>
                    <p class="mt-1 mx-3">Credit type</p>
                </div>
                <div id="ddlCreditTypeGroup">
                    <select id="ddlCreditTypeFilter" class="form-select border-0 align-options-end filters" onChange="refreshFilters()">
                        <option selected>All</option>
                        ${creditTypeFilters.map((creditType) => `<option value=${creditType}>${creditType}</option>`)}
                    </select>
                </div>`
        :
        `<div></div>`
    }
        </div>`;

const lblCurriculumFilter = `
        <div class="nav-item dropdown d-flex justify-content-between" id="curriculumFilter">
            ${curriculumFilters.length > 1
        ?
        `<div>
                    <p class="mt-1 mx-3">Curriculum</p>
                </div>
                <div id="ddlCurriculumGroup">
                    <select id="ddlCurriculumFilter" class="form-select border-0 align-options-end filters" onChange="refreshFilters()">
                        <option selected>All</option>
                        ${curriculumFilters.map((curriculum) => `<option value=${curriculum}>${curriculum}</option>`)}
                    </select>
                </div>`
        :
        `<div></div>`
    }
        </div>`;

const lblDepartmentFilter = `
        <div class="nav-item dropdown d-flex justify-content-between" id="departmentFilter">
            ${departmentFilters.length > 1
        ?
        `<div>
                    <p class="mt-1 mx-3">Department</p>
                </div>
                <div id="ddlDepartmentGroup">
                    <select id="ddlDepartmentFilter" class="form-select border-0 align-options-end filters" onChange="refreshFilters()">
                        <option selected>All</option>
                        ${departmentFilters.map((department) => `<option value=${department}>${department}</option>`)}
                    </select>
                </div>`
        :
        `<div></div>`
    }
        </div>`

const lblPopulationFilter = `
        <div class="nav-item dropdown d-flex justify-content-between" id="populationFilter">
            ${populationFilters.length > 1
        ?
        `<div>
                    <p class="mt-1 mx-3">Population</p>
                </div>
                <div id="ddlPopulationGroup">
                    <select id="ddlPopulationFilter" class="form-select border-0 align-options-end filters" onChange="refreshFilters()">
                        <option selected>All</option>
                        ${populationFilters.map((population) => `<option value=${population}>${population}</option>`)}
                    </select>
                </div>`
        :
        `<div></div>`
    }
        </div>`;

const lblNonTraditionalFilter = `
        <div class="nav-item dropdown d-flex justify-content-between" id="nonTraditionalFilter">
            ${nonTraditionalFilters.length > 1
        ?
        `<div>
                    <p class="mt-1 mx-3">Non traditional</p>
                </div>
                <div id="ddlNonTraditionalGroup">
                    <select id="ddlNonTraditionalFilter" class="form-select border-0 align-options-end filters" onChange="refreshFilters()">
                        <option selected>All</option>
                        ${nonTraditionalFilters.map((nonTraditional) => `<option value="${nonTraditional}">${nonTraditional}</option>`)}
                    </select>
                </div>`
        :
        `<div></div>`
    }
        </div>`;

//Main function 
(() => {

    //Render cards for results
    allResultsObject.map((data) => {
        let descLength = data.description.length;
        let truncateDesc = (data.description).slice(0, 230);
        const renderResults = `
        <div class="card shadow my-3 cardInfo" style="width: 100%;" data-program="${data["program"]}" data-curriculum="${data["curriculum"]}" data-subtype="${data["subtype"]}" data-credit="${data["credit type"]}" data-level="${data["class level"]}" data-college="${data["college"]}" data-department="${data["department"]}" data-population="${data["population"]}" data-traditional="${data["non traditional"]}">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <a type="button" class="btn btn-link card-title text-primary fw-bolder text-decoration-none" data-bs-toggle="modal" data-bs-target="#courseDetailsModal">${data["course code"]}: ${data["course name"]}</a>
                </div>
                <p class="card-text ms-3">Subtypes: ${data.subtype}</p>
                <p class="card-text ms-3 description">Description: ${descLength > 230 ? truncateDesc + '...' : truncateDesc + ''}</p>
            </div>
        </div>`;
        shareResultsSection.insertAdjacentHTML("beforeend", renderResults)
    });

    //Render filters conditionally
    if (numberOfResults > 1) {
        //Program filter
        if (arrayOfTerms[3].value) {
            const tagProgram = ``
            renderFilters.insertAdjacentHTML("beforebegin", tagProgram)
        } else {
            renderFilters.insertAdjacentHTML("beforeend", lblProgramFilter)
        }

        //Curriculum filter
        if (arrayOfTerms[4].value) {
            const tagCurriculum = ``
            renderFilters.insertAdjacentHTML("beforebegin", tagCurriculum)
        } else {
            renderFilters.insertAdjacentHTML("beforeend", lblCurriculumFilter)
        }

        //Subtype filter
        if (arrayOfTerms[5].value) {
            const tagSubtype = ``
            renderFilters.insertAdjacentHTML("beforebegin", tagSubtype)
        } else {
            renderFilters.insertAdjacentHTML("beforeend", lblSubtypeFilter)
        }

        //Credit type filter
        if (arrayOfTerms[6].value) {
            const tagCreditType = ``
            renderFilters.insertAdjacentHTML("beforebegin", tagCreditType)
        } 
        else {
            renderFilters.insertAdjacentHTML("beforeend", lblCreditTypeFilter)
        }

        //Program filter
        if (arrayOfTerms[7].value) {
            const tagClassLevel = ``
            renderFilters.insertAdjacentHTML("beforebegin", tagClassLevel)
        } 
        else {
            renderFilters.insertAdjacentHTML("beforeend", lblClassLevelFilter)
        }

        //College filter
        if (arrayOfTerms[8].value) {
            const tagCollege = ``
            renderFilters.insertAdjacentHTML("beforebegin", tagCollege)
        }
        else {
            renderFilters.insertAdjacentHTML("beforeend", lblCollegeFilter)
        }

        //Department filter
        if (arrayOfTerms[9].value) {
            const tagDepartment = ``
            renderFilters.insertAdjacentHTML("beforebegin", tagDepartment)
        }
        else {
            renderFilters.insertAdjacentHTML("beforeend", lblDepartmentFilter)
        }

        //Population filter
        if (arrayOfTerms[10].value) {
            const tagPopulation = ``
            renderFilters.insertAdjacentHTML("beforebegin", tagPopulation)
        }
        else {
            renderFilters.insertAdjacentHTML("beforeend", lblPopulationFilter)
        }

        //Non traditional filter
        if (arrayOfTerms[10].value) {
            const tagNonTraditional = ``
            renderFilters.insertAdjacentHTML("beforebegin", tagNonTraditional)
        }
        else {
            renderFilters.insertAdjacentHTML("beforeend", lblNonTraditionalFilter)
        }

    }
    else if (numberOfResults === 1) {
        //There is only one result logic
        filterSection.innerHTML = "";
        searchAndResultsSection.setAttribute("class", "col-sm-12 col-md-8 col-lg-11")
    }
    else {
        filterSection.innerHTML = "";
        searchAndResultsSection.setAttribute("class", "col-sm-12 col-md-8 col-lg-11")
        const noResults = `
            <div class="card shadow">
                <div class="card-body">
                    <div class="d-flex justify-content-center">
                        <img class="img-fluid" src="img/search-for-course.png" width="400" height="319">
                    </div>
                    <p class="text-center">No results found</p>
                </div>
            </div>`
        searchAndResultsSection.insertAdjacentHTML("beforeend", noResults)
    }
    renderNumberOfResults();
})();