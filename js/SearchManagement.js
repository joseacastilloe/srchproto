$(document).ready(() => {
    var data = JSON.parse(courses);

    /**
     * Finds matching items out of an specific JSON and a given set of arguments
     * @param {string} args Arguments to use for matches
     * @param {Array} elements An array of elements to choose a match from
     * @param {Array} filters An array of elements which represent the filter selection in the UI
     * @returns An array of matched elements
     */
    function findMatches(args, elements, filters) {
        // Prepare arguments for manipulation
        let lowerArgs = args = args.toLowerCase();
        const searchArgs = lowerArgs.split(' ');

        var matchResult = [];

        let matches = elements.map(function(element) {
            // Get the standard form (lowercase) of the search bar input
            text = element['course code'] + ' ' + element['course name'];
            let lowerText = text.toLowerCase();

            // Find a match
            for (const searchArg of searchArgs) {
                if (lowerText.includes(searchArg)) {
                    return element;
                }
            }
        });

        // Process the matched items through the filtering system
        for (element of matches) {

            if (element !== undefined &&
                (((filters.hasOwnProperty('program') && element['program'] !== undefined && element['program'] !== 'All') ? filters.program == element["program"] : false) ||
                    ((filters.hasOwnProperty('subtype') && element['subtype'] !== undefined && element['subtype'] !== 'All') ? filters.subtype == element["subtype"] : false) ||
                    ((filters.hasOwnProperty('classLevel') && element['class level'] !== undefined && element['class level'] !== 'All') ? filters.classLevel == element["class level"] : false) ||
                    ((filters.hasOwnProperty('college') && element['college'] !== undefined && element['college']) ? filters.college == element["college"] : false) ||
                    ((filters.hasOwnProperty('creditType') && element['credit type'] !== undefined && element['credit type'] !== 'All') ? filters.creditType == element["credit type"] : false) ||
                    ((filters.hasOwnProperty('curriculum') && element['curriculum'] !== undefined && element['curriculum'] !== 'All') ? filters.curriculum == element["curriculum"] : false) ||
                    ((filters.hasOwnProperty('department') && element['department'] !== undefined && element['department'] !== 'All') ? filters.department == element["department"] : false) ||
                    ((filters.hasOwnProperty('population') && element['population'] !== undefined && element['population'] !== 'All') ? filters.population == element["population"] : false) ||
                    ((filters.hasOwnProperty('nonTraditional') && element['non traditional'] !== undefined && element['non traditional'] !== 'All') ? filters.nonTraditional == element["non traditional"] : false))) {
                matchResult.push(this.element);
            }
        }
        return matchResult;
    }

    /**
     * Allows to render matched items in HTML code
     * @param {string} args Arguments to use for matches
     * @param {Array} elements An array of elements to choose a match from
     * @param {Array} filters An array of elements which represent the filter selection in the UI
     * @returns 
     */
    function getSearchResults(args, elements, filters) {
        let results = findMatches(args, elements, filters);
        return results;
    }

    // When someone performs a search action...
    $('#search-bar').on('change', function(e) {
        let args = $('#search-bar').val();

        let filters = {
            program: $('ddlProgram').val(),
            classLevel: $('ddlClassLevel').val(),
            college: $('ddlCollege').val(),
            creditType: $('ddlCreditType').val(),
            curriculum: $('ddlCurriculum').val(),
            department: $('ddlDepartment').val(),
            population: $('ddlPopulation').val(),
            subtype: $('ddlSubtype').val(),
            nonTraditional: $('ddlNonTraditional').val()
        };

        getSearchResults(args, data, filters);
    });
});