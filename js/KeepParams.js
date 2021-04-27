const arrayOfTerms = [];
const arrayOfTermsForSearch = [];

//Load global data
const courseList = JSON.parse(courses)

//Select elements to use dynamically 
const currentSearch = document.getElementById("results-for-showing");

//Extract search parameters
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let keywordSearch = urlParams.get('keyword')
let courseNameSearch = urlParams.get('course_name')
let courseCodeSearch = urlParams.get('course_code')
let programSearch = urlParams.get('program')
let curriculumSearch = urlParams.get('curriculum')
let subtypeSearch = urlParams.get('subtype')
let creditTypeSearch = urlParams.get('credit_type')
let classLevelSearch = urlParams.get('class_level')
let collegeSearch = urlParams.get('college')
let departmentSearch = urlParams.get('department')
let PopulationSearch = urlParams.get('population')
let NonTraditionalSearch = urlParams.get('non_traditional')

//Prepare array with extracted data from URL
arrayOfTerms.push({ "term": "Keyword", "value": keywordSearch })
arrayOfTerms.push({ "term": "Course name", "value": courseNameSearch })
arrayOfTerms.push({ "term": "Course code", "value": courseCodeSearch })
arrayOfTerms.push({ "term": "Program", "value": programSearch })
arrayOfTerms.push({ "term": "Curriculum", "value": curriculumSearch })
arrayOfTerms.push({ "term": "Subtype", "value": subtypeSearch })
arrayOfTerms.push({ "term": "Credit type", "value": creditTypeSearch })
arrayOfTerms.push({ "term": "Class level", "value": classLevelSearch })
arrayOfTerms.push({ "term": "College", "value": collegeSearch })
arrayOfTerms.push({ "term": "Department", "value": departmentSearch })
arrayOfTerms.push({ "term": "Population", "value": PopulationSearch })
arrayOfTerms.push({ "term": "Non traditional", "value": NonTraditionalSearch })

arrayOfTermsForSearch.push(keywordSearch)
arrayOfTermsForSearch.push(courseNameSearch)
arrayOfTermsForSearch.push(courseCodeSearch)
arrayOfTermsForSearch.push(programSearch)
arrayOfTermsForSearch.push(curriculumSearch)
arrayOfTermsForSearch.push(subtypeSearch)
arrayOfTermsForSearch.push(creditTypeSearch)
arrayOfTermsForSearch.push(classLevelSearch)
arrayOfTermsForSearch.push(collegeSearch)
arrayOfTermsForSearch.push(departmentSearch)
arrayOfTermsForSearch.push(PopulationSearch)
arrayOfTermsForSearch.push(NonTraditionalSearch)

//Select modal and form inputs
const mdlAdvancedSearch = document.getElementById("mdlAdvancedSearch")
const txtKeyword = document.getElementById("txtKeyword")

/**
 * Sets used parameters on input box and advanced search modal
 * @param {string} parameterKey Corresponding key for used parameter
 * @param {string} searchParameter Search term used either on modal or search bar
 */
function keepParameters(parameterKey, searchParameter) {
    switch (parameterKey) {
        case "Keyword":
            txtKeyword.value = searchParameter;
            break;
    }
    mdlAdvancedSearch.addEventListener('shown.bs.modal', function () {
        //Select modal inputs and dropdown
        const txtKeywordModal = document.getElementById("txtKeywordModal")
        const txtCourseName = document.getElementById("txtCourseName")
        const txtCourseCode = document.getElementById("txtCourseCode")
        const ddlProgram = document.getElementById("ddlProgram")
        const ddlCurriculum = document.getElementById("ddlCurriculum")
        const ddlSubtype = document.getElementById("ddlSubtype")
        const ddlCreditType = document.getElementById("ddlCreditType")
        const ddlClassLevel = document.getElementById("ddlClassLevel")
        const ddlCollege = document.getElementById("ddlCollege")
        const ddlDepartment = document.getElementById("ddlDepartment")
        const ddlPopulation = document.getElementById("ddlPopulation")
        const ddlNonTraditional = document.getElementById("ddlNonTraditional")

        //Set values and behaviour
        txtKeywordModal.focus()
        switch (parameterKey) {
            case "Keyword":
                txtKeywordModal.value = searchParameter;
                break;
            case "Course name":
                txtCourseName.value = searchParameter;
                break;
            case "Course code":
                txtCourseCode.value = searchParameter;
                break;
            case "Program":
                ddlProgram.value = searchParameter;
                break;
            case "Curriculum":
                ddlCurriculum.value = searchParameter;
                break;
            case "Subtype":
                ddlSubtype.value = searchParameter;
                break;
            case "Credit type":
                ddlCreditType.value = searchParameter;
                break;
            case "Class level":
                ddlClassLevel.value = searchParameter;
                break;
            case "College":
                ddlCollege.value = searchParameter;
                break;
            case "Department":
                ddlDepartment.value = searchParameter;
                break;
            case "Population":
                ddlPopulation.value = searchParameter;
                break;
            case "Non traditional":
                ddlNonTraditional.value = searchParameter;
                break;
        }
    });
};