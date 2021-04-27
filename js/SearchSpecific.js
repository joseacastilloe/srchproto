//Array of matches
const allResultsObject = [];

//Manage search parameters
courseList.forEach((item)=>{
    var re = new RegExp(arrayOfTermsForSearch[0], "i");
    var courseCodeRegex = new RegExp(arrayOfTermsForSearch[2], "i");

    if(
        (!arrayOfTermsForSearch[0] || item["course code"].match(re) || item["description"].includes(arrayOfTermsForSearch[0]) || item["course name"].match(re)) &&
        (!arrayOfTermsForSearch[1] || item["course name"].includes(arrayOfTermsForSearch[1])) &&
        (!arrayOfTermsForSearch[2] || item["course code"].match(courseCodeRegex)) &&
        (!arrayOfTermsForSearch[3] || item["program"].includes(arrayOfTermsForSearch[3])) &&
        (!arrayOfTermsForSearch[4] || item["curriculum"].includes(arrayOfTermsForSearch[4])) &&
        (!arrayOfTermsForSearch[5] || item["subtype"].includes(arrayOfTermsForSearch[5])) &&
        (!arrayOfTermsForSearch[6] || item["credit type"].includes(arrayOfTermsForSearch[6])) &&
        (!arrayOfTermsForSearch[7] || item["class level"].includes(arrayOfTermsForSearch[7])) &&
        (!arrayOfTermsForSearch[8] || item["college"].includes(arrayOfTermsForSearch[8])) &&
        (!arrayOfTermsForSearch[9] || item["department"].includes(arrayOfTermsForSearch[9])) &&
        (!arrayOfTermsForSearch[10] || item["population"].includes(arrayOfTermsForSearch[10])) &&
        (!arrayOfTermsForSearch[11] || item["non traditional"].includes(arrayOfTermsForSearch[11]))
    ){
    allResultsObject.push(item)
    }

});

arrayOfTerms.forEach((item) => {
    if (item.value) {
        const newSpan = `
        <span class="badge rounded-pill bg-chip p-2 mb-1">
            <a class="text-decoration-none text-chip" href="#">${item.term} : ${item.value}</a> 
            <a href="#" class="text-chip text-decoration-none"><i class="fas fa-times" onclick="removeChip(this,'${item.value}')"></i></a>
        </span>`;

        currentSearch.insertAdjacentHTML("beforeend", newSpan)

        //Place parameters on modal and search input
         keepParameters(item.term, item.value)
    };
})