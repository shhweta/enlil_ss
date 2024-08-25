// Make use of Set Data Structure to find Unique Element of Array

function findUniqueElements(elements){
    uniqueElements = new Set()
    elements.map((i)=>uniqueElements.add(i))
    return uniqueElements
}

findUniqueElements([1,1,1,2,3,4,6,6,7,8,9])  //testcase